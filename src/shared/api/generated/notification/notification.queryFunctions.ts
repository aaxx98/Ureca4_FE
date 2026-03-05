import type {
	MutationFunction,
	UseMutationOptions,
} from "@tanstack/react-query";
import { apiClient } from "../../client";
import type {
	ApiResponseLong,
	ApiResponseNotificationSettingsResponse,
	ApiResponsePageNotificationResponse,
	ApiResponseVoid,
	GetNotificationsParams,
} from "../api.schemas";

export const readNotification = (notificationId: number) => {
	return apiClient<ApiResponseVoid>({
		url: `/notifications/${notificationId}/read`,
		method: "PATCH",
	});
};

export const getReadNotificationMutationOptions = <
	TError = unknown,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof readNotification>>,
		TError,
		{ notificationId: number },
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof readNotification>>,
	TError,
	{ notificationId: number },
	TContext
> => {
	const mutationKey = ["readNotification"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof readNotification>>,
		{ notificationId: number }
	> = (props) => {
		const { notificationId } = props ?? {};
		return readNotification(notificationId);
	};

	return { mutationFn, ...mutationOptions };
};

export type ReadNotificationMutationResult = NonNullable<
	Awaited<ReturnType<typeof readNotification>>
>;
export type ReadNotificationMutationError = unknown;

export const toggleSetting = (field: string) => {
	return apiClient<ApiResponseNotificationSettingsResponse>({
		url: `/notifications/settings/${field}`,
		method: "PATCH",
	});
};

export const getToggleSettingMutationOptions = <
	TError = unknown,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof toggleSetting>>,
		TError,
		{ field: string },
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof toggleSetting>>,
	TError,
	{ field: string },
	TContext
> => {
	const mutationKey = ["toggleSetting"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof toggleSetting>>,
		{ field: string }
	> = (props) => {
		const { field } = props ?? {};
		return toggleSetting(field);
	};

	return { mutationFn, ...mutationOptions };
};

export type ToggleSettingMutationResult = NonNullable<
	Awaited<ReturnType<typeof toggleSetting>>
>;
export type ToggleSettingMutationError = unknown;

export const markAllAsRead = () => {
	return apiClient<ApiResponseVoid>({
		url: `/notifications/read-all`,
		method: "PATCH",
	});
};

export const getMarkAllAsReadMutationOptions = <
	TError = unknown,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof markAllAsRead>>,
		TError,
		void,
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof markAllAsRead>>,
	TError,
	void,
	TContext
> => {
	const mutationKey = ["markAllAsRead"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof markAllAsRead>>,
		void
	> = () => markAllAsRead();

	return { mutationFn, ...mutationOptions };
};

export type MarkAllAsReadMutationResult = NonNullable<
	Awaited<ReturnType<typeof markAllAsRead>>
>;
export type MarkAllAsReadMutationError = unknown;

export const getNotifications = (
	params?: GetNotificationsParams,
	signal?: AbortSignal,
) => {
	return apiClient<ApiResponsePageNotificationResponse>({
		url: `/notifications`,
		method: "GET",
		params,
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

export const getSettings = (signal?: AbortSignal) => {
	return apiClient<ApiResponseNotificationSettingsResponse>({
		url: `/notifications/settings`,
		method: "GET",
		signal,
	});
};
