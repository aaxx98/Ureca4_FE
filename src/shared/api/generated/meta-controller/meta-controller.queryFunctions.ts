import { apiClient } from "../../client";
import type {
	AgentDto,
	CategoryDto,
	GetCategoriesParams,
	GradeDto,
	ProductDto,
	RiskLevelDto,
	RiskTypeDto,
	SearchAgentsParams,
	SearchProductsParams,
} from "../api.schemas";

export const getRiskTypes = (signal?: AbortSignal) => {
	return apiClient<RiskTypeDto[]>({
		url: `/api/meta/risk-types`,
		method: "GET",
		signal,
	});
};

export type GetRiskTypesQueryResult = NonNullable<Awaited<ReturnType<typeof getRiskTypes>>>;
export type GetRiskTypesQueryError = unknown;

export const getRiskLevels = (signal?: AbortSignal) => {
	return apiClient<RiskLevelDto[]>({
		url: `/api/meta/risk-levels`,
		method: "GET",
		signal,
	});
};

export type GetRiskLevelsQueryResult = NonNullable<Awaited<ReturnType<typeof getRiskLevels>>>;
export type GetRiskLevelsQueryError = unknown;

export const searchProducts = (
	params?: SearchProductsParams,
	signal?: AbortSignal,
) => {
	return apiClient<ProductDto[]>({
		url: `/api/meta/products`,
		method: "GET",
		params,
		signal,
	});
};

export type SearchProductsQueryResult = NonNullable<Awaited<ReturnType<typeof searchProducts>>>;
export type SearchProductsQueryError = unknown;

export const getGrades = (signal?: AbortSignal) => {
	return apiClient<GradeDto[]>({
		url: `/api/meta/grades`,
		method: "GET",
		signal,
	});
};

export type GetGradesQueryResult = NonNullable<Awaited<ReturnType<typeof getGrades>>>;
export type GetGradesQueryError = unknown;

export const getCategories = (
	params?: GetCategoriesParams,
	signal?: AbortSignal,
) => {
	return apiClient<CategoryDto[]>({
		url: `/api/meta/categories`,
		method: "GET",
		params,
		signal,
	});
};

export type GetCategoriesQueryResult = NonNullable<Awaited<ReturnType<typeof getCategories>>>;
export type GetCategoriesQueryError = unknown;

export const searchAgents = (
	params?: SearchAgentsParams,
	signal?: AbortSignal,
) => {
	return apiClient<AgentDto[]>({
		url: `/api/meta/agents`,
		method: "GET",
		params,
		signal,
	});
};

export type SearchAgentsQueryResult = NonNullable<Awaited<ReturnType<typeof searchAgents>>>;
export type SearchAgentsQueryError = unknown;
