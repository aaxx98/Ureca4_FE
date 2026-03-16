import { apiClient } from "../../client";
import type {
	ApiResponseNoticeResponse,
	ApiResponsePageNoticeSummary,
	ApiResponseVoid,
	GetNoticeListParams,
	NoticeCreateRequest,
	NoticeUpdateRequest,
} from "../api.schemas";

export const getNoticeDetail = (noticeId: number, signal?: AbortSignal) => {
	return apiClient<ApiResponseNoticeResponse>({
		url: `/notices/${noticeId}`,
		method: "GET",
		signal,
	});
};

export const getNoticeList = (params?: GetNoticeListParams, signal?: AbortSignal) => {
	return apiClient<ApiResponsePageNoticeSummary>({
		url: `/notices`,
		method: "GET",
		params: params as Record<string, string | number | boolean> | undefined,
		signal,
	});
};

export const putNotice = (noticeId: number, data: NoticeUpdateRequest) => {
	return apiClient<ApiResponseNoticeResponse>({
		url: `/notices/${noticeId}`,
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		data,
	});
};

export const deleteNotice = (noticeId: number) => {
	return apiClient<ApiResponseVoid>({
		url: `/notices/${noticeId}`,
		method: "DELETE",
	});
};

export const postNotice = (data: NoticeCreateRequest, signal?: AbortSignal) => {
	return apiClient<ApiResponseNoticeResponse>({
		url: `/notices`,
		method: "POST",
		headers: { "Content-Type": "application/json" },
		data,
		signal,
	});
};
