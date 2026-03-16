import type {
	DataTag,
	MutationFunction,
	QueryFunction,
	QueryKey,
	UseMutationOptions,
	UseQueryOptions,
} from "@tanstack/react-query";
import type { GetNoticeListParams, NoticeCreateRequest, NoticeUpdateRequest } from "../api.schemas";
import {
	deleteNotice,
	getNoticeDetail,
	getNoticeList,
	postNotice,
	putNotice,
} from "./notice.queryFunctions";
import { getNoticeDetailKey, getNoticeListKey } from "./notice.keys";
import type {
	DeleteNoticeMutationResult,
	GetNoticeDetailQueryResult,
	GetNoticeListQueryResult,
	PostNoticeMutationResult,
	PutNoticeMutationResult,
} from "./notice.types";

export const getNoticeDetailOptions = <TData = GetNoticeDetailQueryResult, TError = unknown>(
	noticeId: number,
	options?: { query?: Partial<UseQueryOptions<GetNoticeDetailQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getNoticeDetailKey(noticeId);
	const queryFn: QueryFunction<GetNoticeDetailQueryResult> = ({ signal }) => getNoticeDetail(noticeId, signal);
	return { queryKey, queryFn, enabled: !!noticeId, ...queryOptions } as UseQueryOptions<
		GetNoticeDetailQueryResult,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export const getNoticeListOptions = <TData = GetNoticeListQueryResult, TError = unknown>(
	params?: GetNoticeListParams,
	options?: { query?: Partial<UseQueryOptions<GetNoticeListQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getNoticeListKey(params);
	const queryFn: QueryFunction<GetNoticeListQueryResult> = ({ signal }) => getNoticeList(params, signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<GetNoticeListQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const putNoticeOptions = <TError = unknown, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<PutNoticeMutationResult, TError, { noticeId: number; data: NoticeUpdateRequest }, TContext>;
	},
): UseMutationOptions<PutNoticeMutationResult, TError, { noticeId: number; data: NoticeUpdateRequest }, TContext> => {
	const mutationKey = ["putNotice"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<PutNoticeMutationResult, { noticeId: number; data: NoticeUpdateRequest }> = ({
		noticeId,
		data,
	}) => putNotice(noticeId, data) as Promise<PutNoticeMutationResult>;
	return { mutationFn, ...mutationOptions };
};

export const deleteNoticeOptions = <TError = unknown, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<DeleteNoticeMutationResult, TError, { noticeId: number }, TContext>;
	},
): UseMutationOptions<DeleteNoticeMutationResult, TError, { noticeId: number }, TContext> => {
	const mutationKey = ["deleteNotice"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<DeleteNoticeMutationResult, { noticeId: number }> = ({ noticeId }) =>
		deleteNotice(noticeId) as Promise<DeleteNoticeMutationResult>;
	return { mutationFn, ...mutationOptions };
};

export const postNoticeOptions = <TError = unknown, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<PostNoticeMutationResult, TError, { data: NoticeCreateRequest }, TContext>;
	},
): UseMutationOptions<PostNoticeMutationResult, TError, { data: NoticeCreateRequest }, TContext> => {
	const mutationKey = ["postNotice"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<PostNoticeMutationResult, { data: NoticeCreateRequest }> = ({ data }) =>
		postNotice(data) as Promise<PostNoticeMutationResult>;
	return { mutationFn, ...mutationOptions };
};
