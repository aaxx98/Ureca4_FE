import type {
	DataTag,
	QueryFunction,
	QueryKey,
	UseQueryOptions,
} from "@tanstack/react-query";

import type { ListParams } from "../api.schemas";
import { detail, list } from "./summary-controller.queryFunctions";

export const getListQueryKey = (params?: ListParams) =>
	[`/api/summaries`, ...(params ? [params] : [])] as const;

export const getListQueryOptions = <
	TData = Awaited<ReturnType<typeof list>>,
	TError = unknown,
>(
	params?: ListParams,
	options?: {
		query?: Partial<
			UseQueryOptions<Awaited<ReturnType<typeof list>>, TError, TData>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getListQueryKey(params);
	const queryFn: QueryFunction<Awaited<ReturnType<typeof list>>> = ({
		signal,
	}) => list(params, signal);

	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof list>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type ListQueryResult = NonNullable<Awaited<ReturnType<typeof list>>>;
export type ListQueryError = unknown;

export const getDetailQueryKey = (consultId?: number) =>
	[`/api/summaries/${consultId}`] as const;

export const getDetailQueryOptions = <
	TData = Awaited<ReturnType<typeof detail>>,
	TError = unknown,
>(
	consultId: number,
	options?: {
		query?: Partial<
			UseQueryOptions<Awaited<ReturnType<typeof detail>>, TError, TData>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getDetailQueryKey(consultId);
	const queryFn: QueryFunction<Awaited<ReturnType<typeof detail>>> = ({
		signal,
	}) => detail(consultId, signal);

	return {
		queryKey,
		queryFn,
		enabled: !!consultId,
		...queryOptions,
	} as UseQueryOptions<Awaited<ReturnType<typeof detail>>, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export type DetailQueryResult = NonNullable<Awaited<ReturnType<typeof detail>>>;
export type DetailQueryError = unknown;
