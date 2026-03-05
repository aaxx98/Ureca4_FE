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

import type { DemoConsultSubmitRequest } from "../api.schemas";
import {
	type GetRandomConsultDataQueryError,
	type GetRandomConsultDataQueryResult,
	getGetRandomConsultDataQueryOptions,
} from "./demo.keys";
import {
	getSubmitConsultMutationOptions,
	type SubmitConsultMutationError,
	type SubmitConsultMutationResult,
} from "./demo.queryFunctions";

export function useGetRandomConsultData<
	TData = GetRandomConsultDataQueryResult,
	TError = GetRandomConsultDataQueryError,
>(
	options: {
		query: Partial<
			UseQueryOptions<GetRandomConsultDataQueryResult, TError, TData>
		> &
			Pick<
				DefinedInitialDataOptions<
					GetRandomConsultDataQueryResult,
					TError,
					GetRandomConsultDataQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetRandomConsultData<
	TData = GetRandomConsultDataQueryResult,
	TError = GetRandomConsultDataQueryError,
>(
	options?: {
		query?: Partial<
			UseQueryOptions<GetRandomConsultDataQueryResult, TError, TData>
		> &
			Pick<
				UndefinedInitialDataOptions<
					GetRandomConsultDataQueryResult,
					TError,
					GetRandomConsultDataQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetRandomConsultData<
	TData = GetRandomConsultDataQueryResult,
	TError = GetRandomConsultDataQueryError,
>(
	options?: {
		query?: Partial<
			UseQueryOptions<GetRandomConsultDataQueryResult, TError, TData>
		>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetRandomConsultData<
	TData = GetRandomConsultDataQueryResult,
	TError = GetRandomConsultDataQueryError,
>(
	options?: {
		query?: Partial<
			UseQueryOptions<GetRandomConsultDataQueryResult, TError, TData>
		>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getGetRandomConsultDataQueryOptions(options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & { queryKey: DataTag<QueryKey, TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}

export const useSubmitConsult = <
	TError = SubmitConsultMutationError,
	TContext = unknown,
>(
	options?: {
		mutation?: UseMutationOptions<
			SubmitConsultMutationResult,
			TError,
			{ data: DemoConsultSubmitRequest },
			TContext
		>;
	},
	queryClient?: QueryClient,
): UseMutationResult<
	SubmitConsultMutationResult,
	TError,
	{ data: DemoConsultSubmitRequest },
	TContext
> => {
	const mutationOptions = getSubmitConsultMutationOptions(options);
	return useMutation(mutationOptions, queryClient);
};
