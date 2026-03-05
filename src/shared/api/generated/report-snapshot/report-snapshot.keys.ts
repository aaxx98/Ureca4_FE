import type {
	DataTag,
	QueryFunction,
	QueryKey,
	UseQueryOptions,
} from "@tanstack/react-query";

import type {
	CompareCustomerRiskParams,
	ErrorResponse,
	GetCustomerRiskParams,
} from "../api.schemas";
import {
	compareCustomerRisk,
	getCustomerRisk,
} from "./report-snapshot.queryFunctions";

export const getGetCustomerRiskQueryKey = (params?: GetCustomerRiskParams) =>
	[`/analysis/daily/customer-risk`, ...(params ? [params] : [])] as const;

export const getGetCustomerRiskQueryOptions = <
	TData = Awaited<ReturnType<typeof getCustomerRisk>>,
	TError = ErrorResponse | ErrorResponse,
>(
	params?: GetCustomerRiskParams,
	options?: {
		query?: Partial<
			UseQueryOptions<
				Awaited<ReturnType<typeof getCustomerRisk>>,
				TError,
				TData
			>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getGetCustomerRiskQueryKey(params);
	const queryFn: QueryFunction<Awaited<ReturnType<typeof getCustomerRisk>>> = ({
		signal,
	}) => getCustomerRisk(params, signal);

	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof getCustomerRisk>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export const getCompareCustomerRiskQueryKey = (
	params?: CompareCustomerRiskParams,
) =>
	[
		`/analysis/daily/customer-risk/compare`,
		...(params ? [params] : []),
	] as const;

export const getCompareCustomerRiskQueryOptions = <
	TData = Awaited<ReturnType<typeof compareCustomerRisk>>,
	TError = ErrorResponse | ErrorResponse,
>(
	params: CompareCustomerRiskParams,
	options?: {
		query?: Partial<
			UseQueryOptions<
				Awaited<ReturnType<typeof compareCustomerRisk>>,
				TError,
				TData
			>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? getCompareCustomerRiskQueryKey(params);
	const queryFn: QueryFunction<
		Awaited<ReturnType<typeof compareCustomerRisk>>
	> = ({ signal }) => compareCustomerRisk(params, signal);

	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof compareCustomerRisk>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};
