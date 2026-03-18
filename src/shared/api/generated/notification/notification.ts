import { useMutation, useQuery } from "@tanstack/react-query";
import type { DataTag, QueryKey, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { GetNotificationsParams } from "../api.schemas";
import {
	getNotificationSettingsOptions,
	getNotificationsOptions,
	getUnreadCountOptions,
	patchNotificationReadOptions,
	patchNotificationSettingOptions,
	patchNotificationsReadAllOptions,
} from "./notification.queryOptions";
import type {
	GetNotificationSettingsQueryResult,
	GetNotificationsQueryResult,
	GetUnreadCountQueryResult,
	PatchNotificationReadMutationResult,
	PatchNotificationSettingMutationResult,
	PatchNotificationsReadAllMutationResult,
} from "./notification.types";

/** @summary 알림 목록 조회 */
export function useGetNotificationsQuery<TData = GetNotificationsQueryResult, TError = unknown>(
	params?: GetNotificationsParams,
	options?: { query?: Partial<UseQueryOptions<GetNotificationsQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getNotificationsOptions(params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 읽지 않은 알림 수 조회 */
export function useGetUnreadCountQuery<TData = GetUnreadCountQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetUnreadCountQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getUnreadCountOptions(options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 알림 설정 조회 */
export function useGetNotificationSettingsQuery<TData = GetNotificationSettingsQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetNotificationSettingsQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getNotificationSettingsOptions(options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 알림 읽음 처리 */
export function useMutationPatchNotificationReadQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: NonNullable<Parameters<typeof patchNotificationReadOptions<TError, TContext>>[0]>["mutation"] },
): UseMutationResult<PatchNotificationReadMutationResult, TError, { notificationId: number }, TContext> {
	return useMutation(patchNotificationReadOptions({ mutation: options?.mutation }));
}


/** @summary 알림 설정 변경 */
export function useMutationPatchNotificationSettingQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: NonNullable<Parameters<typeof patchNotificationSettingOptions<TError, TContext>>[0]>["mutation"] },
): UseMutationResult<PatchNotificationSettingMutationResult, TError, { field: string }, TContext> {
	return useMutation(patchNotificationSettingOptions({ mutation: options?.mutation }));
}


/** @summary 전체 알림 읽음 처리 */
export function useMutationPatchNotificationsReadAllQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: NonNullable<Parameters<typeof patchNotificationsReadAllOptions<TError, TContext>>[0]>["mutation"] },
): UseMutationResult<PatchNotificationsReadAllMutationResult, TError, void, TContext> {
	return useMutation(patchNotificationsReadAllOptions({ mutation: options?.mutation }));
}
