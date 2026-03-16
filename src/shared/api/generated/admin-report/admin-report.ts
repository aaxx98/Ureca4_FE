import type {
	DataTag,
	DefinedInitialDataOptions,
	DefinedUseQueryResult,
	QueryClient,
	QueryKey,
	UndefinedInitialDataOptions,
	UseQueryOptions,
	UseQueryResult,
} from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
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

/** @summary 시간대별 이슈 트렌드 */
export function useGetTimeSlotTrendQuery<
	TData = GetTimeSlotTrendQueryResult,
	TError = unknown,
>(
	period: string,
	params: undefined | GetTimeSlotTrendParams,
	options: {
		query: Partial<
			UseQueryOptions<GetTimeSlotTrendQueryResult, TError, TData>
		> &
			Pick<
				DefinedInitialDataOptions<
					GetTimeSlotTrendQueryResult,
					TError,
					GetTimeSlotTrendQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetTimeSlotTrendQuery<
	TData = GetTimeSlotTrendQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetTimeSlotTrendParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetTimeSlotTrendQueryResult, TError, TData>
		> &
			Pick<
				UndefinedInitialDataOptions<
					GetTimeSlotTrendQueryResult,
					TError,
					GetTimeSlotTrendQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetTimeSlotTrendQuery<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetTimeSlotTrendQuery<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getTimeSlotTrendOptions(period, params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

/** @summary 상품별 신규가입/해지 */
export function useGetSubscriptionProductsQuery<
	TData = GetSubscriptionProductsQueryResult,
	TError = unknown,
>(
	period: string,
	params: undefined | GetSubscriptionProductsParams,
	options: {
		query: Partial<
			UseQueryOptions<GetSubscriptionProductsQueryResult, TError, TData>
		> &
			Pick<
				DefinedInitialDataOptions<
					GetSubscriptionProductsQueryResult,
					TError,
					GetSubscriptionProductsQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetSubscriptionProductsQuery<
	TData = GetSubscriptionProductsQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetSubscriptionProductsParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetSubscriptionProductsQueryResult, TError, TData>
		> &
			Pick<
				UndefinedInitialDataOptions<
					GetSubscriptionProductsQueryResult,
					TError,
					GetSubscriptionProductsQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetSubscriptionProductsQuery<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetSubscriptionProductsQuery<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getSubscriptionProductsOptions(period, params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

/** @summary 연령대별 상품 선호도 */
export function useGetSubscriptionAgeGroupsQuery<
	TData = GetSubscriptionAgeGroupsQueryResult,
	TError = unknown,
>(
	period: string,
	params: undefined | GetSubscriptionAgeGroupsParams,
	options: {
		query: Partial<
			UseQueryOptions<GetSubscriptionAgeGroupsQueryResult, TError, TData>
		> &
			Pick<
				DefinedInitialDataOptions<
					GetSubscriptionAgeGroupsQueryResult,
					TError,
					GetSubscriptionAgeGroupsQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetSubscriptionAgeGroupsQuery<
	TData = GetSubscriptionAgeGroupsQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetSubscriptionAgeGroupsParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetSubscriptionAgeGroupsQueryResult, TError, TData>
		> &
			Pick<
				UndefinedInitialDataOptions<
					GetSubscriptionAgeGroupsQueryResult,
					TError,
					GetSubscriptionAgeGroupsQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetSubscriptionAgeGroupsQuery<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetSubscriptionAgeGroupsQuery<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getSubscriptionAgeGroupsOptions(period, params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

/** @summary 전체 상담 성과 요약 */
export function useGetPerformanceSummaryQuery<
	TData = GetPerformanceSummaryQueryResult,
	TError = unknown,
>(
	period: string,
	params: undefined | GetPerformanceSummaryParams,
	options: {
		query: Partial<
			UseQueryOptions<GetPerformanceSummaryQueryResult, TError, TData>
		> &
			Pick<
				DefinedInitialDataOptions<
					GetPerformanceSummaryQueryResult,
					TError,
					GetPerformanceSummaryQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetPerformanceSummaryQuery<
	TData = GetPerformanceSummaryQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetPerformanceSummaryParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetPerformanceSummaryQueryResult, TError, TData>
		> &
			Pick<
				UndefinedInitialDataOptions<
					GetPerformanceSummaryQueryResult,
					TError,
					GetPerformanceSummaryQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetPerformanceSummaryQuery<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetPerformanceSummaryQuery<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getPerformanceSummaryOptions(period, params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

/** @summary 키워드 빈도 순위 */
export function useGetKeywordTopQuery<
	TData = GetKeywordTopQueryResult,
	TError = unknown,
>(
	period: string,
	params: undefined | GetKeywordTopParams,
	options: {
		query: Partial<UseQueryOptions<GetKeywordTopQueryResult, TError, TData>> &
			Pick<
				DefinedInitialDataOptions<
					GetKeywordTopQueryResult,
					TError,
					GetKeywordTopQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetKeywordTopQuery<
	TData = GetKeywordTopQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetKeywordTopParams,
	options?: {
		query?: Partial<UseQueryOptions<GetKeywordTopQueryResult, TError, TData>> &
			Pick<
				UndefinedInitialDataOptions<
					GetKeywordTopQueryResult,
					TError,
					GetKeywordTopQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetKeywordTopQuery<
	TData = GetKeywordTopQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetKeywordTopParams,
	options?: {
		query?: Partial<UseQueryOptions<GetKeywordTopQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetKeywordTopQuery<
	TData = GetKeywordTopQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetKeywordTopParams,
	options?: {
		query?: Partial<UseQueryOptions<GetKeywordTopQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getKeywordTopOptions(period, params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

/** @summary 장기 상위 유지 키워드 */
export function useGetKeywordLongTermQuery<
	TData = GetKeywordLongTermQueryResult,
	TError = unknown,
>(
	period: string,
	params: undefined | GetKeywordLongTermParams,
	options: {
		query: Partial<
			UseQueryOptions<GetKeywordLongTermQueryResult, TError, TData>
		> &
			Pick<
				DefinedInitialDataOptions<
					GetKeywordLongTermQueryResult,
					TError,
					GetKeywordLongTermQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetKeywordLongTermQuery<
	TData = GetKeywordLongTermQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetKeywordLongTermParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetKeywordLongTermQueryResult, TError, TData>
		> &
			Pick<
				UndefinedInitialDataOptions<
					GetKeywordLongTermQueryResult,
					TError,
					GetKeywordLongTermQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetKeywordLongTermQuery<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetKeywordLongTermQuery<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getKeywordLongTermOptions(period, params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

/** @summary 고객 유형별 키워드 */
export function useGetKeywordCustomerTypesQuery<
	TData = GetKeywordCustomerTypesQueryResult,
	TError = unknown,
>(
	period: string,
	params: undefined | GetKeywordCustomerTypesParams,
	options: {
		query: Partial<
			UseQueryOptions<GetKeywordCustomerTypesQueryResult, TError, TData>
		> &
			Pick<
				DefinedInitialDataOptions<
					GetKeywordCustomerTypesQueryResult,
					TError,
					GetKeywordCustomerTypesQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetKeywordCustomerTypesQuery<
	TData = GetKeywordCustomerTypesQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetKeywordCustomerTypesParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetKeywordCustomerTypesQueryResult, TError, TData>
		> &
			Pick<
				UndefinedInitialDataOptions<
					GetKeywordCustomerTypesQueryResult,
					TError,
					GetKeywordCustomerTypesQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetKeywordCustomerTypesQuery<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetKeywordCustomerTypesQuery<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getKeywordCustomerTypesOptions(period, params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

/** @summary 고객 특이사항 조회 */
export function useGetCustomerRiskQuery<
	TData = GetCustomerRiskQueryResult,
	TError = unknown,
>(
	period: string,
	params: undefined | GetCustomerRiskParams,
	options: {
		query: Partial<UseQueryOptions<GetCustomerRiskQueryResult, TError, TData>> &
			Pick<
				DefinedInitialDataOptions<
					GetCustomerRiskQueryResult,
					TError,
					GetCustomerRiskQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetCustomerRiskQuery<
	TData = GetCustomerRiskQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetCustomerRiskParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetCustomerRiskQueryResult, TError, TData>
		> &
			Pick<
				UndefinedInitialDataOptions<
					GetCustomerRiskQueryResult,
					TError,
					GetCustomerRiskQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetCustomerRiskQuery<
	TData = GetCustomerRiskQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetCustomerRiskParams,
	options?: {
		query?: Partial<UseQueryOptions<GetCustomerRiskQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetCustomerRiskQuery<
	TData = GetCustomerRiskQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetCustomerRiskParams,
	options?: {
		query?: Partial<UseQueryOptions<GetCustomerRiskQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getCustomerRiskOptions(period, params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

/** @summary 고객 특이사항 기간 비교 */
export function useCompareCustomerRiskQuery<
	TData = CompareCustomerRiskQueryResult,
	TError = unknown,
>(
	period: string,
	params: CompareCustomerRiskParams,
	options: {
		query: Partial<
			UseQueryOptions<CompareCustomerRiskQueryResult, TError, TData>
		> &
			Pick<
				DefinedInitialDataOptions<
					CompareCustomerRiskQueryResult,
					TError,
					CompareCustomerRiskQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useCompareCustomerRiskQuery<
	TData = CompareCustomerRiskQueryResult,
	TError = unknown,
>(
	period: string,
	params: CompareCustomerRiskParams,
	options?: {
		query?: Partial<
			UseQueryOptions<CompareCustomerRiskQueryResult, TError, TData>
		> &
			Pick<
				UndefinedInitialDataOptions<
					CompareCustomerRiskQueryResult,
					TError,
					CompareCustomerRiskQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useCompareCustomerRiskQuery<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useCompareCustomerRiskQuery<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = compareCustomerRiskOptions(period, params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

/** @summary 해지방어 요약 */
export function useGetChurnDefenseSummaryQuery<
	TData = GetChurnDefenseSummaryQueryResult,
	TError = unknown,
>(
	period: string,
	params: undefined | GetChurnDefenseSummaryParams,
	options: {
		query: Partial<
			UseQueryOptions<GetChurnDefenseSummaryQueryResult, TError, TData>
		> &
			Pick<
				DefinedInitialDataOptions<
					GetChurnDefenseSummaryQueryResult,
					TError,
					GetChurnDefenseSummaryQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetChurnDefenseSummaryQuery<
	TData = GetChurnDefenseSummaryQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetChurnDefenseSummaryParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetChurnDefenseSummaryQueryResult, TError, TData>
		> &
			Pick<
				UndefinedInitialDataOptions<
					GetChurnDefenseSummaryQueryResult,
					TError,
					GetChurnDefenseSummaryQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetChurnDefenseSummaryQuery<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetChurnDefenseSummaryQuery<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getChurnDefenseSummaryOptions(period, params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

/** @summary 고객 유형별 해지 분석 */
export function useGetChurnDefenseCustomerTypesQuery<
	TData = GetChurnDefenseCustomerTypesQueryResult,
	TError = unknown,
>(
	period: string,
	params: undefined | GetChurnDefenseCustomerTypesParams,
	options: {
		query: Partial<
			UseQueryOptions<GetChurnDefenseCustomerTypesQueryResult, TError, TData>
		> &
			Pick<
				DefinedInitialDataOptions<
					GetChurnDefenseCustomerTypesQueryResult,
					TError,
					GetChurnDefenseCustomerTypesQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetChurnDefenseCustomerTypesQuery<
	TData = GetChurnDefenseCustomerTypesQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetChurnDefenseCustomerTypesParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetChurnDefenseCustomerTypesQueryResult, TError, TData>
		> &
			Pick<
				UndefinedInitialDataOptions<
					GetChurnDefenseCustomerTypesQueryResult,
					TError,
					GetChurnDefenseCustomerTypesQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetChurnDefenseCustomerTypesQuery<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetChurnDefenseCustomerTypesQuery<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getChurnDefenseCustomerTypesOptions(
		period,
		params,
		options,
	);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

/** @summary 불만 사유별 방어율 */
export function useGetChurnDefenseComplaintReasonsQuery<
	TData = GetChurnDefenseComplaintReasonsQueryResult,
	TError = unknown,
>(
	period: string,
	params: undefined | GetChurnDefenseComplaintReasonsParams,
	options: {
		query: Partial<
			UseQueryOptions<GetChurnDefenseComplaintReasonsQueryResult, TError, TData>
		> &
			Pick<
				DefinedInitialDataOptions<
					GetChurnDefenseComplaintReasonsQueryResult,
					TError,
					GetChurnDefenseComplaintReasonsQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetChurnDefenseComplaintReasonsQuery<
	TData = GetChurnDefenseComplaintReasonsQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetChurnDefenseComplaintReasonsParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetChurnDefenseComplaintReasonsQueryResult, TError, TData>
		> &
			Pick<
				UndefinedInitialDataOptions<
					GetChurnDefenseComplaintReasonsQueryResult,
					TError,
					GetChurnDefenseComplaintReasonsQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetChurnDefenseComplaintReasonsQuery<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetChurnDefenseComplaintReasonsQuery<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getChurnDefenseComplaintReasonsOptions(
		period,
		params,
		options,
	);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

/** @summary 상담사 액션 분석 */
export function useGetChurnDefenseActionsQuery<
	TData = GetChurnDefenseActionsQueryResult,
	TError = unknown,
>(
	period: string,
	params: undefined | GetChurnDefenseActionsParams,
	options: {
		query: Partial<
			UseQueryOptions<GetChurnDefenseActionsQueryResult, TError, TData>
		> &
			Pick<
				DefinedInitialDataOptions<
					GetChurnDefenseActionsQueryResult,
					TError,
					GetChurnDefenseActionsQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetChurnDefenseActionsQuery<
	TData = GetChurnDefenseActionsQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetChurnDefenseActionsParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetChurnDefenseActionsQueryResult, TError, TData>
		> &
			Pick<
				UndefinedInitialDataOptions<
					GetChurnDefenseActionsQueryResult,
					TError,
					GetChurnDefenseActionsQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetChurnDefenseActionsQuery<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetChurnDefenseActionsQuery<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getChurnDefenseActionsOptions(period, params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

/** @summary 카테고리별 빈도 */
export function useGetCategorySummaryQuery<
	TData = GetCategorySummaryQueryResult,
	TError = unknown,
>(
	period: string,
	params: undefined | GetCategorySummaryParams,
	options: {
		query: Partial<
			UseQueryOptions<GetCategorySummaryQueryResult, TError, TData>
		> &
			Pick<
				DefinedInitialDataOptions<
					GetCategorySummaryQueryResult,
					TError,
					GetCategorySummaryQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetCategorySummaryQuery<
	TData = GetCategorySummaryQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetCategorySummaryParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetCategorySummaryQueryResult, TError, TData>
		> &
			Pick<
				UndefinedInitialDataOptions<
					GetCategorySummaryQueryResult,
					TError,
					GetCategorySummaryQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetCategorySummaryQuery<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetCategorySummaryQuery<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getCategorySummaryOptions(period, params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

/** @summary 상담사 성과 순위 (TOP 10) */
export function useGetAgentRankingQuery<
	TData = GetAgentRankingQueryResult,
	TError = unknown,
>(
	period: string,
	params: undefined | GetAgentRankingParams,
	options: {
		query: Partial<UseQueryOptions<GetAgentRankingQueryResult, TError, TData>> &
			Pick<
				DefinedInitialDataOptions<
					GetAgentRankingQueryResult,
					TError,
					GetAgentRankingQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetAgentRankingQuery<
	TData = GetAgentRankingQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetAgentRankingParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetAgentRankingQueryResult, TError, TData>
		> &
			Pick<
				UndefinedInitialDataOptions<
					GetAgentRankingQueryResult,
					TError,
					GetAgentRankingQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetAgentRankingQuery<
	TData = GetAgentRankingQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetAgentRankingParams,
	options?: {
		query?: Partial<UseQueryOptions<GetAgentRankingQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetAgentRankingQuery<
	TData = GetAgentRankingQueryResult,
	TError = unknown,
>(
	period: string,
	params?: GetAgentRankingParams,
	options?: {
		query?: Partial<UseQueryOptions<GetAgentRankingQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getAgentRankingOptions(period, params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}
