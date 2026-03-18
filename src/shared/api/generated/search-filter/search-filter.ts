import { useMutation, useQuery } from "@tanstack/react-query";
import type {
	DataTag,
	QueryKey,
	UseMutationOptions,
	UseMutationResult,
	UseQueryOptions,
	UseQueryResult,
} from "@tanstack/react-query";
import type { FilterGroupCreateRequest, FilterGroupOrderRequest, FilterGroupUpdateRequest } from "../api.schemas";
import {
	deleteFilterGroupOptions,
	getFilterDefinitionsOptions,
	getFilterGroupDetailOptions,
	getMyFilterGroupsOptions,
	postFilterGroupOptions,
	putFilterGroupOptions,
	putFilterGroupOrderOptions,
} from "./search-filter.queryOptions";
import type {
	DeleteFilterGroupMutationResult,
	GetFilterDefinitionsQueryResult,
	GetFilterGroupDetailQueryResult,
	GetMyFilterGroupsQueryResult,
	PostFilterGroupMutationResult,
	PutFilterGroupMutationResult,
	PutFilterGroupOrderMutationResult,
} from "./search-filter.types";

/** @summary 필터 그룹 상세 조회 */
export function useGetFilterGroupDetailQuery<TData = GetFilterGroupDetailQueryResult, TError = unknown>(
	id: number,
	options?: { query?: Partial<UseQueryOptions<GetFilterGroupDetailQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getFilterGroupDetailOptions(id, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 내 필터 그룹 목록 조회 */
export function useGetMyFilterGroupsQuery<TData = GetMyFilterGroupsQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetMyFilterGroupsQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getMyFilterGroupsOptions(options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 필터 정의 목록 조회 */
export function useGetFilterDefinitionsQuery<TData = GetFilterDefinitionsQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetFilterDefinitionsQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getFilterDefinitionsOptions(options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 필터 그룹 수정 */
export function useMutationPutFilterGroupQuery<TError = unknown, TContext = unknown>(
	options?: UseMutationOptions<PutFilterGroupMutationResult, TError, { id: number; data: FilterGroupUpdateRequest }, TContext>,
): UseMutationResult<PutFilterGroupMutationResult, TError, { id: number; data: FilterGroupUpdateRequest }, TContext> {
	return useMutation(putFilterGroupOptions({ mutation: options }));
}


/** @summary 필터 그룹 삭제 */
export function useMutationDeleteFilterGroupQuery<TError = unknown, TContext = unknown>(
	options?: UseMutationOptions<DeleteFilterGroupMutationResult, TError, { id: number }, TContext>,
): UseMutationResult<DeleteFilterGroupMutationResult, TError, { id: number }, TContext> {
	return useMutation(deleteFilterGroupOptions({ mutation: options }));
}


/** @summary 필터 그룹 정렬 순서 변경 */
export function useMutationPutFilterGroupOrderQuery<TError = unknown, TContext = unknown>(
	options?: UseMutationOptions<PutFilterGroupOrderMutationResult, TError, { data: FilterGroupOrderRequest }, TContext>,
): UseMutationResult<PutFilterGroupOrderMutationResult, TError, { data: FilterGroupOrderRequest }, TContext> {
	return useMutation(putFilterGroupOrderOptions({ mutation: options }));
}


/** @summary 검색 조건 저장 */
export function useMutationPostFilterGroupQuery<TError = unknown, TContext = unknown>(
	options?: UseMutationOptions<PostFilterGroupMutationResult, TError, { data: FilterGroupCreateRequest }, TContext>,
): UseMutationResult<PostFilterGroupMutationResult, TError, { data: FilterGroupCreateRequest }, TContext> {
	return useMutation(postFilterGroupOptions({ mutation: options }));
}
