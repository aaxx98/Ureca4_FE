import { apiClient } from "../../client";
import type {
	AgentMetricsResponse,
	AgentSatisfactionResponse,
	CategoryRankingDto,
	GetCategories1Params,
	GetDailyQualityParams,
	GetMetricsParams,
	GetMonthlyQualityParams,
	GetSatisfactionParams,
	GetWeeklyQualityParams,
	QualityAnalysisResponse,
} from "../api.schemas";

export const getSatisfaction = (
	period: string,
	params?: GetSatisfactionParams,
	signal?: AbortSignal,
) => {
	return apiClient<AgentSatisfactionResponse>({
		url: `/api/analysis/agent/${period}/satisfaction`,
		method: "GET",
		params,
		signal,
	});
};

export const getMetrics = (
	period: string,
	params?: GetMetricsParams,
	signal?: AbortSignal,
) => {
	return apiClient<AgentMetricsResponse>({
		url: `/api/analysis/agent/${period}/metrics`,
		method: "GET",
		params,
		signal,
	});
};

export const getCategories1 = (
	period: string,
	params?: GetCategories1Params,
	signal?: AbortSignal,
) => {
	return apiClient<CategoryRankingDto[]>({
		url: `/api/analysis/agent/${period}/categories`,
		method: "GET",
		params,
		signal,
	});
};

export const getWeeklyQuality = (
	params?: GetWeeklyQualityParams,
	signal?: AbortSignal,
) => {
	return apiClient<QualityAnalysisResponse[]>({
		url: `/analysis/agent/weekly/quality`,
		method: "GET",
		params,
		signal,
	});
};

export const getMonthlyQuality = (
	params?: GetMonthlyQualityParams,
	signal?: AbortSignal,
) => {
	return apiClient<QualityAnalysisResponse[]>({
		url: `/analysis/agent/monthly/quality`,
		method: "GET",
		params,
		signal,
	});
};

export const getDailyQuality = (
	params?: GetDailyQualityParams,
	signal?: AbortSignal,
) => {
	return apiClient<QualityAnalysisResponse[]>({
		url: `/analysis/agent/daily/quality`,
		method: "GET",
		params,
		signal,
	});
};
