import { apiClient } from "../../client";
import type {
	EvaluationDetailResponse,
	GetWeeklyBoardParams,
	WeeklyExcellentCaseResponse,
} from "../api.schemas";

export const getWeeklyBoard = (
	params?: GetWeeklyBoardParams,
	signal?: AbortSignal,
) => {
	return apiClient<WeeklyExcellentCaseResponse[]>({
		url: `/excellent-cases`,
		method: "GET",
		params,
		signal,
	});
};

export const getBoardDetail = (consultId: number, signal?: AbortSignal) => {
	return apiClient<EvaluationDetailResponse>({
		url: `/excellent-cases/${consultId}`,
		method: "GET",
		signal,
	});
};
