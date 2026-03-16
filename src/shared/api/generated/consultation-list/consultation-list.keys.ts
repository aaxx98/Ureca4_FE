import type {
	DataTag,
	QueryFunction,
	QueryKey,
	UseQueryOptions,
} from "@tanstack/react-query";
import type { GetConsultationListParams } from "../api.schemas";
import { getConsultationList } from "./consultation-list.queryFunctions";

export const getGetConsultationListQueryKey = (
	params?: GetConsultationListParams,
) => [`/consultation/list`, ...(params ? [params] : [])] as const;

export const getGetConsultationListQueryOptions = <
	TData = Awaited<ReturnType<typeof getConsultationList>>,
	TError = unknown,
>(
	params?: GetConsultationListParams,
	options?: {
		query?: Partial<
			UseQueryOptions<
				Awaited<ReturnType<typeof getConsultationList>>,
				TError,
				TData
			>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? getGetConsultationListQueryKey(params);
	const queryFn: QueryFunction<
		Awaited<ReturnType<typeof getConsultationList>>
	> = ({ signal }) => getConsultationList(params, signal);

	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof getConsultationList>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};
