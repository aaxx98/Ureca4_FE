import type { GetConsultationListParams } from "../api.schemas";

export const getConsultationListKey = (params?: GetConsultationListParams) =>
	[`/consultation/list`, ...(params ? [params] : [])] as const;
