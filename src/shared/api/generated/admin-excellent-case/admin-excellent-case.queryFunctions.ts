import { apiClient } from "../../client";
import type {
	EvaluationDetailResponse,
	ExcellentCaseRegisterRequest,
	GetCandidatesParams,
	PageEvaluationListResponse,
} from "../api.schemas";

export const postSelectExcellentCase = (
	consultId: number,
	data: ExcellentCaseRegisterRequest,
	signal?: AbortSignal,
) => {
	return apiClient<string>({
		url: `/admin/excellent-cases/${consultId}/select`,
		method: "POST",
		headers: { "Content-Type": "application/json" },
		data,
		signal,
	});
};

export const patchRejectExcellentCase = (consultId: number) => {
	return apiClient<string>({
		url: `/admin/excellent-cases/${consultId}/reject`,
		method: "PATCH",
	});
};

export const getDetail = (consultId: number, signal?: AbortSignal) => {
	return apiClient<EvaluationDetailResponse>({
		url: `/admin/excellent-cases/${consultId}`,
		method: "GET",
		signal,
	});
};

export const getCandidates = (
	params?: GetCandidatesParams,
	signal?: AbortSignal,
) => {
	return apiClient<PageEvaluationListResponse>({
		url: `/admin/excellent-cases/candidates`,
		method: "GET",
		params,
		signal,
	});
};
