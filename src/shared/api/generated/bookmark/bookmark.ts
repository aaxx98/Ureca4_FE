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
	options: { query: Partial<UseQueryOptions<GetManualBookmarksQueryResult, TError, TData>> & Pick<DefinedInitialDataOptions<GetManualBookmarksQueryResult, TError, GetManualBookmarksQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetManualBookmarksQuery<TData = GetManualBookmarksQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetManualBookmarksQueryResult, TError, TData>> & Pick<UndefinedInitialDataOptions<GetManualBookmarksQueryResult, TError, GetManualBookmarksQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetManualBookmarksQuery<TData = GetManualBookmarksQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetManualBookmarksQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetManualBookmarksQuery<TData = GetManualBookmarksQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetManualBookmarksQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> } {
	const queryOptions = getManualBookmarksOptions(options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 매뉴얼 북마크 상세 조회 */
export function useGetManualBookmarkDetailQuery<TData = GetManualBookmarkDetailQueryResult, TError = unknown>(
	manualId: number,
	options: { query: Partial<UseQueryOptions<GetManualBookmarkDetailQueryResult, TError, TData>> & Pick<DefinedInitialDataOptions<GetManualBookmarkDetailQueryResult, TError, GetManualBookmarkDetailQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetManualBookmarkDetailQuery<TData = GetManualBookmarkDetailQueryResult, TError = unknown>(
	manualId: number,
	options?: { query?: Partial<UseQueryOptions<GetManualBookmarkDetailQueryResult, TError, TData>> & Pick<UndefinedInitialDataOptions<GetManualBookmarkDetailQueryResult, TError, GetManualBookmarkDetailQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetManualBookmarkDetailQuery<TData = GetManualBookmarkDetailQueryResult, TError = unknown>(
	manualId: number,
	options?: { query?: Partial<UseQueryOptions<GetManualBookmarkDetailQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetManualBookmarkDetailQuery<TData = GetManualBookmarkDetailQueryResult, TError = unknown>(
	manualId: number,
	options?: { query?: Partial<UseQueryOptions<GetManualBookmarkDetailQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> } {
	const queryOptions = getManualBookmarkDetailOptions(manualId, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 상담 북마크 목록 조회 */
export function useGetConsultationBookmarksQuery<TData = GetConsultationBookmarksQueryResult, TError = unknown>(
	options: { query: Partial<UseQueryOptions<GetConsultationBookmarksQueryResult, TError, TData>> & Pick<DefinedInitialDataOptions<GetConsultationBookmarksQueryResult, TError, GetConsultationBookmarksQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetConsultationBookmarksQuery<TData = GetConsultationBookmarksQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetConsultationBookmarksQueryResult, TError, TData>> & Pick<UndefinedInitialDataOptions<GetConsultationBookmarksQueryResult, TError, GetConsultationBookmarksQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetConsultationBookmarksQuery<TData = GetConsultationBookmarksQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetConsultationBookmarksQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetConsultationBookmarksQuery<TData = GetConsultationBookmarksQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetConsultationBookmarksQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> } {
	const queryOptions = getConsultationBookmarksOptions(options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 상담 북마크 상세 조회 */
export function useGetConsultationBookmarkDetailQuery<TData = GetConsultationBookmarkDetailQueryResult, TError = unknown>(
	consultId: number,
	options: { query: Partial<UseQueryOptions<GetConsultationBookmarkDetailQueryResult, TError, TData>> & Pick<DefinedInitialDataOptions<GetConsultationBookmarkDetailQueryResult, TError, GetConsultationBookmarkDetailQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetConsultationBookmarkDetailQuery<TData = GetConsultationBookmarkDetailQueryResult, TError = unknown>(
	consultId: number,
	options?: { query?: Partial<UseQueryOptions<GetConsultationBookmarkDetailQueryResult, TError, TData>> & Pick<UndefinedInitialDataOptions<GetConsultationBookmarkDetailQueryResult, TError, GetConsultationBookmarkDetailQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetConsultationBookmarkDetailQuery<TData = GetConsultationBookmarkDetailQueryResult, TError = unknown>(
	consultId: number,
	options?: { query?: Partial<UseQueryOptions<GetConsultationBookmarkDetailQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetConsultationBookmarkDetailQuery<TData = GetConsultationBookmarkDetailQueryResult, TError = unknown>(
	consultId: number,
	options?: { query?: Partial<UseQueryOptions<GetConsultationBookmarkDetailQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> } {
	const queryOptions = getConsultationBookmarkDetailOptions(consultId, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 매뉴얼 북마크 등록 */
export function useMutationPostManualBookmarkQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: UseMutationOptions<PostManualBookmarkMutationResult, TError, { manualId: number }, TContext> },
	queryClient?: QueryClient,
): UseMutationResult<PostManualBookmarkMutationResult, TError, { manualId: number }, TContext> {
	return useMutation(postManualBookmarkOptions(options), queryClient);
}


/** @summary 매뉴얼 북마크 삭제 */
export function useMutationDeleteManualBookmarkQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: UseMutationOptions<DeleteManualBookmarkMutationResult, TError, { manualId: number }, TContext> },
	queryClient?: QueryClient,
): UseMutationResult<DeleteManualBookmarkMutationResult, TError, { manualId: number }, TContext> {
	return useMutation(deleteManualBookmarkOptions(options), queryClient);
}


/** @summary 상담 북마크 등록 */
export function useMutationPostConsultationBookmarkQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: UseMutationOptions<PostConsultationBookmarkMutationResult, TError, { consultId: number }, TContext> },
	queryClient?: QueryClient,
): UseMutationResult<PostConsultationBookmarkMutationResult, TError, { consultId: number }, TContext> {
	return useMutation(postConsultationBookmarkOptions(options), queryClient);
}


/** @summary 상담 북마크 삭제 */
export function useMutationDeleteConsultationBookmarkQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: UseMutationOptions<DeleteConsultationBookmarkMutationResult, TError, { consultId: number }, TContext> },
	queryClient?: QueryClient,
): UseMutationResult<DeleteConsultationBookmarkMutationResult, TError, { consultId: number }, TContext> {
	return useMutation(deleteConsultationBookmarkOptions(options), queryClient);
}
