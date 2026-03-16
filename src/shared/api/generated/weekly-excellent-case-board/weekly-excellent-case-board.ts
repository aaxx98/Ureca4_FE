import type {
	DataTag,
	DefinedInitialDataOptions,
	DefinedUseQueryResult,
	QueryClient,
	QueryKey,
	UndefinedInitialDataOptions,
	UseQueryOptions,
	UseQueryResult,
} from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import type { GetWeeklyBoardParams } from "../api.schemas";
import {
	getBoardDetailOptions,
	getWeeklyBoardOptions,
} from "./weekly-excellent-case-board.queryOptions";
import type {
	GetBoardDetailQueryResult,
	GetWeeklyBoardQueryResult,
} from "./weekly-excellent-case-board.types";

/** @summary 주간 우수 사례 게시판 목록 조회 */
export function useGetWeeklyBoardQuery<
	TData = GetWeeklyBoardQueryResult,
	TError = unknown,
>(
	params: undefined | GetWeeklyBoardParams,
	options: {
		query: Partial<UseQueryOptions<GetWeeklyBoardQueryResult, TError, TData>> &
			Pick<
				DefinedInitialDataOptions<
					GetWeeklyBoardQueryResult,
					TError,
					GetWeeklyBoardQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetWeeklyBoardQuery<
	TData = GetWeeklyBoardQueryResult,
	TError = unknown,
>(
	params?: GetWeeklyBoardParams,
	options?: {
		query?: Partial<UseQueryOptions<GetWeeklyBoardQueryResult, TError, TData>> &
			Pick<
				UndefinedInitialDataOptions<
					GetWeeklyBoardQueryResult,
					TError,
					GetWeeklyBoardQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetWeeklyBoardQuery<
	TData = GetWeeklyBoardQueryResult,
	TError = unknown,
>(
	params?: GetWeeklyBoardParams,
	options?: {
		query?: Partial<UseQueryOptions<GetWeeklyBoardQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetWeeklyBoardQuery<
	TData = GetWeeklyBoardQueryResult,
	TError = unknown,
>(
	params?: GetWeeklyBoardParams,
	options?: {
		query?: Partial<UseQueryOptions<GetWeeklyBoardQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getWeeklyBoardOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

/** @summary 우수 사례 게시판 상세 조회 */
export function useGetBoardDetailQuery<
	TData = GetBoardDetailQueryResult,
	TError = unknown,
>(
	consultId: number,
	options: {
		query: Partial<UseQueryOptions<GetBoardDetailQueryResult, TError, TData>> &
			Pick<
				DefinedInitialDataOptions<
					GetBoardDetailQueryResult,
					TError,
					GetBoardDetailQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetBoardDetailQuery<
	TData = GetBoardDetailQueryResult,
	TError = unknown,
>(
	consultId: number,
	options?: {
		query?: Partial<UseQueryOptions<GetBoardDetailQueryResult, TError, TData>> &
			Pick<
				UndefinedInitialDataOptions<
					GetBoardDetailQueryResult,
					TError,
					GetBoardDetailQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetBoardDetailQuery<
	TData = GetBoardDetailQueryResult,
	TError = unknown,
>(
	consultId: number,
	options?: {
		query?: Partial<UseQueryOptions<GetBoardDetailQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetBoardDetailQuery<
	TData = GetBoardDetailQueryResult,
	TError = unknown,
>(
	consultId: number,
	options?: {
		query?: Partial<UseQueryOptions<GetBoardDetailQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getBoardDetailOptions(consultId, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}
