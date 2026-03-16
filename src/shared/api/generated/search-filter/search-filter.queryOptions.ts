import type {
	DataTag,
	MutationFunction,
	QueryFunction,
	QueryKey,
	UseMutationOptions,
	UseQueryOptions,
} from "@tanstack/react-query";
import type {
	FilterGroupCreateRequest,
	FilterGroupOrderRequest,
	FilterGroupUpdateRequest,
} from "../api.schemas";
import {
	deleteFilterGroup,
	getFilterDefinitions,
	getFilterGroupDetail,
	getMyFilterGroups,
	postFilterGroup,
	putFilterGroup,
	putFilterGroupOrder,
} from "./search-filter.queryFunctions";
import {
	getFilterDefinitionsKey,
	getFilterGroupDetailKey,
	getMyFilterGroupsKey,
} from "./search-filter.keys";
import type {
	DeleteFilterGroupMutationResult,
	GetFilterDefinitionsQueryResult,
	GetFilterGroupDetailQueryResult,
	GetMyFilterGroupsQueryResult,
	PostFilterGroupMutationResult,
	PutFilterGroupMutationResult,
	PutFilterGroupOrderMutationResult,
} from "./search-filter.types";

export const getFilterGroupDetailOptions = <TData = GetFilterGroupDetailQueryResult, TError = unknown>(
	id: number,
	options?: { query?: Partial<UseQueryOptions<GetFilterGroupDetailQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getFilterGroupDetailKey(id);
	const queryFn: QueryFunction<GetFilterGroupDetailQueryResult> = ({ signal }) =>
		getFilterGroupDetail(id, signal);
	return {
		queryKey,
		queryFn,
		enabled: !!id,
		...queryOptions,
	} as UseQueryOptions<GetFilterGroupDetailQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getMyFilterGroupsOptions = <TData = GetMyFilterGroupsQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetMyFilterGroupsQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getMyFilterGroupsKey();
	const queryFn: QueryFunction<GetMyFilterGroupsQueryResult> = ({ signal }) => getMyFilterGroups(signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<GetMyFilterGroupsQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getFilterDefinitionsOptions = <TData = GetFilterDefinitionsQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetFilterDefinitionsQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getFilterDefinitionsKey();
	const queryFn: QueryFunction<GetFilterDefinitionsQueryResult> = ({ signal }) => getFilterDefinitions(signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<GetFilterDefinitionsQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const putFilterGroupOptions = <TError = unknown, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<PutFilterGroupMutationResult, TError, { id: number; data: FilterGroupUpdateRequest }, TContext>;
	},
): UseMutationOptions<PutFilterGroupMutationResult, TError, { id: number; data: FilterGroupUpdateRequest }, TContext> => {
	const mutationKey = ["putFilterGroup"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<PutFilterGroupMutationResult, { id: number; data: FilterGroupUpdateRequest }> = ({
		id,
		data,
	}) => putFilterGroup(id, data) as Promise<PutFilterGroupMutationResult>;
	return { mutationFn, ...mutationOptions };
};

export const deleteFilterGroupOptions = <TError = unknown, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<DeleteFilterGroupMutationResult, TError, { id: number }, TContext>;
	},
): UseMutationOptions<DeleteFilterGroupMutationResult, TError, { id: number }, TContext> => {
	const mutationKey = ["deleteFilterGroup"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<DeleteFilterGroupMutationResult, { id: number }> = ({ id }) =>
		deleteFilterGroup(id) as Promise<DeleteFilterGroupMutationResult>;
	return { mutationFn, ...mutationOptions };
};

export const putFilterGroupOrderOptions = <TError = unknown, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<PutFilterGroupOrderMutationResult, TError, { data: FilterGroupOrderRequest }, TContext>;
	},
): UseMutationOptions<PutFilterGroupOrderMutationResult, TError, { data: FilterGroupOrderRequest }, TContext> => {
	const mutationKey = ["putFilterGroupOrder"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<PutFilterGroupOrderMutationResult, { data: FilterGroupOrderRequest }> = ({
		data,
	}) => putFilterGroupOrder(data) as Promise<PutFilterGroupOrderMutationResult>;
	return { mutationFn, ...mutationOptions };
};

export const postFilterGroupOptions = <TError = unknown, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<PostFilterGroupMutationResult, TError, { data: FilterGroupCreateRequest }, TContext>;
	},
): UseMutationOptions<PostFilterGroupMutationResult, TError, { data: FilterGroupCreateRequest }, TContext> => {
	const mutationKey = ["postFilterGroup"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<PostFilterGroupMutationResult, { data: FilterGroupCreateRequest }> = ({
		data,
	}) => postFilterGroup(data) as Promise<PostFilterGroupMutationResult>;
	return { mutationFn, ...mutationOptions };
};
