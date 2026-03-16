import type {
	DataTag,
	QueryFunction,
	QueryKey,
	UseQueryOptions,
} from "@tanstack/react-query";
import type {
	ApiResponseConsultationBookmarkDetailResponseDto,
	ApiResponseListConsultationBookmarkResponseDto,
	ApiResponseListManualBookmarkResponseDto,
	ApiResponseManualBookmarkDetailResponseDto,
} from "../api.schemas";
import {
	getConsultationBookmarkDetail,
	getConsultationBookmarks,
	getManualBookmarkDetail,
	getManualBookmarks,
} from "./bookmark.queryFunctions";

export const getGetManualBookmarksQueryKey = () =>
	[`/bookmarks/manuals`] as const;

export const getGetManualBookmarksQueryOptions = <
	TData = Awaited<ReturnType<typeof getManualBookmarks>>,
	TError = unknown,
>(options?: {
	query?: Partial<
		UseQueryOptions<
			Awaited<ReturnType<typeof getManualBookmarks>>,
			TError,
			TData
		>
	>;
}) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getGetManualBookmarksQueryKey();
	const queryFn: QueryFunction<
		Awaited<ReturnType<typeof getManualBookmarks>>
	> = ({ signal }) => getManualBookmarks(signal);

	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof getManualBookmarks>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetManualBookmarksQueryResult = NonNullable<Awaited<ReturnType<typeof getManualBookmarks>>>;
export type GetManualBookmarksQueryError = unknown;

export const getGetManualBookmarkDetailQueryKey = (manualId?: number) =>
	[`/bookmarks/manuals/${manualId}/detail`] as const;

export const getGetManualBookmarkDetailQueryOptions = <
	TData = Awaited<ReturnType<typeof getManualBookmarkDetail>>,
	TError = unknown,
>(
	manualId: number,
	options?: {
		query?: Partial<
			UseQueryOptions<
				Awaited<ReturnType<typeof getManualBookmarkDetail>>,
				TError,
				TData
			>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? getGetManualBookmarkDetailQueryKey(manualId);
	const queryFn: QueryFunction<
		Awaited<ReturnType<typeof getManualBookmarkDetail>>
	> = ({ signal }) => getManualBookmarkDetail(manualId, signal);

	return {
		queryKey,
		queryFn,
		enabled: !!(manualId),
		...queryOptions,
	} as UseQueryOptions<
		Awaited<ReturnType<typeof getManualBookmarkDetail>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetManualBookmarkDetailQueryResult = NonNullable<Awaited<ReturnType<typeof getManualBookmarkDetail>>>;
export type GetManualBookmarkDetailQueryError = unknown;

export const getGetConsultationBookmarksQueryKey = () =>
	[`/bookmarks/consultations`] as const;

export const getGetConsultationBookmarksQueryOptions = <
	TData = Awaited<ReturnType<typeof getConsultationBookmarks>>,
	TError = unknown,
>(options?: {
	query?: Partial<
		UseQueryOptions<
			Awaited<ReturnType<typeof getConsultationBookmarks>>,
			TError,
			TData
		>
	>;
}) => {
	const { query: queryOptions } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? getGetConsultationBookmarksQueryKey();
	const queryFn: QueryFunction<
		Awaited<ReturnType<typeof getConsultationBookmarks>>
	> = ({ signal }) => getConsultationBookmarks(signal);

	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof getConsultationBookmarks>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetConsultationBookmarksQueryResult = NonNullable<Awaited<ReturnType<typeof getConsultationBookmarks>>>;
export type GetConsultationBookmarksQueryError = unknown;

export const getGetConsultationBookmarkDetailQueryKey = (consultId?: number) =>
	[`/bookmarks/consultations/${consultId}/detail`] as const;

export const getGetConsultationBookmarkDetailQueryOptions = <
	TData = Awaited<ReturnType<typeof getConsultationBookmarkDetail>>,
	TError = unknown,
>(
	consultId: number,
	options?: {
		query?: Partial<
			UseQueryOptions<
				Awaited<ReturnType<typeof getConsultationBookmarkDetail>>,
				TError,
				TData
			>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ??
		getGetConsultationBookmarkDetailQueryKey(consultId);
	const queryFn: QueryFunction<
		Awaited<ReturnType<typeof getConsultationBookmarkDetail>>
	> = ({ signal }) => getConsultationBookmarkDetail(consultId, signal);

	return {
		queryKey,
		queryFn,
		enabled: !!(consultId),
		...queryOptions,
	} as UseQueryOptions<
		Awaited<ReturnType<typeof getConsultationBookmarkDetail>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetConsultationBookmarkDetailQueryResult = NonNullable<Awaited<ReturnType<typeof getConsultationBookmarkDetail>>>;
export type GetConsultationBookmarkDetailQueryError = unknown;
