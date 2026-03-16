import type { getRandomConsultData, postConsult } from "./demo.queryFunctions";

export type GetRandomConsultDataQueryResult = NonNullable<Awaited<ReturnType<typeof getRandomConsultData>>>;
export type GetRandomConsultDataQueryError = unknown;

export type PostConsultMutationResult = NonNullable<Awaited<ReturnType<typeof postConsult>>>;
export type PostConsultMutationError = unknown;
