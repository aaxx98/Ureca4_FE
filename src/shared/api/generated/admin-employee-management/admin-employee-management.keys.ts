import type { GetEmployeesParams } from "../api.schemas";

export const getEmployeesKey = (params?: GetEmployeesParams) =>
	[`/admin/employees`, ...(params ? [params] : [])] as const;

export const getEmployeeDetailKey = (id?: number) =>
	[`/admin/employees/${id}`] as const;
