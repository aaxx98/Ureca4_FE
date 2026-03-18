export const getFilterGroupDetailKey = (id?: number) =>
	[`/search-filters/${id}`] as const;

export const getMyFilterGroupsKey = () => [`/search-filters`] as const;

export const getFilterDefinitionsKey = () => [`/filters`] as const;
