import { useQuery } from "@tanstack/react-query";
import type { DataTag, QueryKey, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
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
	compareCustomerRiskOptions,
	getAgentRankingOptions,
	getCategorySummaryOptions,
	getChurnDefenseActionsOptions,
	getChurnDefenseComplaintReasonsOptions,
	getChurnDefenseCustomerTypesOptions,
	getChurnDefenseSummaryOptions,
	getCustomerRiskOptions,
	getKeywordCustomerTypesOptions,
	getKeywordLongTermOptions,
	getKeywordTopOptions,
	getPerformanceSummaryOptions,
	getSubscriptionAgeGroupsOptions,
	getSubscriptionProductsOptions,
	getTimeSlotTrendOptions,
} from "./admin-report.queryOptions";
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

/** @summary 3시간 단위 슬롯별 상담 트렌드 조회 */
export function useGetTimeSlotTrendQuery<TData = GetTimeSlotTrendQueryResult, TError = unknown>(
	period: string,
	params?: GetTimeSlotTrendParams,
	options?: { query?: Partial<UseQueryOptions<GetTimeSlotTrendQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getTimeSlotTrendOptions(period, params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 구독 상품별 분석 조회 */
export function useGetSubscriptionProductsQuery<TData = GetSubscriptionProductsQueryResult, TError = unknown>(
	period: string,
	params?: GetSubscriptionProductsParams,
	options?: { query?: Partial<UseQueryOptions<GetSubscriptionProductsQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getSubscriptionProductsOptions(period, params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 구독 연령대별 분석 조회 */
export function useGetSubscriptionAgeGroupsQuery<TData = GetSubscriptionAgeGroupsQueryResult, TError = unknown>(
	period: string,
	params?: GetSubscriptionAgeGroupsParams,
	options?: { query?: Partial<UseQueryOptions<GetSubscriptionAgeGroupsQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getSubscriptionAgeGroupsOptions(period, params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 성과 요약 조회 */
export function useGetPerformanceSummaryQuery<TData = GetPerformanceSummaryQueryResult, TError = unknown>(
	period: string,
	params?: GetPerformanceSummaryParams,
	options?: { query?: Partial<UseQueryOptions<GetPerformanceSummaryQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getPerformanceSummaryOptions(period, params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 상위 키워드 조회 */
export function useGetKeywordTopQuery<TData = GetKeywordTopQueryResult, TError = unknown>(
	period: string,
	params?: GetKeywordTopParams,
	options?: { query?: Partial<UseQueryOptions<GetKeywordTopQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getKeywordTopOptions(period, params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 장기 키워드 조회 */
export function useGetKeywordLongTermQuery<TData = GetKeywordLongTermQueryResult, TError = unknown>(
	period: string,
	params?: GetKeywordLongTermParams,
	options?: { query?: Partial<UseQueryOptions<GetKeywordLongTermQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getKeywordLongTermOptions(period, params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 고객 유형별 키워드 조회 */
export function useGetKeywordCustomerTypesQuery<TData = GetKeywordCustomerTypesQueryResult, TError = unknown>(
	period: string,
	params?: GetKeywordCustomerTypesParams,
	options?: { query?: Partial<UseQueryOptions<GetKeywordCustomerTypesQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getKeywordCustomerTypesOptions(period, params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 고객 위험도 조회 */
export function useGetCustomerRiskQuery<TData = GetCustomerRiskQueryResult, TError = unknown>(
	period: string,
	params?: GetCustomerRiskParams,
	options?: { query?: Partial<UseQueryOptions<GetCustomerRiskQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getCustomerRiskOptions(period, params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 고객 위험도 비교 */
export function useCompareCustomerRiskQuery<TData = CompareCustomerRiskQueryResult, TError = unknown>(
	period: string,
	params: CompareCustomerRiskParams,
	options?: { query?: Partial<UseQueryOptions<CompareCustomerRiskQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = compareCustomerRiskOptions(period, params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 이탈 방어 요약 조회 */
export function useGetChurnDefenseSummaryQuery<TData = GetChurnDefenseSummaryQueryResult, TError = unknown>(
	period: string,
	params?: GetChurnDefenseSummaryParams,
	options?: { query?: Partial<UseQueryOptions<GetChurnDefenseSummaryQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getChurnDefenseSummaryOptions(period, params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 이탈 방어 고객 유형 조회 */
export function useGetChurnDefenseCustomerTypesQuery<TData = GetChurnDefenseCustomerTypesQueryResult, TError = unknown>(
	period: string,
	params?: GetChurnDefenseCustomerTypesParams,
	options?: { query?: Partial<UseQueryOptions<GetChurnDefenseCustomerTypesQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getChurnDefenseCustomerTypesOptions(period, params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 이탈 방어 불만 사유 조회 */
export function useGetChurnDefenseComplaintReasonsQuery<TData = GetChurnDefenseComplaintReasonsQueryResult, TError = unknown>(
	period: string,
	params?: GetChurnDefenseComplaintReasonsParams,
	options?: { query?: Partial<UseQueryOptions<GetChurnDefenseComplaintReasonsQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getChurnDefenseComplaintReasonsOptions(period, params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 이탈 방어 액션 조회 */
export function useGetChurnDefenseActionsQuery<TData = GetChurnDefenseActionsQueryResult, TError = unknown>(
	period: string,
	params?: GetChurnDefenseActionsParams,
	options?: { query?: Partial<UseQueryOptions<GetChurnDefenseActionsQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getChurnDefenseActionsOptions(period, params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 카테고리별 요약 조회 */
export function useGetCategorySummaryQuery<TData = GetCategorySummaryQueryResult, TError = unknown>(
	period: string,
	params?: GetCategorySummaryParams,
	options?: { query?: Partial<UseQueryOptions<GetCategorySummaryQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getCategorySummaryOptions(period, params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 상담사 순위 조회 */
export function useGetAgentRankingQuery<TData = GetAgentRankingQueryResult, TError = unknown>(
	period: string,
	params?: GetAgentRankingParams,
	options?: { query?: Partial<UseQueryOptions<GetAgentRankingQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getAgentRankingOptions(period, params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}
