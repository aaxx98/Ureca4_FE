import type {
	MutationFunction,
	UseMutationOptions,
} from "@tanstack/react-query";
import { apiClient } from "../../client";
import type {
	ApiResponseDemoConsultDataResponse,
	ApiResponseDemoConsultSubmitResponse,
	DemoConsultSubmitRequest,
} from "../api.schemas";

export const getRandomConsultData = (signal?: AbortSignal) => {
	return apiClient<ApiResponseDemoConsultDataResponse>({
		url: `/demo/consultation`,
		method: "GET",
		signal,
	});
};

export const submitConsult = (
	demoConsultSubmitRequest: DemoConsultSubmitRequest,
	signal?: AbortSignal,
) => {
	return apiClient<ApiResponseDemoConsultSubmitResponse>({
		url: `/demo/consultation`,
		method: "POST",
		headers: { "Content-Type": "application/json" },
		data: demoConsultSubmitRequest,
		signal,
	});
};

export const getSubmitConsultMutationOptions = <
	TError = unknown,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof submitConsult>>,
		TError,
		{ data: DemoConsultSubmitRequest },
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof submitConsult>>,
	TError,
	{ data: DemoConsultSubmitRequest },
	TContext
> => {
	const mutationKey = ["submitConsult"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof submitConsult>>,
		{ data: DemoConsultSubmitRequest }
	> = (props) => {
		const { data } = props ?? {};
		return submitConsult(data);
	};

	return { mutationFn, ...mutationOptions };
};

export type SubmitConsultMutationResult = NonNullable<
	Awaited<ReturnType<typeof submitConsult>>
>;
export type SubmitConsultMutationBody = DemoConsultSubmitRequest;
export type SubmitConsultMutationError = unknown;
