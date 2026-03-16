import type { DataTag, QueryFunction, QueryKey, UseQueryOptions } from "@tanstack/react-query";
import type { GetAnalysisCodesParams, GetCategoriesParams, SearchAgentsParams, SearchProductsParams } from "../api.schemas";
import {
	getAgents,
	getAnalysisCodes,
	getCategories,
	getGrades,
	getProducts,
	getRiskLevels,
	getRiskTypes,
} from "./meta-controller.queryFunctions";
import {
	getAgentsKey,
	getAnalysisCodesKey,
	getCategoriesKey,
	getGradesKey,
	getProductsKey,
	getRiskLevelsKey,
	getRiskTypesKey,
} from "./meta-controller.keys";
import type {
	GetAgentsQueryResult,
	GetAnalysisCodesQueryResult,
	GetCategoriesQueryResult,
	GetGradesQueryResult,
	GetProductsQueryResult,
	GetRiskLevelsQueryResult,
	GetRiskTypesQueryResult,
} from "./meta-controller.types";

export const getRiskTypesOptions = <TData = GetRiskTypesQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetRiskTypesQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getRiskTypesKey();
	const queryFn: QueryFunction<GetRiskTypesQueryResult> = ({ signal }) => getRiskTypes(signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<GetRiskTypesQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getRiskLevelsOptions = <TData = GetRiskLevelsQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetRiskLevelsQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getRiskLevelsKey();
	const queryFn: QueryFunction<GetRiskLevelsQueryResult> = ({ signal }) => getRiskLevels(signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<GetRiskLevelsQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getProductsOptions = <TData = GetProductsQueryResult, TError = unknown>(
	params?: SearchProductsParams,
	options?: { query?: Partial<UseQueryOptions<GetProductsQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getProductsKey(params);
	const queryFn: QueryFunction<GetProductsQueryResult> = ({ signal }) => getProducts(params, signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<GetProductsQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getGradesOptions = <TData = GetGradesQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetGradesQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getGradesKey();
	const queryFn: QueryFunction<GetGradesQueryResult> = ({ signal }) => getGrades(signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<GetGradesQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getCategoriesOptions = <TData = GetCategoriesQueryResult, TError = unknown>(
	params?: GetCategoriesParams,
	options?: { query?: Partial<UseQueryOptions<GetCategoriesQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getCategoriesKey(params);
	const queryFn: QueryFunction<GetCategoriesQueryResult> = ({ signal }) => getCategories(params, signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<GetCategoriesQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getAnalysisCodesOptions = <TData = GetAnalysisCodesQueryResult, TError = unknown>(
	params?: GetAnalysisCodesParams,
	options?: { query?: Partial<UseQueryOptions<GetAnalysisCodesQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getAnalysisCodesKey(params);
	const queryFn: QueryFunction<GetAnalysisCodesQueryResult> = ({ signal }) => getAnalysisCodes(params, signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<GetAnalysisCodesQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};


export const getAgentsOptions = <TData = GetAgentsQueryResult, TError = unknown>(
	params?: SearchAgentsParams,
	options?: { query?: Partial<UseQueryOptions<GetAgentsQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getAgentsKey(params);
	const queryFn: QueryFunction<GetAgentsQueryResult> = ({ signal }) => getAgents(params, signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<GetAgentsQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};
