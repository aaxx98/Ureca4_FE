import type { GetNoticeListParams } from "../api.schemas";

export const getNoticeDetailKey = (noticeId?: number) => [`/notices/${noticeId}`] as const;

export const getNoticeListKey = (params?: GetNoticeListParams) =>
	[`/notices`, ...(params ? [params] : [])] as const;
