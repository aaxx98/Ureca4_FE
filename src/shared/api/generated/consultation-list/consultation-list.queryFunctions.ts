import { apiClient } from "../../client";
import type {
	ApiResponseConsultationListResponseDto,
	GetConsultationListParams,
} from "../api.schemas";

export const getConsultationList = (params?: GetConsultationListParams, signal?: AbortSignal) => {
	return apiClient<ApiResponseConsultationListResponseDto>({
		url: `/consultation/list`,
		method: "GET",
		params,
		signal,
	});
};
