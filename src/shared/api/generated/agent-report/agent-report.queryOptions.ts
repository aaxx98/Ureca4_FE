import type { DataTag, QueryFunction, QueryKey, UseQueryOptions } from "@tanstack/react-query";
import type {
	GetCategories1Params,
	GetDailyQualityParams,
	GetMetricsParams,
	GetMonthlyQualityParams,
	GetSatisfactionParams,
	GetWeeklyQualityParams,
} from "../api.schemas";
import {
	getCategories1,
	getDailyQuality,
	getMetrics,
	getMonthlyQuality,
	getSatisfaction,
	getWeeklyQuality,
} from "./agent-report.queryFunctions";
import {
	getCategories1Key,
	getDailyQualityKey,
	getMetricsKey,
	getMonthlyQualityKey,
	getSatisfactionKey,
	getWeeklyQualityKey,
} from "./agent-report.keys";
import type {
	GetCategories1QueryResult,
	GetDailyQualityQueryResult,
	GetMetricsQueryResult,
	GetMonthlyQualityQueryResult,
	GetSatisfactionQueryResult,
	GetWeeklyQualityQueryResult,
} from "./agent-report.types";

export const getSatisfactionOptions = <TData = GetSatisfactionQueryResult, TError = unknown>(
	period: string,
	params?: GetSatisfactionParams,
	options?: { query?: Partial<UseQueryOptions<GetSatisfactionQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getSatisfactionKey(period, params);
	const queryFn: QueryFunction<GetSatisfactionQueryResult> = ({ signal }) =>
		getSatisfaction(period, params, signal);
	return { queryKey, queryFn, enabled: !!period, ...queryOptions } as UseQueryOptions<
		GetSatisfactionQueryResult,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};


export const getMetricsOptions = <TData = GetMetricsQueryResult, TError = unknown>(
	period: string,
	params?: GetMetricsParams,
	options?: { query?: Partial<UseQueryOptions<GetMetricsQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getMetricsKey(period, params);
	const queryFn: QueryFunction<GetMetricsQueryResult> = ({ signal }) =>
		getMetrics(period, params, signal);
	return { queryKey, queryFn, enabled: !!period, ...queryOptions } as UseQueryOptions<
		GetMetricsQueryResult,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};


export const getCategories1Options = <TData = GetCategories1QueryResult, TError = unknown>(
	period: string,
	params?: GetCategories1Params,
	options?: { query?: Partial<UseQueryOptions<GetCategories1QueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getCategories1Key(period, params);
	const queryFn: QueryFunction<GetCategories1QueryResult> = ({ signal }) =>
		getCategories1(period, params, signal);
	return { queryKey, queryFn, enabled: !!period, ...queryOptions } as UseQueryOptions<
		GetCategories1QueryResult,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};


export const getWeeklyQualityOptions = <TData = GetWeeklyQualityQueryResult, TError = unknown>(
	params?: GetWeeklyQualityParams,
	options?: { query?: Partial<UseQueryOptions<GetWeeklyQualityQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getWeeklyQualityKey(params);
	const queryFn: QueryFunction<GetWeeklyQualityQueryResult> = ({ signal }) =>
		getWeeklyQuality(params, signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		GetWeeklyQualityQueryResult,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};


export const getMonthlyQualityOptions = <TData = GetMonthlyQualityQueryResult, TError = unknown>(
	params?: GetMonthlyQualityParams,
	options?: { query?: Partial<UseQueryOptions<GetMonthlyQualityQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getMonthlyQualityKey(params);
	const queryFn: QueryFunction<GetMonthlyQualityQueryResult> = ({ signal }) =>
		getMonthlyQuality(params, signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		GetMonthlyQualityQueryResult,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};


export const getDailyQualityOptions = <TData = GetDailyQualityQueryResult, TError = unknown>(
	params?: GetDailyQualityParams,
	options?: { query?: Partial<UseQueryOptions<GetDailyQualityQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getDailyQualityKey(params);
	const queryFn: QueryFunction<GetDailyQualityQueryResult> = ({ signal }) =>
		getDailyQuality(params, signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		GetDailyQualityQueryResult,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};
