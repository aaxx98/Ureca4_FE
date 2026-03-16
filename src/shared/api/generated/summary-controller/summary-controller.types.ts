import type { getSummaryDetail, getSummaryList } from "./summary-controller.queryFunctions";

export type GetSummaryListQueryResult = NonNullable<Awaited<ReturnType<typeof getSummaryList>>>;
export type GetSummaryListQueryError = unknown;

export type GetSummaryDetailQueryResult = NonNullable<Awaited<ReturnType<typeof getSummaryDetail>>>;
export type GetSummaryDetailQueryError = unknown;
