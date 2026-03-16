import type {
	getAgents,
	getCallResults,
	getCampaigns,
	getConversionByCategory,
	getHeatmap,
	getKpi,
	getOptimalTime,
} from "./outbound-report.queryFunctions";

export type GetOptimalTimeQueryResult = NonNullable<
	Awaited<ReturnType<typeof getOptimalTime>>
>;
export type GetOptimalTimeQueryError = unknown;

export type GetKpiQueryResult = NonNullable<Awaited<ReturnType<typeof getKpi>>>;
export type GetKpiQueryError = unknown;

export type GetHeatmapQueryResult = NonNullable<
	Awaited<ReturnType<typeof getHeatmap>>
>;
export type GetHeatmapQueryError = unknown;

export type GetConversionByCategoryQueryResult = NonNullable<
	Awaited<ReturnType<typeof getConversionByCategory>>
>;
export type GetConversionByCategoryQueryError = unknown;

export type GetCampaignsQueryResult = NonNullable<
	Awaited<ReturnType<typeof getCampaigns>>
>;
export type GetCampaignsQueryError = unknown;

export type GetCallResultsQueryResult = NonNullable<
	Awaited<ReturnType<typeof getCallResults>>
>;
export type GetCallResultsQueryError = unknown;

export type GetAgentsQueryResult = NonNullable<
	Awaited<ReturnType<typeof getAgents>>
>;
export type GetAgentsQueryError = unknown;
