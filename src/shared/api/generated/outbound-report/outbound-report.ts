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
	GetAgentsParams,
	GetCallResultsParams,
	GetCampaignsParams,
	GetConversionByCategoryParams,
	GetHeatmapParams,
	GetKpiParams,
	GetOptimalTimeParams,
} from "../api.schemas";
import {
	getAgentsOptions,
	getCallResultsOptions,
	getCampaignsOptions,
	getConversionByCategoryOptions,
	getHeatmapOptions,
	getKpiOptions,
	getOptimalTimeOptions,
} from "./outbound-report.queryOptions";
import type {
	GetAgentsQueryResult,
	GetCallResultsQueryResult,
	GetCampaignsQueryResult,
	GetConversionByCategoryQueryResult,
	GetHeatmapQueryResult,
	GetKpiQueryResult,
	GetOptimalTimeQueryResult,
} from "./outbound-report.types";

/** @summary 카테고리별 최적 연락 시간 */
export function useGetOptimalTimeQuery<
	TData = GetOptimalTimeQueryResult,
	TError = unknown,
>(
	params: GetOptimalTimeParams,
	options: {
		query: Partial<UseQueryOptions<GetOptimalTimeQueryResult, TError, TData>> &
			Pick<
				DefinedInitialDataOptions<
					GetOptimalTimeQueryResult,
					TError,
					GetOptimalTimeQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetOptimalTimeQuery<
	TData = GetOptimalTimeQueryResult,
	TError = unknown,
>(
	params: GetOptimalTimeParams,
	options?: {
		query?: Partial<UseQueryOptions<GetOptimalTimeQueryResult, TError, TData>> &
			Pick<
				UndefinedInitialDataOptions<
					GetOptimalTimeQueryResult,
					TError,
					GetOptimalTimeQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetOptimalTimeQuery<
	TData = GetOptimalTimeQueryResult,
	TError = unknown,
>(
	params: GetOptimalTimeParams,
	options?: {
		query?: Partial<UseQueryOptions<GetOptimalTimeQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetOptimalTimeQuery<
	TData = GetOptimalTimeQueryResult,
	TError = unknown,
>(
	params: GetOptimalTimeParams,
	options?: {
		query?: Partial<UseQueryOptions<GetOptimalTimeQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getOptimalTimeOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

/** @summary KPI 요약 */
export function useGetKpiQuery<TData = GetKpiQueryResult, TError = unknown>(
	params: GetKpiParams,
	options: {
		query: Partial<UseQueryOptions<GetKpiQueryResult, TError, TData>> &
			Pick<
				DefinedInitialDataOptions<GetKpiQueryResult, TError, GetKpiQueryResult>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetKpiQuery<TData = GetKpiQueryResult, TError = unknown>(
	params: GetKpiParams,
	options?: {
		query?: Partial<UseQueryOptions<GetKpiQueryResult, TError, TData>> &
			Pick<
				UndefinedInitialDataOptions<
					GetKpiQueryResult,
					TError,
					GetKpiQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetKpiQuery<TData = GetKpiQueryResult, TError = unknown>(
	params: GetKpiParams,
	options?: {
		query?: Partial<UseQueryOptions<GetKpiQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetKpiQuery<TData = GetKpiQueryResult, TError = unknown>(
	params: GetKpiParams,
	options?: {
		query?: Partial<UseQueryOptions<GetKpiQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getKpiOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

/** @summary 시간대×요일 전환율 히트맵 */
export function useGetHeatmapQuery<
	TData = GetHeatmapQueryResult,
	TError = unknown,
>(
	params: GetHeatmapParams,
	options: {
		query: Partial<UseQueryOptions<GetHeatmapQueryResult, TError, TData>> &
			Pick<
				DefinedInitialDataOptions<
					GetHeatmapQueryResult,
					TError,
					GetHeatmapQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetHeatmapQuery<
	TData = GetHeatmapQueryResult,
	TError = unknown,
>(
	params: GetHeatmapParams,
	options?: {
		query?: Partial<UseQueryOptions<GetHeatmapQueryResult, TError, TData>> &
			Pick<
				UndefinedInitialDataOptions<
					GetHeatmapQueryResult,
					TError,
					GetHeatmapQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetHeatmapQuery<
	TData = GetHeatmapQueryResult,
	TError = unknown,
>(
	params: GetHeatmapParams,
	options?: {
		query?: Partial<UseQueryOptions<GetHeatmapQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetHeatmapQuery<
	TData = GetHeatmapQueryResult,
	TError = unknown,
>(
	params: GetHeatmapParams,
	options?: {
		query?: Partial<UseQueryOptions<GetHeatmapQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getHeatmapOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

/** @summary 카테고리별 전환율 */
export function useGetConversionByCategoryQuery<
	TData = GetConversionByCategoryQueryResult,
	TError = unknown,
>(
	params: GetConversionByCategoryParams,
	options: {
		query: Partial<
			UseQueryOptions<GetConversionByCategoryQueryResult, TError, TData>
		> &
			Pick<
				DefinedInitialDataOptions<
					GetConversionByCategoryQueryResult,
					TError,
					GetConversionByCategoryQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetConversionByCategoryQuery<
	TData = GetConversionByCategoryQueryResult,
	TError = unknown,
>(
	params: GetConversionByCategoryParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetConversionByCategoryQueryResult, TError, TData>
		> &
			Pick<
				UndefinedInitialDataOptions<
					GetConversionByCategoryQueryResult,
					TError,
					GetConversionByCategoryQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetConversionByCategoryQuery<
	TData = GetConversionByCategoryQueryResult,
	TError = unknown,
>(
	params: GetConversionByCategoryParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetConversionByCategoryQueryResult, TError, TData>
		>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetConversionByCategoryQuery<
	TData = GetConversionByCategoryQueryResult,
	TError = unknown,
>(
	params: GetConversionByCategoryParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetConversionByCategoryQueryResult, TError, TData>
		>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getConversionByCategoryOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

/** @summary 캠페인 성과 현황 */
export function useGetCampaignsQuery<
	TData = GetCampaignsQueryResult,
	TError = unknown,
>(
	params: GetCampaignsParams,
	options: {
		query: Partial<UseQueryOptions<GetCampaignsQueryResult, TError, TData>> &
			Pick<
				DefinedInitialDataOptions<
					GetCampaignsQueryResult,
					TError,
					GetCampaignsQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetCampaignsQuery<
	TData = GetCampaignsQueryResult,
	TError = unknown,
>(
	params: GetCampaignsParams,
	options?: {
		query?: Partial<UseQueryOptions<GetCampaignsQueryResult, TError, TData>> &
			Pick<
				UndefinedInitialDataOptions<
					GetCampaignsQueryResult,
					TError,
					GetCampaignsQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetCampaignsQuery<
	TData = GetCampaignsQueryResult,
	TError = unknown,
>(
	params: GetCampaignsParams,
	options?: {
		query?: Partial<UseQueryOptions<GetCampaignsQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetCampaignsQuery<
	TData = GetCampaignsQueryResult,
	TError = unknown,
>(
	params: GetCampaignsParams,
	options?: {
		query?: Partial<UseQueryOptions<GetCampaignsQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getCampaignsOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

/** @summary 발신 결과 분포 + 거절 사유 */
export function useGetCallResultsQuery<
	TData = GetCallResultsQueryResult,
	TError = unknown,
>(
	params: GetCallResultsParams,
	options: {
		query: Partial<UseQueryOptions<GetCallResultsQueryResult, TError, TData>> &
			Pick<
				DefinedInitialDataOptions<
					GetCallResultsQueryResult,
					TError,
					GetCallResultsQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetCallResultsQuery<
	TData = GetCallResultsQueryResult,
	TError = unknown,
>(
	params: GetCallResultsParams,
	options?: {
		query?: Partial<UseQueryOptions<GetCallResultsQueryResult, TError, TData>> &
			Pick<
				UndefinedInitialDataOptions<
					GetCallResultsQueryResult,
					TError,
					GetCallResultsQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetCallResultsQuery<
	TData = GetCallResultsQueryResult,
	TError = unknown,
>(
	params: GetCallResultsParams,
	options?: {
		query?: Partial<UseQueryOptions<GetCallResultsQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetCallResultsQuery<
	TData = GetCallResultsQueryResult,
	TError = unknown,
>(
	params: GetCallResultsParams,
	options?: {
		query?: Partial<UseQueryOptions<GetCallResultsQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getCallResultsOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

/** @summary 상담사별 실적 */
export function useGetAgentsQuery<
	TData = GetAgentsQueryResult,
	TError = unknown,
>(
	params: GetAgentsParams,
	options: {
		query: Partial<UseQueryOptions<GetAgentsQueryResult, TError, TData>> &
			Pick<
				DefinedInitialDataOptions<
					GetAgentsQueryResult,
					TError,
					GetAgentsQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetAgentsQuery<
	TData = GetAgentsQueryResult,
	TError = unknown,
>(
	params: GetAgentsParams,
	options?: {
		query?: Partial<UseQueryOptions<GetAgentsQueryResult, TError, TData>> &
			Pick<
				UndefinedInitialDataOptions<
					GetAgentsQueryResult,
					TError,
					GetAgentsQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetAgentsQuery<
	TData = GetAgentsQueryResult,
	TError = unknown,
>(
	params: GetAgentsParams,
	options?: {
		query?: Partial<UseQueryOptions<GetAgentsQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetAgentsQuery<
	TData = GetAgentsQueryResult,
	TError = unknown,
>(
	params: GetAgentsParams,
	options?: {
		query?: Partial<UseQueryOptions<GetAgentsQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getAgentsOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}
