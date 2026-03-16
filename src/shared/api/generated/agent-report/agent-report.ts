import { useQuery } from "@tanstack/react-query";
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
import type {
	GetCategories1Params,
	GetDailyQualityParams,
	GetMetricsParams,
	GetMonthlyQualityParams,
	GetSatisfactionParams,
	GetWeeklyQualityParams,
} from "../api.schemas";
import type {
	GetCategories1QueryResult,
	GetDailyQualityQueryResult,
	GetMetricsQueryResult,
	GetMonthlyQualityQueryResult,
	GetSatisfactionQueryResult,
	GetWeeklyQualityQueryResult,
} from "./agent-report.types";
import {
	getCategories1Options,
	getDailyQualityOptions,
	getMetricsOptions,
	getMonthlyQualityOptions,
	getSatisfactionOptions,
	getWeeklyQualityOptions,
} from "./agent-report.queryOptions";

/** @summary 고객 만족도 조회 */
export function useGetSatisfactionQuery<TData = GetSatisfactionQueryResult, TError = unknown>(
	period: string,
	params: undefined | GetSatisfactionParams,
	options: {
		query: Partial<UseQueryOptions<GetSatisfactionQueryResult, TError, TData>> &
			Pick<
				DefinedInitialDataOptions<GetSatisfactionQueryResult, TError, GetSatisfactionQueryResult>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetSatisfactionQuery<TData = GetSatisfactionQueryResult, TError = unknown>(
	period: string,
	params?: GetSatisfactionParams,
	options?: {
		query?: Partial<UseQueryOptions<GetSatisfactionQueryResult, TError, TData>> &
			Pick<
				UndefinedInitialDataOptions<GetSatisfactionQueryResult, TError, GetSatisfactionQueryResult>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetSatisfactionQuery<TData = GetSatisfactionQueryResult, TError = unknown>(
	period: string,
	params?: GetSatisfactionParams,
	options?: { query?: Partial<UseQueryOptions<GetSatisfactionQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetSatisfactionQuery<TData = GetSatisfactionQueryResult, TError = unknown>(
	period: string,
	params?: GetSatisfactionParams,
	options?: { query?: Partial<UseQueryOptions<GetSatisfactionQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getSatisfactionOptions(period, params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 상담사 성과 조회 */
export function useGetMetricsQuery<TData = GetMetricsQueryResult, TError = unknown>(
	period: string,
	params: undefined | GetMetricsParams,
	options: {
		query: Partial<UseQueryOptions<GetMetricsQueryResult, TError, TData>> &
			Pick<
				DefinedInitialDataOptions<GetMetricsQueryResult, TError, GetMetricsQueryResult>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetMetricsQuery<TData = GetMetricsQueryResult, TError = unknown>(
	period: string,
	params?: GetMetricsParams,
	options?: {
		query?: Partial<UseQueryOptions<GetMetricsQueryResult, TError, TData>> &
			Pick<
				UndefinedInitialDataOptions<GetMetricsQueryResult, TError, GetMetricsQueryResult>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetMetricsQuery<TData = GetMetricsQueryResult, TError = unknown>(
	period: string,
	params?: GetMetricsParams,
	options?: { query?: Partial<UseQueryOptions<GetMetricsQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetMetricsQuery<TData = GetMetricsQueryResult, TError = unknown>(
	period: string,
	params?: GetMetricsParams,
	options?: { query?: Partial<UseQueryOptions<GetMetricsQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getMetricsOptions(period, params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 상담사 카테고리 순위 조회 */
export function useGetCategories1Query<TData = GetCategories1QueryResult, TError = unknown>(
	period: string,
	params: undefined | GetCategories1Params,
	options: {
		query: Partial<UseQueryOptions<GetCategories1QueryResult, TError, TData>> &
			Pick<
				DefinedInitialDataOptions<GetCategories1QueryResult, TError, GetCategories1QueryResult>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetCategories1Query<TData = GetCategories1QueryResult, TError = unknown>(
	period: string,
	params?: GetCategories1Params,
	options?: {
		query?: Partial<UseQueryOptions<GetCategories1QueryResult, TError, TData>> &
			Pick<
				UndefinedInitialDataOptions<GetCategories1QueryResult, TError, GetCategories1QueryResult>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetCategories1Query<TData = GetCategories1QueryResult, TError = unknown>(
	period: string,
	params?: GetCategories1Params,
	options?: { query?: Partial<UseQueryOptions<GetCategories1QueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetCategories1Query<TData = GetCategories1QueryResult, TError = unknown>(
	period: string,
	params?: GetCategories1Params,
	options?: { query?: Partial<UseQueryOptions<GetCategories1QueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getCategories1Options(period, params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 주별 응대 품질 분석 */
export function useGetWeeklyQualityQuery<TData = GetWeeklyQualityQueryResult, TError = unknown>(
	params: undefined | GetWeeklyQualityParams,
	options: {
		query: Partial<UseQueryOptions<GetWeeklyQualityQueryResult, TError, TData>> &
			Pick<
				DefinedInitialDataOptions<GetWeeklyQualityQueryResult, TError, GetWeeklyQualityQueryResult>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetWeeklyQualityQuery<TData = GetWeeklyQualityQueryResult, TError = unknown>(
	params?: GetWeeklyQualityParams,
	options?: {
		query?: Partial<UseQueryOptions<GetWeeklyQualityQueryResult, TError, TData>> &
			Pick<
				UndefinedInitialDataOptions<GetWeeklyQualityQueryResult, TError, GetWeeklyQualityQueryResult>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetWeeklyQualityQuery<TData = GetWeeklyQualityQueryResult, TError = unknown>(
	params?: GetWeeklyQualityParams,
	options?: { query?: Partial<UseQueryOptions<GetWeeklyQualityQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetWeeklyQualityQuery<TData = GetWeeklyQualityQueryResult, TError = unknown>(
	params?: GetWeeklyQualityParams,
	options?: { query?: Partial<UseQueryOptions<GetWeeklyQualityQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getWeeklyQualityOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 월별 응대 품질 분석 */
export function useGetMonthlyQualityQuery<TData = GetMonthlyQualityQueryResult, TError = unknown>(
	params: undefined | GetMonthlyQualityParams,
	options: {
		query: Partial<UseQueryOptions<GetMonthlyQualityQueryResult, TError, TData>> &
			Pick<
				DefinedInitialDataOptions<GetMonthlyQualityQueryResult, TError, GetMonthlyQualityQueryResult>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetMonthlyQualityQuery<TData = GetMonthlyQualityQueryResult, TError = unknown>(
	params?: GetMonthlyQualityParams,
	options?: {
		query?: Partial<UseQueryOptions<GetMonthlyQualityQueryResult, TError, TData>> &
			Pick<
				UndefinedInitialDataOptions<
					GetMonthlyQualityQueryResult,
					TError,
					GetMonthlyQualityQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetMonthlyQualityQuery<TData = GetMonthlyQualityQueryResult, TError = unknown>(
	params?: GetMonthlyQualityParams,
	options?: { query?: Partial<UseQueryOptions<GetMonthlyQualityQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetMonthlyQualityQuery<TData = GetMonthlyQualityQueryResult, TError = unknown>(
	params?: GetMonthlyQualityParams,
	options?: { query?: Partial<UseQueryOptions<GetMonthlyQualityQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getMonthlyQualityOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 일별 응대 품질 분석 */
export function useGetDailyQualityQuery<TData = GetDailyQualityQueryResult, TError = unknown>(
	params: undefined | GetDailyQualityParams,
	options: {
		query: Partial<UseQueryOptions<GetDailyQualityQueryResult, TError, TData>> &
			Pick<
				DefinedInitialDataOptions<GetDailyQualityQueryResult, TError, GetDailyQualityQueryResult>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetDailyQualityQuery<TData = GetDailyQualityQueryResult, TError = unknown>(
	params?: GetDailyQualityParams,
	options?: {
		query?: Partial<UseQueryOptions<GetDailyQualityQueryResult, TError, TData>> &
			Pick<
				UndefinedInitialDataOptions<GetDailyQualityQueryResult, TError, GetDailyQualityQueryResult>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetDailyQualityQuery<TData = GetDailyQualityQueryResult, TError = unknown>(
	params?: GetDailyQualityParams,
	options?: { query?: Partial<UseQueryOptions<GetDailyQualityQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetDailyQualityQuery<TData = GetDailyQualityQueryResult, TError = unknown>(
	params?: GetDailyQualityParams,
	options?: { query?: Partial<UseQueryOptions<GetDailyQualityQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getDailyQualityOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}
