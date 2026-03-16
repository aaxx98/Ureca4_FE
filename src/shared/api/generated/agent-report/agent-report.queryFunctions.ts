import { apiClient } from "../../client";
import type {
	ErrorResponse,
	GetCategories1Params,
	GetMetricsParams,
	GetSatisfactionParams,
} from "../api.schemas";

export const getSatisfaction = (
	period: string,
	params?: GetSatisfactionParams,
	signal?: AbortSignal,
) => {
	return apiClient<unknown>({
		url: `/api/analysis/agent/${period}/satisfaction`,
		method: "GET",
		params,
		signal,
	});
};

export type GetSatisfactionQueryResult = NonNullable<Awaited<ReturnType<typeof getSatisfaction>>>;
export type GetSatisfactionQueryError = ErrorResponse | ErrorResponse | ErrorResponse;

export const getMetrics = (
	period: string,
	params?: GetMetricsParams,
	signal?: AbortSignal,
) => {
	return apiClient<unknown>({
		url: `/api/analysis/agent/${period}/metrics`,
		method: "GET",
		params,
		signal,
	});
};

export type GetMetricsQueryResult = NonNullable<Awaited<ReturnType<typeof getMetrics>>>;
export type GetMetricsQueryError = ErrorResponse | ErrorResponse | ErrorResponse;

export const getCategories1 = (
	period: string,
	params?: GetCategories1Params,
	signal?: AbortSignal,
) => {
	return apiClient<unknown>({
		url: `/api/analysis/agent/${period}/categories`,
		method: "GET",
		params,
		signal,
	});
};

export type GetCategories1QueryResult = NonNullable<Awaited<ReturnType<typeof getCategories1>>>;
export type GetCategories1QueryError = ErrorResponse | ErrorResponse | ErrorResponse;
