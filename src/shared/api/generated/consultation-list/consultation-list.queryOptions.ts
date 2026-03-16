import type { DataTag, QueryFunction, QueryKey, UseQueryOptions } from "@tanstack/react-query";
import type { GetConsultationListParams } from "../api.schemas";
import { getConsultationList } from "./consultation-list.queryFunctions";
import { getConsultationListKey } from "./consultation-list.keys";
import type { GetConsultationListQueryResult } from "./consultation-list.types";

export const getConsultationListOptions = <TData = GetConsultationListQueryResult, TError = unknown>(
	params?: GetConsultationListParams,
	options?: { query?: Partial<UseQueryOptions<GetConsultationListQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getConsultationListKey(params);
	const queryFn: QueryFunction<GetConsultationListQueryResult> = ({ signal }) =>
		getConsultationList(params, signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<GetConsultationListQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};
