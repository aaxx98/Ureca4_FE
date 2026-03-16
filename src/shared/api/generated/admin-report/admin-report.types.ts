import type {
	compareCustomerRisk,
	getAgentRanking,
	getCategorySummary,
	getChurnDefenseActions,
	getChurnDefenseComplaintReasons,
	getChurnDefenseCustomerTypes,
	getChurnDefenseSummary,
	getCustomerRisk,
	getKeywordCustomerTypes,
	getKeywordLongTerm,
	getKeywordTop,
	getPerformanceSummary,
	getSubscriptionAgeGroups,
	getSubscriptionProducts,
	getTimeSlotTrend,
} from "./admin-report.queryFunctions";

export type GetTimeSlotTrendQueryResult = NonNullable<
	Awaited<ReturnType<typeof getTimeSlotTrend>>
>;
export type GetTimeSlotTrendQueryError = unknown;

export type GetSubscriptionProductsQueryResult = NonNullable<
	Awaited<ReturnType<typeof getSubscriptionProducts>>
>;
export type GetSubscriptionProductsQueryError = unknown;

export type GetSubscriptionAgeGroupsQueryResult = NonNullable<
	Awaited<ReturnType<typeof getSubscriptionAgeGroups>>
>;
export type GetSubscriptionAgeGroupsQueryError = unknown;

export type GetPerformanceSummaryQueryResult = NonNullable<
	Awaited<ReturnType<typeof getPerformanceSummary>>
>;
export type GetPerformanceSummaryQueryError = unknown;

export type GetKeywordTopQueryResult = NonNullable<
	Awaited<ReturnType<typeof getKeywordTop>>
>;
export type GetKeywordTopQueryError = unknown;

export type GetKeywordLongTermQueryResult = NonNullable<
	Awaited<ReturnType<typeof getKeywordLongTerm>>
>;
export type GetKeywordLongTermQueryError = unknown;

export type GetKeywordCustomerTypesQueryResult = NonNullable<
	Awaited<ReturnType<typeof getKeywordCustomerTypes>>
>;
export type GetKeywordCustomerTypesQueryError = unknown;

export type GetCustomerRiskQueryResult = NonNullable<
	Awaited<ReturnType<typeof getCustomerRisk>>
>;
export type GetCustomerRiskQueryError = unknown;

export type CompareCustomerRiskQueryResult = NonNullable<
	Awaited<ReturnType<typeof compareCustomerRisk>>
>;
export type CompareCustomerRiskQueryError = unknown;

export type GetChurnDefenseSummaryQueryResult = NonNullable<
	Awaited<ReturnType<typeof getChurnDefenseSummary>>
>;
export type GetChurnDefenseSummaryQueryError = unknown;

export type GetChurnDefenseCustomerTypesQueryResult = NonNullable<
	Awaited<ReturnType<typeof getChurnDefenseCustomerTypes>>
>;
export type GetChurnDefenseCustomerTypesQueryError = unknown;

export type GetChurnDefenseComplaintReasonsQueryResult = NonNullable<
	Awaited<ReturnType<typeof getChurnDefenseComplaintReasons>>
>;
export type GetChurnDefenseComplaintReasonsQueryError = unknown;

export type GetChurnDefenseActionsQueryResult = NonNullable<
	Awaited<ReturnType<typeof getChurnDefenseActions>>
>;
export type GetChurnDefenseActionsQueryError = unknown;

export type GetCategorySummaryQueryResult = NonNullable<
	Awaited<ReturnType<typeof getCategorySummary>>
>;
export type GetCategorySummaryQueryError = unknown;

export type GetAgentRankingQueryResult = NonNullable<
	Awaited<ReturnType<typeof getAgentRanking>>
>;
export type GetAgentRankingQueryError = unknown;
