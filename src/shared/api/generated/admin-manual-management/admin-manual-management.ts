import { useMutation, useQuery } from "@tanstack/react-query";
import type {
	DataTag,
	QueryKey,
	UseMutationOptions,
	UseMutationResult,
	UseQueryOptions,
	UseQueryResult,
} from "@tanstack/react-query";
import type { GetManualHistoryParams, ManualRequest, ManualUpdateRequest } from "../api.schemas";
import {
	getManualHistoryOptions,
	patchActivateManualOptions,
	patchDeactivateManualOptions,
	postManualOptions,
	putManualOptions,
} from "./admin-manual-management.queryOptions";
import type {
	GetManualHistoryQueryResult,
	PatchActivateManualMutationResult,
	PatchDeactivateManualMutationResult,
	PostManualMutationResult,
	PutManualMutationResult,
} from "./admin-manual-management.types";

/** @summary 매뉴얼 이력 조회 */
export function useGetManualHistoryQuery<TData = GetManualHistoryQueryResult, TError = unknown>(
	params?: GetManualHistoryParams,
	options?: { query?: Partial<UseQueryOptions<GetManualHistoryQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getManualHistoryOptions(params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 매뉴얼 내용 수정 */
export function useMutationPutManualQuery<TError = unknown, TContext = unknown>(
	options?: UseMutationOptions<PutManualMutationResult, TError, { manualId: number; data: ManualUpdateRequest }, TContext>,
): UseMutationResult<PutManualMutationResult, TError, { manualId: number; data: ManualUpdateRequest }, TContext> {
	return useMutation(putManualOptions({ mutation: options }));
}


/** @summary 매뉴얼 신규 작성/교체 */
export function useMutationPostManualQuery<TError = unknown, TContext = unknown>(
	options?: UseMutationOptions<PostManualMutationResult, TError, { data: ManualRequest }, TContext>,
): UseMutationResult<PostManualMutationResult, TError, { data: ManualRequest }, TContext> {
	return useMutation(postManualOptions({ mutation: options }));
}


/** @summary 매뉴얼 수동 비활성화 */
export function useMutationPatchDeactivateManualQuery<TError = unknown, TContext = unknown>(
	options?: UseMutationOptions<PatchDeactivateManualMutationResult, TError, { manualId: number }, TContext>,
): UseMutationResult<PatchDeactivateManualMutationResult, TError, { manualId: number }, TContext> {
	return useMutation(patchDeactivateManualOptions({ mutation: options }));
}


/** @summary 매뉴얼 수동 활성화 */
export function useMutationPatchActivateManualQuery<TError = unknown, TContext = unknown>(
	options?: UseMutationOptions<PatchActivateManualMutationResult, TError, { manualId: number }, TContext>,
): UseMutationResult<PatchActivateManualMutationResult, TError, { manualId: number }, TContext> {
	return useMutation(patchActivateManualOptions({ mutation: options }));
}
