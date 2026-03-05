import type {
	DataTag,
	QueryFunction,
	QueryKey,
	UseQueryOptions,
} from "@tanstack/react-query";

import type { GetNoticeListParams } from "../api.schemas";
import { getNoticeDetail, getNoticeList } from "./notice.queryFunctions";

export const getGetNoticeDetailQueryKey = (noticeId?: number) =>
	[`/notices/${noticeId}`] as const;

export const getGetNoticeDetailQueryOptions = <
	TData = Awaited<ReturnType<typeof getNoticeDetail>>,
	TError = unknown,
>(
	noticeId: number,
	options?: {
		query?: Partial<
			UseQueryOptions<
				Awaited<ReturnType<typeof getNoticeDetail>>,
				TError,
				TData
			>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? getGetNoticeDetailQueryKey(noticeId);
	const queryFn: QueryFunction<Awaited<ReturnType<typeof getNoticeDetail>>> = ({
		signal,
	}) => getNoticeDetail(noticeId, signal);

	return {
		queryKey,
		queryFn,
		enabled: !!noticeId,
		...queryOptions,
	} as UseQueryOptions<
		Awaited<ReturnType<typeof getNoticeDetail>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetNoticeDetailQueryResult = NonNullable<
	Awaited<ReturnType<typeof getNoticeDetail>>
>;
export type GetNoticeDetailQueryError = unknown;

export const getGetNoticeListQueryKey = (params?: GetNoticeListParams) =>
	[`/notices`, ...(params ? [params] : [])] as const;

export const getGetNoticeListQueryOptions = <
	TData = Awaited<ReturnType<typeof getNoticeList>>,
	TError = unknown,
>(
	params?: GetNoticeListParams,
	options?: {
		query?: Partial<
			UseQueryOptions<Awaited<ReturnType<typeof getNoticeList>>, TError, TData>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getGetNoticeListQueryKey(params);
	const queryFn: QueryFunction<Awaited<ReturnType<typeof getNoticeList>>> = ({
		signal,
	}) => getNoticeList(params, signal);

	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof getNoticeList>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetNoticeListQueryResult = NonNullable<
	Awaited<ReturnType<typeof getNoticeList>>
>;
export type GetNoticeListQueryError = unknown;
