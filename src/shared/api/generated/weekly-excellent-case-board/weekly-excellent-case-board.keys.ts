import type { GetWeeklyBoardParams } from "../api.schemas";

export const getWeeklyBoardKey = (params?: GetWeeklyBoardParams) =>
	[`/excellent-cases`, ...(params ? [params] : [])] as const;

export const getBoardDetailKey = (consultId?: number) =>
	[`/excellent-cases/${consultId}`] as const;
