import type {
	GetAgentsParams,
	GetCallResultsParams,
	GetCampaignsParams,
	GetConversionByCategoryParams,
	GetHeatmapParams,
	GetKpiParams,
	GetOptimalTimeParams,
} from "../api.schemas";

export const getOptimalTimeKey = (params?: GetOptimalTimeParams) =>
	[`/analysis/outbound/optimal-time`, ...(params ? [params] : [])] as const;

export const getKpiKey = (params?: GetKpiParams) =>
	[`/analysis/outbound/kpi`, ...(params ? [params] : [])] as const;

export const getHeatmapKey = (params?: GetHeatmapParams) =>
	[`/analysis/outbound/heatmap`, ...(params ? [params] : [])] as const;

export const getConversionByCategoryKey = (
	params?: GetConversionByCategoryParams,
) =>
	[
		`/analysis/outbound/conversion-by-category`,
		...(params ? [params] : []),
	] as const;

export const getCampaignsKey = (params?: GetCampaignsParams) =>
	[`/analysis/outbound/campaigns`, ...(params ? [params] : [])] as const;

export const getCallResultsKey = (params?: GetCallResultsParams) =>
	[`/analysis/outbound/call-results`, ...(params ? [params] : [])] as const;

export const getAgentsKey = (params?: GetAgentsParams) =>
	[`/analysis/outbound/agents`, ...(params ? [params] : [])] as const;
