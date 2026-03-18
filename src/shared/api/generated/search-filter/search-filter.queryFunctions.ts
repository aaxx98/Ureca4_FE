import { apiClient } from "../../client";
import type {
	DeleteFilterGroup200,
	FilterGroupCreateRequest,
	FilterGroupDetailResponse,
	FilterGroupOrderRequest,
	FilterGroupUpdateRequest,
	GetFilterDefinitions200,
	GetMyFilterGroups200,
	UpdateFilterGroupOrder200,
} from "../api.schemas";

export const getFilterGroupDetail = (id: number, signal?: AbortSignal) => {
	return apiClient<FilterGroupDetailResponse>({
		url: `/search-filters/${id}`,
		method: "GET",
		signal,
	});
};

export const putFilterGroup = (id: number, filterGroupUpdateRequest: FilterGroupUpdateRequest) => {
	return apiClient<FilterGroupDetailResponse>({
		url: `/search-filters/${id}`,
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		data: filterGroupUpdateRequest,
	});
};

export const deleteFilterGroup = (id: number) => {
	return apiClient<DeleteFilterGroup200>({
		url: `/search-filters/${id}`,
		method: "DELETE",
	});
};

export const putFilterGroupOrder = (filterGroupOrderRequest: FilterGroupOrderRequest) => {
	return apiClient<UpdateFilterGroupOrder200>({
		url: `/search-filters/order`,
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		data: filterGroupOrderRequest,
	});
};

export const getMyFilterGroups = (signal?: AbortSignal) => {
	return apiClient<GetMyFilterGroups200>({
		url: `/search-filters`,
		method: "GET",
		signal,
	});
};

export const postFilterGroup = (filterGroupCreateRequest: FilterGroupCreateRequest, signal?: AbortSignal) => {
	return apiClient<FilterGroupDetailResponse>({
		url: `/search-filters`,
		method: "POST",
		headers: { "Content-Type": "application/json" },
		data: filterGroupCreateRequest,
		signal,
	});
};

export const getFilterDefinitions = (signal?: AbortSignal) => {
	return apiClient<GetFilterDefinitions200>({
		url: `/filters`,
		method: "GET",
		signal,
	});
};
