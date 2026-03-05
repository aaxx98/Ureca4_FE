import type {
	MutationFunction,
	UseMutationOptions,
} from "@tanstack/react-query";
import { apiClient } from "../../client";
import type {
	ApiResponseNoticeResponse,
	ApiResponsePageNoticeSummary,
	ApiResponseVoid,
	GetNoticeListParams,
	NoticeCreateRequest,
	NoticeUpdateRequest,
} from "../api.schemas";

export const getNoticeDetail = (noticeId: number, signal?: AbortSignal) => {
	return apiClient<ApiResponseNoticeResponse>({
		url: `/notices/${noticeId}`,
		method: "GET",
		signal,
	});
};

export const updateNotice = (
	noticeId: number,
	noticeUpdateRequest: NoticeUpdateRequest,
) => {
	return apiClient<ApiResponseNoticeResponse>({
		url: `/notices/${noticeId}`,
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		data: noticeUpdateRequest,
	});
};

export const getUpdateNoticeMutationOptions = <
	TError = unknown,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof updateNotice>>,
		TError,
		{ noticeId: number; data: NoticeUpdateRequest },
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof updateNotice>>,
	TError,
	{ noticeId: number; data: NoticeUpdateRequest },
	TContext
> => {
	const mutationKey = ["updateNotice"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof updateNotice>>,
		{ noticeId: number; data: NoticeUpdateRequest }
	> = (props) => {
		const { noticeId, data } = props ?? {};
		return updateNotice(noticeId, data);
	};

	return { mutationFn, ...mutationOptions };
};

export type UpdateNoticeMutationResult = NonNullable<
	Awaited<ReturnType<typeof updateNotice>>
>;
export type UpdateNoticeMutationBody = NoticeUpdateRequest;
export type UpdateNoticeMutationError = unknown;

export const deleteNotice = (noticeId: number) => {
	return apiClient<ApiResponseVoid>({
		url: `/notices/${noticeId}`,
		method: "DELETE",
	});
};

export const getDeleteNoticeMutationOptions = <
	TError = unknown,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof deleteNotice>>,
		TError,
		{ noticeId: number },
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof deleteNotice>>,
	TError,
	{ noticeId: number },
	TContext
> => {
	const mutationKey = ["deleteNotice"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof deleteNotice>>,
		{ noticeId: number }
	> = (props) => {
		const { noticeId } = props ?? {};
		return deleteNotice(noticeId);
	};

	return { mutationFn, ...mutationOptions };
};

export type DeleteNoticeMutationResult = NonNullable<
	Awaited<ReturnType<typeof deleteNotice>>
>;
export type DeleteNoticeMutationError = unknown;

export const getNoticeList = (
	params?: GetNoticeListParams,
	signal?: AbortSignal,
) => {
	return apiClient<ApiResponsePageNoticeSummary>({
		url: `/notices`,
		method: "GET",
		params,
		signal,
	});
};

export const createNotice = (
	noticeCreateRequest: NoticeCreateRequest,
	signal?: AbortSignal,
) => {
	return apiClient<ApiResponseNoticeResponse>({
		url: `/notices`,
		method: "POST",
		headers: { "Content-Type": "application/json" },
		data: noticeCreateRequest,
		signal,
	});
};

export const getCreateNoticeMutationOptions = <
	TError = unknown,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof createNotice>>,
		TError,
		{ data: NoticeCreateRequest },
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof createNotice>>,
	TError,
	{ data: NoticeCreateRequest },
	TContext
> => {
	const mutationKey = ["createNotice"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof createNotice>>,
		{ data: NoticeCreateRequest }
	> = (props) => {
		const { data } = props ?? {};
		return createNotice(data);
	};

	return { mutationFn, ...mutationOptions };
};

export type CreateNoticeMutationResult = NonNullable<
	Awaited<ReturnType<typeof createNotice>>
>;
export type CreateNoticeMutationBody = NoticeCreateRequest;
export type CreateNoticeMutationError = unknown;
