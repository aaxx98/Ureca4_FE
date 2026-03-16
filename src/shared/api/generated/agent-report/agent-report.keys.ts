import type {
	DataTag,
	QueryFunction,
	QueryKey,
	UseQueryOptions,
} from "@tanstack/react-query";
import type {
	ErrorResponse,
	GetCategories1Params,
	GetMetricsParams,
	GetSatisfactionParams,
} from "../api.schemas";
import {
	getCategories1,
	getMetrics,
	getSatisfaction,
} from "./agent-report.queryFunctions";

export const getGetSatisfactionQueryKey = (
	period?: string,
	params?: GetSatisfactionParams,
) =>
	[
		`/api/analysis/agent/${period}/satisfaction`,
		...(params ? [params] : []),
	] as const;

export const getGetSatisfactionQueryOptions = <
	TData = Awaited<ReturnType<typeof getSatisfaction>>,
	TError = ErrorResponse | ErrorResponse | ErrorResponse,
>(
	period: string,
	params?: GetSatisfactionParams,
	options?: {
		query?: Partial<
			UseQueryOptions<Awaited<ReturnType<typeof getSatisfaction>>, TError, TData>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? getGetSatisfactionQueryKey(period, params);
	const queryFn: QueryFunction<
		Awaited<ReturnType<typeof getSatisfaction>>
	> = ({ signal }) => getSatisfaction(period, params, signal);

	return {
		queryKey,
		queryFn,
		enabled: !!(period),
		...queryOptions,
	} as UseQueryOptions<
		Awaited<ReturnType<typeof getSatisfaction>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export const getGetMetricsQueryKey = (
	period?: string,
	params?: GetMetricsParams,
) =>
	[
		`/api/analysis/agent/${period}/metrics`,
		...(params ? [params] : []),
	] as const;

export const getGetMetricsQueryOptions = <
	TData = Awaited<ReturnType<typeof getMetrics>>,
	TError = ErrorResponse | ErrorResponse | ErrorResponse,
>(
	period: string,
	params?: GetMetricsParams,
	options?: {
		query?: Partial<
			UseQueryOptions<Awaited<ReturnType<typeof getMetrics>>, TError, TData>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? getGetMetricsQueryKey(period, params);
	const queryFn: QueryFunction<Awaited<ReturnType<typeof getMetrics>>> = ({
		signal,
	}) => getMetrics(period, params, signal);

	return {
		queryKey,
		queryFn,
		enabled: !!(period),
		...queryOptions,
	} as UseQueryOptions<
		Awaited<ReturnType<typeof getMetrics>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export const getGetCategories1QueryKey = (
	period?: string,
	params?: GetCategories1Params,
) =>
	[
		`/api/analysis/agent/${period}/categories`,
		...(params ? [params] : []),
	] as const;

export const getGetCategories1QueryOptions = <
	TData = Awaited<ReturnType<typeof getCategories1>>,
	TError = ErrorResponse | ErrorResponse | ErrorResponse,
>(
	period: string,
	params?: GetCategories1Params,
	options?: {
		query?: Partial<
			UseQueryOptions<Awaited<ReturnType<typeof getCategories1>>, TError, TData>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? getGetCategories1QueryKey(period, params);
	const queryFn: QueryFunction<
		Awaited<ReturnType<typeof getCategories1>>
	> = ({ signal }) => getCategories1(period, params, signal);

	return {
		queryKey,
		queryFn,
		enabled: !!(period),
		...queryOptions,
	} as UseQueryOptions<
		Awaited<ReturnType<typeof getCategories1>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};
