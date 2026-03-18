import { useMutation, useQuery } from "@tanstack/react-query";
import type { DataTag, QueryKey, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { CheckEmailParams } from "../api.schemas";
import {
	getCheckEmailOptions,
	getMyInfoOptions,
	postGoogleLoginOptions,
	postLoginOptions,
	postLogoutOptions,
	postRefreshOptions,
	putChangePasswordOptions,
	putMyInfoOptions,
} from "./auth.queryOptions";
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
import type { GoogleAuthRequestDto, LoginRequestDto, MyInfoUpdateRequestDto, PasswordChangeRequestDto } from "../api.schemas";

/** @summary 내 정보 및 메뉴 권한 조회 */
export function useGetMyInfoQuery<TData = GetMyInfoQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetMyInfoQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getMyInfoOptions(options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 구글 이메일 중복 확인 */
export function useGetCheckEmailQuery<TData = GetCheckEmailQueryResult, TError = unknown>(
	params: CheckEmailParams,
	options?: { query?: Partial<UseQueryOptions<GetCheckEmailQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getCheckEmailOptions(params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 비밀번호 변경 */
export function useMutationPutChangePasswordQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: NonNullable<Parameters<typeof putChangePasswordOptions<TError, TContext>>[0]>["mutation"] },
): UseMutationResult<PutChangePasswordMutationResult, TError, { data: PasswordChangeRequestDto }, TContext> {
	return useMutation(putChangePasswordOptions({ mutation: options?.mutation }));
}


/** @summary 토큰 갱신 */
export function useMutationPostRefreshQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: NonNullable<Parameters<typeof postRefreshOptions<TError, TContext>>[0]>["mutation"] },
): UseMutationResult<PostRefreshMutationResult, TError, void, TContext> {
	return useMutation(postRefreshOptions({ mutation: options?.mutation }));
}


/** @summary 로그아웃 */
export function useMutationPostLogoutQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: NonNullable<Parameters<typeof postLogoutOptions<TError, TContext>>[0]>["mutation"] },
): UseMutationResult<PostLogoutMutationResult, TError, void, TContext> {
	return useMutation(postLogoutOptions({ mutation: options?.mutation }));
}


/** @summary 일반 로그인 */
export function useMutationPostLoginQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: NonNullable<Parameters<typeof postLoginOptions<TError, TContext>>[0]>["mutation"] },
): UseMutationResult<PostLoginMutationResult, TError, { data: LoginRequestDto }, TContext> {
	return useMutation(postLoginOptions({ mutation: options?.mutation }));
}


/** @summary Google OAuth 로그인 */
export function useMutationPostGoogleLoginQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: NonNullable<Parameters<typeof postGoogleLoginOptions<TError, TContext>>[0]>["mutation"] },
): UseMutationResult<PostGoogleLoginMutationResult, TError, { data: GoogleAuthRequestDto }, TContext> {
	return useMutation(postGoogleLoginOptions({ mutation: options?.mutation }));
}


/** @summary 내 정보 수정 */
export function useMutationPutMyInfoQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: NonNullable<Parameters<typeof putMyInfoOptions<TError, TContext>>[0]>["mutation"] },
): UseMutationResult<PutMyInfoMutationResult, TError, { data: MyInfoUpdateRequestDto }, TContext> {
	return useMutation(putMyInfoOptions({ mutation: options?.mutation }));
}
