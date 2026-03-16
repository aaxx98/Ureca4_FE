import type { getManualHistory } from "./admin-manual-management.queryFunctions";

export type GetManualHistoryQueryResult = NonNullable<Awaited<ReturnType<typeof getManualHistory>>>;
export type GetManualHistoryQueryError = import("../api.schemas").ManualResponse[];

export type PutManualMutationResult = undefined;
export type PutManualMutationBody = import("../api.schemas").ManualUpdateRequest;
export type PutManualMutationError = unknown;

export type PostManualMutationResult = undefined;
export type PostManualMutationBody = import("../api.schemas").ManualRequest;
export type PostManualMutationError = unknown;

export type PatchDeactivateManualMutationResult = undefined;
export type PatchDeactivateManualMutationError = unknown;

export type PatchActivateManualMutationResult = undefined;
export type PatchActivateManualMutationError = unknown;
