import { useMutation, useQuery } from "@tanstack/react-query";
import type { DataTag, QueryKey, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { DemoConsultSubmitRequest } from "../api.schemas";
import { getRandomConsultDataOptions, postConsultOptions } from "./demo.queryOptions";
import type { GetRandomConsultDataQueryResult, PostConsultMutationResult } from "./demo.types";

/** @summary 랜덤 상담 데이터 조회 */
export function useGetRandomConsultDataQuery<TData = GetRandomConsultDataQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetRandomConsultDataQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getRandomConsultDataOptions(options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 상담 결과 제출 */
export function useMutationPostConsultQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: NonNullable<Parameters<typeof postConsultOptions<TError, TContext>>[0]>["mutation"] },
): UseMutationResult<PostConsultMutationResult, TError, { data: DemoConsultSubmitRequest }, TContext> {
	return useMutation(postConsultOptions({ mutation: options?.mutation }));
}
