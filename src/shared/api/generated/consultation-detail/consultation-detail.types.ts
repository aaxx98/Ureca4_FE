import type { getConsultationDetail } from "./consultation-detail.queryFunctions";

export type GetConsultationDetailQueryResult = NonNullable<Awaited<ReturnType<typeof getConsultationDetail>>>;
export type GetConsultationDetailQueryError = unknown;
