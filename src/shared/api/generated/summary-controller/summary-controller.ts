import { useQuery } from "@tanstack/react-query";
import type { DataTag, QueryKey, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { ListParams } from "../api.schemas";
import { getSummaryDetailOptions, getSummaryListOptions } from "./summary-controller.queryOptions";
import type { GetSummaryDetailQueryResult, GetSummaryListQueryResult } from "./summary-controller.types";

/** @summary 상담요약 목록 조회 */
export function useGetSummaryListQuery<TData = GetSummaryListQueryResult, TError = unknown>(
	params?: ListParams,
	options?: { query?: Partial<UseQueryOptions<GetSummaryListQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getSummaryListOptions(params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 상담요약 상세 조회 */
export function useGetSummaryDetailQuery<TData = GetSummaryDetailQueryResult, TError = unknown>(
	consultId: number,
	options?: { query?: Partial<UseQueryOptions<GetSummaryDetailQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getSummaryDetailOptions(consultId, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}
