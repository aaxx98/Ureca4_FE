import { useQuery } from "@tanstack/react-query";
import type {
	DataTag,
	DefinedInitialDataOptions,
	DefinedUseQueryResult,
	QueryClient,
	UndefinedInitialDataOptions,
	UseQueryOptions,
	UseQueryResult,
} from "@tanstack/react-query";
import type { GetConsultationDetailParams } from "../api.schemas";
import { getConsultationDetailOptions } from "./consultation-detail.queryOptions";
import type { GetConsultationDetailQueryResult } from "./consultation-detail.types";


/** @summary 상담 상세 조회 */
export function useGetConsultationDetailQuery<TData = GetConsultationDetailQueryResult, TError = unknown>(
	params: GetConsultationDetailParams,
	options: { query: Partial<UseQueryOptions<GetConsultationDetailQueryResult, TError, TData>> & Pick<DefinedInitialDataOptions<GetConsultationDetailQueryResult, TError, GetConsultationDetailQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetConsultationDetailQuery<TData = GetConsultationDetailQueryResult, TError = unknown>(
	params: GetConsultationDetailParams,
	options?: { query?: Partial<UseQueryOptions<GetConsultationDetailQueryResult, TError, TData>> & Pick<UndefinedInitialDataOptions<GetConsultationDetailQueryResult, TError, GetConsultationDetailQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetConsultationDetailQuery<TData = GetConsultationDetailQueryResult, TError = unknown>(
	params: GetConsultationDetailParams,
	options?: { query?: Partial<UseQueryOptions<GetConsultationDetailQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetConsultationDetailQuery<TData = GetConsultationDetailQueryResult, TError = unknown>(
	params: GetConsultationDetailParams,
	options?: { query?: Partial<UseQueryOptions<GetConsultationDetailQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> } {
	const queryOptions = getConsultationDetailOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}
