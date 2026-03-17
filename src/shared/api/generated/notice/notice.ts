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
	options: { query: Partial<UseQueryOptions<GetNoticeDetailQueryResult, TError, TData>> & Pick<DefinedInitialDataOptions<GetNoticeDetailQueryResult, TError, GetNoticeDetailQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetNoticeDetailQuery<TData = GetNoticeDetailQueryResult, TError = unknown>(
	noticeId: number,
	options?: { query?: Partial<UseQueryOptions<GetNoticeDetailQueryResult, TError, TData>> & Pick<UndefinedInitialDataOptions<GetNoticeDetailQueryResult, TError, GetNoticeDetailQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetNoticeDetailQuery<TData = GetNoticeDetailQueryResult, TError = unknown>(
	noticeId: number,
	options?: { query?: Partial<UseQueryOptions<GetNoticeDetailQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetNoticeDetailQuery<TData = GetNoticeDetailQueryResult, TError = unknown>(
	noticeId: number,
	options?: { query?: Partial<UseQueryOptions<GetNoticeDetailQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> } {
	const queryOptions = getNoticeDetailOptions(noticeId, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 공지사항 목록 조회 */
export function useGetNoticeListQuery<TData = GetNoticeListQueryResult, TError = unknown>(
	params: undefined | GetNoticeListParams,
	options: { query: Partial<UseQueryOptions<GetNoticeListQueryResult, TError, TData>> & Pick<DefinedInitialDataOptions<GetNoticeListQueryResult, TError, GetNoticeListQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetNoticeListQuery<TData = GetNoticeListQueryResult, TError = unknown>(
	params?: GetNoticeListParams,
	options?: { query?: Partial<UseQueryOptions<GetNoticeListQueryResult, TError, TData>> & Pick<UndefinedInitialDataOptions<GetNoticeListQueryResult, TError, GetNoticeListQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetNoticeListQuery<TData = GetNoticeListQueryResult, TError = unknown>(
	params?: GetNoticeListParams,
	options?: { query?: Partial<UseQueryOptions<GetNoticeListQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetNoticeListQuery<TData = GetNoticeListQueryResult, TError = unknown>(
	params?: GetNoticeListParams,
	options?: { query?: Partial<UseQueryOptions<GetNoticeListQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> } {
	const queryOptions = getNoticeListOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 공지사항 수정 */
export function useMutationPutNoticeQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: UseMutationOptions<PutNoticeMutationResult, TError, { noticeId: number; data: NoticeUpdateRequest }, TContext> },
	queryClient?: QueryClient,
): UseMutationResult<PutNoticeMutationResult, TError, { noticeId: number; data: NoticeUpdateRequest }, TContext> {
	return useMutation(putNoticeOptions(options), queryClient);
}


/** @summary 공지사항 삭제 */
export function useMutationDeleteNoticeQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: UseMutationOptions<DeleteNoticeMutationResult, TError, { noticeId: number }, TContext> },
	queryClient?: QueryClient,
): UseMutationResult<DeleteNoticeMutationResult, TError, { noticeId: number }, TContext> {
	return useMutation(deleteNoticeOptions(options), queryClient);
}


/** @summary 공지사항 등록 */
export function useMutationPostNoticeQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: UseMutationOptions<PostNoticeMutationResult, TError, { data: NoticeCreateRequest }, TContext> },
	queryClient?: QueryClient,
): UseMutationResult<PostNoticeMutationResult, TError, { data: NoticeCreateRequest }, TContext> {
	return useMutation(postNoticeOptions(options), queryClient);
}
