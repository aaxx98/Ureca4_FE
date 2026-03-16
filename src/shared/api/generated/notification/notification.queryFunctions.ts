import { apiClient } from "../../client";
import type {
	ApiResponseLong,
	ApiResponseNotificationSettingsResponse,
	ApiResponsePageNotificationResponse,
	ApiResponseVoid,
	GetNotificationsParams,
} from "../api.schemas";

export const getNotifications = (params?: GetNotificationsParams, signal?: AbortSignal) => {
	return apiClient<ApiResponsePageNotificationResponse>({
		url: `/notifications`,
		method: "GET",
		params: params as Record<string, string | number | boolean> | undefined,
		signal,
	});
};

export const getUnreadCount = (signal?: AbortSignal) => {
	return apiClient<ApiResponseLong>({
		url: `/notifications/unread-count`,
		method: "GET",
		signal,
	});
};

export const getNotificationSettings = (signal?: AbortSignal) => {
	return apiClient<ApiResponseNotificationSettingsResponse>({
		url: `/notifications/settings`,
		method: "GET",
		signal,
	});
};

export const patchNotificationRead = (notificationId: number) => {
	return apiClient<ApiResponseVoid>({
		url: `/notifications/${notificationId}/read`,
		method: "PATCH",
	});
};

export const patchNotificationSetting = (field: string) => {
	return apiClient<ApiResponseNotificationSettingsResponse>({
		url: `/notifications/settings/${field}`,
		method: "PATCH",
	});
};

export const patchNotificationsReadAll = () => {
	return apiClient<ApiResponseVoid>({
		url: `/notifications/read-all`,
		method: "PATCH",
	});
};
