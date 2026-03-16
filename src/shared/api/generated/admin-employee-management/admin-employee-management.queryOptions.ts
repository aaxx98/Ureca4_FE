import type {
	DataTag,
	MutationFunction,
	QueryFunction,
	QueryKey,
	UseMutationOptions,
	UseQueryOptions,
} from "@tanstack/react-query";
import type {
	AdminEmployeeUpdateRequestDto,
	EmployeeCreateRequestDto,
	EmployeeStatusUpdateRequestDto,
	GetEmployeesParams,
} from "../api.schemas";
import {
	getEmployeeDetail,
	getEmployees,
	patchEmployeeStatus,
	postEmployee,
	putEmployee,
} from "./admin-employee-management.queryFunctions";
import {
	getEmployeeDetailKey,
	getEmployeesKey,
} from "./admin-employee-management.keys";
import type {
	GetEmployeeDetailQueryResult,
	GetEmployeesQueryResult,
	PatchEmployeeStatusMutationResult,
	PostEmployeeMutationResult,
	PutEmployeeMutationResult,
} from "./admin-employee-management.types";

export const getEmployeesOptions = <TData = GetEmployeesQueryResult, TError = unknown>(
	params?: GetEmployeesParams,
	options?: { query?: Partial<UseQueryOptions<GetEmployeesQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getEmployeesKey(params);
	const queryFn: QueryFunction<GetEmployeesQueryResult> = ({ signal }) => getEmployees(params, signal);
	return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<GetEmployeesQueryResult, TError, TData> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
};

export const getEmployeeDetailOptions = <TData = GetEmployeeDetailQueryResult, TError = unknown>(
	id: number,
	options?: { query?: Partial<UseQueryOptions<GetEmployeeDetailQueryResult, TError, TData>> },
) => {
	const { query: queryOptions } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? getEmployeeDetailKey(id);
	const queryFn: QueryFunction<GetEmployeeDetailQueryResult> = ({ signal }) => getEmployeeDetail(id, signal);
	return { queryKey, queryFn, enabled: !!id, ...queryOptions } as UseQueryOptions<
		GetEmployeeDetailQueryResult,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export const putEmployeeOptions = <TError = unknown, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<
			PutEmployeeMutationResult,
			TError,
			{ id: number; data: AdminEmployeeUpdateRequestDto },
			TContext
		>;
	},
): UseMutationOptions<PutEmployeeMutationResult, TError, { id: number; data: AdminEmployeeUpdateRequestDto }, TContext> => {
	const mutationKey = ["putEmployee"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<PutEmployeeMutationResult, { id: number; data: AdminEmployeeUpdateRequestDto }> = ({
		id,
		data,
	}) => putEmployee(id, data);
	return { mutationFn, ...mutationOptions };
};

export const postEmployeeOptions = <TError = unknown, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<
			PostEmployeeMutationResult,
			TError,
			{ data: EmployeeCreateRequestDto },
			TContext
		>;
	},
): UseMutationOptions<PostEmployeeMutationResult, TError, { data: EmployeeCreateRequestDto }, TContext> => {
	const mutationKey = ["postEmployee"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<PostEmployeeMutationResult, { data: EmployeeCreateRequestDto }> = ({ data }) =>
		postEmployee(data);
	return { mutationFn, ...mutationOptions };
};

export const patchEmployeeStatusOptions = <TError = unknown, TContext = unknown>(
	options?: {
		mutation?: UseMutationOptions<
			PatchEmployeeStatusMutationResult,
			TError,
			{ empId: number; data: EmployeeStatusUpdateRequestDto },
			TContext
		>;
	},
): UseMutationOptions<PatchEmployeeStatusMutationResult, TError, { empId: number; data: EmployeeStatusUpdateRequestDto }, TContext> => {
	const mutationKey = ["patchEmployeeStatus"];
	const { mutation: mutationOptions } = options
		? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };
	const mutationFn: MutationFunction<
		PatchEmployeeStatusMutationResult,
		{ empId: number; data: EmployeeStatusUpdateRequestDto }
	> = ({ empId, data }) => patchEmployeeStatus(empId, data);
	return { mutationFn, ...mutationOptions };
};
