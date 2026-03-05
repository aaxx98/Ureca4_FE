import { apiClient } from "../../client";
import type {
	ConsultationSummaryDetailResponse,
	ListParams,
	PageConsultationSummaryListResponse,
} from "../api.schemas";

export const list = (params?: ListParams, signal?: AbortSignal) => {
	return apiClient<PageConsultationSummaryListResponse>({
		url: `/api/summaries`,
		method: "GET",
		params,
		signal,
	});
};

export const detail = (consultId: number, signal?: AbortSignal) => {
	return apiClient<ConsultationSummaryDetailResponse>({
		url: `/api/summaries/${consultId}`,
		method: "GET",
		signal,
	});
};
