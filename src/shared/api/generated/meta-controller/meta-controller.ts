import { useQuery } from "@tanstack/react-query";
import type { DataTag, QueryKey, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { GetAnalysisCodesParams, GetCategoriesParams, SearchAgentsParams, SearchProductsParams } from "../api.schemas";
import {
	getAgentsOptions,
	getAnalysisCodesOptions,
	getCategoriesOptions,
	getGradesOptions,
	getProductsOptions,
	getRiskLevelsOptions,
	getRiskTypesOptions,
} from "./meta-controller.queryOptions";
import type {
	GetAgentsQueryResult,
	GetAnalysisCodesQueryResult,
	GetCategoriesQueryResult,
	GetGradesQueryResult,
	GetProductsQueryResult,
	GetRiskLevelsQueryResult,
	GetRiskTypesQueryResult,
} from "./meta-controller.types";

/** @summary 위험 유형 조회 */
export function useGetRiskTypesQuery<TData = GetRiskTypesQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetRiskTypesQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getRiskTypesOptions(options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 위험 수준 조회 */
export function useGetRiskLevelsQuery<TData = GetRiskLevelsQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetRiskLevelsQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getRiskLevelsOptions(options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 상품 검색 */
export function useGetProductsQuery<TData = GetProductsQueryResult, TError = unknown>(
	params?: SearchProductsParams,
	options?: { query?: Partial<UseQueryOptions<GetProductsQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getProductsOptions(params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 등급 조회 */
export function useGetGradesQuery<TData = GetGradesQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetGradesQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getGradesOptions(options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 카테고리 조회 */
export function useGetCategoriesQuery<TData = GetCategoriesQueryResult, TError = unknown>(
	params?: GetCategoriesParams,
	options?: { query?: Partial<UseQueryOptions<GetCategoriesQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getCategoriesOptions(params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 분석 코드 조회 */
export function useGetAnalysisCodesQuery<TData = GetAnalysisCodesQueryResult, TError = unknown>(
	params?: GetAnalysisCodesParams,
	options?: { query?: Partial<UseQueryOptions<GetAnalysisCodesQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getAnalysisCodesOptions(params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 상담사 검색 */
export function useGetAgentsQuery<TData = GetAgentsQueryResult, TError = unknown>(
	params?: SearchAgentsParams,
	options?: { query?: Partial<UseQueryOptions<GetAgentsQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getAgentsOptions(params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}
