import type {
	DataTag,
	DefinedInitialDataOptions,
	DefinedUseQueryResult,
	QueryClient,
	QueryKey,
	UndefinedInitialDataOptions,
	UseMutationOptions,
	UseMutationResult,
	UseQueryOptions,
	UseQueryResult,
} from "@tanstack/react-query";
import { useMutation, useQuery } from "@tanstack/react-query";
import type {
	AdminEmployeeUpdateRequestDto,
	EmployeeCreateRequestDto,
	EmployeeStatusUpdateRequestDto,
	GetEmployeesParams,
} from "../api.schemas";
import {
	type GetEmployeeDetailQueryError,
	type GetEmployeeDetailQueryResult,
	type GetEmployeesQueryError,
	type GetEmployeesQueryResult,
	getGetEmployeeDetailQueryOptions,
	getGetEmployeesQueryOptions,
} from "./admin-employee-management.keys";
import {
	type CreateEmployeeMutationError,
	type CreateEmployeeMutationResult,
	getCreateEmployeeMutationOptions,
	getUpdateEmployeeMutationOptions,
	getUpdateEmployeeStatusMutationOptions,
	type UpdateEmployeeMutationError,
	type UpdateEmployeeMutationResult,
	type UpdateEmployeeStatusMutationError,
	type UpdateEmployeeStatusMutationResult,
} from "./admin-employee-management.queryFunctions";

export function useGetEmployees<
	TData = GetEmployeesQueryResult,
	TError = GetEmployeesQueryError,
>(
	params: undefined | GetEmployeesParams,
	options: {
		query: Partial<UseQueryOptions<GetEmployeesQueryResult, TError, TData>> &
			Pick<
				DefinedInitialDataOptions<
					GetEmployeesQueryResult,
					TError,
					GetEmployeesQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetEmployees<
	TData = GetEmployeesQueryResult,
	TError = GetEmployeesQueryError,
>(
	params?: GetEmployeesParams,
	options?: {
		query?: Partial<UseQueryOptions<GetEmployeesQueryResult, TError, TData>> &
			Pick<
				UndefinedInitialDataOptions<
					GetEmployeesQueryResult,
					TError,
					GetEmployeesQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetEmployees<
	TData = GetEmployeesQueryResult,
	TError = GetEmployeesQueryError,
>(
	params?: GetEmployeesParams,
	options?: {
		query?: Partial<UseQueryOptions<GetEmployeesQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetEmployees<
	TData = GetEmployeesQueryResult,
	TError = GetEmployeesQueryError,
>(
	params?: GetEmployeesParams,
	options?: {
		query?: Partial<UseQueryOptions<GetEmployeesQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getGetEmployeesQueryOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & { queryKey: DataTag<QueryKey, TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}

export function useGetEmployeeDetail<
	TData = GetEmployeeDetailQueryResult,
	TError = GetEmployeeDetailQueryError,
>(
	id: number,
	options: {
		query: Partial<
			UseQueryOptions<GetEmployeeDetailQueryResult, TError, TData>
		> &
			Pick<
				DefinedInitialDataOptions<
					GetEmployeeDetailQueryResult,
					TError,
					GetEmployeeDetailQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetEmployeeDetail<
	TData = GetEmployeeDetailQueryResult,
	TError = GetEmployeeDetailQueryError,
>(
	id: number,
	options?: {
		query?: Partial<
			UseQueryOptions<GetEmployeeDetailQueryResult, TError, TData>
		> &
			Pick<
				UndefinedInitialDataOptions<
					GetEmployeeDetailQueryResult,
					TError,
					GetEmployeeDetailQueryResult
				>,
				"initialData"
			>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetEmployeeDetail<
	TData = GetEmployeeDetailQueryResult,
	TError = GetEmployeeDetailQueryError,
>(
	id: number,
	options?: {
		query?: Partial<
			UseQueryOptions<GetEmployeeDetailQueryResult, TError, TData>
		>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetEmployeeDetail<
	TData = GetEmployeeDetailQueryResult,
	TError = GetEmployeeDetailQueryError,
>(
	id: number,
	options?: {
		query?: Partial<
			UseQueryOptions<GetEmployeeDetailQueryResult, TError, TData>
		>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getGetEmployeeDetailQueryOptions(id, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & { queryKey: DataTag<QueryKey, TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}

export const useUpdateEmployee = <
	TError = UpdateEmployeeMutationError,
	TContext = unknown,
>(
	options?: {
		mutation?: UseMutationOptions<
			UpdateEmployeeMutationResult,
			TError,
			{ id: number; data: AdminEmployeeUpdateRequestDto },
			TContext
		>;
	},
	queryClient?: QueryClient,
): UseMutationResult<
	UpdateEmployeeMutationResult,
	TError,
	{ id: number; data: AdminEmployeeUpdateRequestDto },
	TContext
> => {
	const mutationOptions = getUpdateEmployeeMutationOptions(options);
	return useMutation(mutationOptions, queryClient);
};

export const useCreateEmployee = <
	TError = CreateEmployeeMutationError,
	TContext = unknown,
>(
	options?: {
		mutation?: UseMutationOptions<
			CreateEmployeeMutationResult,
			TError,
			{ data: EmployeeCreateRequestDto },
			TContext
		>;
	},
	queryClient?: QueryClient,
): UseMutationResult<
	CreateEmployeeMutationResult,
	TError,
	{ data: EmployeeCreateRequestDto },
	TContext
> => {
	const mutationOptions = getCreateEmployeeMutationOptions(options);
	return useMutation(mutationOptions, queryClient);
};

export const useUpdateEmployeeStatus = <
	TError = UpdateEmployeeStatusMutationError,
	TContext = unknown,
>(
	options?: {
		mutation?: UseMutationOptions<
			UpdateEmployeeStatusMutationResult,
			TError,
			{ empId: number; data: EmployeeStatusUpdateRequestDto },
			TContext
		>;
	},
	queryClient?: QueryClient,
): UseMutationResult<
	UpdateEmployeeStatusMutationResult,
	TError,
	{ empId: number; data: EmployeeStatusUpdateRequestDto },
	TContext
> => {
	const mutationOptions = getUpdateEmployeeStatusMutationOptions(options);
	return useMutation(mutationOptions, queryClient);
};
