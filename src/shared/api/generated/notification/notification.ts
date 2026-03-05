import type {
	DataTag,
	DefinedInitialDataOptions,
	DefinedUseQueryResult,
	QueryClient,
	QueryKey,
	UndefinedInitialDataOptions,
	UseMutationOptions,
	UseMutationResult,
	UseQueryOptions,
	UseQueryResult,
} from "@tanstack/react-query";
import { useMutation, useQuery } from "@tanstack/react-query";

import type { GetNotificationsParams } from "../api.schemas";
import {
	type GetNotificationsQueryError,
	type GetNotificationsQueryResult,
	type GetSettingsQueryError,
	type GetSettingsQueryResult,
	type GetUnreadCountQueryError,
	type GetUnreadCountQueryResult,
	getGetNotificationsQueryOptions,
	getGetSettingsQueryOptions,
	getGetUnreadCountQueryOptions,
} from "./notification.keys";
import {
	getMarkAllAsReadMutationOptions,
	getReadNotificationMutationOptions,
	getToggleSettingMutationOptions,
	type MarkAllAsReadMutationError,
	type MarkAllAsReadMutationResult,
	type ReadNotificationMutationError,
	type ReadNotificationMutationResult,
	type ToggleSettingMutationError,
	type ToggleSettingMutationResult,
} from "./notification.queryFunctions";

export const useReadNotification = <
	TError = ReadNotificationMutationError,
	TContext = unknown,
>(
	options?: {
		mutation?: UseMutationOptions<
			ReadNotificationMutationResult,
			TError,
			{ notificationId: number },
			TContext
		>;
	},
	queryClient?: QueryClient,
): UseMutationResult<
	ReadNotificationMutationResult,
	TError,
	{ notificationId: number },
	TContext
> => {
	const mutationOptions = getReadNotificationMutationOptions(options);
	return useMutation(mutationOptions, queryClient);
};

export const useToggleSetting = <
	TError = ToggleSettingMutationError,
	TContext = unknown,
>(
	options?: {
		mutation?: UseMutationOptions<
			ToggleSettingMutationResult,
			TError,
			{ field: string },
			TContext
		>;
	},
	queryClient?: QueryClient,
): UseMutationResult<
	ToggleSettingMutationResult,
	TError,
	{ field: string },
	TContext
> => {
	const mutationOptions = getToggleSettingMutationOptions(options);
	return useMutation(mutationOptions, queryClient);
};

export const useMarkAllAsRead = <
	TError = MarkAllAsReadMutationError,
	TContext = unknown,
>(
	options?: {
		mutation?: UseMutationOptions<
			MarkAllAsReadMutationResult,
			TError,
			void,
			TContext
		>;
	},
	queryClient?: QueryClient,
): UseMutationResult<MarkAllAsReadMutationResult, TError, void, TContext> => {
	const mutationOptions = getMarkAllAsReadMutationOptions(options);
	return useMutation(mutationOptions, queryClient);
};

export function useGetNotifications<
	TData = GetNotificationsQueryResult,
	TError = GetNotificationsQueryError,
>(
	params: undefined | GetNotificationsParams,
	options: {
		query: Partial<
			UseQueryOptions<GetNotificationsQueryResult, TError, TData>
		> &
			Pick<
				DefinedInitialDataOptions<
					GetNotificationsQueryResult,
					TError,
					GetNotificationsQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetNotifications<
	TData = GetNotificationsQueryResult,
	TError = GetNotificationsQueryError,
>(
	params?: GetNotificationsParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetNotificationsQueryResult, TError, TData>
		> &
			Pick<
				UndefinedInitialDataOptions<
					GetNotificationsQueryResult,
					TError,
					GetNotificationsQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetNotifications<
	TData = GetNotificationsQueryResult,
	TError = GetNotificationsQueryError,
>(
	params?: GetNotificationsParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetNotificationsQueryResult, TError, TData>
		>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetNotifications<
	TData = GetNotificationsQueryResult,
	TError = GetNotificationsQueryError,
>(
	params?: GetNotificationsParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetNotificationsQueryResult, TError, TData>
		>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getGetNotificationsQueryOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & { queryKey: DataTag<QueryKey, TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}

export function useGetUnreadCount<
	TData = GetUnreadCountQueryResult,
	TError = GetUnreadCountQueryError,
>(
	options: {
		query: Partial<UseQueryOptions<GetUnreadCountQueryResult, TError, TData>> &
			Pick<
				DefinedInitialDataOptions<
					GetUnreadCountQueryResult,
					TError,
					GetUnreadCountQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetUnreadCount<
	TData = GetUnreadCountQueryResult,
	TError = GetUnreadCountQueryError,
>(
	options?: {
		query?: Partial<UseQueryOptions<GetUnreadCountQueryResult, TError, TData>> &
			Pick<
				UndefinedInitialDataOptions<
					GetUnreadCountQueryResult,
					TError,
					GetUnreadCountQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetUnreadCount<
	TData = GetUnreadCountQueryResult,
	TError = GetUnreadCountQueryError,
>(
	options?: {
		query?: Partial<UseQueryOptions<GetUnreadCountQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetUnreadCount<
	TData = GetUnreadCountQueryResult,
	TError = GetUnreadCountQueryError,
>(
	options?: {
		query?: Partial<UseQueryOptions<GetUnreadCountQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getGetUnreadCountQueryOptions(options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & { queryKey: DataTag<QueryKey, TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}

export function useGetSettings<
	TData = GetSettingsQueryResult,
	TError = GetSettingsQueryError,
>(
	options: {
		query: Partial<UseQueryOptions<GetSettingsQueryResult, TError, TData>> &
			Pick<
				DefinedInitialDataOptions<
					GetSettingsQueryResult,
					TError,
					GetSettingsQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetSettings<
	TData = GetSettingsQueryResult,
	TError = GetSettingsQueryError,
>(
	options?: {
		query?: Partial<UseQueryOptions<GetSettingsQueryResult, TError, TData>> &
			Pick<
				UndefinedInitialDataOptions<
					GetSettingsQueryResult,
					TError,
					GetSettingsQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetSettings<
	TData = GetSettingsQueryResult,
	TError = GetSettingsQueryError,
>(
	options?: {
		query?: Partial<UseQueryOptions<GetSettingsQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetSettings<
	TData = GetSettingsQueryResult,
	TError = GetSettingsQueryError,
>(
	options?: {
		query?: Partial<UseQueryOptions<GetSettingsQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getGetSettingsQueryOptions(options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & { queryKey: DataTag<QueryKey, TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}
