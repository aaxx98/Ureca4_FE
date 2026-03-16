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
	GetManualHistoryParams,
	ManualRequest,
	ManualUpdateRequest,
} from "../api.schemas";
import {
	getManualHistoryOptions,
	patchActivateManualOptions,
	patchDeactivateManualOptions,
	postManualOptions,
	putManualOptions,
} from "./admin-manual-management.queryOptions";
import type {
	GetManualHistoryQueryResult,
	PatchActivateManualMutationResult,
	PatchDeactivateManualMutationResult,
	PostManualMutationResult,
	PutManualMutationResult,
} from "./admin-manual-management.types";

/** @summary 매뉴얼 이력 조회 */
export function useGetManualHistoryQuery<
	TData = GetManualHistoryQueryResult,
	TError = unknown,
>(
	params: undefined | GetManualHistoryParams,
	options: {
		query: Partial<
			UseQueryOptions<GetManualHistoryQueryResult, TError, TData>
		> &
			Pick<
				DefinedInitialDataOptions<
					GetManualHistoryQueryResult,
					TError,
					GetManualHistoryQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetManualHistoryQuery<
	TData = GetManualHistoryQueryResult,
	TError = unknown,
>(
	params?: GetManualHistoryParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetManualHistoryQueryResult, TError, TData>
		> &
			Pick<
				UndefinedInitialDataOptions<
					GetManualHistoryQueryResult,
					TError,
					GetManualHistoryQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetManualHistoryQuery<
	TData = GetManualHistoryQueryResult,
	TError = unknown,
>(
	params?: GetManualHistoryParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetManualHistoryQueryResult, TError, TData>
		>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetManualHistoryQuery<
	TData = GetManualHistoryQueryResult,
	TError = unknown,
>(
	params?: GetManualHistoryParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetManualHistoryQueryResult, TError, TData>
		>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getManualHistoryOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

export function useMutationPutManualQuery<TError = void, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<
			PutManualMutationResult,
			TError,
			{ manualId: number; data: ManualUpdateRequest },
			TContext
		>;
	},
	queryClient?: QueryClient,
): UseMutationResult<
	PutManualMutationResult,
	TError,
	{ manualId: number; data: ManualUpdateRequest },
	TContext
> {
	return useMutation(putManualOptions(options), queryClient);
}

export function useMutationPostManualQuery<TError = void, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<
			PostManualMutationResult,
			TError,
			{ data: ManualRequest },
			TContext
		>;
	},
	queryClient?: QueryClient,
): UseMutationResult<
	PostManualMutationResult,
	TError,
	{ data: ManualRequest },
	TContext
> {
	return useMutation(postManualOptions(options), queryClient);
}

export function useMutationPatchDeactivateManualQuery<
	TError = unknown,
	TContext = unknown,
>(
	options?: {
		mutation?: UseMutationOptions<
			PatchDeactivateManualMutationResult,
			TError,
			{ manualId: number },
			TContext
		>;
	},
	queryClient?: QueryClient,
): UseMutationResult<
	PatchDeactivateManualMutationResult,
	TError,
	{ manualId: number },
	TContext
> {
	return useMutation(patchDeactivateManualOptions(options), queryClient);
}

export function useMutationPatchActivateManualQuery<
	TError = unknown,
	TContext = unknown,
>(
	options?: {
		mutation?: UseMutationOptions<
			PatchActivateManualMutationResult,
			TError,
			{ manualId: number },
			TContext
		>;
	},
	queryClient?: QueryClient,
): UseMutationResult<
	PatchActivateManualMutationResult,
	TError,
	{ manualId: number },
	TContext
> {
	return useMutation(patchActivateManualOptions(options), queryClient);
}
