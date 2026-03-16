import { useQuery } from "@tanstack/react-query";
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
import type { GetRandomConsultData1QueryResult } from "./consultation.types";
import { getRandomConsultData1Options } from "./consultation.queryOptions";


/** @summary 랜덤 상담 결과서 조회 */
export function useGetRandomConsultData1Query<TData = GetRandomConsultData1QueryResult, TError = unknown>(
	options: {
		query: Partial<UseQueryOptions<GetRandomConsultData1QueryResult, TError, TData>> &
			Pick<DefinedInitialDataOptions<GetRandomConsultData1QueryResult, TError, GetRandomConsultData1QueryResult>, "initialData">;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetRandomConsultData1Query<TData = GetRandomConsultData1QueryResult, TError = unknown>(
	options?: {
		query?: Partial<UseQueryOptions<GetRandomConsultData1QueryResult, TError, TData>> &
			Pick<UndefinedInitialDataOptions<GetRandomConsultData1QueryResult, TError, GetRandomConsultData1QueryResult>, "initialData">;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetRandomConsultData1Query<TData = GetRandomConsultData1QueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetRandomConsultData1QueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetRandomConsultData1Query<TData = GetRandomConsultData1QueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetRandomConsultData1QueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getRandomConsultData1Options(options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}
