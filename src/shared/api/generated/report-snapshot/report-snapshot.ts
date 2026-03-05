import type {
	DataTag,
	DefinedInitialDataOptions,
	DefinedUseQueryResult,
	QueryClient,
	QueryKey,
	UndefinedInitialDataOptions,
	UseQueryOptions,
	UseQueryResult,
} from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

import type {
	CompareCustomerRiskParams,
	ErrorResponse,
	GetCustomerRiskParams,
} from "../api.schemas";
import {
	getCompareCustomerRiskQueryOptions,
	getGetCustomerRiskQueryOptions,
} from "./report-snapshot.keys";
import type {
	compareCustomerRisk,
	getCustomerRisk,
} from "./report-snapshot.queryFunctions";

export function useGetCustomerRisk<
	TData = Awaited<ReturnType<typeof getCustomerRisk>>,
	TError = ErrorResponse | ErrorResponse,
>(
	params: undefined | GetCustomerRiskParams,
	options: {
		query: Partial<
			UseQueryOptions<
				Awaited<ReturnType<typeof getCustomerRisk>>,
				TError,
				TData
			>
		> &
			Pick<
				DefinedInitialDataOptions<
					Awaited<ReturnType<typeof getCustomerRisk>>,
					TError,
					Awaited<ReturnType<typeof getCustomerRisk>>
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetCustomerRisk<
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
		> &
			Pick<
				UndefinedInitialDataOptions<
					Awaited<ReturnType<typeof getCustomerRisk>>,
					TError,
					Awaited<ReturnType<typeof getCustomerRisk>>
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetCustomerRisk<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};

export function useGetCustomerRisk<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getGetCustomerRiskQueryOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & { queryKey: DataTag<QueryKey, TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}

export function useCompareCustomerRisk<
	TData = Awaited<ReturnType<typeof compareCustomerRisk>>,
	TError = ErrorResponse | ErrorResponse,
>(
	params: CompareCustomerRiskParams,
	options: {
		query: Partial<
			UseQueryOptions<
				Awaited<ReturnType<typeof compareCustomerRisk>>,
				TError,
				TData
			>
		> &
			Pick<
				DefinedInitialDataOptions<
					Awaited<ReturnType<typeof compareCustomerRisk>>,
					TError,
					Awaited<ReturnType<typeof compareCustomerRisk>>
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useCompareCustomerRisk<
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
		> &
			Pick<
				UndefinedInitialDataOptions<
					Awaited<ReturnType<typeof compareCustomerRisk>>,
					TError,
					Awaited<ReturnType<typeof compareCustomerRisk>>
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useCompareCustomerRisk<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};

export function useCompareCustomerRisk<
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
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getCompareCustomerRiskQueryOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & { queryKey: DataTag<QueryKey, TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}
