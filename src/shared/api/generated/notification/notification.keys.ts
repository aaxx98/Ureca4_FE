import type { GetNotificationsParams } from "../api.schemas";

export const getNotificationsKey = (params?: GetNotificationsParams) =>
	[`/notifications`, ...(params ? [params] : [])] as const;

export const getUnreadCountKey = () => [`/notifications/unread-count`] as const;

export const getNotificationSettingsKey = () => [`/notifications/settings`] as const;
