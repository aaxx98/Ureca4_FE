import type {
	deleteFilterGroup,
	getFilterDefinitions,
	getFilterGroupDetail,
	getMyFilterGroups,
	postFilterGroup,
	putFilterGroup,
	putFilterGroupOrder,
} from "./search-filter.queryFunctions";

export type GetFilterGroupDetailQueryResult = NonNullable<Awaited<ReturnType<typeof getFilterGroupDetail>>>;
export type GetFilterGroupDetailQueryError = unknown;

export type GetMyFilterGroupsQueryResult = NonNullable<Awaited<ReturnType<typeof getMyFilterGroups>>>;
export type GetMyFilterGroupsQueryError = unknown;

export type GetFilterDefinitionsQueryResult = NonNullable<Awaited<ReturnType<typeof getFilterDefinitions>>>;
export type GetFilterDefinitionsQueryError = unknown;

export type PutFilterGroupMutationResult = NonNullable<Awaited<ReturnType<typeof putFilterGroup>>>;
export type PutFilterGroupMutationError = unknown;

export type DeleteFilterGroupMutationResult = NonNullable<Awaited<ReturnType<typeof deleteFilterGroup>>>;
export type DeleteFilterGroupMutationError = unknown;

export type PutFilterGroupOrderMutationResult = NonNullable<Awaited<ReturnType<typeof putFilterGroupOrder>>>;
export type PutFilterGroupOrderMutationError = unknown;

export type PostFilterGroupMutationResult = NonNullable<Awaited<ReturnType<typeof postFilterGroup>>>;
export type PostFilterGroupMutationError = unknown;
