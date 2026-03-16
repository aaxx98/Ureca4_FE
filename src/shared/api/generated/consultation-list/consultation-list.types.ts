import type { getConsultationList } from "./consultation-list.queryFunctions";

export type GetConsultationListQueryResult = NonNullable<Awaited<ReturnType<typeof getConsultationList>>>;
export type GetConsultationListQueryError = unknown;
