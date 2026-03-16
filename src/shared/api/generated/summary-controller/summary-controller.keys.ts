import type { ListParams } from "../api.schemas";

export const getSummaryListKey = (params?: ListParams) =>
	[`/api/summaries`, ...(params ? [params] : [])] as const;

export const getSummaryDetailKey = (consultId?: number) =>
	[`/api/summaries/${consultId}`] as const;
