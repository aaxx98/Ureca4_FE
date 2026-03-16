import type {
	getBoardDetail,
	getWeeklyBoard,
} from "./weekly-excellent-case-board.queryFunctions";

export type GetWeeklyBoardQueryResult = NonNullable<
	Awaited<ReturnType<typeof getWeeklyBoard>>
>;
export type GetWeeklyBoardQueryError = unknown;

export type GetBoardDetailQueryResult = NonNullable<
	Awaited<ReturnType<typeof getBoardDetail>>
>;
export type GetBoardDetailQueryError = unknown;
