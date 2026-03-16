export const getFilterGroupDetailKey = (id?: number) =>
	[`/api/search-filters/${id}`] as const;

export const getMyFilterGroupsKey = () => [`/api/search-filters`] as const;

export const getFilterDefinitionsKey = () => [`/api/filters`] as const;
