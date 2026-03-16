import type {
	DataTag,
	MutationFunction,
	QueryFunction,
	QueryKey,
	UseMutationOptions,
	UseQueryOptions,
} from "@tanstack/react-query";
import type {
	GetManualHistoryParams,
	ManualRequest,
	ManualUpdateRequest,
} from "../api.schemas";
import {
	getManualHistory,
	patchActivateManual,
	patchDeactivateManual,
	postManual,
	putManual,
} from "./admin-manual-management.queryFunctions";
import { getManualHistoryKey } from "./admin-manual-management.keys";
import type {
	GetManualHistoryQueryResult,
	PatchActivateManualMutationResult,
	PatchDeactivateManualMutationResult,
	PostManualMutationResult,
	PutManualMutationResult,
} from "./admin-manual-management.types";

export const getManualHistoryOptions = <TData = GetManualHistoryQueryResult, TError = unknown>(
	params?: GetManualHistoryParams,
	options?: { query?: Partial<UseQueryOptions<GetManualHistoryQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getManualHistoryKey(params);
	const queryFn: QueryFunction<GetManualHistoryQueryResult> = ({ signal }) => getManualHistory(params, signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<GetManualHistoryQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const putManualOptions = <TError = void, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<
			PutManualMutationResult,
			TError,
			{ manualId: number; data: ManualUpdateRequest },
			TContext
		>;
	},
): UseMutationOptions<PutManualMutationResult, TError, { manualId: number; data: ManualUpdateRequest }, TContext> => {
	const mutationKey = ["putManual"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<PutManualMutationResult, { manualId: number; data: ManualUpdateRequest }> = ({
		manualId,
		data,
	}) => putManual(manualId, data) as Promise<PutManualMutationResult>;
	return { mutationFn, ...mutationOptions };
};

export const postManualOptions = <TError = void, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<PostManualMutationResult, TError, { data: ManualRequest }, TContext>;
	},
): UseMutationOptions<PostManualMutationResult, TError, { data: ManualRequest }, TContext> => {
	const mutationKey = ["postManual"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<PostManualMutationResult, { data: ManualRequest }> = ({ data }) => postManual(data) as Promise<PostManualMutationResult>;
	return { mutationFn, ...mutationOptions };
};

export const patchDeactivateManualOptions = <TError = unknown, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<PatchDeactivateManualMutationResult, TError, { manualId: number }, TContext>;
	},
): UseMutationOptions<PatchDeactivateManualMutationResult, TError, { manualId: number }, TContext> => {
	const mutationKey = ["patchDeactivateManual"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<PatchDeactivateManualMutationResult, { manualId: number }> = ({ manualId }) =>
		patchDeactivateManual(manualId) as Promise<PatchDeactivateManualMutationResult>;
	return { mutationFn, ...mutationOptions };
};

export const patchActivateManualOptions = <TError = unknown, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<PatchActivateManualMutationResult, TError, { manualId: number }, TContext>;
	},
): UseMutationOptions<PatchActivateManualMutationResult, TError, { manualId: number }, TContext> => {
	const mutationKey = ["patchActivateManual"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<PatchActivateManualMutationResult, { manualId: number }> = ({ manualId }) =>
		patchActivateManual(manualId) as Promise<PatchActivateManualMutationResult>;
	return { mutationFn, ...mutationOptions };
};
