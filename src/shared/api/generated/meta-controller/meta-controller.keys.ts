import type { GetAnalysisCodesParams, GetCategoriesParams, SearchAgentsParams, SearchProductsParams } from "../api.schemas";

export const getRiskTypesKey = () => [`/api/meta/risk-types`] as const;

export const getRiskLevelsKey = () => [`/api/meta/risk-levels`] as const;

export const getProductsKey = (params?: SearchProductsParams) =>
	[`/api/meta/products`, ...(params ? [params] : [])] as const;

export const getGradesKey = () => [`/api/meta/grades`] as const;

export const getCategoriesKey = (params?: GetCategoriesParams) =>
	[`/api/meta/categories`, ...(params ? [params] : [])] as const;

export const getAnalysisCodesKey = (params?: GetAnalysisCodesParams) =>
	[`/api/meta/analysis-codes`, ...(params ? [params] : [])] as const;

export const getAgentsKey = (params?: SearchAgentsParams) =>
	[`/api/meta/agents`, ...(params ? [params] : [])] as const;
