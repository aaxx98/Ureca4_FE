import type {
	DataTag,
	MutationFunction,
	QueryFunction,
	QueryKey,
	UseMutationOptions,
	UseQueryOptions,
} from "@tanstack/react-query";
import type { GetNotificationsParams } from "../api.schemas";
import {
	getNotificationSettings,
	getNotifications,
	getUnreadCount,
	patchNotificationRead,
	patchNotificationSetting,
	patchNotificationsReadAll,
} from "./notification.queryFunctions";
import {
	getNotificationSettingsKey,
	getNotificationsKey,
	getUnreadCountKey,
} from "./notification.keys";
import type {
	GetNotificationSettingsQueryResult,
	GetNotificationsQueryResult,
	GetUnreadCountQueryResult,
	PatchNotificationReadMutationResult,
	PatchNotificationSettingMutationResult,
	PatchNotificationsReadAllMutationResult,
} from "./notification.types";

export const getNotificationsOptions = <TData = GetNotificationsQueryResult, TError = unknown>(
	params?: GetNotificationsParams,
	options?: { query?: Partial<UseQueryOptions<GetNotificationsQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getNotificationsKey(params);
	const queryFn: QueryFunction<GetNotificationsQueryResult> = ({ signal }) => getNotifications(params, signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<GetNotificationsQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getUnreadCountOptions = <TData = GetUnreadCountQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetUnreadCountQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getUnreadCountKey();
	const queryFn: QueryFunction<GetUnreadCountQueryResult> = ({ signal }) => getUnreadCount(signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<GetUnreadCountQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getNotificationSettingsOptions = <TData = GetNotificationSettingsQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetNotificationSettingsQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getNotificationSettingsKey();
	const queryFn: QueryFunction<GetNotificationSettingsQueryResult> = ({ signal }) =>
		getNotificationSettings(signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		GetNotificationSettingsQueryResult,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export const patchNotificationReadOptions = <TError = unknown, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<PatchNotificationReadMutationResult, TError, { notificationId: number }, TContext>;
	},
): UseMutationOptions<PatchNotificationReadMutationResult, TError, { notificationId: number }, TContext> => {
	const mutationKey = ["patchNotificationRead"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<PatchNotificationReadMutationResult, { notificationId: number }> = ({
		notificationId,
	}) => patchNotificationRead(notificationId) as Promise<PatchNotificationReadMutationResult>;
	return { mutationFn, ...mutationOptions };
};

export const patchNotificationSettingOptions = <TError = unknown, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<PatchNotificationSettingMutationResult, TError, { field: string }, TContext>;
	},
): UseMutationOptions<PatchNotificationSettingMutationResult, TError, { field: string }, TContext> => {
	const mutationKey = ["patchNotificationSetting"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<PatchNotificationSettingMutationResult, { field: string }> = ({ field }) =>
		patchNotificationSetting(field) as Promise<PatchNotificationSettingMutationResult>;
	return { mutationFn, ...mutationOptions };
};

export const patchNotificationsReadAllOptions = <TError = unknown, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<PatchNotificationsReadAllMutationResult, TError, void, TContext>;
	},
): UseMutationOptions<PatchNotificationsReadAllMutationResult, TError, void, TContext> => {
	const mutationKey = ["patchNotificationsReadAll"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<PatchNotificationsReadAllMutationResult, void> = () =>
		patchNotificationsReadAll() as Promise<PatchNotificationsReadAllMutationResult>;
	return { mutationFn, ...mutationOptions };
};
