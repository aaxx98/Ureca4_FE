import { useMutation, useQuery } from "@tanstack/react-query";
import type { DataTag, QueryKey, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { ExcellentCaseRegisterRequest, GetCandidatesParams } from "../api.schemas";
import {
	getCandidatesOptions,
	getDetailOptions,
	patchRejectExcellentCaseOptions,
	postSelectExcellentCaseOptions,
} from "./admin-excellent-case.queryOptions";
import type {
	GetCandidatesQueryResult,
	GetDetailQueryResult,
	PatchRejectExcellentCaseMutationResult,
	PostSelectExcellentCaseMutationResult,
} from "./admin-excellent-case.types";

/** @summary 우수 사례 후보군 상세 조회 */
export function useGetDetailQuery<TData = GetDetailQueryResult, TError = unknown>(
	consultId: number,
	options?: { query?: Partial<UseQueryOptions<GetDetailQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getDetailOptions(consultId, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 우수 사례 후보군 리스트 조회 */
export function useGetCandidatesQuery<TData = GetCandidatesQueryResult, TError = unknown>(
	params?: GetCandidatesParams,
	options?: { query?: Partial<UseQueryOptions<GetCandidatesQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getCandidatesOptions(params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 우수 사례 최종 선정 */
export function useMutationPostSelectExcellentCaseQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: NonNullable<Parameters<typeof postSelectExcellentCaseOptions<TError, TContext>>[0]>["mutation"] },
): UseMutationResult<PostSelectExcellentCaseMutationResult, TError, { consultId: number; data: ExcellentCaseRegisterRequest }, TContext> {
	return useMutation(postSelectExcellentCaseOptions({ mutation: options?.mutation }));
}


/** @summary 우수 사례 후보 제외 */
export function useMutationPatchRejectExcellentCaseQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: NonNullable<Parameters<typeof patchRejectExcellentCaseOptions<TError, TContext>>[0]>["mutation"] },
): UseMutationResult<PatchRejectExcellentCaseMutationResult, TError, { consultId: number }, TContext> {
	return useMutation(patchRejectExcellentCaseOptions({ mutation: options?.mutation }));
}
