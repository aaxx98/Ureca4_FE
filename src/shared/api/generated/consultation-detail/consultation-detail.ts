import { useQuery } from "@tanstack/react-query";
import type { DataTag, QueryKey, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { GetConsultationDetailParams } from "../api.schemas";
import { getConsultationDetailOptions } from "./consultation-detail.queryOptions";
import type { GetConsultationDetailQueryResult } from "./consultation-detail.types";

/** @summary 상담결과서 상세 조회 */
export function useGetConsultationDetailQuery<TData = GetConsultationDetailQueryResult, TError = unknown>(
	params: GetConsultationDetailParams,
	options?: { query?: Partial<UseQueryOptions<GetConsultationDetailQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getConsultationDetailOptions(params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}
