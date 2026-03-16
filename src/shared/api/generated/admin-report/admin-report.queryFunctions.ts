import { apiClient } from "../../client";
import type {
	AgentRankingResponse,
	CategorySummaryResponse,
	ChurnDefenseResponse,
	CompareCustomerRiskParams,
	CustomerRiskCompareResponse,
	CustomerRiskResponse,
	GetAgentRankingParams,
	GetCategorySummaryParams,
	GetChurnDefenseActionsParams,
	GetChurnDefenseComplaintReasonsParams,
	GetChurnDefenseCustomerTypesParams,
	GetChurnDefenseSummaryParams,
	GetCustomerRiskParams,
	GetKeywordCustomerTypes200,
	GetKeywordCustomerTypesParams,
	GetKeywordLongTerm200,
	GetKeywordLongTermParams,
	GetKeywordTop200,
	GetKeywordTopParams,
	GetPerformanceSummaryParams,
	GetSubscriptionAgeGroupsParams,
	GetSubscriptionProductsParams,
	GetTimeSlotTrendParams,
	PerformanceSummaryResponse,
	SubscriptionAnalysisResponse,
	TimeSlotTrendResponse,
} from "../api.schemas";

export const getTimeSlotTrend = (
	period: string,
	params?: GetTimeSlotTrendParams,
	signal?: AbortSignal,
) => {
	return apiClient<TimeSlotTrendResponse>({
		url: `/analysis/admin/${period}/time-slot-trend`,
		method: "GET",
		params,
		signal,
	});
};

export const getSubscriptionProducts = (
	period: string,
	params?: GetSubscriptionProductsParams,
	signal?: AbortSignal,
) => {
	return apiClient<SubscriptionAnalysisResponse>({
		url: `/analysis/admin/${period}/subscription/products`,
		method: "GET",
		params,
		signal,
	});
};

export const getSubscriptionAgeGroups = (
	period: string,
	params?: GetSubscriptionAgeGroupsParams,
	signal?: AbortSignal,
) => {
	return apiClient<SubscriptionAnalysisResponse>({
		url: `/analysis/admin/${period}/subscription/age-groups`,
		method: "GET",
		params,
		signal,
	});
};

export const getPerformanceSummary = (
	period: string,
	params?: GetPerformanceSummaryParams,
	signal?: AbortSignal,
) => {
	return apiClient<PerformanceSummaryResponse>({
		url: `/analysis/admin/${period}/performance`,
		method: "GET",
		params,
		signal,
	});
};

export const getKeywordTop = (
	period: string,
	params?: GetKeywordTopParams,
	signal?: AbortSignal,
) => {
	return apiClient<GetKeywordTop200>({
		url: `/analysis/admin/${period}/keywords/top`,
		method: "GET",
		params,
		signal,
	});
};

export const getKeywordLongTerm = (
	period: string,
	params?: GetKeywordLongTermParams,
	signal?: AbortSignal,
) => {
	return apiClient<GetKeywordLongTerm200>({
		url: `/analysis/admin/${period}/keywords/long-term`,
		method: "GET",
		params,
		signal,
	});
};

export const getKeywordCustomerTypes = (
	period: string,
	params?: GetKeywordCustomerTypesParams,
	signal?: AbortSignal,
) => {
	return apiClient<GetKeywordCustomerTypes200>({
		url: `/analysis/admin/${period}/keywords/customer-types`,
		method: "GET",
		params,
		signal,
	});
};

export const getCustomerRisk = (
	period: string,
	params?: GetCustomerRiskParams,
	signal?: AbortSignal,
) => {
	return apiClient<CustomerRiskResponse>({
		url: `/analysis/admin/${period}/customer-risk`,
		method: "GET",
		params,
		signal,
	});
};

export const compareCustomerRisk = (
	period: string,
	params: CompareCustomerRiskParams,
	signal?: AbortSignal,
) => {
	return apiClient<CustomerRiskCompareResponse>({
		url: `/analysis/admin/${period}/customer-risk/compare`,
		method: "GET",
		params,
		signal,
	});
};

export const getChurnDefenseSummary = (
	period: string,
	params?: GetChurnDefenseSummaryParams,
	signal?: AbortSignal,
) => {
	return apiClient<ChurnDefenseResponse>({
		url: `/analysis/admin/${period}/churn-defense/summary`,
		method: "GET",
		params,
		signal,
	});
};

export const getChurnDefenseCustomerTypes = (
	period: string,
	params?: GetChurnDefenseCustomerTypesParams,
	signal?: AbortSignal,
) => {
	return apiClient<ChurnDefenseResponse>({
		url: `/analysis/admin/${period}/churn-defense/customer-types`,
		method: "GET",
		params,
		signal,
	});
};

export const getChurnDefenseComplaintReasons = (
	period: string,
	params?: GetChurnDefenseComplaintReasonsParams,
	signal?: AbortSignal,
) => {
	return apiClient<ChurnDefenseResponse>({
		url: `/analysis/admin/${period}/churn-defense/complaint-reasons`,
		method: "GET",
		params,
		signal,
	});
};

export const getChurnDefenseActions = (
	period: string,
	params?: GetChurnDefenseActionsParams,
	signal?: AbortSignal,
) => {
	return apiClient<ChurnDefenseResponse>({
		url: `/analysis/admin/${period}/churn-defense/actions`,
		method: "GET",
		params,
		signal,
	});
};

export const getCategorySummary = (
	period: string,
	params?: GetCategorySummaryParams,
	signal?: AbortSignal,
) => {
	return apiClient<CategorySummaryResponse>({
		url: `/analysis/admin/${period}/category-summary`,
		method: "GET",
		params,
		signal,
	});
};

export const getAgentRanking = (
	period: string,
	params?: GetAgentRankingParams,
	signal?: AbortSignal,
) => {
	return apiClient<AgentRankingResponse>({
		url: `/analysis/admin/${period}/agent-ranking`,
		method: "GET",
		params,
		signal,
	});
};
