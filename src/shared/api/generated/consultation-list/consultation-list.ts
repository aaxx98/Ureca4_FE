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
import type { GetConsultationListParams } from "../api.schemas";
import { getConsultationListOptions } from "./consultation-list.queryOptions";
import type { GetConsultationListQueryResult } from "./consultation-list.types";


/** @summary 상담 목록 조회 */
export function useGetConsultationListQuery<TData = GetConsultationListQueryResult, TError = unknown>(
	params: undefined | GetConsultationListParams,
	options: { query: Partial<UseQueryOptions<GetConsultationListQueryResult, TError, TData>> & Pick<DefinedInitialDataOptions<GetConsultationListQueryResult, TError, GetConsultationListQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetConsultationListQuery<TData = GetConsultationListQueryResult, TError = unknown>(
	params?: GetConsultationListParams,
	options?: { query?: Partial<UseQueryOptions<GetConsultationListQueryResult, TError, TData>> & Pick<UndefinedInitialDataOptions<GetConsultationListQueryResult, TError, GetConsultationListQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetConsultationListQuery<TData = GetConsultationListQueryResult, TError = unknown>(
	params?: GetConsultationListParams,
	options?: { query?: Partial<UseQueryOptions<GetConsultationListQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetConsultationListQuery<TData = GetConsultationListQueryResult, TError = unknown>(
	params?: GetConsultationListParams,
	options?: { query?: Partial<UseQueryOptions<GetConsultationListQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> } {
	const queryOptions = getConsultationListOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}
