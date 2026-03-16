import type { GetCandidatesParams } from "../api.schemas";

export const getDetailKey = (consultId?: number) =>
	[`/admin/excellent-cases/${consultId}`] as const;

export const getCandidatesKey = (params?: GetCandidatesParams) =>
	[`/admin/excellent-cases/candidates`, ...(params ? [params] : [])] as const;
