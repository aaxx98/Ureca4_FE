import { apiClient } from "../../client";
import type {
	ApiResponseBookmarkToggleResponseDto,
	ApiResponseConsultationBookmarkDetailResponseDto,
	ApiResponseListConsultationBookmarkResponseDto,
	ApiResponseListManualBookmarkResponseDto,
	ApiResponseManualBookmarkDetailResponseDto,
} from "../api.schemas";

export const getManualBookmarks = (signal?: AbortSignal) => {
	return apiClient<ApiResponseListManualBookmarkResponseDto>({
		url: `/bookmarks/manuals`,
		method: "GET",
		signal,
	});
};

export const getManualBookmarkDetail = (manualId: number, signal?: AbortSignal) => {
	return apiClient<ApiResponseManualBookmarkDetailResponseDto>({
		url: `/bookmarks/manuals/${manualId}/detail`,
		method: "GET",
		signal,
	});
};

export const getConsultationBookmarks = (signal?: AbortSignal) => {
	return apiClient<ApiResponseListConsultationBookmarkResponseDto>({
		url: `/bookmarks/consultations`,
		method: "GET",
		signal,
	});
};

export const getConsultationBookmarkDetail = (consultId: number, signal?: AbortSignal) => {
	return apiClient<ApiResponseConsultationBookmarkDetailResponseDto>({
		url: `/bookmarks/consultations/${consultId}/detail`,
		method: "GET",
		signal,
	});
};

export const postManualBookmark = (manualId: number) => {
	return apiClient<ApiResponseBookmarkToggleResponseDto>({
		url: `/bookmarks/manuals/${manualId}`,
		method: "POST",
	});
};

export const deleteManualBookmark = (manualId: number) => {
	return apiClient<ApiResponseBookmarkToggleResponseDto>({
		url: `/bookmarks/manuals/${manualId}`,
		method: "DELETE",
	});
};

export const postConsultationBookmark = (consultId: number) => {
	return apiClient<ApiResponseBookmarkToggleResponseDto>({
		url: `/bookmarks/consultations/${consultId}`,
		method: "POST",
	});
};

export const deleteConsultationBookmark = (consultId: number) => {
	return apiClient<ApiResponseBookmarkToggleResponseDto>({
		url: `/bookmarks/consultations/${consultId}`,
		method: "DELETE",
	});
};
