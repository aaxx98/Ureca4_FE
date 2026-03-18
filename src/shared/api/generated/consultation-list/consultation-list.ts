import { useQuery } from "@tanstack/react-query";
import type { DataTag, QueryKey, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { GetConsultationListParams } from "../api.schemas";
import type { GetConsultationListQueryResult } from "./consultation-list.types";
import { getConsultationListOptions } from "./consultation-list.queryOptions";

/** @summary 상담 목록 조회 */
export function useGetConsultationListQuery<TData = GetConsultationListQueryResult, TError = unknown>(
	params?: GetConsultationListParams,
	options?: { query?: Partial<UseQueryOptions<GetConsultationListQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getConsultationListOptions(params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}
