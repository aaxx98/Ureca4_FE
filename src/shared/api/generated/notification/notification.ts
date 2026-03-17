import { useMutation, useQuery } from "@tanstack/react-query";
import type {
	DataTag,
	DefinedInitialDataOptions,
	DefinedUseQueryResult,
	QueryClient,
	UndefinedInitialDataOptions,
	UseMutationOptions,
	UseMutationResult,
	UseQueryOptions,
	UseQueryResult,
} from "@tanstack/react-query";
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
	params: undefined | GetNotificationsParams,
	options: { query: Partial<UseQueryOptions<GetNotificationsQueryResult, TError, TData>> & Pick<DefinedInitialDataOptions<GetNotificationsQueryResult, TError, GetNotificationsQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetNotificationsQuery<TData = GetNotificationsQueryResult, TError = unknown>(
	params?: GetNotificationsParams,
	options?: { query?: Partial<UseQueryOptions<GetNotificationsQueryResult, TError, TData>> & Pick<UndefinedInitialDataOptions<GetNotificationsQueryResult, TError, GetNotificationsQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetNotificationsQuery<TData = GetNotificationsQueryResult, TError = unknown>(
	params?: GetNotificationsParams,
	options?: { query?: Partial<UseQueryOptions<GetNotificationsQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetNotificationsQuery<TData = GetNotificationsQueryResult, TError = unknown>(
	params?: GetNotificationsParams,
	options?: { query?: Partial<UseQueryOptions<GetNotificationsQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> } {
	const queryOptions = getNotificationsOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 읽지 않은 알림 수 조회 */
export function useGetUnreadCountQuery<TData = GetUnreadCountQueryResult, TError = unknown>(
	options: { query: Partial<UseQueryOptions<GetUnreadCountQueryResult, TError, TData>> & Pick<DefinedInitialDataOptions<GetUnreadCountQueryResult, TError, GetUnreadCountQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetUnreadCountQuery<TData = GetUnreadCountQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetUnreadCountQueryResult, TError, TData>> & Pick<UndefinedInitialDataOptions<GetUnreadCountQueryResult, TError, GetUnreadCountQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetUnreadCountQuery<TData = GetUnreadCountQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetUnreadCountQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetUnreadCountQuery<TData = GetUnreadCountQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetUnreadCountQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> } {
	const queryOptions = getUnreadCountOptions(options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 알림 설정 조회 */
export function useGetNotificationSettingsQuery<TData = GetNotificationSettingsQueryResult, TError = unknown>(
	options: { query: Partial<UseQueryOptions<GetNotificationSettingsQueryResult, TError, TData>> & Pick<DefinedInitialDataOptions<GetNotificationSettingsQueryResult, TError, GetNotificationSettingsQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetNotificationSettingsQuery<TData = GetNotificationSettingsQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetNotificationSettingsQueryResult, TError, TData>> & Pick<UndefinedInitialDataOptions<GetNotificationSettingsQueryResult, TError, GetNotificationSettingsQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetNotificationSettingsQuery<TData = GetNotificationSettingsQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetNotificationSettingsQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetNotificationSettingsQuery<TData = GetNotificationSettingsQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetNotificationSettingsQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> } {
	const queryOptions = getNotificationSettingsOptions(options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 알림 읽음 처리 */
export function useMutationPatchNotificationReadQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: UseMutationOptions<PatchNotificationReadMutationResult, TError, { notificationId: number }, TContext> },
	queryClient?: QueryClient,
): UseMutationResult<PatchNotificationReadMutationResult, TError, { notificationId: number }, TContext> {
	return useMutation(patchNotificationReadOptions(options), queryClient);
}


/** @summary 알림 설정 변경 */
export function useMutationPatchNotificationSettingQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: UseMutationOptions<PatchNotificationSettingMutationResult, TError, { field: string }, TContext> },
	queryClient?: QueryClient,
): UseMutationResult<PatchNotificationSettingMutationResult, TError, { field: string }, TContext> {
	return useMutation(patchNotificationSettingOptions(options), queryClient);
}


/** @summary 알림 전체 읽음 처리 */
export function useMutationPatchNotificationsReadAllQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: UseMutationOptions<PatchNotificationsReadAllMutationResult, TError, void, TContext> },
	queryClient?: QueryClient,
): UseMutationResult<PatchNotificationsReadAllMutationResult, TError, void, TContext> {
	return useMutation(patchNotificationsReadAllOptions(options), queryClient);
}
