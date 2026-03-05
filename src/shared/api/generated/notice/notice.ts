import type {
	DataTag,
	DefinedInitialDataOptions,
	DefinedUseQueryResult,
	QueryClient,
	QueryKey,
	UndefinedInitialDataOptions,
	UseMutationOptions,
	UseMutationResult,
	UseQueryOptions,
	UseQueryResult,
} from "@tanstack/react-query";
import { useMutation, useQuery } from "@tanstack/react-query";

import type {
	GetNoticeListParams,
	NoticeCreateRequest,
	NoticeUpdateRequest,
} from "../api.schemas";
import {
	type GetNoticeDetailQueryError,
	type GetNoticeDetailQueryResult,
	type GetNoticeListQueryError,
	type GetNoticeListQueryResult,
	getGetNoticeDetailQueryOptions,
	getGetNoticeListQueryOptions,
} from "./notice.keys";
import {
	type CreateNoticeMutationError,
	type CreateNoticeMutationResult,
	type DeleteNoticeMutationError,
	type DeleteNoticeMutationResult,
	getCreateNoticeMutationOptions,
	getDeleteNoticeMutationOptions,
	getUpdateNoticeMutationOptions,
	type UpdateNoticeMutationError,
	type UpdateNoticeMutationResult,
} from "./notice.queryFunctions";

export function useGetNoticeDetail<
	TData = GetNoticeDetailQueryResult,
	TError = GetNoticeDetailQueryError,
>(
	noticeId: number,
	options: {
		query: Partial<UseQueryOptions<GetNoticeDetailQueryResult, TError, TData>> &
			Pick<
				DefinedInitialDataOptions<
					GetNoticeDetailQueryResult,
					TError,
					GetNoticeDetailQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetNoticeDetail<
	TData = GetNoticeDetailQueryResult,
	TError = GetNoticeDetailQueryError,
>(
	noticeId: number,
	options?: {
		query?: Partial<
			UseQueryOptions<GetNoticeDetailQueryResult, TError, TData>
		> &
			Pick<
				UndefinedInitialDataOptions<
					GetNoticeDetailQueryResult,
					TError,
					GetNoticeDetailQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetNoticeDetail<
	TData = GetNoticeDetailQueryResult,
	TError = GetNoticeDetailQueryError,
>(
	noticeId: number,
	options?: {
		query?: Partial<UseQueryOptions<GetNoticeDetailQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetNoticeDetail<
	TData = GetNoticeDetailQueryResult,
	TError = GetNoticeDetailQueryError,
>(
	noticeId: number,
	options?: {
		query?: Partial<UseQueryOptions<GetNoticeDetailQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getGetNoticeDetailQueryOptions(noticeId, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & { queryKey: DataTag<QueryKey, TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}

export const useUpdateNotice = <
	TError = UpdateNoticeMutationError,
	TContext = unknown,
>(
	options?: {
		mutation?: UseMutationOptions<
			UpdateNoticeMutationResult,
			TError,
			{ noticeId: number; data: NoticeUpdateRequest },
			TContext
		>;
	},
	queryClient?: QueryClient,
): UseMutationResult<
	UpdateNoticeMutationResult,
	TError,
	{ noticeId: number; data: NoticeUpdateRequest },
	TContext
> => {
	const mutationOptions = getUpdateNoticeMutationOptions(options);
	return useMutation(mutationOptions, queryClient);
};

export const useDeleteNotice = <
	TError = DeleteNoticeMutationError,
	TContext = unknown,
>(
	options?: {
		mutation?: UseMutationOptions<
			DeleteNoticeMutationResult,
			TError,
			{ noticeId: number },
			TContext
		>;
	},
	queryClient?: QueryClient,
): UseMutationResult<
	DeleteNoticeMutationResult,
	TError,
	{ noticeId: number },
	TContext
> => {
	const mutationOptions = getDeleteNoticeMutationOptions(options);
	return useMutation(mutationOptions, queryClient);
};

export function useGetNoticeList<
	TData = GetNoticeListQueryResult,
	TError = GetNoticeListQueryError,
>(
	params: undefined | GetNoticeListParams,
	options: {
		query: Partial<UseQueryOptions<GetNoticeListQueryResult, TError, TData>> &
			Pick<
				DefinedInitialDataOptions<
					GetNoticeListQueryResult,
					TError,
					GetNoticeListQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetNoticeList<
	TData = GetNoticeListQueryResult,
	TError = GetNoticeListQueryError,
>(
	params?: GetNoticeListParams,
	options?: {
		query?: Partial<UseQueryOptions<GetNoticeListQueryResult, TError, TData>> &
			Pick<
				UndefinedInitialDataOptions<
					GetNoticeListQueryResult,
					TError,
					GetNoticeListQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetNoticeList<
	TData = GetNoticeListQueryResult,
	TError = GetNoticeListQueryError,
>(
	params?: GetNoticeListParams,
	options?: {
		query?: Partial<UseQueryOptions<GetNoticeListQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetNoticeList<
	TData = GetNoticeListQueryResult,
	TError = GetNoticeListQueryError,
>(
	params?: GetNoticeListParams,
	options?: {
		query?: Partial<UseQueryOptions<GetNoticeListQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getGetNoticeListQueryOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & { queryKey: DataTag<QueryKey, TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}

export const useCreateNotice = <
	TError = CreateNoticeMutationError,
	TContext = unknown,
>(
	options?: {
		mutation?: UseMutationOptions<
			CreateNoticeMutationResult,
			TError,
			{ data: NoticeCreateRequest },
			TContext
		>;
	},
	queryClient?: QueryClient,
): UseMutationResult<
	CreateNoticeMutationResult,
	TError,
	{ data: NoticeCreateRequest },
	TContext
> => {
	const mutationOptions = getCreateNoticeMutationOptions(options);
	return useMutation(mutationOptions, queryClient);
};
