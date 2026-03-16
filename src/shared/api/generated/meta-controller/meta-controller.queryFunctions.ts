import { apiClient } from "../../client";
import type {
	AgentDto,
	AnalysisCodeDto,
	CategoryDto,
	GetAnalysisCodesParams,
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

export const getRiskLevels = (signal?: AbortSignal) => {
	return apiClient<RiskLevelDto[]>({
		url: `/api/meta/risk-levels`,
		method: "GET",
		signal,
	});
};

export const getProducts = (params?: SearchProductsParams, signal?: AbortSignal) => {
	return apiClient<ProductDto[]>({
		url: `/api/meta/products`,
		method: "GET",
		params,
		signal,
	});
};

export const getGrades = (signal?: AbortSignal) => {
	return apiClient<GradeDto[]>({
		url: `/api/meta/grades`,
		method: "GET",
		signal,
	});
};

export const getCategories = (params?: GetCategoriesParams, signal?: AbortSignal) => {
	return apiClient<CategoryDto[]>({
		url: `/api/meta/categories`,
		method: "GET",
		params,
		signal,
	});
};

export const getAnalysisCodes = (params?: GetAnalysisCodesParams, signal?: AbortSignal) => {
	return apiClient<AnalysisCodeDto[]>({
		url: `/api/meta/analysis-codes`,
		method: "GET",
		params,
		signal,
	});
};

export const getAgents = (params?: SearchAgentsParams, signal?: AbortSignal) => {
	return apiClient<AgentDto[]>({
		url: `/api/meta/agents`,
		method: "GET",
		params,
		signal,
	});
};
