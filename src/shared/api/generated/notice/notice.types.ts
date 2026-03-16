import type {
	deleteNotice,
	getNoticeDetail,
	getNoticeList,
	postNotice,
	putNotice,
} from "./notice.queryFunctions";

export type GetNoticeDetailQueryResult = NonNullable<Awaited<ReturnType<typeof getNoticeDetail>>>;
export type GetNoticeDetailQueryError = unknown;

export type GetNoticeListQueryResult = NonNullable<Awaited<ReturnType<typeof getNoticeList>>>;
export type GetNoticeListQueryError = unknown;

export type PutNoticeMutationResult = NonNullable<Awaited<ReturnType<typeof putNotice>>>;
export type PutNoticeMutationError = unknown;

export type DeleteNoticeMutationResult = NonNullable<Awaited<ReturnType<typeof deleteNotice>>>;
export type DeleteNoticeMutationError = unknown;

export type PostNoticeMutationResult = NonNullable<Awaited<ReturnType<typeof postNotice>>>;
export type PostNoticeMutationError = unknown;
