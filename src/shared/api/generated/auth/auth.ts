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
import type {
	CheckEmailParams,
	GoogleAuthRequestDto,
	LoginRequestDto,
	MyInfoUpdateRequestDto,
	PasswordChangeRequestDto,
} from "../api.schemas";
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


/** @summary 내 정보 및 메뉴 권한 조회 */
export function useGetMyInfoQuery<TData = GetMyInfoQueryResult, TError = unknown>(
	options: { query: Partial<UseQueryOptions<GetMyInfoQueryResult, TError, TData>> & Pick<DefinedInitialDataOptions<GetMyInfoQueryResult, TError, GetMyInfoQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetMyInfoQuery<TData = GetMyInfoQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetMyInfoQueryResult, TError, TData>> & Pick<UndefinedInitialDataOptions<GetMyInfoQueryResult, TError, GetMyInfoQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetMyInfoQuery<TData = GetMyInfoQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetMyInfoQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetMyInfoQuery<TData = GetMyInfoQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetMyInfoQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> } {
	const queryOptions = getMyInfoOptions(options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 구글 이메일 중복 확인 */
export function useGetCheckEmailQuery<TData = GetCheckEmailQueryResult, TError = unknown>(
	params: CheckEmailParams,
	options: { query: Partial<UseQueryOptions<GetCheckEmailQueryResult, TError, TData>> & Pick<DefinedInitialDataOptions<GetCheckEmailQueryResult, TError, GetCheckEmailQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetCheckEmailQuery<TData = GetCheckEmailQueryResult, TError = unknown>(
	params: CheckEmailParams,
	options?: { query?: Partial<UseQueryOptions<GetCheckEmailQueryResult, TError, TData>> & Pick<UndefinedInitialDataOptions<GetCheckEmailQueryResult, TError, GetCheckEmailQueryResult>, "initialData"> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetCheckEmailQuery<TData = GetCheckEmailQueryResult, TError = unknown>(
	params: CheckEmailParams,
	options?: { query?: Partial<UseQueryOptions<GetCheckEmailQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> }
export function useGetCheckEmailQuery<TData = GetCheckEmailQueryResult, TError = unknown>(
	params: CheckEmailParams,
	options?: { query?: Partial<UseQueryOptions<GetCheckEmailQueryResult, TError, TData>> },
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> } {
	const queryOptions = getCheckEmailOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & { queryKey: DataTag<readonly unknown[], TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 비밀번호 변경 */
export function useMutationPutChangePasswordQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: UseMutationOptions<PutChangePasswordMutationResult, TError, { data: PasswordChangeRequestDto }, TContext> },
	queryClient?: QueryClient,
): UseMutationResult<PutChangePasswordMutationResult, TError, { data: PasswordChangeRequestDto }, TContext> {
	return useMutation(putChangePasswordOptions(options), queryClient);
}


/** @summary 토큰 갱신 */
export function useMutationPostRefreshQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: UseMutationOptions<PostRefreshMutationResult, TError, void, TContext> },
	queryClient?: QueryClient,
): UseMutationResult<PostRefreshMutationResult, TError, void, TContext> {
	return useMutation(postRefreshOptions(options), queryClient);
}


/** @summary 로그아웃 */
export function useMutationPostLogoutQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: UseMutationOptions<PostLogoutMutationResult, TError, void, TContext> },
	queryClient?: QueryClient,
): UseMutationResult<PostLogoutMutationResult, TError, void, TContext> {
	return useMutation(postLogoutOptions(options), queryClient);
}


/** @summary 일반 로그인 */
export function useMutationPostLoginQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: UseMutationOptions<PostLoginMutationResult, TError, { data: LoginRequestDto }, TContext> },
	queryClient?: QueryClient,
): UseMutationResult<PostLoginMutationResult, TError, { data: LoginRequestDto }, TContext> {
	return useMutation(postLoginOptions(options), queryClient);
}


/** @summary Google OAuth 로그인 */
export function useMutationPostGoogleLoginQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: UseMutationOptions<PostGoogleLoginMutationResult, TError, { data: GoogleAuthRequestDto }, TContext> },
	queryClient?: QueryClient,
): UseMutationResult<PostGoogleLoginMutationResult, TError, { data: GoogleAuthRequestDto }, TContext> {
	return useMutation(postGoogleLoginOptions(options), queryClient);
}


/** @summary 내 정보 수정 */
export function useMutationPutMyInfoQuery<TError = unknown, TContext = unknown>(
	options?: { mutation?: UseMutationOptions<PutMyInfoMutationResult, TError, { data: MyInfoUpdateRequestDto }, TContext> },
	queryClient?: QueryClient,
): UseMutationResult<PutMyInfoMutationResult, TError, { data: MyInfoUpdateRequestDto }, TContext> {
	return useMutation(putMyInfoOptions(options), queryClient);
}
