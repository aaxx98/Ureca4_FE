import type {
	MutationFunction,
	UseMutationOptions,
} from "@tanstack/react-query";
import { apiClient } from "../../client";
import type {
	ApiResponseBookmarkToggleResponseDto,
	ApiResponseConsultationBookmarkDetailResponseDto,
	ApiResponseListConsultationBookmarkResponseDto,
	ApiResponseListManualBookmarkResponseDto,
	ApiResponseManualBookmarkDetailResponseDto,
} from "../api.schemas";

export const addManualBookmark = (
	manualId: number,
	signal?: AbortSignal,
) => {
	return apiClient<ApiResponseBookmarkToggleResponseDto>({
		url: `/bookmarks/manuals/${manualId}`,
		method: "POST",
		signal,
	});
};

export const getAddManualBookmarkMutationOptions = <
	TError = unknown,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof addManualBookmark>>,
		TError,
		{ manualId: number },
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof addManualBookmark>>,
	TError,
	{ manualId: number },
	TContext
> => {
	const mutationKey = ["addManualBookmark"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof addManualBookmark>>,
		{ manualId: number }
	> = (props) => {
		const { manualId } = props ?? {};
		return addManualBookmark(manualId);
	};

	return { mutationFn, ...mutationOptions };
};

export type AddManualBookmarkMutationResult = NonNullable<Awaited<ReturnType<typeof addManualBookmark>>>;
export type AddManualBookmarkMutationError = unknown;

export const removeManualBookmark = (manualId: number) => {
	return apiClient<ApiResponseBookmarkToggleResponseDto>({
		url: `/bookmarks/manuals/${manualId}`,
		method: "DELETE",
	});
};

export const getRemoveManualBookmarkMutationOptions = <
	TError = unknown,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof removeManualBookmark>>,
		TError,
		{ manualId: number },
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof removeManualBookmark>>,
	TError,
	{ manualId: number },
	TContext
> => {
	const mutationKey = ["removeManualBookmark"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof removeManualBookmark>>,
		{ manualId: number }
	> = (props) => {
		const { manualId } = props ?? {};
		return removeManualBookmark(manualId);
	};

	return { mutationFn, ...mutationOptions };
};

export type RemoveManualBookmarkMutationResult = NonNullable<Awaited<ReturnType<typeof removeManualBookmark>>>;
export type RemoveManualBookmarkMutationError = unknown;

export const addConsultationBookmark = (
	consultId: number,
	signal?: AbortSignal,
) => {
	return apiClient<ApiResponseBookmarkToggleResponseDto>({
		url: `/bookmarks/consultations/${consultId}`,
		method: "POST",
		signal,
	});
};

export const getAddConsultationBookmarkMutationOptions = <
	TError = unknown,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof addConsultationBookmark>>,
		TError,
		{ consultId: number },
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof addConsultationBookmark>>,
	TError,
	{ consultId: number },
	TContext
> => {
	const mutationKey = ["addConsultationBookmark"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof addConsultationBookmark>>,
		{ consultId: number }
	> = (props) => {
		const { consultId } = props ?? {};
		return addConsultationBookmark(consultId);
	};

	return { mutationFn, ...mutationOptions };
};

export type AddConsultationBookmarkMutationResult = NonNullable<Awaited<ReturnType<typeof addConsultationBookmark>>>;
export type AddConsultationBookmarkMutationError = unknown;

export const removeConsultationBookmark = (consultId: number) => {
	return apiClient<ApiResponseBookmarkToggleResponseDto>({
		url: `/bookmarks/consultations/${consultId}`,
		method: "DELETE",
	});
};

export const getRemoveConsultationBookmarkMutationOptions = <
	TError = unknown,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof removeConsultationBookmark>>,
		TError,
		{ consultId: number },
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof removeConsultationBookmark>>,
	TError,
	{ consultId: number },
	TContext
> => {
	const mutationKey = ["removeConsultationBookmark"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof removeConsultationBookmark>>,
		{ consultId: number }
	> = (props) => {
		const { consultId } = props ?? {};
		return removeConsultationBookmark(consultId);
	};

	return { mutationFn, ...mutationOptions };
};

export type RemoveConsultationBookmarkMutationResult = NonNullable<Awaited<ReturnType<typeof removeConsultationBookmark>>>;
export type RemoveConsultationBookmarkMutationError = unknown;

export const getManualBookmarks = (signal?: AbortSignal) => {
	return apiClient<ApiResponseListManualBookmarkResponseDto>({
		url: `/bookmarks/manuals`,
		method: "GET",
		signal,
	});
};

export const getManualBookmarkDetail = (
	manualId: number,
	signal?: AbortSignal,
) => {
	return apiClient<ApiResponseManualBookmarkDetailResponseDto>({
		url: `/bookmarks/manuals/${manualId}/detail`,
		method: "GET",
		signal,
	});
};

export const getConsultationBookmarks = (signal?: AbortSignal) => {
	return apiClient<ApiResponseListConsultationBookmarkResponseDto>({
		url: `/bookmarks/consultations`,
		method: "GET",
		signal,
	});
};

export const getConsultationBookmarkDetail = (
	consultId: number,
	signal?: AbortSignal,
) => {
	return apiClient<ApiResponseConsultationBookmarkDetailResponseDto>({
		url: `/bookmarks/consultations/${consultId}/detail`,
		method: "GET",
		signal,
	});
};
