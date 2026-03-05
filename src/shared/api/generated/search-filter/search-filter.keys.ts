import type {
	DataTag,
	QueryFunction,
	QueryKey,
	UseQueryOptions,
} from "@tanstack/react-query";

import type { ErrorResponse } from "../api.schemas";
import {
	getFilterDefinitions,
	getFilterGroupDetail,
	getMyFilterGroups,
} from "./search-filter.queryFunctions";

export const getGetFilterGroupDetailQueryKey = (id?: number) =>
	[`/api/search-filters/${id}`] as const;

export const getGetFilterGroupDetailQueryOptions = <
	TData = Awaited<ReturnType<typeof getFilterGroupDetail>>,
	TError = ErrorResponse | ErrorResponse,
>(
	id: number,
	options?: {
		query?: Partial<
			UseQueryOptions<
				Awaited<ReturnType<typeof getFilterGroupDetail>>,
				TError,
				TData
			>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? getGetFilterGroupDetailQueryKey(id);
	const queryFn: QueryFunction<
		Awaited<ReturnType<typeof getFilterGroupDetail>>
	> = ({ signal }) => getFilterGroupDetail(id, signal);

	return {
		queryKey,
		queryFn,
		enabled: !!id,
		...queryOptions,
	} as UseQueryOptions<
		Awaited<ReturnType<typeof getFilterGroupDetail>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetFilterGroupDetailQueryResult = NonNullable<
	Awaited<ReturnType<typeof getFilterGroupDetail>>
>;
export type GetFilterGroupDetailQueryError = ErrorResponse | ErrorResponse;

export const getGetMyFilterGroupsQueryKey = () =>
	[`/api/search-filters`] as const;

export const getGetMyFilterGroupsQueryOptions = <
	TData = Awaited<ReturnType<typeof getMyFilterGroups>>,
	TError = unknown,
>(options?: {
	query?: Partial<
		UseQueryOptions<
			Awaited<ReturnType<typeof getMyFilterGroups>>,
			TError,
			TData
		>
	>;
}) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getGetMyFilterGroupsQueryKey();
	const queryFn: QueryFunction<
		Awaited<ReturnType<typeof getMyFilterGroups>>
	> = ({ signal }) => getMyFilterGroups(signal);

	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof getMyFilterGroups>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetMyFilterGroupsQueryResult = NonNullable<
	Awaited<ReturnType<typeof getMyFilterGroups>>
>;
export type GetMyFilterGroupsQueryError = unknown;

export const getGetFilterDefinitionsQueryKey = () => [`/api/filters`] as const;

export const getGetFilterDefinitionsQueryOptions = <
	TData = Awaited<ReturnType<typeof getFilterDefinitions>>,
	TError = unknown,
>(options?: {
	query?: Partial<
		UseQueryOptions<
			Awaited<ReturnType<typeof getFilterDefinitions>>,
			TError,
			TData
		>
	>;
}) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getGetFilterDefinitionsQueryKey();
	const queryFn: QueryFunction<
		Awaited<ReturnType<typeof getFilterDefinitions>>
	> = ({ signal }) => getFilterDefinitions(signal);

	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof getFilterDefinitions>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetFilterDefinitionsQueryResult = NonNullable<
	Awaited<ReturnType<typeof getFilterDefinitions>>
>;
export type GetFilterDefinitionsQueryError = unknown;
