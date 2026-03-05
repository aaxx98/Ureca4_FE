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

import type {
	CheckEmailParams,
	GoogleAuthRequestDto,
	LoginRequestDto,
	MyInfoUpdateRequestDto,
	PasswordChangeRequestDto,
} from "../api.schemas";
import {
	type CheckEmailQueryError,
	type CheckEmailQueryResult,
	type GetMyInfoQueryError,
	type GetMyInfoQueryResult,
	getCheckEmailQueryOptions,
	getGetMyInfoQueryOptions,
} from "./auth.keys";
import {
	type ChangePasswordMutationError,
	type ChangePasswordMutationResult,
	type GoogleLoginMutationError,
	type GoogleLoginMutationResult,
	getChangePasswordMutationOptions,
	getGoogleLoginMutationOptions,
	getLoginMutationOptions,
	getLogoutMutationOptions,
	getRefreshMutationOptions,
	getUpdateMyInfoMutationOptions,
	type LoginMutationError,
	type LoginMutationResult,
	type LogoutMutationError,
	type LogoutMutationResult,
	type RefreshMutationError,
	type RefreshMutationResult,
	type UpdateMyInfoMutationError,
	type UpdateMyInfoMutationResult,
} from "./auth.queryFunctions";

export const useUpdateMyInfo = <
	TError = UpdateMyInfoMutationError,
	TContext = unknown,
>(
	options?: {
		mutation?: UseMutationOptions<
			UpdateMyInfoMutationResult,
			TError,
			{ data: MyInfoUpdateRequestDto },
			TContext
		>;
	},
	queryClient?: QueryClient,
): UseMutationResult<
	UpdateMyInfoMutationResult,
	TError,
	{ data: MyInfoUpdateRequestDto },
	TContext
> => {
	const mutationOptions = getUpdateMyInfoMutationOptions(options);
	return useMutation(mutationOptions, queryClient);
};

export const useChangePassword = <
	TError = ChangePasswordMutationError,
	TContext = unknown,
>(
	options?: {
		mutation?: UseMutationOptions<
			ChangePasswordMutationResult,
			TError,
			{ data: PasswordChangeRequestDto },
			TContext
		>;
	},
	queryClient?: QueryClient,
): UseMutationResult<
	ChangePasswordMutationResult,
	TError,
	{ data: PasswordChangeRequestDto },
	TContext
> => {
	const mutationOptions = getChangePasswordMutationOptions(options);
	return useMutation(mutationOptions, queryClient);
};

export const useRefresh = <TError = RefreshMutationError, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<
			RefreshMutationResult,
			TError,
			void,
			TContext
		>;
	},
	queryClient?: QueryClient,
): UseMutationResult<RefreshMutationResult, TError, void, TContext> => {
	const mutationOptions = getRefreshMutationOptions(options);
	return useMutation(mutationOptions, queryClient);
};

export const useLogout = <TError = LogoutMutationError, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<LogoutMutationResult, TError, void, TContext>;
	},
	queryClient?: QueryClient,
): UseMutationResult<LogoutMutationResult, TError, void, TContext> => {
	const mutationOptions = getLogoutMutationOptions(options);
	return useMutation(mutationOptions, queryClient);
};

export const useLogin = <TError = LoginMutationError, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<
			LoginMutationResult,
			TError,
			{ data: LoginRequestDto },
			TContext
		>;
	},
	queryClient?: QueryClient,
): UseMutationResult<
	LoginMutationResult,
	TError,
	{ data: LoginRequestDto },
	TContext
> => {
	const mutationOptions = getLoginMutationOptions(options);
	return useMutation(mutationOptions, queryClient);
};

export const useGoogleLogin = <
	TError = GoogleLoginMutationError,
	TContext = unknown,
>(
	options?: {
		mutation?: UseMutationOptions<
			GoogleLoginMutationResult,
			TError,
			{ data: GoogleAuthRequestDto },
			TContext
		>;
	},
	queryClient?: QueryClient,
): UseMutationResult<
	GoogleLoginMutationResult,
	TError,
	{ data: GoogleAuthRequestDto },
	TContext
> => {
	const mutationOptions = getGoogleLoginMutationOptions(options);
	return useMutation(mutationOptions, queryClient);
};

export function useGetMyInfo<
	TData = GetMyInfoQueryResult,
	TError = GetMyInfoQueryError,
>(
	options: {
		query: Partial<UseQueryOptions<GetMyInfoQueryResult, TError, TData>> &
			Pick<
				DefinedInitialDataOptions<
					GetMyInfoQueryResult,
					TError,
					GetMyInfoQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetMyInfo<
	TData = GetMyInfoQueryResult,
	TError = GetMyInfoQueryError,
>(
	options?: {
		query?: Partial<UseQueryOptions<GetMyInfoQueryResult, TError, TData>> &
			Pick<
				UndefinedInitialDataOptions<
					GetMyInfoQueryResult,
					TError,
					GetMyInfoQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetMyInfo<
	TData = GetMyInfoQueryResult,
	TError = GetMyInfoQueryError,
>(
	options?: {
		query?: Partial<UseQueryOptions<GetMyInfoQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetMyInfo<
	TData = GetMyInfoQueryResult,
	TError = GetMyInfoQueryError,
>(
	options?: {
		query?: Partial<UseQueryOptions<GetMyInfoQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getGetMyInfoQueryOptions(options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

export function useCheckEmail<
	TData = CheckEmailQueryResult,
	TError = CheckEmailQueryError,
>(
	params: CheckEmailParams,
	options: {
		query: Partial<UseQueryOptions<CheckEmailQueryResult, TError, TData>> &
			Pick<
				DefinedInitialDataOptions<
					CheckEmailQueryResult,
					TError,
					CheckEmailQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useCheckEmail<
	TData = CheckEmailQueryResult,
	TError = CheckEmailQueryError,
>(
	params: CheckEmailParams,
	options?: {
		query?: Partial<UseQueryOptions<CheckEmailQueryResult, TError, TData>> &
			Pick<
				UndefinedInitialDataOptions<
					CheckEmailQueryResult,
					TError,
					CheckEmailQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useCheckEmail<
	TData = CheckEmailQueryResult,
	TError = CheckEmailQueryError,
>(
	params: CheckEmailParams,
	options?: {
		query?: Partial<UseQueryOptions<CheckEmailQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useCheckEmail<
	TData = CheckEmailQueryResult,
	TError = CheckEmailQueryError,
>(
	params: CheckEmailParams,
	options?: {
		query?: Partial<UseQueryOptions<CheckEmailQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getCheckEmailQueryOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}
