import type {
	MutationFunction,
	UseMutationOptions,
} from "@tanstack/react-query";
import { apiClient } from "../../client";
import type {
	AdminEmployeeUpdateRequestDto,
	AdminEmployeeUpdateResponseDto,
	EmployeeCreateRequestDto,
	EmployeeCreateResponseDto,
	EmployeeDetailResponseDto,
	EmployeeListResponseDto,
	EmployeeStatusUpdateRequestDto,
	EmployeeStatusUpdateResponseDto,
	GetEmployeesParams,
} from "../api.schemas";

export const getEmployees = (
	params?: GetEmployeesParams,
	signal?: AbortSignal,
) => {
	return apiClient<EmployeeListResponseDto>({
		url: `/admin/employees`,
		method: "GET",
		params,
		signal,
	});
};

export const getEmployeeDetail = (id: number, signal?: AbortSignal) => {
	return apiClient<EmployeeDetailResponseDto>({
		url: `/admin/employees/${id}`,
		method: "GET",
		signal,
	});
};

export const updateEmployee = (
	id: number,
	adminEmployeeUpdateRequestDto: AdminEmployeeUpdateRequestDto,
) => {
	return apiClient<AdminEmployeeUpdateResponseDto>({
		url: `/admin/employees/${id}`,
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		data: adminEmployeeUpdateRequestDto,
	});
};

export const getUpdateEmployeeMutationOptions = <
	TError = unknown,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof updateEmployee>>,
		TError,
		{ id: number; data: AdminEmployeeUpdateRequestDto },
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof updateEmployee>>,
	TError,
	{ id: number; data: AdminEmployeeUpdateRequestDto },
	TContext
> => {
	const mutationKey = ["updateEmployee"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof updateEmployee>>,
		{ id: number; data: AdminEmployeeUpdateRequestDto }
	> = (props) => {
		const { id, data } = props ?? {};
		return updateEmployee(id, data);
	};

	return { mutationFn, ...mutationOptions };
};

export type UpdateEmployeeMutationResult = NonNullable<
	Awaited<ReturnType<typeof updateEmployee>>
>;
export type UpdateEmployeeMutationBody = AdminEmployeeUpdateRequestDto;
export type UpdateEmployeeMutationError = unknown;

export const createEmployee = (
	employeeCreateRequestDto: EmployeeCreateRequestDto,
	signal?: AbortSignal,
) => {
	return apiClient<EmployeeCreateResponseDto>({
		url: `/admin/employees`,
		method: "POST",
		headers: { "Content-Type": "application/json" },
		data: employeeCreateRequestDto,
		signal,
	});
};

export const getCreateEmployeeMutationOptions = <
	TError = unknown,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof createEmployee>>,
		TError,
		{ data: EmployeeCreateRequestDto },
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof createEmployee>>,
	TError,
	{ data: EmployeeCreateRequestDto },
	TContext
> => {
	const mutationKey = ["createEmployee"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof createEmployee>>,
		{ data: EmployeeCreateRequestDto }
	> = (props) => {
		const { data } = props ?? {};
		return createEmployee(data);
	};

	return { mutationFn, ...mutationOptions };
};

export type CreateEmployeeMutationResult = NonNullable<
	Awaited<ReturnType<typeof createEmployee>>
>;
export type CreateEmployeeMutationBody = EmployeeCreateRequestDto;
export type CreateEmployeeMutationError = unknown;

export const updateEmployeeStatus = (
	empId: number,
	employeeStatusUpdateRequestDto: EmployeeStatusUpdateRequestDto,
) => {
	return apiClient<EmployeeStatusUpdateResponseDto>({
		url: `/admin/employees/${empId}/status`,
		method: "PATCH",
		headers: { "Content-Type": "application/json" },
		data: employeeStatusUpdateRequestDto,
	});
};

export const getUpdateEmployeeStatusMutationOptions = <
	TError = unknown,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof updateEmployeeStatus>>,
		TError,
		{ empId: number; data: EmployeeStatusUpdateRequestDto },
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof updateEmployeeStatus>>,
	TError,
	{ empId: number; data: EmployeeStatusUpdateRequestDto },
	TContext
> => {
	const mutationKey = ["updateEmployeeStatus"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof updateEmployeeStatus>>,
		{ empId: number; data: EmployeeStatusUpdateRequestDto }
	> = (props) => {
		const { empId, data } = props ?? {};
		return updateEmployeeStatus(empId, data);
	};

	return { mutationFn, ...mutationOptions };
};

export type UpdateEmployeeStatusMutationResult = NonNullable<
	Awaited<ReturnType<typeof updateEmployeeStatus>>
>;
export type UpdateEmployeeStatusMutationBody = EmployeeStatusUpdateRequestDto;
export type UpdateEmployeeStatusMutationError = unknown;
