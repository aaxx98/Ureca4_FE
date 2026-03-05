import type {
	DataTag,
	QueryFunction,
	QueryKey,
	UseQueryOptions,
} from "@tanstack/react-query";

import type { CheckEmailParams } from "../api.schemas";
import { checkEmail, getMyInfo } from "./auth.queryFunctions";

export const getGetMyInfoQueryKey = () => [`/auth/me`] as const;

export const getGetMyInfoQueryOptions = <
	TData = Awaited<ReturnType<typeof getMyInfo>>,
	TError = unknown,
>(options?: {
	query?: Partial<
		UseQueryOptions<Awaited<ReturnType<typeof getMyInfo>>, TError, TData>
	>;
}) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getGetMyInfoQueryKey();
	const queryFn: QueryFunction<Awaited<ReturnType<typeof getMyInfo>>> = ({
		signal,
	}) => getMyInfo(signal);

	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof getMyInfo>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetMyInfoQueryResult = NonNullable<
	Awaited<ReturnType<typeof getMyInfo>>
>;
export type GetMyInfoQueryError = unknown;

export const getCheckEmailQueryKey = (params?: CheckEmailParams) =>
	[`/auth/google/email-check`, ...(params ? [params] : [])] as const;

export const getCheckEmailQueryOptions = <
	TData = Awaited<ReturnType<typeof checkEmail>>,
	TError = unknown,
>(
	params: CheckEmailParams,
	options?: {
		query?: Partial<
			UseQueryOptions<Awaited<ReturnType<typeof checkEmail>>, TError, TData>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getCheckEmailQueryKey(params);
	const queryFn: QueryFunction<Awaited<ReturnType<typeof checkEmail>>> = ({
		signal,
	}) => checkEmail(params, signal);

	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof checkEmail>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type CheckEmailQueryResult = NonNullable<
	Awaited<ReturnType<typeof checkEmail>>
>;
export type CheckEmailQueryError = unknown;
