import type {
	DataTag,
	MutationFunction,
	QueryFunction,
	QueryKey,
	UseMutationOptions,
	UseQueryOptions,
} from "@tanstack/react-query";
import {
	deleteConsultationBookmark,
	deleteManualBookmark,
	getConsultationBookmarkDetail,
	getConsultationBookmarks,
	getManualBookmarkDetail,
	getManualBookmarks,
	postConsultationBookmark,
	postManualBookmark,
} from "./bookmark.queryFunctions";
import {
	getConsultationBookmarkDetailKey,
	getConsultationBookmarksKey,
	getManualBookmarkDetailKey,
	getManualBookmarksKey,
} from "./bookmark.keys";
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

export const getManualBookmarksOptions = <TData = GetManualBookmarksQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetManualBookmarksQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getManualBookmarksKey();
	const queryFn: QueryFunction<GetManualBookmarksQueryResult> = ({ signal }) => getManualBookmarks(signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<GetManualBookmarksQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getManualBookmarkDetailOptions = <TData = GetManualBookmarkDetailQueryResult, TError = unknown>(
	manualId: number,
	options?: { query?: Partial<UseQueryOptions<GetManualBookmarkDetailQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getManualBookmarkDetailKey(manualId);
	const queryFn: QueryFunction<GetManualBookmarkDetailQueryResult> = ({ signal }) =>
		getManualBookmarkDetail(manualId, signal);
	return { queryKey, queryFn, enabled: !!manualId, ...queryOptions } as UseQueryOptions<
		GetManualBookmarkDetailQueryResult,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export const getConsultationBookmarksOptions = <TData = GetConsultationBookmarksQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetConsultationBookmarksQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getConsultationBookmarksKey();
	const queryFn: QueryFunction<GetConsultationBookmarksQueryResult> = ({ signal }) =>
		getConsultationBookmarks(signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		GetConsultationBookmarksQueryResult,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export const getConsultationBookmarkDetailOptions = <TData = GetConsultationBookmarkDetailQueryResult, TError = unknown>(
	consultId: number,
	options?: { query?: Partial<UseQueryOptions<GetConsultationBookmarkDetailQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getConsultationBookmarkDetailKey(consultId);
	const queryFn: QueryFunction<GetConsultationBookmarkDetailQueryResult> = ({ signal }) =>
		getConsultationBookmarkDetail(consultId, signal);
	return { queryKey, queryFn, enabled: !!consultId, ...queryOptions } as UseQueryOptions<
		GetConsultationBookmarkDetailQueryResult,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export const postManualBookmarkOptions = <TError = unknown, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<PostManualBookmarkMutationResult, TError, { manualId: number }, TContext>;
	},
): UseMutationOptions<PostManualBookmarkMutationResult, TError, { manualId: number }, TContext> => {
	const mutationKey = ["postManualBookmark"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<PostManualBookmarkMutationResult, { manualId: number }> = ({ manualId }) =>
		postManualBookmark(manualId) as Promise<PostManualBookmarkMutationResult>;
	return { mutationFn, ...mutationOptions };
};

export const deleteManualBookmarkOptions = <TError = unknown, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<DeleteManualBookmarkMutationResult, TError, { manualId: number }, TContext>;
	},
): UseMutationOptions<DeleteManualBookmarkMutationResult, TError, { manualId: number }, TContext> => {
	const mutationKey = ["deleteManualBookmark"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<DeleteManualBookmarkMutationResult, { manualId: number }> = ({ manualId }) =>
		deleteManualBookmark(manualId) as Promise<DeleteManualBookmarkMutationResult>;
	return { mutationFn, ...mutationOptions };
};

export const postConsultationBookmarkOptions = <TError = unknown, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<PostConsultationBookmarkMutationResult, TError, { consultId: number }, TContext>;
	},
): UseMutationOptions<PostConsultationBookmarkMutationResult, TError, { consultId: number }, TContext> => {
	const mutationKey = ["postConsultationBookmark"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<PostConsultationBookmarkMutationResult, { consultId: number }> = ({ consultId }) =>
		postConsultationBookmark(consultId) as Promise<PostConsultationBookmarkMutationResult>;
	return { mutationFn, ...mutationOptions };
};

export const deleteConsultationBookmarkOptions = <TError = unknown, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<DeleteConsultationBookmarkMutationResult, TError, { consultId: number }, TContext>;
	},
): UseMutationOptions<DeleteConsultationBookmarkMutationResult, TError, { consultId: number }, TContext> => {
	const mutationKey = ["deleteConsultationBookmark"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<DeleteConsultationBookmarkMutationResult, { consultId: number }> = ({ consultId }) =>
		deleteConsultationBookmark(consultId) as Promise<DeleteConsultationBookmarkMutationResult>;
	return { mutationFn, ...mutationOptions };
};
