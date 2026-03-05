import type {
	DataTag,
	DefinedInitialDataOptions,
	DefinedUseQueryResult,
	QueryClient,
	UndefinedInitialDataOptions,
	UseQueryOptions,
	UseQueryResult,
} from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

import type { ListParams } from "../api.schemas";
import {
	getDetailQueryOptions,
	getListQueryOptions,
} from "./summary-controller.keys";
import type { detail, list } from "./summary-controller.queryFunctions";

export function useList<
	TData = Awaited<ReturnType<typeof list>>,
	TError = unknown,
>(
	params: undefined | ListParams,
	options: {
		query: Partial<
			UseQueryOptions<Awaited<ReturnType<typeof list>>, TError, TData>
		> &
			Pick<
				DefinedInitialDataOptions<
					Awaited<ReturnType<typeof list>>,
					TError,
					Awaited<ReturnType<typeof list>>
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useList<
	TData = Awaited<ReturnType<typeof list>>,
	TError = unknown,
>(
	params?: ListParams,
	options?: {
		query?: Partial<
			UseQueryOptions<Awaited<ReturnType<typeof list>>, TError, TData>
		> &
			Pick<
				UndefinedInitialDataOptions<
					Awaited<ReturnType<typeof list>>,
					TError,
					Awaited<ReturnType<typeof list>>
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useList<
	TData = Awaited<ReturnType<typeof list>>,
	TError = unknown,
>(
	params?: ListParams,
	options?: {
		query?: Partial<
			UseQueryOptions<Awaited<ReturnType<typeof list>>, TError, TData>
		>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};

export function useList<
	TData = Awaited<ReturnType<typeof list>>,
	TError = unknown,
>(
	params?: ListParams,
	options?: {
		query?: Partial<
			UseQueryOptions<Awaited<ReturnType<typeof list>>, TError, TData>
		>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getListQueryOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & { queryKey: DataTag<QueryKey, TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}

export function useDetail<
	TData = Awaited<ReturnType<typeof detail>>,
	TError = unknown,
>(
	consultId: number,
	options: {
		query: Partial<
			UseQueryOptions<Awaited<ReturnType<typeof detail>>, TError, TData>
		> &
			Pick<
				DefinedInitialDataOptions<
					Awaited<ReturnType<typeof detail>>,
					TError,
					Awaited<ReturnType<typeof detail>>
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useDetail<
	TData = Awaited<ReturnType<typeof detail>>,
	TError = unknown,
>(
	consultId: number,
	options?: {
		query?: Partial<
			UseQueryOptions<Awaited<ReturnType<typeof detail>>, TError, TData>
		> &
			Pick<
				UndefinedInitialDataOptions<
					Awaited<ReturnType<typeof detail>>,
					TError,
					Awaited<ReturnType<typeof detail>>
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useDetail<
	TData = Awaited<ReturnType<typeof detail>>,
	TError = unknown,
>(
	consultId: number,
	options?: {
		query?: Partial<
			UseQueryOptions<Awaited<ReturnType<typeof detail>>, TError, TData>
		>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};

export function useDetail<
	TData = Awaited<ReturnType<typeof detail>>,
	TError = unknown,
>(
	consultId: number,
	options?: {
		query?: Partial<
			UseQueryOptions<Awaited<ReturnType<typeof detail>>, TError, TData>
		>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getDetailQueryOptions(consultId, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & { queryKey: DataTag<QueryKey, TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}
