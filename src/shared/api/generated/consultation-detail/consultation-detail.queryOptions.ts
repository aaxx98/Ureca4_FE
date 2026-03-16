import type { DataTag, QueryFunction, QueryKey, UseQueryOptions } from "@tanstack/react-query";
import type { GetConsultationDetailParams } from "../api.schemas";
import { getConsultationDetail } from "./consultation-detail.queryFunctions";
import { getConsultationDetailKey } from "./consultation-detail.keys";
import type { GetConsultationDetailQueryResult } from "./consultation-detail.types";

export const getConsultationDetailOptions = <TData = GetConsultationDetailQueryResult, TError = unknown>(
	params: GetConsultationDetailParams,
	options?: { query?: Partial<UseQueryOptions<GetConsultationDetailQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getConsultationDetailKey(params);
	const queryFn: QueryFunction<GetConsultationDetailQueryResult> = ({ signal }) =>
		getConsultationDetail(params, signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<GetConsultationDetailQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};
