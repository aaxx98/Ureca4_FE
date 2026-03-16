import type {
	deleteConsultationBookmark,
	deleteManualBookmark,
	getConsultationBookmarkDetail,
	getConsultationBookmarks,
	getManualBookmarkDetail,
	getManualBookmarks,
	postConsultationBookmark,
	postManualBookmark,
} from "./bookmark.queryFunctions";

export type GetManualBookmarksQueryResult = NonNullable<Awaited<ReturnType<typeof getManualBookmarks>>>;
export type GetManualBookmarksQueryError = unknown;

export type GetManualBookmarkDetailQueryResult = NonNullable<Awaited<ReturnType<typeof getManualBookmarkDetail>>>;
export type GetManualBookmarkDetailQueryError = unknown;

export type GetConsultationBookmarksQueryResult = NonNullable<Awaited<ReturnType<typeof getConsultationBookmarks>>>;
export type GetConsultationBookmarksQueryError = unknown;

export type GetConsultationBookmarkDetailQueryResult = NonNullable<Awaited<ReturnType<typeof getConsultationBookmarkDetail>>>;
export type GetConsultationBookmarkDetailQueryError = unknown;

export type PostManualBookmarkMutationResult = NonNullable<Awaited<ReturnType<typeof postManualBookmark>>>;
export type PostManualBookmarkMutationError = unknown;

export type DeleteManualBookmarkMutationResult = NonNullable<Awaited<ReturnType<typeof deleteManualBookmark>>>;
export type DeleteManualBookmarkMutationError = unknown;

export type PostConsultationBookmarkMutationResult = NonNullable<Awaited<ReturnType<typeof postConsultationBookmark>>>;
export type PostConsultationBookmarkMutationError = unknown;

export type DeleteConsultationBookmarkMutationResult = NonNullable<Awaited<ReturnType<typeof deleteConsultationBookmark>>>;
export type DeleteConsultationBookmarkMutationError = unknown;
