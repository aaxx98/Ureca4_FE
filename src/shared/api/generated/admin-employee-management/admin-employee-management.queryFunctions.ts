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

export const getEmployees = (params?: GetEmployeesParams, signal?: AbortSignal) =>
	apiClient<EmployeeListResponseDto>({ url: `/admin/employees`, method: "GET", params, signal });

export const getEmployeeDetail = (id: number, signal?: AbortSignal) =>
	apiClient<EmployeeDetailResponseDto>({ url: `/admin/employees/${id}`, method: "GET", signal });

export const putEmployee = (id: number, data: AdminEmployeeUpdateRequestDto) =>
	apiClient<AdminEmployeeUpdateResponseDto>({
		url: `/admin/employees/${id}`,
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		data,
	});

export const postEmployee = (data: EmployeeCreateRequestDto, signal?: AbortSignal) =>
	apiClient<EmployeeCreateResponseDto>({
		url: `/admin/employees`,
		method: "POST",
		headers: { "Content-Type": "application/json" },
		data,
		signal,
	});

export const patchEmployeeStatus = (empId: number, data: EmployeeStatusUpdateRequestDto) =>
	apiClient<EmployeeStatusUpdateResponseDto>({
		url: `/admin/employees/${empId}/status`,
		method: "PATCH",
		headers: { "Content-Type": "application/json" },
		data,
	});
