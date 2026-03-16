import { apiClient } from "../../client";
import type {
	GetManualHistoryParams,
	ManualRequest,
	ManualResponse,
	ManualUpdateRequest,
} from "../api.schemas";

export const getManualHistory = (params?: GetManualHistoryParams, signal?: AbortSignal) =>
	apiClient<ManualResponse[]>({
		url: `/admin/manuals/history`,
		method: "GET",
		params,
		signal,
	});

export const putManual = (manualId: number, manualUpdateRequest: ManualUpdateRequest) =>
	apiClient<void>({
		url: `/admin/manuals/${manualId}`,
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		data: manualUpdateRequest,
	});

export const postManual = (manualRequest: ManualRequest, signal?: AbortSignal) =>
	apiClient<void>({
		url: `/admin/manuals`,
		method: "POST",
		headers: { "Content-Type": "application/json" },
		data: manualRequest,
		signal,
	});

export const patchDeactivateManual = (manualId: number) =>
	apiClient<void>({
		url: `/admin/manuals/${manualId}/deactivate`,
		method: "PATCH",
	});

export const patchActivateManual = (manualId: number) =>
	apiClient<void>({
		url: `/admin/manuals/${manualId}/activate`,
		method: "PATCH",
	});
