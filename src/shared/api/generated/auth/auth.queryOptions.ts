import type {
	DataTag,
	MutationFunction,
	QueryFunction,
	QueryKey,
	UseMutationOptions,
	UseQueryOptions,
} from "@tanstack/react-query";
import type {
	CheckEmailParams,
	GoogleAuthRequestDto,
	LoginRequestDto,
	MyInfoUpdateRequestDto,
	PasswordChangeRequestDto,
} from "../api.schemas";
import {
	getCheckEmail,
	getMyInfo,
	postGoogleLogin,
	postLogin,
	postLogout,
	postRefresh,
	putChangePassword,
	putMyInfo,
} from "./auth.queryFunctions";
import { getCheckEmailKey, getMyInfoKey } from "./auth.keys";
import type {
	GetCheckEmailQueryResult,
	GetMyInfoQueryResult,
	PostGoogleLoginMutationResult,
	PostLoginMutationResult,
	PostLogoutMutationResult,
	PostRefreshMutationResult,
	PutChangePasswordMutationResult,
	PutMyInfoMutationResult,
} from "./auth.types";

export const getMyInfoOptions = <TData = GetMyInfoQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetMyInfoQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getMyInfoKey();
	const queryFn: QueryFunction<GetMyInfoQueryResult> = ({ signal }) => getMyInfo(signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<GetMyInfoQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getCheckEmailOptions = <TData = GetCheckEmailQueryResult, TError = unknown>(
	params: CheckEmailParams,
	options?: { query?: Partial<UseQueryOptions<GetCheckEmailQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getCheckEmailKey(params);
	const queryFn: QueryFunction<GetCheckEmailQueryResult> = ({ signal }) => getCheckEmail(params, signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<GetCheckEmailQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const putChangePasswordOptions = <TError = unknown, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<PutChangePasswordMutationResult, TError, { data: PasswordChangeRequestDto }, TContext>;
	},
): UseMutationOptions<PutChangePasswordMutationResult, TError, { data: PasswordChangeRequestDto }, TContext> => {
	const mutationKey = ["putChangePassword"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<PutChangePasswordMutationResult, { data: PasswordChangeRequestDto }> = ({ data }) =>
		putChangePassword(data) as Promise<PutChangePasswordMutationResult>;
	return { mutationFn, ...mutationOptions };
};

export const postRefreshOptions = <TError = unknown, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<PostRefreshMutationResult, TError, void, TContext>;
	},
): UseMutationOptions<PostRefreshMutationResult, TError, void, TContext> => {
	const mutationKey = ["postRefresh"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<PostRefreshMutationResult, void> = () =>
		postRefresh() as Promise<PostRefreshMutationResult>;
	return { mutationFn, ...mutationOptions };
};

export const postLogoutOptions = <TError = unknown, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<PostLogoutMutationResult, TError, void, TContext>;
	},
): UseMutationOptions<PostLogoutMutationResult, TError, void, TContext> => {
	const mutationKey = ["postLogout"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<PostLogoutMutationResult, void> = () =>
		postLogout() as Promise<PostLogoutMutationResult>;
	return { mutationFn, ...mutationOptions };
};

export const postLoginOptions = <TError = unknown, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<PostLoginMutationResult, TError, { data: LoginRequestDto }, TContext>;
	},
): UseMutationOptions<PostLoginMutationResult, TError, { data: LoginRequestDto }, TContext> => {
	const mutationKey = ["postLogin"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<PostLoginMutationResult, { data: LoginRequestDto }> = ({ data }) =>
		postLogin(data) as Promise<PostLoginMutationResult>;
	return { mutationFn, ...mutationOptions };
};

export const postGoogleLoginOptions = <TError = unknown, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<PostGoogleLoginMutationResult, TError, { data: GoogleAuthRequestDto }, TContext>;
	},
): UseMutationOptions<PostGoogleLoginMutationResult, TError, { data: GoogleAuthRequestDto }, TContext> => {
	const mutationKey = ["postGoogleLogin"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<PostGoogleLoginMutationResult, { data: GoogleAuthRequestDto }> = ({ data }) =>
		postGoogleLogin(data) as Promise<PostGoogleLoginMutationResult>;
	return { mutationFn, ...mutationOptions };
};

export const putMyInfoOptions = <TError = unknown, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<PutMyInfoMutationResult, TError, { data: MyInfoUpdateRequestDto }, TContext>;
	},
): UseMutationOptions<PutMyInfoMutationResult, TError, { data: MyInfoUpdateRequestDto }, TContext> => {
	const mutationKey = ["putMyInfo"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<PutMyInfoMutationResult, { data: MyInfoUpdateRequestDto }> = ({ data }) =>
		putMyInfo(data) as Promise<PutMyInfoMutationResult>;
	return { mutationFn, ...mutationOptions };
};
