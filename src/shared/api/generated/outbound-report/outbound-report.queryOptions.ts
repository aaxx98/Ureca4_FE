import type {
	DataTag,
	QueryFunction,
	QueryKey,
	UseQueryOptions,
} from "@tanstack/react-query";
import type {
	GetAgentsParams,
	GetCallResultsParams,
	GetCampaignsParams,
	GetConversionByCategoryParams,
	GetHeatmapParams,
	GetKpiParams,
	GetOptimalTimeParams,
} from "../api.schemas";
import {
	getAgentsKey,
	getCallResultsKey,
	getCampaignsKey,
	getConversionByCategoryKey,
	getHeatmapKey,
	getKpiKey,
	getOptimalTimeKey,
} from "./outbound-report.keys";
import {
	getAgents,
	getCallResults,
	getCampaigns,
	getConversionByCategory,
	getHeatmap,
	getKpi,
	getOptimalTime,
} from "./outbound-report.queryFunctions";
import type {
	GetAgentsQueryResult,
	GetCallResultsQueryResult,
	GetCampaignsQueryResult,
	GetConversionByCategoryQueryResult,
	GetHeatmapQueryResult,
	GetKpiQueryResult,
	GetOptimalTimeQueryResult,
} from "./outbound-report.types";

export const getOptimalTimeOptions = <
	TData = GetOptimalTimeQueryResult,
	TError = unknown,
>(
	params: GetOptimalTimeParams,
	options?: {
		query?: Partial<UseQueryOptions<GetOptimalTimeQueryResult, TError, TData>>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getOptimalTimeKey(params);
	const queryFn: QueryFunction<GetOptimalTimeQueryResult> = ({ signal }) =>
		getOptimalTime(params, signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		GetOptimalTimeQueryResult,
		TError,
		TData
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getKpiOptions = <TData = GetKpiQueryResult, TError = unknown>(
	params: GetKpiParams,
	options?: {
		query?: Partial<UseQueryOptions<GetKpiQueryResult, TError, TData>>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getKpiKey(params);
	const queryFn: QueryFunction<GetKpiQueryResult> = ({ signal }) =>
		getKpi(params, signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		GetKpiQueryResult,
		TError,
		TData
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getHeatmapOptions = <
	TData = GetHeatmapQueryResult,
	TError = unknown,
>(
	params: GetHeatmapParams,
	options?: {
		query?: Partial<UseQueryOptions<GetHeatmapQueryResult, TError, TData>>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getHeatmapKey(params);
	const queryFn: QueryFunction<GetHeatmapQueryResult> = ({ signal }) =>
		getHeatmap(params, signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		GetHeatmapQueryResult,
		TError,
		TData
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getConversionByCategoryOptions = <
	TData = GetConversionByCategoryQueryResult,
	TError = unknown,
>(
	params: GetConversionByCategoryParams,
	options?: {
		query?: Partial<
			UseQueryOptions<GetConversionByCategoryQueryResult, TError, TData>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getConversionByCategoryKey(params);
	const queryFn: QueryFunction<GetConversionByCategoryQueryResult> = ({
		signal,
	}) => getConversionByCategory(params, signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		GetConversionByCategoryQueryResult,
		TError,
		TData
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getCampaignsOptions = <
	TData = GetCampaignsQueryResult,
	TError = unknown,
>(
	params: GetCampaignsParams,
	options?: {
		query?: Partial<UseQueryOptions<GetCampaignsQueryResult, TError, TData>>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getCampaignsKey(params);
	const queryFn: QueryFunction<GetCampaignsQueryResult> = ({ signal }) =>
		getCampaigns(params, signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		GetCampaignsQueryResult,
		TError,
		TData
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getCallResultsOptions = <
	TData = GetCallResultsQueryResult,
	TError = unknown,
>(
	params: GetCallResultsParams,
	options?: {
		query?: Partial<UseQueryOptions<GetCallResultsQueryResult, TError, TData>>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getCallResultsKey(params);
	const queryFn: QueryFunction<GetCallResultsQueryResult> = ({ signal }) =>
		getCallResults(params, signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		GetCallResultsQueryResult,
		TError,
		TData
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getAgentsOptions = <
	TData = GetAgentsQueryResult,
	TError = unknown,
>(
	params: GetAgentsParams,
	options?: {
		query?: Partial<UseQueryOptions<GetAgentsQueryResult, TError, TData>>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getAgentsKey(params);
	const queryFn: QueryFunction<GetAgentsQueryResult> = ({ signal }) =>
		getAgents(params, signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		GetAgentsQueryResult,
		TError,
		TData
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};
