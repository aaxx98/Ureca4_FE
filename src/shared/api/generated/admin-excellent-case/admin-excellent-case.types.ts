import type {
	getCandidates,
	getDetail,
	patchRejectExcellentCase,
	postSelectExcellentCase,
} from "./admin-excellent-case.queryFunctions";

export type GetDetailQueryResult = NonNullable<
	Awaited<ReturnType<typeof getDetail>>
>;
export type GetDetailQueryError = unknown;

export type GetCandidatesQueryResult = NonNullable<
	Awaited<ReturnType<typeof getCandidates>>
>;
export type GetCandidatesQueryError = unknown;

export type PostSelectExcellentCaseMutationResult = NonNullable<
	Awaited<ReturnType<typeof postSelectExcellentCase>>
>;
export type PostSelectExcellentCaseMutationError = unknown;

export type PatchRejectExcellentCaseMutationResult = NonNullable<
	Awaited<ReturnType<typeof patchRejectExcellentCase>>
>;
export type PatchRejectExcellentCaseMutationError = unknown;
