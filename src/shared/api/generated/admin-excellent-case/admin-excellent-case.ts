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


/** @summary 우수 사례 상세 조회 */
export function useGetDetailQuery<TData = GetDetailQueryResult, TError = unknown>(
	consultId: number,
	options: { query: Partial<UseQueryOptions<GetDetailQueryResult, TError, TData>> & Pick<DefinedInitialDataOptions<GetDetailQueryResult, TError, GetDetailQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetDetailQuery<TData = GetDetailQueryResult, TError = unknown>(
	consultId: number,
	options?: { query?: Partial<UseQueryOptions<GetDetailQueryResult, TError, TData>> & Pick<UndefinedInitialDataOptions<GetDetailQueryResult, TError, GetDetailQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetDetailQuery<TData = GetDetailQueryResult, TError = unknown>(
	consultId: number,
	options?: { query?: Partial<UseQueryOptions<GetDetailQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetDetailQuery<TData = GetDetailQueryResult, TError = unknown>(
	consultId: number,
	options?: { query?: Partial<UseQueryOptions<GetDetailQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> } {
	const queryOptions = getDetailOptions(consultId, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 우수 사례 후보 목록 조회 */
export function useGetCandidatesQuery<TData = GetCandidatesQueryResult, TError = unknown>(
	params: undefined | GetCandidatesParams,
	options: { query: Partial<UseQueryOptions<GetCandidatesQueryResult, TError, TData>> & Pick<DefinedInitialDataOptions<GetCandidatesQueryResult, TError, GetCandidatesQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetCandidatesQuery<TData = GetCandidatesQueryResult, TError = unknown>(
	params?: GetCandidatesParams,
	options?: { query?: Partial<UseQueryOptions<GetCandidatesQueryResult, TError, TData>> & Pick<UndefinedInitialDataOptions<GetCandidatesQueryResult, TError, GetCandidatesQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetCandidatesQuery<TData = GetCandidatesQueryResult, TError = unknown>(
	params?: GetCandidatesParams,
	options?: { query?: Partial<UseQueryOptions<GetCandidatesQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetCandidatesQuery<TData = GetCandidatesQueryResult, TError = unknown>(
	params?: GetCandidatesParams,
	options?: { query?: Partial<UseQueryOptions<GetCandidatesQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> } {
	const queryOptions = getCandidatesOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 우수 사례 선정 */
export function useMutationPostSelectExcellentCaseQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: UseMutationOptions<PostSelectExcellentCaseMutationResult, TError, { consultId: number; data: ExcellentCaseRegisterRequest }, TContext> },
	queryClient?: QueryClient,
): UseMutationResult<PostSelectExcellentCaseMutationResult, TError, { consultId: number; data: ExcellentCaseRegisterRequest }, TContext> {
	return useMutation(postSelectExcellentCaseOptions(options), queryClient);
}


/** @summary 우수 사례 반려 */
export function useMutationPatchRejectExcellentCaseQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: UseMutationOptions<PatchRejectExcellentCaseMutationResult, TError, { consultId: number }, TContext> },
	queryClient?: QueryClient,
): UseMutationResult<PatchRejectExcellentCaseMutationResult, TError, { consultId: number }, TContext> {
	return useMutation(patchRejectExcellentCaseOptions(options), queryClient);
}
