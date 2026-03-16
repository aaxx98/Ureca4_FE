import type { DataTag, QueryFunction, QueryKey, UseQueryOptions } from "@tanstack/react-query";
import { getRandomConsultData1 } from "./consultation.queryFunctions";
import { getRandomConsultData1Key } from "./consultation.keys";
import type { GetRandomConsultData1QueryResult } from "./consultation.types";

export const getRandomConsultData1Options = <TData = GetRandomConsultData1QueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetRandomConsultData1QueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getRandomConsultData1Key();
	const queryFn: QueryFunction<GetRandomConsultData1QueryResult> = ({ signal }) => getRandomConsultData1(signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<GetRandomConsultData1QueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};
