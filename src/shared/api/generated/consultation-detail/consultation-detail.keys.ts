import type { GetConsultationDetailParams } from "../api.schemas";

export const getConsultationDetailKey = (params?: GetConsultationDetailParams) =>
	[`/consultation/detail`, ...(params ? [params] : [])] as const;
