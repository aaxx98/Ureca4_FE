import type {
	DataTag,
	MutationFunction,
	QueryFunction,
	QueryKey,
	UseMutationOptions,
	UseQueryOptions,
} from "@tanstack/react-query";
import type { DemoConsultSubmitRequest } from "../api.schemas";
import { getRandomConsultData, postConsult } from "./demo.queryFunctions";
import { getRandomConsultDataKey } from "./demo.keys";
import type { GetRandomConsultDataQueryResult, PostConsultMutationResult } from "./demo.types";

export const getRandomConsultDataOptions = <TData = GetRandomConsultDataQueryResult, TError = unknown>(
	options?: { query?: Partial<UseQueryOptions<GetRandomConsultDataQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getRandomConsultDataKey();
	const queryFn: QueryFunction<GetRandomConsultDataQueryResult> = ({ signal }) => getRandomConsultData(signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<GetRandomConsultDataQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const postConsultOptions = <TError = unknown, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<PostConsultMutationResult, TError, { data: DemoConsultSubmitRequest }, TContext>;
	},
): UseMutationOptions<PostConsultMutationResult, TError, { data: DemoConsultSubmitRequest }, TContext> => {
	const mutationKey = ["postConsult"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<PostConsultMutationResult, { data: DemoConsultSubmitRequest }> = ({ data }) =>
		postConsult(data) as Promise<PostConsultMutationResult>;
	return { mutationFn, ...mutationOptions };
};
