import { apiClient } from "../../client";
import type {
	ApiResponseConsultationDetailResponseDto,
	GetConsultationDetailParams,
} from "../api.schemas";

export const getConsultationDetail = (
	params: GetConsultationDetailParams,
	signal?: AbortSignal,
) => {
	return apiClient<ApiResponseConsultationDetailResponseDto>({
		url: `/consultation/detail`,
		method: "GET",
		params,
		signal,
	});
};

export type GetConsultationDetailQueryResult = NonNullable<Awaited<ReturnType<typeof getConsultationDetail>>>;
export type GetConsultationDetailQueryError = unknown;
