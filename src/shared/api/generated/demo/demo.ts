import { useMutation, useQuery } from "@tanstack/react-query";
import type {
	DataTag,
	DefinedInitialDataOptions,
	DefinedUseQueryResult,
	QueryClient,
	UndefinedInitialDataOptions,
	UseMutationOptions,
	UseMutationResult,
	UseQueryOptions,
	UseQueryResult,
} from "@tanstack/react-query";
import type { DemoConsultSubmitRequest } from "../api.schemas";
import { getRandomConsultDataOptions, postConsultOptions } from "./demo.queryOptions";
import type { GetRandomConsultDataQueryResult, PostConsultMutationResult } from "./demo.types";


/** @summary 랜덤 상담 데이터 조회 */
export function useGetRandomConsultDataQuery<TData = GetRandomConsultDataQueryResult, TError = unknown>(
	options: { query: Partial<UseQueryOptions<GetRandomConsultDataQueryResult, TError, TData>> & Pick<DefinedInitialDataOptions<GetRandomConsultDataQueryResult, TError, GetRandomConsultDataQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetRandomConsultDataQuery<TData = GetRandomConsultDataQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetRandomConsultDataQueryResult, TError, TData>> & Pick<UndefinedInitialDataOptions<GetRandomConsultDataQueryResult, TError, GetRandomConsultDataQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetRandomConsultDataQuery<TData = GetRandomConsultDataQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetRandomConsultDataQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetRandomConsultDataQuery<TData = GetRandomConsultDataQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetRandomConsultDataQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> } {
	const queryOptions = getRandomConsultDataOptions(options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 상담 제출 */
export function useMutationPostConsultQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: UseMutationOptions<PostConsultMutationResult, TError, { data: DemoConsultSubmitRequest }, TContext> },
	queryClient?: QueryClient,
): UseMutationResult<PostConsultMutationResult, TError, { data: DemoConsultSubmitRequest }, TContext> {
	return useMutation(postConsultOptions(options), queryClient);
}
