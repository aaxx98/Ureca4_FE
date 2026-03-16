import type {
	GetCategories1Params,
	GetDailyQualityParams,
	GetMetricsParams,
	GetMonthlyQualityParams,
	GetSatisfactionParams,
	GetWeeklyQualityParams,
} from "../api.schemas";

export const getSatisfactionKey = (period?: string, params?: GetSatisfactionParams) =>
	[`/api/analysis/agent/${period}/satisfaction`, ...(params ? [params] : [])] as const;

export const getMetricsKey = (period?: string, params?: GetMetricsParams) =>
	[`/api/analysis/agent/${period}/metrics`, ...(params ? [params] : [])] as const;

export const getCategories1Key = (period?: string, params?: GetCategories1Params) =>
	[`/api/analysis/agent/${period}/categories`, ...(params ? [params] : [])] as const;

export const getWeeklyQualityKey = (params?: GetWeeklyQualityParams) =>
	[`/analysis/agent/weekly/quality`, ...(params ? [params] : [])] as const;

export const getMonthlyQualityKey = (params?: GetMonthlyQualityParams) =>
	[`/analysis/agent/monthly/quality`, ...(params ? [params] : [])] as const;

export const getDailyQualityKey = (params?: GetDailyQualityParams) =>
	[`/analysis/agent/daily/quality`, ...(params ? [params] : [])] as const;
