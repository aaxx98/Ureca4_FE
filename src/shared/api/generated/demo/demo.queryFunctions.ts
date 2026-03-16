import { apiClient } from "../../client";
import type {
	ApiResponseDemoConsultDataResponse,
	ApiResponseDemoConsultSubmitResponse,
	DemoConsultSubmitRequest,
} from "../api.schemas";

export const getRandomConsultData = (signal?: AbortSignal) => {
	return apiClient<ApiResponseDemoConsultDataResponse>({
		url: `/demo/consultation`,
		method: "GET",
		signal,
	});
};

export const postConsult = (data: DemoConsultSubmitRequest, signal?: AbortSignal) => {
	return apiClient<ApiResponseDemoConsultSubmitResponse>({
		url: `/demo/consultation`,
		method: "POST",
		headers: { "Content-Type": "application/json" },
		data,
		signal,
	});
};
