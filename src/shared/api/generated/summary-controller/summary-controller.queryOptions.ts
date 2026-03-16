import type {
	DataTag,
	QueryFunction,
	QueryKey,
	UseQueryOptions,
} from "@tanstack/react-query";
import type { ListParams } from "../api.schemas";
import { getSummaryDetail, getSummaryList } from "./summary-controller.queryFunctions";
import { getSummaryDetailKey, getSummaryListKey } from "./summary-controller.keys";
import type { GetSummaryDetailQueryResult, GetSummaryListQueryResult } from "./summary-controller.types";

export const getSummaryListOptions = <TData = GetSummaryListQueryResult, TError = unknown>(
	params?: ListParams,
	options?: { query?: Partial<UseQueryOptions<GetSummaryListQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getSummaryListKey(params);
	const queryFn: QueryFunction<GetSummaryListQueryResult> = ({ signal }) => getSummaryList(params, signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<GetSummaryListQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getSummaryDetailOptions = <TData = GetSummaryDetailQueryResult, TError = unknown>(
	consultId: number,
	options?: { query?: Partial<UseQueryOptions<GetSummaryDetailQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getSummaryDetailKey(consultId);
	const queryFn: QueryFunction<GetSummaryDetailQueryResult> = ({ signal }) => getSummaryDetail(consultId, signal);
	return {
		queryKey,
		queryFn,
		enabled: !!consultId,
		...queryOptions,
	} as UseQueryOptions<GetSummaryDetailQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};
