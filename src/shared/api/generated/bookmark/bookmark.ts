import { useMutation, useQuery } from "@tanstack/react-query";
import type { DataTag, QueryKey, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import {
	deleteConsultationBookmarkOptions,
	deleteManualBookmarkOptions,
	getConsultationBookmarkDetailOptions,
	getConsultationBookmarksOptions,
	getManualBookmarkDetailOptions,
	getManualBookmarksOptions,
	postConsultationBookmarkOptions,
	postManualBookmarkOptions,
} from "./bookmark.queryOptions";
import type {
	DeleteConsultationBookmarkMutationResult,
	DeleteManualBookmarkMutationResult,
	GetConsultationBookmarkDetailQueryResult,
	GetConsultationBookmarksQueryResult,
	GetManualBookmarkDetailQueryResult,
	GetManualBookmarksQueryResult,
	PostConsultationBookmarkMutationResult,
	PostManualBookmarkMutationResult,
} from "./bookmark.types";

/** @summary 매뉴얼 북마크 목록 조회 */
export function useGetManualBookmarksQuery<TData = GetManualBookmarksQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetManualBookmarksQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getManualBookmarksOptions(options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 매뉴얼 북마크 상세 조회 */
export function useGetManualBookmarkDetailQuery<TData = GetManualBookmarkDetailQueryResult, TError = unknown>(
	manualId: number,
	options?: { query?: Partial<UseQueryOptions<GetManualBookmarkDetailQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getManualBookmarkDetailOptions(manualId, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 상담요약 북마크 목록 조회 */
export function useGetConsultationBookmarksQuery<TData = GetConsultationBookmarksQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetConsultationBookmarksQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getConsultationBookmarksOptions(options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 상담요약 북마크 상세 조회 */
export function useGetConsultationBookmarkDetailQuery<TData = GetConsultationBookmarkDetailQueryResult, TError = unknown>(
	consultId: number,
	options?: { query?: Partial<UseQueryOptions<GetConsultationBookmarkDetailQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getConsultationBookmarkDetailOptions(consultId, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 매뉴얼 북마크 추가 */
export function useMutationPostManualBookmarkQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: NonNullable<Parameters<typeof postManualBookmarkOptions<TError, TContext>>[0]>["mutation"] },
): UseMutationResult<PostManualBookmarkMutationResult, TError, { manualId: number }, TContext> {
	return useMutation(postManualBookmarkOptions({ mutation: options?.mutation }));
}


/** @summary 매뉴얼 북마크 삭제 */
export function useMutationDeleteManualBookmarkQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: NonNullable<Parameters<typeof deleteManualBookmarkOptions<TError, TContext>>[0]>["mutation"] },
): UseMutationResult<DeleteManualBookmarkMutationResult, TError, { manualId: number }, TContext> {
	return useMutation(deleteManualBookmarkOptions({ mutation: options?.mutation }));
}


/** @summary 상담요약 북마크 추가 */
export function useMutationPostConsultationBookmarkQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: NonNullable<Parameters<typeof postConsultationBookmarkOptions<TError, TContext>>[0]>["mutation"] },
): UseMutationResult<PostConsultationBookmarkMutationResult, TError, { consultId: number }, TContext> {
	return useMutation(postConsultationBookmarkOptions({ mutation: options?.mutation }));
}


/** @summary 상담요약 북마크 삭제 */
export function useMutationDeleteConsultationBookmarkQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: NonNullable<Parameters<typeof deleteConsultationBookmarkOptions<TError, TContext>>[0]>["mutation"] },
): UseMutationResult<DeleteConsultationBookmarkMutationResult, TError, { consultId: number }, TContext> {
	return useMutation(deleteConsultationBookmarkOptions({ mutation: options?.mutation }));
}
