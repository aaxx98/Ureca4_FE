import { apiClient } from "../../../shared/api/client";
import type { CategoryDto } from "../../../shared/api/generated/api.schemas";

export interface ManualHistoryItem {
	manualId: number;
	categoryCode: string;
	categoryName: string;
	title: string;
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
	page: number;
	size: number;
	sort?: string;
}

const DEFAULT_SORT = "updatedAt,desc";
const KEYWORD_FETCH_SIZE = 100;

export function fetchCategories(signal?: AbortSignal) {
	return apiClient<CategoryDto[]>({
		url: "/api/meta/categories",
		method: "GET",
		signal,
	});
}

export function fetchManualHistory(
	params: ManualHistoryParams,
	signal?: AbortSignal,
) {
	return apiClient<ManualHistoryPageResponse>({
		url: "/admin/manuals/history",
		method: "GET",
		params: {
			page: params.page,
			size: params.size,
			sort: params.sort ?? DEFAULT_SORT,
			...(params.categoryCode ? { categoryCode: params.categoryCode } : {}),
		},
		signal,
	});
}

export async function fetchAllManualHistory(
	categoryCode?: string,
	signal?: AbortSignal,
) {
	const items: ManualHistoryItem[] = [];
	let page = 0;
	let totalPages = 1;

	while (page < totalPages) {
		const response = await fetchManualHistory(
			{
				categoryCode,
				page,
				size: KEYWORD_FETCH_SIZE,
				sort: DEFAULT_SORT,
			},
			signal,
		);

		items.push(...response.content);
		totalPages = Math.max(response.totalPages ?? 0, 1);
		page += 1;
	}

	return items;
}
