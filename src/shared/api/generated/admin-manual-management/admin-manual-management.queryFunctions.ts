import type {
	MutationFunction,
	UseMutationOptions,
} from "@tanstack/react-query";
import { apiClient } from "../../client";
import type {
	GetManualHistoryParams,
	ManualRequest,
	ManualResponse,
	ManualUpdateRequest,
} from "../api.schemas";

export const updateManual = (
	manualId: number,
	manualUpdateRequest: ManualUpdateRequest,
) => {
	return apiClient<void>({
		url: `/admin/manuals/${manualId}`,
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		data: manualUpdateRequest,
	});
};

export const getUpdateManualMutationOptions = <
	TError = void,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof updateManual>>,
		TError,
		{ manualId: number; data: ManualUpdateRequest },
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof updateManual>>,
	TError,
	{ manualId: number; data: ManualUpdateRequest },
	TContext
> => {
	const mutationKey = ["updateManual"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof updateManual>>,
		{ manualId: number; data: ManualUpdateRequest }
	> = (props) => {
		const { manualId, data } = props ?? {};
		return updateManual(manualId, data);
	};

	return { mutationFn, ...mutationOptions };
};

export type UpdateManualMutationResult = NonNullable<Awaited<ReturnType<typeof updateManual>>>;
export type UpdateManualMutationBody = ManualUpdateRequest;
export type UpdateManualMutationError = void;

export const createManual = (
	manualRequest: ManualRequest,
	signal?: AbortSignal,
) => {
	return apiClient<void>({
		url: `/admin/manuals`,
		method: "POST",
		headers: { "Content-Type": "application/json" },
		data: manualRequest,
		signal,
	});
};

export const getCreateManualMutationOptions = <
	TError = void | void,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof createManual>>,
		TError,
		{ data: ManualRequest },
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof createManual>>,
	TError,
	{ data: ManualRequest },
	TContext
> => {
	const mutationKey = ["createManual"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof createManual>>,
		{ data: ManualRequest }
	> = (props) => {
		const { data } = props ?? {};
		return createManual(data);
	};

	return { mutationFn, ...mutationOptions };
};

export type CreateManualMutationResult = NonNullable<Awaited<ReturnType<typeof createManual>>>;
export type CreateManualMutationBody = ManualRequest;
export type CreateManualMutationError = void | void;

export const deactivateManual = (manualId: number) => {
	return apiClient<void>({
		url: `/admin/manuals/${manualId}/deactivate`,
		method: "PATCH",
	});
};

export const getDeactivateManualMutationOptions = <
	TError = unknown,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof deactivateManual>>,
		TError,
		{ manualId: number },
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof deactivateManual>>,
	TError,
	{ manualId: number },
	TContext
> => {
	const mutationKey = ["deactivateManual"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof deactivateManual>>,
		{ manualId: number }
	> = (props) => {
		const { manualId } = props ?? {};
		return deactivateManual(manualId);
	};

	return { mutationFn, ...mutationOptions };
};

export type DeactivateManualMutationResult = NonNullable<Awaited<ReturnType<typeof deactivateManual>>>;
export type DeactivateManualMutationError = unknown;

export const activateManual = (manualId: number) => {
	return apiClient<void>({
		url: `/admin/manuals/${manualId}/activate`,
		method: "PATCH",
	});
};

export const getActivateManualMutationOptions = <
	TError = unknown,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof activateManual>>,
		TError,
		{ manualId: number },
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof activateManual>>,
	TError,
	{ manualId: number },
	TContext
> => {
	const mutationKey = ["activateManual"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof activateManual>>,
		{ manualId: number }
	> = (props) => {
		const { manualId } = props ?? {};
		return activateManual(manualId);
	};

	return { mutationFn, ...mutationOptions };
};

export type ActivateManualMutationResult = NonNullable<Awaited<ReturnType<typeof activateManual>>>;
export type ActivateManualMutationError = unknown;

export const getManualHistory = (
	params?: GetManualHistoryParams,
	signal?: AbortSignal,
) => {
	return apiClient<ManualResponse[]>({
		url: `/admin/manuals/history`,
		method: "GET",
		params,
		signal,
	});
};
