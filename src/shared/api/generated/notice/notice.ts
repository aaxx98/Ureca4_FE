import { useMutation, useQuery } from "@tanstack/react-query";
import type { DataTag, QueryKey, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { GetNoticeListParams, NoticeCreateRequest, NoticeUpdateRequest } from "../api.schemas";
import {
	deleteNoticeOptions,
	getNoticeDetailOptions,
	getNoticeListOptions,
	postNoticeOptions,
	putNoticeOptions,
} from "./notice.queryOptions";
import type {
	DeleteNoticeMutationResult,
	GetNoticeDetailQueryResult,
	GetNoticeListQueryResult,
	PostNoticeMutationResult,
	PutNoticeMutationResult,
} from "./notice.types";

/** @summary 공지사항 상세 조회 */
export function useGetNoticeDetailQuery<TData = GetNoticeDetailQueryResult, TError = unknown>(
	noticeId: number,
	options?: { query?: Partial<UseQueryOptions<GetNoticeDetailQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getNoticeDetailOptions(noticeId, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 공지사항 목록 조회 */
export function useGetNoticeListQuery<TData = GetNoticeListQueryResult, TError = unknown>(
	params?: GetNoticeListParams,
	options?: { query?: Partial<UseQueryOptions<GetNoticeListQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getNoticeListOptions(params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 공지사항 수정 */
export function useMutationPutNoticeQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: NonNullable<Parameters<typeof putNoticeOptions<TError, TContext>>[0]>["mutation"] },
): UseMutationResult<PutNoticeMutationResult, TError, { noticeId: number; data: NoticeUpdateRequest }, TContext> {
	return useMutation(putNoticeOptions({ mutation: options?.mutation }));
}


/** @summary 공지사항 삭제 */
export function useMutationDeleteNoticeQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: NonNullable<Parameters<typeof deleteNoticeOptions<TError, TContext>>[0]>["mutation"] },
): UseMutationResult<DeleteNoticeMutationResult, TError, { noticeId: number }, TContext> {
	return useMutation(deleteNoticeOptions({ mutation: options?.mutation }));
}


/** @summary 공지사항 작성 */
export function useMutationPostNoticeQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: NonNullable<Parameters<typeof postNoticeOptions<TError, TContext>>[0]>["mutation"] },
): UseMutationResult<PostNoticeMutationResult, TError, { data: NoticeCreateRequest }, TContext> {
	return useMutation(postNoticeOptions({ mutation: options?.mutation }));
}
