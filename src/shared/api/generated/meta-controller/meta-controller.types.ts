import type {
	getAgents,
	getAnalysisCodes,
	getCategories,
	getGrades,
	getProducts,
	getRiskLevels,
	getRiskTypes,
} from "./meta-controller.queryFunctions";

export type GetRiskTypesQueryResult = NonNullable<Awaited<ReturnType<typeof getRiskTypes>>>;
export type GetRiskTypesQueryError = unknown;

export type GetRiskLevelsQueryResult = NonNullable<Awaited<ReturnType<typeof getRiskLevels>>>;
export type GetRiskLevelsQueryError = unknown;

export type GetProductsQueryResult = NonNullable<Awaited<ReturnType<typeof getProducts>>>;
export type GetProductsQueryError = unknown;

export type GetGradesQueryResult = NonNullable<Awaited<ReturnType<typeof getGrades>>>;
export type GetGradesQueryError = unknown;

export type GetCategoriesQueryResult = NonNullable<Awaited<ReturnType<typeof getCategories>>>;
export type GetCategoriesQueryError = unknown;

export type GetAnalysisCodesQueryResult = NonNullable<Awaited<ReturnType<typeof getAnalysisCodes>>>;
export type GetAnalysisCodesQueryError = unknown;

export type GetAgentsQueryResult = NonNullable<Awaited<ReturnType<typeof getAgents>>>;
export type GetAgentsQueryError = unknown;
