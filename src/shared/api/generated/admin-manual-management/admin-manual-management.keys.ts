import type { GetManualHistoryParams } from "../api.schemas";

export const getManualHistoryKey = (params?: GetManualHistoryParams) =>
	[`/admin/manuals/history`, ...(params ? [params] : [])] as const;
