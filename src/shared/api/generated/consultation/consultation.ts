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

import {
	type GetRandomConsultData1QueryError,
	type GetRandomConsultData1QueryResult,
	getGetRandomConsultData1QueryOptions,
} from "./consultation.keys";

export function useGetRandomConsultData1<
	TData = GetRandomConsultData1QueryResult,
	TError = GetRandomConsultData1QueryError,
>(
	options: {
		query: Partial<
			UseQueryOptions<GetRandomConsultData1QueryResult, TError, TData>
		> &
			Pick<
				DefinedInitialDataOptions<
					GetRandomConsultData1QueryResult,
					TError,
					GetRandomConsultData1QueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetRandomConsultData1<
	TData = GetRandomConsultData1QueryResult,
	TError = GetRandomConsultData1QueryError,
>(
	options?: {
		query?: Partial<
			UseQueryOptions<GetRandomConsultData1QueryResult, TError, TData>
		> &
			Pick<
				UndefinedInitialDataOptions<
					GetRandomConsultData1QueryResult,
					TError,
					GetRandomConsultData1QueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetRandomConsultData1<
	TData = GetRandomConsultData1QueryResult,
	TError = GetRandomConsultData1QueryError,
>(
	options?: {
		query?: Partial<
			UseQueryOptions<GetRandomConsultData1QueryResult, TError, TData>
		>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetRandomConsultData1<
	TData = GetRandomConsultData1QueryResult,
	TError = GetRandomConsultData1QueryError,
>(
	options?: {
		query?: Partial<
			UseQueryOptions<GetRandomConsultData1QueryResult, TError, TData>
		>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getGetRandomConsultData1QueryOptions(options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & { queryKey: DataTag<QueryKey, TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}
