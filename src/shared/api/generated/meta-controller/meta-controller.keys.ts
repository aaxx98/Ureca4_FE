import type {
	DataTag,
	QueryFunction,
	QueryKey,
	UseQueryOptions,
} from "@tanstack/react-query";
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
import {
	getCategories,
	getGrades,
	getRiskLevels,
	getRiskTypes,
	searchAgents,
	searchProducts,
} from "./meta-controller.queryFunctions";

export const getGetRiskTypesQueryKey = () =>
	[`/api/meta/risk-types`] as const;

export const getGetRiskTypesQueryOptions = <
	TData = Awaited<ReturnType<typeof getRiskTypes>>,
	TError = unknown,
>(options?: {
	query?: Partial<
		UseQueryOptions<Awaited<ReturnType<typeof getRiskTypes>>, TError, TData>
	>;
}) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getGetRiskTypesQueryKey();
	const queryFn: QueryFunction<Awaited<ReturnType<typeof getRiskTypes>>> = ({
		signal,
	}) => getRiskTypes(signal);

	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof getRiskTypes>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export const getGetRiskLevelsQueryKey = () =>
	[`/api/meta/risk-levels`] as const;

export const getGetRiskLevelsQueryOptions = <
	TData = Awaited<ReturnType<typeof getRiskLevels>>,
	TError = unknown,
>(options?: {
	query?: Partial<
		UseQueryOptions<Awaited<ReturnType<typeof getRiskLevels>>, TError, TData>
	>;
}) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getGetRiskLevelsQueryKey();
	const queryFn: QueryFunction<Awaited<ReturnType<typeof getRiskLevels>>> = ({
		signal,
	}) => getRiskLevels(signal);

	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof getRiskLevels>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export const getSearchProductsQueryKey = (params?: SearchProductsParams) =>
	[`/api/meta/products`, ...(params ? [params] : [])] as const;

export const getSearchProductsQueryOptions = <
	TData = Awaited<ReturnType<typeof searchProducts>>,
	TError = unknown,
>(
	params?: SearchProductsParams,
	options?: {
		query?: Partial<
			UseQueryOptions<Awaited<ReturnType<typeof searchProducts>>, TError, TData>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getSearchProductsQueryKey(params);
	const queryFn: QueryFunction<Awaited<ReturnType<typeof searchProducts>>> = ({
		signal,
	}) => searchProducts(params, signal);

	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof searchProducts>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export const getGetGradesQueryKey = () => [`/api/meta/grades`] as const;

export const getGetGradesQueryOptions = <
	TData = Awaited<ReturnType<typeof getGrades>>,
	TError = unknown,
>(options?: {
	query?: Partial<
		UseQueryOptions<Awaited<ReturnType<typeof getGrades>>, TError, TData>
	>;
}) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getGetGradesQueryKey();
	const queryFn: QueryFunction<Awaited<ReturnType<typeof getGrades>>> = ({
		signal,
	}) => getGrades(signal);

	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof getGrades>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export const getGetCategoriesQueryKey = (params?: GetCategoriesParams) =>
	[`/api/meta/categories`, ...(params ? [params] : [])] as const;

export const getGetCategoriesQueryOptions = <
	TData = Awaited<ReturnType<typeof getCategories>>,
	TError = unknown,
>(
	params?: GetCategoriesParams,
	options?: {
		query?: Partial<
			UseQueryOptions<Awaited<ReturnType<typeof getCategories>>, TError, TData>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getGetCategoriesQueryKey(params);
	const queryFn: QueryFunction<Awaited<ReturnType<typeof getCategories>>> = ({
		signal,
	}) => getCategories(params, signal);

	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof getCategories>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export const getSearchAgentsQueryKey = (params?: SearchAgentsParams) =>
	[`/api/meta/agents`, ...(params ? [params] : [])] as const;

export const getSearchAgentsQueryOptions = <
	TData = Awaited<ReturnType<typeof searchAgents>>,
	TError = unknown,
>(
	params?: SearchAgentsParams,
	options?: {
		query?: Partial<
			UseQueryOptions<Awaited<ReturnType<typeof searchAgents>>, TError, TData>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getSearchAgentsQueryKey(params);
	const queryFn: QueryFunction<Awaited<ReturnType<typeof searchAgents>>> = ({
		signal,
	}) => searchAgents(params, signal);

	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof searchAgents>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};
