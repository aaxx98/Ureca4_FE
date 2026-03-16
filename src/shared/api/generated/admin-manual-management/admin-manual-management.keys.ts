import type {
	DataTag,
	QueryFunction,
	QueryKey,
	UseQueryOptions,
} from "@tanstack/react-query";
import type { GetManualHistoryParams, ManualResponse } from "../api.schemas";
import { getManualHistory } from "./admin-manual-management.queryFunctions";

export const getGetManualHistoryQueryKey = (params?: GetManualHistoryParams) =>
	[`/admin/manuals/history`, ...(params ? [params] : [])] as const;

export const getGetManualHistoryQueryOptions = <
	TData = Awaited<ReturnType<typeof getManualHistory>>,
	TError = ManualResponse[],
>(
	params?: GetManualHistoryParams,
	options?: {
		query?: Partial<
			UseQueryOptions<
				Awaited<ReturnType<typeof getManualHistory>>,
				TError,
				TData
			>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? getGetManualHistoryQueryKey(params);
	const queryFn: QueryFunction<
		Awaited<ReturnType<typeof getManualHistory>>
	> = ({ signal }) => getManualHistory(params, signal);

	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof getManualHistory>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetManualHistoryQueryResult = NonNullable<Awaited<ReturnType<typeof getManualHistory>>>;
export type GetManualHistoryQueryError = ManualResponse[];
