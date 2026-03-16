import type {
	DataTag,
	QueryFunction,
	QueryKey,
	UseQueryOptions,
} from "@tanstack/react-query";
import type { GetConsultationDetailParams } from "../api.schemas";
import { getConsultationDetail } from "./consultation-detail.queryFunctions";

export const getGetConsultationDetailQueryKey = (
	params?: GetConsultationDetailParams,
) => [`/consultation/detail`, ...(params ? [params] : [])] as const;

export const getGetConsultationDetailQueryOptions = <
	TData = Awaited<ReturnType<typeof getConsultationDetail>>,
	TError = unknown,
>(
	params: GetConsultationDetailParams,
	options?: {
		query?: Partial<
			UseQueryOptions<
				Awaited<ReturnType<typeof getConsultationDetail>>,
				TError,
				TData
			>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? getGetConsultationDetailQueryKey(params);
	const queryFn: QueryFunction<
		Awaited<ReturnType<typeof getConsultationDetail>>
	> = ({ signal }) => getConsultationDetail(params, signal);

	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof getConsultationDetail>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};
