import type {
	getNotificationSettings,
	getNotifications,
	getUnreadCount,
	patchNotificationRead,
	patchNotificationSetting,
	patchNotificationsReadAll,
} from "./notification.queryFunctions";

export type GetNotificationsQueryResult = NonNullable<Awaited<ReturnType<typeof getNotifications>>>;
export type GetNotificationsQueryError = unknown;

export type GetUnreadCountQueryResult = NonNullable<Awaited<ReturnType<typeof getUnreadCount>>>;
export type GetUnreadCountQueryError = unknown;

export type GetNotificationSettingsQueryResult = NonNullable<Awaited<ReturnType<typeof getNotificationSettings>>>;
export type GetNotificationSettingsQueryError = unknown;

export type PatchNotificationReadMutationResult = NonNullable<Awaited<ReturnType<typeof patchNotificationRead>>>;
export type PatchNotificationReadMutationError = unknown;

export type PatchNotificationSettingMutationResult = NonNullable<Awaited<ReturnType<typeof patchNotificationSetting>>>;
export type PatchNotificationSettingMutationError = unknown;

export type PatchNotificationsReadAllMutationResult = NonNullable<Awaited<ReturnType<typeof patchNotificationsReadAll>>>;
export type PatchNotificationsReadAllMutationError = unknown;
