import type {
	DataTag,
	QueryFunction,
	QueryKey,
	UseQueryOptions,
} from "@tanstack/react-query";
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
import {
	compareCustomerRiskKey,
	getAgentRankingKey,
	getCategorySummaryKey,
	getChurnDefenseActionsKey,
	getChurnDefenseComplaintReasonsKey,
	getChurnDefenseCustomerTypesKey,
	getChurnDefenseSummaryKey,
	getCustomerRiskKey,
	getKeywordCustomerTypesKey,
	getKeywordLongTermKey,
	getKeywordTopKey,
	getPerformanceSummaryKey,
	getSubscriptionAgeGroupsKey,
	getSubscriptionProductsKey,
	getTimeSlotTrendKey,
} from "./admin-report.keys";
import {
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
import type {
	CompareCustomerRiskQueryResult,
	GetAgentRankingQueryResult,
	GetCategorySummaryQueryResult,
	GetChurnDefenseActionsQueryResult,
	GetChurnDefenseComplaintReasonsQueryResult,
	GetChurnDefenseCustomerTypesQueryResult,
	GetChurnDefenseSummaryQueryResult,
	GetCustomerRiskQueryResult,
	GetKeywordCustomerTypesQueryResult,
	GetKeywordLongTermQueryResult,
	GetKeywordTopQueryResult,
	GetPerformanceSummaryQueryResult,
	GetSubscriptionAgeGroupsQueryResult,
	GetSubscriptionProductsQueryResult,
	GetTimeSlotTrendQueryResult,
} from "./admin-report.types";

export const getTimeSlotTrendOptions = <
	TData = GetTimeSlotTrendQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetTimeSlotTrendParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetTimeSlotTrendQueryResult, TError, TData>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? getTimeSlotTrendKey(period, params);
	const queryFn: QueryFunction<GetTimeSlotTrendQueryResult> = ({ signal }) =>
		getTimeSlotTrend(period, params, signal);
	return {
		queryKey,
		queryFn,
		enabled: !!period,
		...queryOptions,
	} as UseQueryOptions<GetTimeSlotTrendQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getSubscriptionProductsOptions = <
	TData = GetSubscriptionProductsQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetSubscriptionProductsParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetSubscriptionProductsQueryResult, TError, TData>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? getSubscriptionProductsKey(period, params);
	const queryFn: QueryFunction<GetSubscriptionProductsQueryResult> = ({
		signal,
	}) => getSubscriptionProducts(period, params, signal);
	return {
		queryKey,
		queryFn,
		enabled: !!period,
		...queryOptions,
	} as UseQueryOptions<GetSubscriptionProductsQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getSubscriptionAgeGroupsOptions = <
	TData = GetSubscriptionAgeGroupsQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetSubscriptionAgeGroupsParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetSubscriptionAgeGroupsQueryResult, TError, TData>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? getSubscriptionAgeGroupsKey(period, params);
	const queryFn: QueryFunction<GetSubscriptionAgeGroupsQueryResult> = ({
		signal,
	}) => getSubscriptionAgeGroups(period, params, signal);
	return {
		queryKey,
		queryFn,
		enabled: !!period,
		...queryOptions,
	} as UseQueryOptions<GetSubscriptionAgeGroupsQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getPerformanceSummaryOptions = <
	TData = GetPerformanceSummaryQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetPerformanceSummaryParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetPerformanceSummaryQueryResult, TError, TData>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? getPerformanceSummaryKey(period, params);
	const queryFn: QueryFunction<GetPerformanceSummaryQueryResult> = ({
		signal,
	}) => getPerformanceSummary(period, params, signal);
	return {
		queryKey,
		queryFn,
		enabled: !!period,
		...queryOptions,
	} as UseQueryOptions<GetPerformanceSummaryQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getKeywordTopOptions = <
	TData = GetKeywordTopQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetKeywordTopParams,
	options?: {
		query?: Partial<UseQueryOptions<GetKeywordTopQueryResult, TError, TData>>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getKeywordTopKey(period, params);
	const queryFn: QueryFunction<GetKeywordTopQueryResult> = ({ signal }) =>
		getKeywordTop(period, params, signal);
	return {
		queryKey,
		queryFn,
		enabled: !!period,
		...queryOptions,
	} as UseQueryOptions<GetKeywordTopQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getKeywordLongTermOptions = <
	TData = GetKeywordLongTermQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetKeywordLongTermParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetKeywordLongTermQueryResult, TError, TData>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? getKeywordLongTermKey(period, params);
	const queryFn: QueryFunction<GetKeywordLongTermQueryResult> = ({ signal }) =>
		getKeywordLongTerm(period, params, signal);
	return {
		queryKey,
		queryFn,
		enabled: !!period,
		...queryOptions,
	} as UseQueryOptions<GetKeywordLongTermQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getKeywordCustomerTypesOptions = <
	TData = GetKeywordCustomerTypesQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetKeywordCustomerTypesParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetKeywordCustomerTypesQueryResult, TError, TData>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? getKeywordCustomerTypesKey(period, params);
	const queryFn: QueryFunction<GetKeywordCustomerTypesQueryResult> = ({
		signal,
	}) => getKeywordCustomerTypes(period, params, signal);
	return {
		queryKey,
		queryFn,
		enabled: !!period,
		...queryOptions,
	} as UseQueryOptions<GetKeywordCustomerTypesQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getCustomerRiskOptions = <
	TData = GetCustomerRiskQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetCustomerRiskParams,
	options?: {
		query?: Partial<UseQueryOptions<GetCustomerRiskQueryResult, TError, TData>>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getCustomerRiskKey(period, params);
	const queryFn: QueryFunction<GetCustomerRiskQueryResult> = ({ signal }) =>
		getCustomerRisk(period, params, signal);
	return {
		queryKey,
		queryFn,
		enabled: !!period,
		...queryOptions,
	} as UseQueryOptions<GetCustomerRiskQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const compareCustomerRiskOptions = <
	TData = CompareCustomerRiskQueryResult,
	TError = unknown,
>(
	period: string,
	params: CompareCustomerRiskParams,
	options?: {
		query?: Partial<
			UseQueryOptions<CompareCustomerRiskQueryResult, TError, TData>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? compareCustomerRiskKey(period, params);
	const queryFn: QueryFunction<CompareCustomerRiskQueryResult> = ({ signal }) =>
		compareCustomerRisk(period, params, signal);
	return {
		queryKey,
		queryFn,
		enabled: !!period,
		...queryOptions,
	} as UseQueryOptions<CompareCustomerRiskQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getChurnDefenseSummaryOptions = <
	TData = GetChurnDefenseSummaryQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetChurnDefenseSummaryParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetChurnDefenseSummaryQueryResult, TError, TData>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? getChurnDefenseSummaryKey(period, params);
	const queryFn: QueryFunction<GetChurnDefenseSummaryQueryResult> = ({
		signal,
	}) => getChurnDefenseSummary(period, params, signal);
	return {
		queryKey,
		queryFn,
		enabled: !!period,
		...queryOptions,
	} as UseQueryOptions<GetChurnDefenseSummaryQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getChurnDefenseCustomerTypesOptions = <
	TData = GetChurnDefenseCustomerTypesQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetChurnDefenseCustomerTypesParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetChurnDefenseCustomerTypesQueryResult, TError, TData>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? getChurnDefenseCustomerTypesKey(period, params);
	const queryFn: QueryFunction<GetChurnDefenseCustomerTypesQueryResult> = ({
		signal,
	}) => getChurnDefenseCustomerTypes(period, params, signal);
	return {
		queryKey,
		queryFn,
		enabled: !!period,
		...queryOptions,
	} as UseQueryOptions<
		GetChurnDefenseCustomerTypesQueryResult,
		TError,
		TData
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getChurnDefenseComplaintReasonsOptions = <
	TData = GetChurnDefenseComplaintReasonsQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetChurnDefenseComplaintReasonsParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetChurnDefenseComplaintReasonsQueryResult, TError, TData>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ??
		getChurnDefenseComplaintReasonsKey(period, params);
	const queryFn: QueryFunction<GetChurnDefenseComplaintReasonsQueryResult> = ({
		signal,
	}) => getChurnDefenseComplaintReasons(period, params, signal);
	return {
		queryKey,
		queryFn,
		enabled: !!period,
		...queryOptions,
	} as UseQueryOptions<
		GetChurnDefenseComplaintReasonsQueryResult,
		TError,
		TData
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getChurnDefenseActionsOptions = <
	TData = GetChurnDefenseActionsQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetChurnDefenseActionsParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetChurnDefenseActionsQueryResult, TError, TData>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? getChurnDefenseActionsKey(period, params);
	const queryFn: QueryFunction<GetChurnDefenseActionsQueryResult> = ({
		signal,
	}) => getChurnDefenseActions(period, params, signal);
	return {
		queryKey,
		queryFn,
		enabled: !!period,
		...queryOptions,
	} as UseQueryOptions<GetChurnDefenseActionsQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getCategorySummaryOptions = <
	TData = GetCategorySummaryQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetCategorySummaryParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetCategorySummaryQueryResult, TError, TData>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? getCategorySummaryKey(period, params);
	const queryFn: QueryFunction<GetCategorySummaryQueryResult> = ({ signal }) =>
		getCategorySummary(period, params, signal);
	return {
		queryKey,
		queryFn,
		enabled: !!period,
		...queryOptions,
	} as UseQueryOptions<GetCategorySummaryQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getAgentRankingOptions = <
	TData = GetAgentRankingQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetAgentRankingParams,
	options?: {
		query?: Partial<UseQueryOptions<GetAgentRankingQueryResult, TError, TData>>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getAgentRankingKey(period, params);
	const queryFn: QueryFunction<GetAgentRankingQueryResult> = ({ signal }) =>
		getAgentRanking(period, params, signal);
	return {
		queryKey,
		queryFn,
		enabled: !!period,
		...queryOptions,
	} as UseQueryOptions<GetAgentRankingQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};
