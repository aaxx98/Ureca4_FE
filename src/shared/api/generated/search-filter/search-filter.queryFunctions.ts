import type {
	MutationFunction,
	UseMutationOptions,
} from "@tanstack/react-query";
import { apiClient } from "../../client";
import type {
	DeleteFilterGroup200,
	ErrorResponse,
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
		url: `/api/search-filters/${id}`,
		method: "GET",
		signal,
	});
};

export const updateFilterGroup = (
	id: number,
	filterGroupUpdateRequest: FilterGroupUpdateRequest,
) => {
	return apiClient<FilterGroupDetailResponse>({
		url: `/api/search-filters/${id}`,
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		data: filterGroupUpdateRequest,
	});
};

export const getUpdateFilterGroupMutationOptions = <
	TError = ErrorResponse | ErrorResponse | ErrorResponse,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof updateFilterGroup>>,
		TError,
		{ id: number; data: FilterGroupUpdateRequest },
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof updateFilterGroup>>,
	TError,
	{ id: number; data: FilterGroupUpdateRequest },
	TContext
> => {
	const mutationKey = ["updateFilterGroup"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof updateFilterGroup>>,
		{ id: number; data: FilterGroupUpdateRequest }
	> = (props) => {
		const { id, data } = props ?? {};
		return updateFilterGroup(id, data);
	};

	return { mutationFn, ...mutationOptions };
};

export type UpdateFilterGroupMutationResult = NonNullable<
	Awaited<ReturnType<typeof updateFilterGroup>>
>;
export type UpdateFilterGroupMutationBody = FilterGroupUpdateRequest;
export type UpdateFilterGroupMutationError =
	| ErrorResponse
	| ErrorResponse
	| ErrorResponse;

export const deleteFilterGroup = (id: number) => {
	return apiClient<DeleteFilterGroup200>({
		url: `/api/search-filters/${id}`,
		method: "DELETE",
	});
};

export const getDeleteFilterGroupMutationOptions = <
	TError = ErrorResponse | ErrorResponse,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof deleteFilterGroup>>,
		TError,
		{ id: number },
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof deleteFilterGroup>>,
	TError,
	{ id: number },
	TContext
> => {
	const mutationKey = ["deleteFilterGroup"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof deleteFilterGroup>>,
		{ id: number }
	> = (props) => {
		const { id } = props ?? {};
		return deleteFilterGroup(id);
	};

	return { mutationFn, ...mutationOptions };
};

export type DeleteFilterGroupMutationResult = NonNullable<
	Awaited<ReturnType<typeof deleteFilterGroup>>
>;
export type DeleteFilterGroupMutationError = ErrorResponse | ErrorResponse;

export const updateFilterGroupOrder = (
	filterGroupOrderRequest: FilterGroupOrderRequest,
) => {
	return apiClient<UpdateFilterGroupOrder200>({
		url: `/api/search-filters/order`,
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		data: filterGroupOrderRequest,
	});
};

export const getUpdateFilterGroupOrderMutationOptions = <
	TError = ErrorResponse,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof updateFilterGroupOrder>>,
		TError,
		{ data: FilterGroupOrderRequest },
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof updateFilterGroupOrder>>,
	TError,
	{ data: FilterGroupOrderRequest },
	TContext
> => {
	const mutationKey = ["updateFilterGroupOrder"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof updateFilterGroupOrder>>,
		{ data: FilterGroupOrderRequest }
	> = (props) => {
		const { data } = props ?? {};
		return updateFilterGroupOrder(data);
	};

	return { mutationFn, ...mutationOptions };
};

export type UpdateFilterGroupOrderMutationResult = NonNullable<
	Awaited<ReturnType<typeof updateFilterGroupOrder>>
>;
export type UpdateFilterGroupOrderMutationBody = FilterGroupOrderRequest;
export type UpdateFilterGroupOrderMutationError = ErrorResponse;

export const getMyFilterGroups = (signal?: AbortSignal) => {
	return apiClient<GetMyFilterGroups200>({
		url: `/api/search-filters`,
		method: "GET",
		signal,
	});
};

export const createFilterGroup = (
	filterGroupCreateRequest: FilterGroupCreateRequest,
	signal?: AbortSignal,
) => {
	return apiClient<FilterGroupDetailResponse>({
		url: `/api/search-filters`,
		method: "POST",
		headers: { "Content-Type": "application/json" },
		data: filterGroupCreateRequest,
		signal,
	});
};

export const getCreateFilterGroupMutationOptions = <
	TError = ErrorResponse | ErrorResponse,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof createFilterGroup>>,
		TError,
		{ data: FilterGroupCreateRequest },
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof createFilterGroup>>,
	TError,
	{ data: FilterGroupCreateRequest },
	TContext
> => {
	const mutationKey = ["createFilterGroup"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof createFilterGroup>>,
		{ data: FilterGroupCreateRequest }
	> = (props) => {
		const { data } = props ?? {};
		return createFilterGroup(data);
	};

	return { mutationFn, ...mutationOptions };
};

export type CreateFilterGroupMutationResult = NonNullable<
	Awaited<ReturnType<typeof createFilterGroup>>
>;
export type CreateFilterGroupMutationBody = FilterGroupCreateRequest;
export type CreateFilterGroupMutationError = ErrorResponse | ErrorResponse;

export const getFilterDefinitions = (signal?: AbortSignal) => {
	return apiClient<GetFilterDefinitions200>({
		url: `/api/filters`,
		method: "GET",
		signal,
	});
};
