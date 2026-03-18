import { useQuery } from "@tanstack/react-query";
import type { DataTag, QueryKey, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
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

/** @summary 최적 시간 조회 */
export function useGetOptimalTimeQuery<TData = GetOptimalTimeQueryResult, TError = unknown>(
	params: GetOptimalTimeParams,
	options?: { query?: Partial<UseQueryOptions<GetOptimalTimeQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getOptimalTimeOptions(params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary KPI 조회 */
export function useGetKpiQuery<TData = GetKpiQueryResult, TError = unknown>(
	params: GetKpiParams,
	options?: { query?: Partial<UseQueryOptions<GetKpiQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getKpiOptions(params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 히트맵 조회 */
export function useGetHeatmapQuery<TData = GetHeatmapQueryResult, TError = unknown>(
	params: GetHeatmapParams,
	options?: { query?: Partial<UseQueryOptions<GetHeatmapQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getHeatmapOptions(params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 카테고리별 전환율 조회 */
export function useGetConversionByCategoryQuery<TData = GetConversionByCategoryQueryResult, TError = unknown>(
	params: GetConversionByCategoryParams,
	options?: { query?: Partial<UseQueryOptions<GetConversionByCategoryQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getConversionByCategoryOptions(params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 캠페인 조회 */
export function useGetCampaignsQuery<TData = GetCampaignsQueryResult, TError = unknown>(
	params: GetCampaignsParams,
	options?: { query?: Partial<UseQueryOptions<GetCampaignsQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getCampaignsOptions(params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 콜 결과 조회 */
export function useGetCallResultsQuery<TData = GetCallResultsQueryResult, TError = unknown>(
	params: GetCallResultsParams,
	options?: { query?: Partial<UseQueryOptions<GetCallResultsQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getCallResultsOptions(params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 상담사 조회 */
export function useGetAgentsQuery<TData = GetAgentsQueryResult, TError = unknown>(
	params: GetAgentsParams,
	options?: { query?: Partial<UseQueryOptions<GetAgentsQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getAgentsOptions(params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}
