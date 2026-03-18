import { useQuery } from "@tanstack/react-query";
import type { DataTag, QueryKey, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type {
	GetCategories1Params,
	GetDailyQualityParams,
	GetMetricsParams,
	GetMonthlyQualityParams,
	GetSatisfactionParams,
	GetWeeklyQualityParams,
} from "../api.schemas";
import {
	getCategories1Options,
	getDailyQualityOptions,
	getMetricsOptions,
	getMonthlyQualityOptions,
	getSatisfactionOptions,
	getWeeklyQualityOptions,
} from "./agent-report.queryOptions";
import type {
	GetCategories1QueryResult,
	GetDailyQualityQueryResult,
	GetMetricsQueryResult,
	GetMonthlyQualityQueryResult,
	GetSatisfactionQueryResult,
	GetWeeklyQualityQueryResult,
} from "./agent-report.types";

/** @summary 고객 만족도 조회 */
export function useGetSatisfactionQuery<TData = GetSatisfactionQueryResult, TError = unknown>(
	period: string,
	params?: GetSatisfactionParams,
	options?: { query?: Partial<UseQueryOptions<GetSatisfactionQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getSatisfactionOptions(period, params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 상담사 성과 조회 */
export function useGetMetricsQuery<TData = GetMetricsQueryResult, TError = unknown>(
	period: string,
	params?: GetMetricsParams,
	options?: { query?: Partial<UseQueryOptions<GetMetricsQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getMetricsOptions(period, params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 상담사 카테고리 순위 조회 */
export function useGetCategories1Query<TData = GetCategories1QueryResult, TError = unknown>(
	period: string,
	params?: GetCategories1Params,
	options?: { query?: Partial<UseQueryOptions<GetCategories1QueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getCategories1Options(period, params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 주별 응대 품질 분석 */
export function useGetWeeklyQualityQuery<TData = GetWeeklyQualityQueryResult, TError = unknown>(
	params?: GetWeeklyQualityParams,
	options?: { query?: Partial<UseQueryOptions<GetWeeklyQualityQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getWeeklyQualityOptions(params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 월별 응대 품질 분석 */
export function useGetMonthlyQualityQuery<TData = GetMonthlyQualityQueryResult, TError = unknown>(
	params?: GetMonthlyQualityParams,
	options?: { query?: Partial<UseQueryOptions<GetMonthlyQualityQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getMonthlyQualityOptions(params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 일별 응대 품질 분석 */
export function useGetDailyQualityQuery<TData = GetDailyQualityQueryResult, TError = unknown>(
	params?: GetDailyQualityParams,
	options?: { query?: Partial<UseQueryOptions<GetDailyQualityQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getDailyQualityOptions(params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}
