import type {
	DataTag,
	QueryFunction,
	QueryKey,
	UseQueryOptions,
} from "@tanstack/react-query";

import type { GetNotificationsParams } from "../api.schemas";
import {
	getNotifications,
	getSettings,
	getUnreadCount,
} from "./notification.queryFunctions";

export const getGetNotificationsQueryKey = (params?: GetNotificationsParams) =>
	[`/notifications`, ...(params ? [params] : [])] as const;

export const getGetNotificationsQueryOptions = <
	TData = Awaited<ReturnType<typeof getNotifications>>,
	TError = unknown,
>(
	params?: GetNotificationsParams,
	options?: {
		query?: Partial<
			UseQueryOptions<
				Awaited<ReturnType<typeof getNotifications>>,
				TError,
				TData
			>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? getGetNotificationsQueryKey(params);
	const queryFn: QueryFunction<
		Awaited<ReturnType<typeof getNotifications>>
	> = ({ signal }) => getNotifications(params, signal);

	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof getNotifications>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetNotificationsQueryResult = NonNullable<
	Awaited<ReturnType<typeof getNotifications>>
>;
export type GetNotificationsQueryError = unknown;

export const getGetUnreadCountQueryKey = () =>
	[`/notifications/unread-count`] as const;

export const getGetUnreadCountQueryOptions = <
	TData = Awaited<ReturnType<typeof getUnreadCount>>,
	TError = unknown,
>(options?: {
	query?: Partial<
		UseQueryOptions<Awaited<ReturnType<typeof getUnreadCount>>, TError, TData>
	>;
}) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getGetUnreadCountQueryKey();
	const queryFn: QueryFunction<Awaited<ReturnType<typeof getUnreadCount>>> = ({
		signal,
	}) => getUnreadCount(signal);

	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof getUnreadCount>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetUnreadCountQueryResult = NonNullable<
	Awaited<ReturnType<typeof getUnreadCount>>
>;
export type GetUnreadCountQueryError = unknown;

export const getGetSettingsQueryKey = () =>
	[`/notifications/settings`] as const;

export const getGetSettingsQueryOptions = <
	TData = Awaited<ReturnType<typeof getSettings>>,
	TError = unknown,
>(options?: {
	query?: Partial<
		UseQueryOptions<Awaited<ReturnType<typeof getSettings>>, TError, TData>
	>;
}) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getGetSettingsQueryKey();
	const queryFn: QueryFunction<Awaited<ReturnType<typeof getSettings>>> = ({
		signal,
	}) => getSettings(signal);

	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof getSettings>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetSettingsQueryResult = NonNullable<
	Awaited<ReturnType<typeof getSettings>>
>;
export type GetSettingsQueryError = unknown;
