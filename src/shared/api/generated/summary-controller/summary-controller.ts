import {
	type DataTag,
	type DefinedInitialDataOptions,
	type DefinedUseQueryResult,
	type QueryClient,
	type QueryKey,
	type UndefinedInitialDataOptions,
	type UseQueryOptions,
	type UseQueryResult,
	useQuery,
} from "@tanstack/react-query";
import type { ListParams } from "../api.schemas";
import {
	getSummaryDetailOptions,
	getSummaryListOptions,
} from "./summary-controller.queryOptions";
import type {
	GetSummaryDetailQueryResult,
	GetSummaryListQueryResult,
} from "./summary-controller.types";

/** @summary 상담 요약 목록 조회 */
export function useGetSummaryListQuery<
	TData = GetSummaryListQueryResult,
	TError = unknown,
>(
	params: undefined | ListParams,
	options: {
		query: Partial<UseQueryOptions<GetSummaryListQueryResult, TError, TData>> &
			Pick<
				DefinedInitialDataOptions<
					GetSummaryListQueryResult,
					TError,
					GetSummaryListQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetSummaryListQuery<
	TData = GetSummaryListQueryResult,
	TError = unknown,
>(
	params?: ListParams,
	options?: {
		query?: Partial<UseQueryOptions<GetSummaryListQueryResult, TError, TData>> &
			Pick<
				UndefinedInitialDataOptions<
					GetSummaryListQueryResult,
					TError,
					GetSummaryListQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetSummaryListQuery<
	TData = GetSummaryListQueryResult,
	TError = unknown,
>(
	params?: ListParams,
	options?: {
		query?: Partial<UseQueryOptions<GetSummaryListQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetSummaryListQuery<
	TData = GetSummaryListQueryResult,
	TError = unknown,
>(
	params?: ListParams,
	options?: {
		query?: Partial<UseQueryOptions<GetSummaryListQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getSummaryListOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

/** @summary 상담 요약 상세 조회 */
export function useGetSummaryDetailQuery<
	TData = GetSummaryDetailQueryResult,
	TError = unknown,
>(
	consultId: number,
	options: {
		query: Partial<
			UseQueryOptions<GetSummaryDetailQueryResult, TError, TData>
		> &
			Pick<
				DefinedInitialDataOptions<
					GetSummaryDetailQueryResult,
					TError,
					GetSummaryDetailQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetSummaryDetailQuery<
	TData = GetSummaryDetailQueryResult,
	TError = unknown,
>(
	consultId: number,
	options?: {
		query?: Partial<
			UseQueryOptions<GetSummaryDetailQueryResult, TError, TData>
		> &
			Pick<
				UndefinedInitialDataOptions<
					GetSummaryDetailQueryResult,
					TError,
					GetSummaryDetailQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetSummaryDetailQuery<
	TData = GetSummaryDetailQueryResult,
	TError = unknown,
>(
	consultId: number,
	options?: {
		query?: Partial<
			UseQueryOptions<GetSummaryDetailQueryResult, TError, TData>
		>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetSummaryDetailQuery<
	TData = GetSummaryDetailQueryResult,
	TError = unknown,
>(
	consultId: number,
	options?: {
		query?: Partial<
			UseQueryOptions<GetSummaryDetailQueryResult, TError, TData>
		>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getSummaryDetailOptions(consultId, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}
