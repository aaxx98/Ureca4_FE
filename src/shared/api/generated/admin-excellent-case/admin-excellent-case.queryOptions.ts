import type {
	DataTag,
	MutationFunction,
	QueryFunction,
	QueryKey,
	UseMutationOptions,
	UseQueryOptions,
} from "@tanstack/react-query";
import type {
	ExcellentCaseRegisterRequest,
	GetCandidatesParams,
} from "../api.schemas";
import { getCandidatesKey, getDetailKey } from "./admin-excellent-case.keys";
import {
	getCandidates,
	getDetail,
	patchRejectExcellentCase,
	postSelectExcellentCase,
} from "./admin-excellent-case.queryFunctions";
import type {
	GetCandidatesQueryResult,
	GetDetailQueryResult,
	PatchRejectExcellentCaseMutationResult,
	PostSelectExcellentCaseMutationResult,
} from "./admin-excellent-case.types";

export const getDetailOptions = <
	TData = GetDetailQueryResult,
	TError = unknown,
>(
	consultId: number,
	options?: {
		query?: Partial<UseQueryOptions<GetDetailQueryResult, TError, TData>>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getDetailKey(consultId);
	const queryFn: QueryFunction<GetDetailQueryResult> = ({ signal }) =>
		getDetail(consultId, signal);
	return {
		queryKey,
		queryFn,
		enabled: !!consultId,
		...queryOptions,
	} as UseQueryOptions<GetDetailQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getCandidatesOptions = <
	TData = GetCandidatesQueryResult,
	TError = unknown,
>(
	params?: GetCandidatesParams,
	options?: {
		query?: Partial<UseQueryOptions<GetCandidatesQueryResult, TError, TData>>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getCandidatesKey(params);
	const queryFn: QueryFunction<GetCandidatesQueryResult> = ({ signal }) =>
		getCandidates(params, signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		GetCandidatesQueryResult,
		TError,
		TData
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const postSelectExcellentCaseOptions = <
	TError = unknown,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		PostSelectExcellentCaseMutationResult,
		TError,
		{ consultId: number; data: ExcellentCaseRegisterRequest },
		TContext
	>;
}): UseMutationOptions<
	PostSelectExcellentCaseMutationResult,
	TError,
	{ consultId: number; data: ExcellentCaseRegisterRequest },
	TContext
> => {
	const mutationKey = ["postSelectExcellentCase"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<
		PostSelectExcellentCaseMutationResult,
		{ consultId: number; data: ExcellentCaseRegisterRequest }
	> = ({ consultId, data }) =>
		postSelectExcellentCase(
			consultId,
			data,
		) as Promise<PostSelectExcellentCaseMutationResult>;
	return { mutationFn, ...mutationOptions };
};

export const patchRejectExcellentCaseOptions = <
	TError = unknown,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		PatchRejectExcellentCaseMutationResult,
		TError,
		{ consultId: number },
		TContext
	>;
}): UseMutationOptions<
	PatchRejectExcellentCaseMutationResult,
	TError,
	{ consultId: number },
	TContext
> => {
	const mutationKey = ["patchRejectExcellentCase"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<
		PatchRejectExcellentCaseMutationResult,
		{ consultId: number }
	> = ({ consultId }) =>
		patchRejectExcellentCase(
			consultId,
		) as Promise<PatchRejectExcellentCaseMutationResult>;
	return { mutationFn, ...mutationOptions };
};
