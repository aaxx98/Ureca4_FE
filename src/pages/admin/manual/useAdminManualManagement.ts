import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import type { CategoryDto } from "../../../shared/api/generated/api.schemas";
import {
	createManual,
	deactivateManual,
	fetchAllManualHistory,
	fetchCategories,
	fetchManualHistory,
	type ManualCreatePayload,
	type ManualHistoryItem,
	type ManualHistoryPageResponse,
	type ManualStatusFilter,
	type ManualUpdatePayload,
	updateManual,
} from "./adminManualManagement.api";
import { filterManualsByKeyword } from "./adminManualManagement.utils";

const PAGE_SIZE = 10;
const GROUP_SIZE = 5;
const CATEGORY_QUERY_KEY = ["admin-manual-categories"] as const;
const MANUAL_QUERY_KEY = ["admin-manual-list"] as const;

interface SearchFilters {
	categoryCode: string;
	status: ManualStatusFilter;
	keyword: string;
}

interface ManualModalState {
	mode: "create" | "detail";
	manual?: ManualHistoryItem;
}

async function fetchManualPage(
	filters: SearchFilters,
	page: number,
): Promise<ManualHistoryPageResponse> {
	if (!filters.keyword.trim()) {
		return fetchManualHistory({
			categoryCode: filters.categoryCode || undefined,
			status: filters.status,
			page,
			size: PAGE_SIZE,
		});
	}

	const allManuals = await fetchAllManualHistory(
		filters.categoryCode || undefined,
		filters.status,
	);
	const filteredManuals = filterManualsByKeyword(allManuals, filters.keyword);
	const totalElements = filteredManuals.length;
	const totalPages = Math.max(Math.ceil(totalElements / PAGE_SIZE), 1);
	const safePage = Math.min(page, totalPages - 1);

	return {
		content: filteredManuals.slice(
			safePage * PAGE_SIZE,
			safePage * PAGE_SIZE + PAGE_SIZE,
		),
		totalElements,
		totalPages,
		number: safePage,
	};
}

export function useAdminManualManagement() {
	const queryClient = useQueryClient();
	const [draftFilters, setDraftFilters] = useState<SearchFilters>({
		categoryCode: "",
		status: "전체",
		keyword: "",
	});
	const [appliedFilters, setAppliedFilters] = useState<SearchFilters>({
		categoryCode: "",
		status: "전체",
		keyword: "",
	});
	const [page, setPage] = useState(0);
	const [modalState, setModalState] = useState<ManualModalState | null>(null);
	const [pendingDeactivateId, setPendingDeactivateId] = useState<number | null>(
		null,
	);

	const categoriesQuery = useQuery({
		queryKey: CATEGORY_QUERY_KEY,
		queryFn: ({ signal }) => fetchCategories(signal),
		staleTime: Number.POSITIVE_INFINITY,
		gcTime: Number.POSITIVE_INFINITY,
		refetchOnWindowFocus: false,
	});

	const manualsQuery = useQuery({
		queryKey: [...MANUAL_QUERY_KEY, appliedFilters, page],
		queryFn: () => fetchManualPage(appliedFilters, page),
		placeholderData: (previousData) => previousData,
	});

	const createMutation = useMutation({
		mutationFn: (payload: ManualCreatePayload) => createManual(payload),
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: MANUAL_QUERY_KEY });
			setModalState(null);
		},
	});

	const updateMutation = useMutation({
		mutationFn: ({
			manualId,
			data,
		}: {
			manualId: number;
			data: ManualUpdatePayload;
		}) => updateManual(manualId, data),
		onSuccess: async (_, variables) => {
			await queryClient.invalidateQueries({ queryKey: MANUAL_QUERY_KEY });
			setModalState((current) =>
				current?.mode === "detail" &&
				current.manual?.manualId === variables.manualId
					? {
							...current,
							manual: {
								...current.manual,
								title: variables.data.title,
								content: variables.data.content,
							},
						}
					: current,
			);
		},
	});

	const deactivateMutation = useMutation({
		mutationFn: (manualId: number) => deactivateManual(manualId),
		onMutate: (manualId) => {
			setPendingDeactivateId(manualId);
		},
		onSuccess: async (_, manualId) => {
			await queryClient.invalidateQueries({ queryKey: MANUAL_QUERY_KEY });
			setModalState((current) =>
				current?.mode === "detail" && current.manual?.manualId === manualId
					? {
							...current,
							manual: {
								...current.manual,
								isActive: false,
							},
						}
					: current,
			);
		},
		onSettled: () => {
			setPendingDeactivateId(null);
		},
	});

	const manualPage = manualsQuery.data;
	const items = manualPage?.content ?? [];
	const totalElements = manualPage?.totalElements ?? 0;
	const totalPages = Math.max(manualPage?.totalPages ?? 1, 1);
	const currentPage = (manualPage?.number ?? page) + 1;
	const currentGroup = Math.ceil(currentPage / GROUP_SIZE);
	const groupStart = (currentGroup - 1) * GROUP_SIZE + 1;
	const groupEnd = Math.min(groupStart + GROUP_SIZE - 1, totalPages);
	const pages = Array.from(
		{ length: groupEnd - groupStart + 1 },
		(_, index) => groupStart + index,
	);
	const isFirstGroup = currentGroup === 1;
	const isLastGroup = groupStart + GROUP_SIZE > totalPages;
	const start = totalElements === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
	const end =
		totalElements === 0 ? 0 : Math.min(currentPage * PAGE_SIZE, totalElements);

	const selectedManual = useMemo(() => {
		if (modalState?.mode !== "detail" || !modalState.manual) {
			return null;
		}

		const updatedManual = items.find(
			(item) => item.manualId === modalState.manual?.manualId,
		);

		return updatedManual ?? modalState.manual;
	}, [items, modalState]);

	function updateDraftFilter<Key extends keyof SearchFilters>(
		key: Key,
		value: SearchFilters[Key],
	) {
		setDraftFilters((current) => ({ ...current, [key]: value }));
	}

	function submitSearch() {
		setAppliedFilters({
			...draftFilters,
			keyword: draftFilters.keyword.trim(),
		});
		setPage(0);
	}

	function openCreateModal() {
		setModalState({ mode: "create" });
	}

	function openDetailModal(manual: ManualHistoryItem) {
		setModalState({ mode: "detail", manual });
	}

	function closeModal() {
		setModalState(null);
	}

	return {
		categories: (categoriesQuery.data ?? []) as CategoryDto[],
		categoriesLoading: categoriesQuery.isPending,
		categoriesError: categoriesQuery.isError
			? "카테고리를 불러오지 못했습니다."
			: null,
		draftFilters,
		items,
		manualsLoading: manualsQuery.isPending,
		manualsError: manualsQuery.isError
			? "매뉴얼 목록을 불러오지 못했습니다."
			: null,
		totalElements,
		pagination: {
			currentPage,
			start,
			end,
			pages,
			totalPages,
			isFirstGroup,
			isLastGroup,
			setPage,
			groupStart,
		},
		modalState,
		selectedManual,
		pendingDeactivateId,
		isSaving: createMutation.isPending || updateMutation.isPending,
		isDeactivating: deactivateMutation.isPending,
		updateDraftFilter,
		submitSearch,
		openCreateModal,
		openDetailModal,
		closeModal,
		submitCreate: (payload: ManualCreatePayload) =>
			createMutation.mutateAsync(payload),
		submitUpdate: (manualId: number, payload: ManualUpdatePayload) =>
			updateMutation.mutateAsync({ manualId, data: payload }),
		deactivate: (manualId: number) => deactivateMutation.mutateAsync(manualId),
	};
}
