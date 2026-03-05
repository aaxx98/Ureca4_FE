import { apiClient } from "../../client";
import type { ApiResponseConsultDataResponse } from "../api.schemas";

export const getRandomConsultData1 = (signal?: AbortSignal) => {
	return apiClient<ApiResponseConsultDataResponse>({
		url: `/consultation`,
		method: "GET",
		signal,
	});
};
