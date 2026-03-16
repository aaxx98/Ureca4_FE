import type {
	DataTag,
	DefinedInitialDataOptions,
	DefinedUseQueryResult,
	QueryClient,
	QueryKey,
	UndefinedInitialDataOptions,
	UseMutationOptions,
	UseMutationResult,
	UseQueryOptions,
	UseQueryResult,
} from "@tanstack/react-query";
import { useMutation, useQuery } from "@tanstack/react-query";
import type {
	FilterGroupCreateRequest,
	FilterGroupOrderRequest,
	FilterGroupUpdateRequest,
} from "../api.schemas";
import {
	deleteFilterGroupOptions,
	getFilterDefinitionsOptions,
	getFilterGroupDetailOptions,
	getMyFilterGroupsOptions,
	postFilterGroupOptions,
	putFilterGroupOptions,
	putFilterGroupOrderOptions,
} from "./search-filter.queryOptions";
import type {
	DeleteFilterGroupMutationResult,
	GetFilterDefinitionsQueryResult,
	GetFilterGroupDetailQueryResult,
	GetMyFilterGroupsQueryResult,
	PostFilterGroupMutationResult,
	PutFilterGroupMutationResult,
	PutFilterGroupOrderMutationResult,
} from "./search-filter.types";

/** @summary 필터 그룹 상세 조회 */
export function useGetFilterGroupDetailQuery<
	TData = GetFilterGroupDetailQueryResult,
	TError = unknown,
>(
	id: number,
	options: {
		query: Partial<
			UseQueryOptions<GetFilterGroupDetailQueryResult, TError, TData>
		> &
			Pick<
				DefinedInitialDataOptions<
					GetFilterGroupDetailQueryResult,
					TError,
					GetFilterGroupDetailQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetFilterGroupDetailQuery<
	TData = GetFilterGroupDetailQueryResult,
	TError = unknown,
>(
	id: number,
	options?: {
		query?: Partial<
			UseQueryOptions<GetFilterGroupDetailQueryResult, TError, TData>
		> &
			Pick<
				UndefinedInitialDataOptions<
					GetFilterGroupDetailQueryResult,
					TError,
					GetFilterGroupDetailQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetFilterGroupDetailQuery<
	TData = GetFilterGroupDetailQueryResult,
	TError = unknown,
>(
	id: number,
	options?: {
		query?: Partial<
			UseQueryOptions<GetFilterGroupDetailQueryResult, TError, TData>
		>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetFilterGroupDetailQuery<
	TData = GetFilterGroupDetailQueryResult,
	TError = unknown,
>(
	id: number,
	options?: {
		query?: Partial<
			UseQueryOptions<GetFilterGroupDetailQueryResult, TError, TData>
		>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getFilterGroupDetailOptions(id, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

/** @summary 내 필터 그룹 목록 조회 */
export function useGetMyFilterGroupsQuery<
	TData = GetMyFilterGroupsQueryResult,
	TError = unknown,
>(
	options: {
		query: Partial<
			UseQueryOptions<GetMyFilterGroupsQueryResult, TError, TData>
		> &
			Pick<
				DefinedInitialDataOptions<
					GetMyFilterGroupsQueryResult,
					TError,
					GetMyFilterGroupsQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetMyFilterGroupsQuery<
	TData = GetMyFilterGroupsQueryResult,
	TError = unknown,
>(
	options?: {
		query?: Partial<
			UseQueryOptions<GetMyFilterGroupsQueryResult, TError, TData>
		> &
			Pick<
				UndefinedInitialDataOptions<
					GetMyFilterGroupsQueryResult,
					TError,
					GetMyFilterGroupsQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetMyFilterGroupsQuery<
	TData = GetMyFilterGroupsQueryResult,
	TError = unknown,
>(
	options?: {
		query?: Partial<
			UseQueryOptions<GetMyFilterGroupsQueryResult, TError, TData>
		>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetMyFilterGroupsQuery<
	TData = GetMyFilterGroupsQueryResult,
	TError = unknown,
>(
	options?: {
		query?: Partial<
			UseQueryOptions<GetMyFilterGroupsQueryResult, TError, TData>
		>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getMyFilterGroupsOptions(options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

/** @summary 필터 정의 목록 조회 */
export function useGetFilterDefinitionsQuery<
	TData = GetFilterDefinitionsQueryResult,
	TError = unknown,
>(
	options: {
		query: Partial<
			UseQueryOptions<GetFilterDefinitionsQueryResult, TError, TData>
		> &
			Pick<
				DefinedInitialDataOptions<
					GetFilterDefinitionsQueryResult,
					TError,
					GetFilterDefinitionsQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetFilterDefinitionsQuery<
	TData = GetFilterDefinitionsQueryResult,
	TError = unknown,
>(
	options?: {
		query?: Partial<
			UseQueryOptions<GetFilterDefinitionsQueryResult, TError, TData>
		> &
			Pick<
				UndefinedInitialDataOptions<
					GetFilterDefinitionsQueryResult,
					TError,
					GetFilterDefinitionsQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetFilterDefinitionsQuery<
	TData = GetFilterDefinitionsQueryResult,
	TError = unknown,
>(
	options?: {
		query?: Partial<
			UseQueryOptions<GetFilterDefinitionsQueryResult, TError, TData>
		>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetFilterDefinitionsQuery<
	TData = GetFilterDefinitionsQueryResult,
	TError = unknown,
>(
	options?: {
		query?: Partial<
			UseQueryOptions<GetFilterDefinitionsQueryResult, TError, TData>
		>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getFilterDefinitionsOptions(options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

export function useMutationPutFilterGroupQuery<
	TError = unknown,
	TContext = unknown,
>(
	options?: {
		mutation?: UseMutationOptions<
			PutFilterGroupMutationResult,
			TError,
			{ id: number; data: FilterGroupUpdateRequest },
			TContext
		>;
	},
	queryClient?: QueryClient,
): UseMutationResult<
	PutFilterGroupMutationResult,
	TError,
	{ id: number; data: FilterGroupUpdateRequest },
	TContext
> {
	return useMutation(putFilterGroupOptions(options), queryClient);
}

export function useMutationDeleteFilterGroupQuery<
	TError = unknown,
	TContext = unknown,
>(
	options?: {
		mutation?: UseMutationOptions<
			DeleteFilterGroupMutationResult,
			TError,
			{ id: number },
			TContext
		>;
	},
	queryClient?: QueryClient,
): UseMutationResult<
	DeleteFilterGroupMutationResult,
	TError,
	{ id: number },
	TContext
> {
	return useMutation(deleteFilterGroupOptions(options), queryClient);
}

export function useMutationPutFilterGroupOrderQuery<
	TError = unknown,
	TContext = unknown,
>(
	options?: {
		mutation?: UseMutationOptions<
			PutFilterGroupOrderMutationResult,
			TError,
			{ data: FilterGroupOrderRequest },
			TContext
		>;
	},
	queryClient?: QueryClient,
): UseMutationResult<
	PutFilterGroupOrderMutationResult,
	TError,
	{ data: FilterGroupOrderRequest },
	TContext
> {
	return useMutation(putFilterGroupOrderOptions(options), queryClient);
}

export function useMutationPostFilterGroupQuery<
	TError = unknown,
	TContext = unknown,
>(
	options?: {
		mutation?: UseMutationOptions<
			PostFilterGroupMutationResult,
			TError,
			{ data: FilterGroupCreateRequest },
			TContext
		>;
	},
	queryClient?: QueryClient,
): UseMutationResult<
	PostFilterGroupMutationResult,
	TError,
	{ data: FilterGroupCreateRequest },
	TContext
> {
	return useMutation(postFilterGroupOptions(options), queryClient);
}
