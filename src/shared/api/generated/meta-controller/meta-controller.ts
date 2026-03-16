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


/** @summary 위험 유형 목록 조회 */
export function useGetRiskTypesQuery<TData = GetRiskTypesQueryResult, TError = unknown>(
	options: { query: Partial<UseQueryOptions<GetRiskTypesQueryResult, TError, TData>> & Pick<DefinedInitialDataOptions<GetRiskTypesQueryResult, TError, GetRiskTypesQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetRiskTypesQuery<TData = GetRiskTypesQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetRiskTypesQueryResult, TError, TData>> & Pick<UndefinedInitialDataOptions<GetRiskTypesQueryResult, TError, GetRiskTypesQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetRiskTypesQuery<TData = GetRiskTypesQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetRiskTypesQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetRiskTypesQuery<TData = GetRiskTypesQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetRiskTypesQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getRiskTypesOptions(options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 위험 수준 목록 조회 */
export function useGetRiskLevelsQuery<TData = GetRiskLevelsQueryResult, TError = unknown>(
	options: { query: Partial<UseQueryOptions<GetRiskLevelsQueryResult, TError, TData>> & Pick<DefinedInitialDataOptions<GetRiskLevelsQueryResult, TError, GetRiskLevelsQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetRiskLevelsQuery<TData = GetRiskLevelsQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetRiskLevelsQueryResult, TError, TData>> & Pick<UndefinedInitialDataOptions<GetRiskLevelsQueryResult, TError, GetRiskLevelsQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetRiskLevelsQuery<TData = GetRiskLevelsQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetRiskLevelsQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetRiskLevelsQuery<TData = GetRiskLevelsQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetRiskLevelsQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getRiskLevelsOptions(options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 상품 목록 검색 */
export function useGetProductsQuery<TData = GetProductsQueryResult, TError = unknown>(
	params: undefined | SearchProductsParams,
	options: { query: Partial<UseQueryOptions<GetProductsQueryResult, TError, TData>> & Pick<DefinedInitialDataOptions<GetProductsQueryResult, TError, GetProductsQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetProductsQuery<TData = GetProductsQueryResult, TError = unknown>(
	params?: SearchProductsParams,
	options?: { query?: Partial<UseQueryOptions<GetProductsQueryResult, TError, TData>> & Pick<UndefinedInitialDataOptions<GetProductsQueryResult, TError, GetProductsQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetProductsQuery<TData = GetProductsQueryResult, TError = unknown>(
	params?: SearchProductsParams,
	options?: { query?: Partial<UseQueryOptions<GetProductsQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetProductsQuery<TData = GetProductsQueryResult, TError = unknown>(
	params?: SearchProductsParams,
	options?: { query?: Partial<UseQueryOptions<GetProductsQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getProductsOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 등급 목록 조회 */
export function useGetGradesQuery<TData = GetGradesQueryResult, TError = unknown>(
	options: { query: Partial<UseQueryOptions<GetGradesQueryResult, TError, TData>> & Pick<DefinedInitialDataOptions<GetGradesQueryResult, TError, GetGradesQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetGradesQuery<TData = GetGradesQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetGradesQueryResult, TError, TData>> & Pick<UndefinedInitialDataOptions<GetGradesQueryResult, TError, GetGradesQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetGradesQuery<TData = GetGradesQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetGradesQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetGradesQuery<TData = GetGradesQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetGradesQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getGradesOptions(options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 카테고리 목록 조회 */
export function useGetCategoriesQuery<TData = GetCategoriesQueryResult, TError = unknown>(
	params: undefined | GetCategoriesParams,
	options: { query: Partial<UseQueryOptions<GetCategoriesQueryResult, TError, TData>> & Pick<DefinedInitialDataOptions<GetCategoriesQueryResult, TError, GetCategoriesQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetCategoriesQuery<TData = GetCategoriesQueryResult, TError = unknown>(
	params?: GetCategoriesParams,
	options?: { query?: Partial<UseQueryOptions<GetCategoriesQueryResult, TError, TData>> & Pick<UndefinedInitialDataOptions<GetCategoriesQueryResult, TError, GetCategoriesQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetCategoriesQuery<TData = GetCategoriesQueryResult, TError = unknown>(
	params?: GetCategoriesParams,
	options?: { query?: Partial<UseQueryOptions<GetCategoriesQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetCategoriesQuery<TData = GetCategoriesQueryResult, TError = unknown>(
	params?: GetCategoriesParams,
	options?: { query?: Partial<UseQueryOptions<GetCategoriesQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getCategoriesOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 분석 코드 목록 조회 */
export function useGetAnalysisCodesQuery<TData = GetAnalysisCodesQueryResult, TError = unknown>(
	params: undefined | GetAnalysisCodesParams,
	options: { query: Partial<UseQueryOptions<GetAnalysisCodesQueryResult, TError, TData>> & Pick<DefinedInitialDataOptions<GetAnalysisCodesQueryResult, TError, GetAnalysisCodesQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetAnalysisCodesQuery<TData = GetAnalysisCodesQueryResult, TError = unknown>(
	params?: GetAnalysisCodesParams,
	options?: { query?: Partial<UseQueryOptions<GetAnalysisCodesQueryResult, TError, TData>> & Pick<UndefinedInitialDataOptions<GetAnalysisCodesQueryResult, TError, GetAnalysisCodesQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetAnalysisCodesQuery<TData = GetAnalysisCodesQueryResult, TError = unknown>(
	params?: GetAnalysisCodesParams,
	options?: { query?: Partial<UseQueryOptions<GetAnalysisCodesQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetAnalysisCodesQuery<TData = GetAnalysisCodesQueryResult, TError = unknown>(
	params?: GetAnalysisCodesParams,
	options?: { query?: Partial<UseQueryOptions<GetAnalysisCodesQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getAnalysisCodesOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 상담사 목록 검색 */
export function useGetAgentsQuery<TData = GetAgentsQueryResult, TError = unknown>(
	params: undefined | SearchAgentsParams,
	options: { query: Partial<UseQueryOptions<GetAgentsQueryResult, TError, TData>> & Pick<DefinedInitialDataOptions<GetAgentsQueryResult, TError, GetAgentsQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetAgentsQuery<TData = GetAgentsQueryResult, TError = unknown>(
	params?: SearchAgentsParams,
	options?: { query?: Partial<UseQueryOptions<GetAgentsQueryResult, TError, TData>> & Pick<UndefinedInitialDataOptions<GetAgentsQueryResult, TError, GetAgentsQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetAgentsQuery<TData = GetAgentsQueryResult, TError = unknown>(
	params?: SearchAgentsParams,
	options?: { query?: Partial<UseQueryOptions<GetAgentsQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useGetAgentsQuery<TData = GetAgentsQueryResult, TError = unknown>(
	params?: SearchAgentsParams,
	options?: { query?: Partial<UseQueryOptions<GetAgentsQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getAgentsOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}
