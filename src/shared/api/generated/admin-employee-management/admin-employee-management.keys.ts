import type {
	DataTag,
	QueryFunction,
	QueryKey,
	UseQueryOptions,
} from "@tanstack/react-query";

import type { GetEmployeesParams } from "../api.schemas";
import {
	getEmployeeDetail,
	getEmployees,
} from "./admin-employee-management.queryFunctions";

export const getGetEmployeesQueryKey = (params?: GetEmployeesParams) =>
	[`/admin/employees`, ...(params ? [params] : [])] as const;

export const getGetEmployeesQueryOptions = <
	TData = Awaited<ReturnType<typeof getEmployees>>,
	TError = unknown,
>(
	params?: GetEmployeesParams,
	options?: {
		query?: Partial<
			UseQueryOptions<Awaited<ReturnType<typeof getEmployees>>, TError, TData>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getGetEmployeesQueryKey(params);
	const queryFn: QueryFunction<Awaited<ReturnType<typeof getEmployees>>> = ({
		signal,
	}) => getEmployees(params, signal);

	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
		Awaited<ReturnType<typeof getEmployees>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetEmployeesQueryResult = NonNullable<
	Awaited<ReturnType<typeof getEmployees>>
>;
export type GetEmployeesQueryError = unknown;

export const getGetEmployeeDetailQueryKey = (id?: number) =>
	[`/admin/employees/${id}`] as const;

export const getGetEmployeeDetailQueryOptions = <
	TData = Awaited<ReturnType<typeof getEmployeeDetail>>,
	TError = unknown,
>(
	id: number,
	options?: {
		query?: Partial<
			UseQueryOptions<
				Awaited<ReturnType<typeof getEmployeeDetail>>,
				TError,
				TData
			>
		>;
	},
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getGetEmployeeDetailQueryKey(id);
	const queryFn: QueryFunction<
		Awaited<ReturnType<typeof getEmployeeDetail>>
	> = ({ signal }) => getEmployeeDetail(id, signal);

	return {
		queryKey,
		queryFn,
		enabled: !!id,
		...queryOptions,
	} as UseQueryOptions<
		Awaited<ReturnType<typeof getEmployeeDetail>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetEmployeeDetailQueryResult = NonNullable<
	Awaited<ReturnType<typeof getEmployeeDetail>>
>;
export type GetEmployeeDetailQueryError = unknown;
