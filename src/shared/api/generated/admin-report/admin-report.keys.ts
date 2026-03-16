import type {
	CompareCustomerRiskParams,
	GetAgentRankingParams,
	GetCategorySummaryParams,
	GetChurnDefenseActionsParams,
	GetChurnDefenseComplaintReasonsParams,
	GetChurnDefenseCustomerTypesParams,
	GetChurnDefenseSummaryParams,
	GetCustomerRiskParams,
	GetKeywordCustomerTypesParams,
	GetKeywordLongTermParams,
	GetKeywordTopParams,
	GetPerformanceSummaryParams,
	GetSubscriptionAgeGroupsParams,
	GetSubscriptionProductsParams,
	GetTimeSlotTrendParams,
} from "../api.schemas";

export const getTimeSlotTrendKey = (
	period?: string,
	params?: GetTimeSlotTrendParams,
) =>
	[
		`/analysis/admin/${period}/time-slot-trend`,
		...(params ? [params] : []),
	] as const;

export const getSubscriptionProductsKey = (
	period?: string,
	params?: GetSubscriptionProductsParams,
) =>
	[
		`/analysis/admin/${period}/subscription/products`,
		...(params ? [params] : []),
	] as const;

export const getSubscriptionAgeGroupsKey = (
	period?: string,
	params?: GetSubscriptionAgeGroupsParams,
) =>
	[
		`/analysis/admin/${period}/subscription/age-groups`,
		...(params ? [params] : []),
	] as const;

export const getPerformanceSummaryKey = (
	period?: string,
	params?: GetPerformanceSummaryParams,
) =>
	[
		`/analysis/admin/${period}/performance`,
		...(params ? [params] : []),
	] as const;

export const getKeywordTopKey = (
	period?: string,
	params?: GetKeywordTopParams,
) =>
	[
		`/analysis/admin/${period}/keywords/top`,
		...(params ? [params] : []),
	] as const;

export const getKeywordLongTermKey = (
	period?: string,
	params?: GetKeywordLongTermParams,
) =>
	[
		`/analysis/admin/${period}/keywords/long-term`,
		...(params ? [params] : []),
	] as const;

export const getKeywordCustomerTypesKey = (
	period?: string,
	params?: GetKeywordCustomerTypesParams,
) =>
	[
		`/analysis/admin/${period}/keywords/customer-types`,
		...(params ? [params] : []),
	] as const;

export const getCustomerRiskKey = (
	period?: string,
	params?: GetCustomerRiskParams,
) =>
	[
		`/analysis/admin/${period}/customer-risk`,
		...(params ? [params] : []),
	] as const;

export const compareCustomerRiskKey = (
	period?: string,
	params?: CompareCustomerRiskParams,
) =>
	[
		`/analysis/admin/${period}/customer-risk/compare`,
		...(params ? [params] : []),
	] as const;

export const getChurnDefenseSummaryKey = (
	period?: string,
	params?: GetChurnDefenseSummaryParams,
) =>
	[
		`/analysis/admin/${period}/churn-defense/summary`,
		...(params ? [params] : []),
	] as const;

export const getChurnDefenseCustomerTypesKey = (
	period?: string,
	params?: GetChurnDefenseCustomerTypesParams,
) =>
	[
		`/analysis/admin/${period}/churn-defense/customer-types`,
		...(params ? [params] : []),
	] as const;

export const getChurnDefenseComplaintReasonsKey = (
	period?: string,
	params?: GetChurnDefenseComplaintReasonsParams,
) =>
	[
		`/analysis/admin/${period}/churn-defense/complaint-reasons`,
		...(params ? [params] : []),
	] as const;

export const getChurnDefenseActionsKey = (
	period?: string,
	params?: GetChurnDefenseActionsParams,
) =>
	[
		`/analysis/admin/${period}/churn-defense/actions`,
		...(params ? [params] : []),
	] as const;

export const getCategorySummaryKey = (
	period?: string,
	params?: GetCategorySummaryParams,
) =>
	[
		`/analysis/admin/${period}/category-summary`,
		...(params ? [params] : []),
	] as const;

export const getAgentRankingKey = (
	period?: string,
	params?: GetAgentRankingParams,
) =>
	[
		`/analysis/admin/${period}/agent-ranking`,
		...(params ? [params] : []),
	] as const;
