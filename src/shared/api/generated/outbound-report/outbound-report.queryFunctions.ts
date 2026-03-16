import { apiClient } from "../../client";
import type {
	GetAgentsParams,
	GetCallResultsParams,
	GetCampaignsParams,
	GetConversionByCategoryParams,
	GetHeatmapParams,
	GetKpiParams,
	GetOptimalTimeParams,
	OutboundAgentResponse,
	OutboundCallResultResponse,
	OutboundCampaignResponse,
	OutboundConversionResponse,
	OutboundHeatmapResponse,
	OutboundKpiResponse,
	OutboundOptimalTimeResponse,
} from "../api.schemas";

export const getOptimalTime = (
	params: GetOptimalTimeParams,
	signal?: AbortSignal,
) => {
	return apiClient<OutboundOptimalTimeResponse>({
		url: `/analysis/outbound/optimal-time`,
		method: "GET",
		params,
		signal,
	});
};

export const getKpi = (params: GetKpiParams, signal?: AbortSignal) => {
	return apiClient<OutboundKpiResponse>({
		url: `/analysis/outbound/kpi`,
		method: "GET",
		params,
		signal,
	});
};

export const getHeatmap = (params: GetHeatmapParams, signal?: AbortSignal) => {
	return apiClient<OutboundHeatmapResponse>({
		url: `/analysis/outbound/heatmap`,
		method: "GET",
		params,
		signal,
	});
};

export const getConversionByCategory = (
	params: GetConversionByCategoryParams,
	signal?: AbortSignal,
) => {
	return apiClient<OutboundConversionResponse>({
		url: `/analysis/outbound/conversion-by-category`,
		method: "GET",
		params,
		signal,
	});
};

export const getCampaigns = (
	params: GetCampaignsParams,
	signal?: AbortSignal,
) => {
	return apiClient<OutboundCampaignResponse>({
		url: `/analysis/outbound/campaigns`,
		method: "GET",
		params,
		signal,
	});
};

export const getCallResults = (
	params: GetCallResultsParams,
	signal?: AbortSignal,
) => {
	return apiClient<OutboundCallResultResponse>({
		url: `/analysis/outbound/call-results`,
		method: "GET",
		params,
		signal,
	});
};

export const getAgents = (params: GetAgentsParams, signal?: AbortSignal) => {
	return apiClient<OutboundAgentResponse>({
		url: `/analysis/outbound/agents`,
		method: "GET",
		params,
		signal,
	});
};
