import type {
	DataTag,
	QueryFunction,
	QueryKey,
	UseQueryOptions,
} from "@tanstack/react-query";
import type { GetWeeklyBoardParams } from "../api.schemas";
import {
	getBoardDetailKey,
	getWeeklyBoardKey,
} from "./weekly-excellent-case-board.keys";
import {
	getBoardDetail,
	getWeeklyBoard,
} from "./weekly-excellent-case-board.queryFunctions";
import type {
	GetBoardDetailQueryResult,
	GetWeeklyBoardQueryResult,
} from "./weekly-excellent-case-board.types";

export const getWeeklyBoardOptions = <
	TData = GetWeeklyBoardQueryResult,
	TError = unknown,
>(
	params?: GetWeeklyBoardParams,
	options?: {
		query?: Partial<UseQueryOptions<GetWeeklyBoardQueryResult, TError, TData>>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getWeeklyBoardKey(params);
	const queryFn: QueryFunction<GetWeeklyBoardQueryResult> = ({ signal }) =>
		getWeeklyBoard(params, signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		GetWeeklyBoardQueryResult,
		TError,
		TData
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getBoardDetailOptions = <
	TData = GetBoardDetailQueryResult,
	TError = unknown,
>(
	consultId: number,
	options?: {
		query?: Partial<UseQueryOptions<GetBoardDetailQueryResult, TError, TData>>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getBoardDetailKey(consultId);
	const queryFn: QueryFunction<GetBoardDetailQueryResult> = ({ signal }) =>
		getBoardDetail(consultId, signal);
	return {
		queryKey,
		queryFn,
		enabled: !!consultId,
		...queryOptions,
	} as UseQueryOptions<GetBoardDetailQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};
