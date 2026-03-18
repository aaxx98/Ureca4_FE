import { apiClient } from "../../../shared/api/client";
import type { CategoryDto } from "../../../shared/api/generated/api.schemas";

export type ManualStatusFilter = "전체" | "활성화" | "비활성화";

export interface ManualHistoryItem {
	manualId: number;
	categoryCode: string;
	categoryName: string;
	title: string;
	content: string;
	isActive: boolean;
	empName: string;
	updatedAt: string;
}

export interface ManualHistoryPageResponse {
	content: ManualHistoryItem[];
	totalElements: number;
	totalPages: number;
	number: number;
}

export interface ManualHistoryParams {
	categoryCode?: string;
	status?: ManualStatusFilter;
	page: number;
	size: number;
	sort?: string;
}

export interface ManualCreatePayload {
	categoryCode: string;
	title: string;
	content: string;
}

export interface ManualUpdatePayload {
	title: string;
	content: string;
}

const DEFAULT_SORT = "updatedAt,desc";
const KEYWORD_FETCH_SIZE = 100;

function normalizeManual(item: Partial<ManualHistoryItem>): ManualHistoryItem {
	return {
		manualId: item.manualId ?? 0,
		categoryCode: item.categoryCode ?? "",
		categoryName: item.categoryName ?? "",
		title: item.title ?? "",
		content: item.content ?? "",
		isActive: item.isActive ?? false,
		empName: item.empName ?? "-",
		updatedAt: item.updatedAt ?? "",
	};
}

function normalizeManualPage(
	response: Partial<ManualHistoryPageResponse> | undefined,
	page: number,
): ManualHistoryPageResponse {
	return {
		content: (response?.content ?? []).map((item) => normalizeManual(item)),
		totalElements: response?.totalElements ?? 0,
		totalPages: Math.max(response?.totalPages ?? 0, 1),
		number: response?.number ?? page,
	};
}

export function fetchCategories(signal?: AbortSignal) {
	return apiClient<CategoryDto[]>({
		url: "/api/meta/categories",
		method: "GET",
		signal,
	});
}

export async function fetchManualHistory(
	params: ManualHistoryParams,
	signal?: AbortSignal,
) {
	const response = await apiClient<Partial<ManualHistoryPageResponse>>({
		url: "/admin/manuals/history",
		method: "GET",
		params: {
			page: params.page,
			size: params.size,
			sort: params.sort ?? DEFAULT_SORT,
			...(params.categoryCode ? { categoryCode: params.categoryCode } : {}),
			...(params.status && params.status !== "전체"
				? { status: params.status }
				: {}),
		},
		signal,
	});

	return normalizeManualPage(response, params.page);
}

export async function fetchAllManualHistory(
	categoryCode?: string,
	status?: ManualStatusFilter,
	signal?: AbortSignal,
) {
	const items: ManualHistoryItem[] = [];
	let page = 0;
	let totalPages = 1;

	while (page < totalPages) {
		const response = await fetchManualHistory(
			{
				categoryCode,
				status,
				page,
				size: KEYWORD_FETCH_SIZE,
				sort: DEFAULT_SORT,
			},
			signal,
		);

		items.push(...response.content);
		totalPages = Math.max(response.totalPages, 1);
		page += 1;
	}

	return items;
}

export function createManual(data: ManualCreatePayload) {
	return apiClient<void>({
		url: "/admin/manuals",
		method: "POST",
		data,
	});
}

export function updateManual(manualId: number, data: ManualUpdatePayload) {
	return apiClient<void>({
		url: `/admin/manuals/${manualId}`,
		method: "PUT",
		data,
	});
}

export function deactivateManual(manualId: number) {
	return apiClient<void>({
		url: `/admin/manuals/${manualId}/deactivate`,
		method: "PATCH",
	});
}

export function activateManual(manualId: number) {
	return apiClient<void>({
		url: `/admin/manuals/${manualId}/activate`,
		method: "PATCH",
	});
}
