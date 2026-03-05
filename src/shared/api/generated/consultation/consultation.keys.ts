import type {
	DataTag,
	QueryFunction,
	QueryKey,
	UseQueryOptions,
} from "@tanstack/react-query";

import { getRandomConsultData1 } from "./consultation.queryFunctions";

export const getGetRandomConsultData1QueryKey = () =>
	[`/consultation`] as const;

export const getGetRandomConsultData1QueryOptions = <
	TData = Awaited<ReturnType<typeof getRandomConsultData1>>,
	TError = unknown,
>(options?: {
	query?: Partial<
		UseQueryOptions<
			Awaited<ReturnType<typeof getRandomConsultData1>>,
			TError,
			TData
		>
	>;
}) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getGetRandomConsultData1QueryKey();
	const queryFn: QueryFunction<
		Awaited<ReturnType<typeof getRandomConsultData1>>
	> = ({ signal }) => getRandomConsultData1(signal);

	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof getRandomConsultData1>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetRandomConsultData1QueryResult = NonNullable<
	Awaited<ReturnType<typeof getRandomConsultData1>>
>;
export type GetRandomConsultData1QueryError = unknown;
