import type {
	DataTag,
	QueryFunction,
	QueryKey,
	UseQueryOptions,
} from "@tanstack/react-query";

import { getRandomConsultData } from "./demo.queryFunctions";

export const getGetRandomConsultDataQueryKey = () =>
	[`/demo/consultation`] as const;

export const getGetRandomConsultDataQueryOptions = <
	TData = Awaited<ReturnType<typeof getRandomConsultData>>,
	TError = unknown,
>(options?: {
	query?: Partial<
		UseQueryOptions<
			Awaited<ReturnType<typeof getRandomConsultData>>,
			TError,
			TData
		>
	>;
}) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getGetRandomConsultDataQueryKey();
	const queryFn: QueryFunction<
		Awaited<ReturnType<typeof getRandomConsultData>>
	> = ({ signal }) => getRandomConsultData(signal);

	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof getRandomConsultData>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetRandomConsultDataQueryResult = NonNullable<
	Awaited<ReturnType<typeof getRandomConsultData>>
>;
export type GetRandomConsultDataQueryError = unknown;
