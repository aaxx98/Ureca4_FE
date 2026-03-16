import type {
	getEmployeeDetail,
	getEmployees,
	putEmployee,
	postEmployee,
	patchEmployeeStatus,
} from "./admin-employee-management.queryFunctions";

export type GetEmployeesQueryResult = NonNullable<Awaited<ReturnType<typeof getEmployees>>>;
export type GetEmployeesQueryError = unknown;

export type GetEmployeeDetailQueryResult = NonNullable<Awaited<ReturnType<typeof getEmployeeDetail>>>;
export type GetEmployeeDetailQueryError = unknown;

export type PutEmployeeMutationResult = NonNullable<Awaited<ReturnType<typeof putEmployee>>>;
export type PutEmployeeMutationBody = import("../api.schemas").AdminEmployeeUpdateRequestDto;
export type PutEmployeeMutationError = unknown;

export type PostEmployeeMutationResult = NonNullable<Awaited<ReturnType<typeof postEmployee>>>;
export type PostEmployeeMutationBody = import("../api.schemas").EmployeeCreateRequestDto;
export type PostEmployeeMutationError = unknown;

export type PatchEmployeeStatusMutationResult = NonNullable<Awaited<ReturnType<typeof patchEmployeeStatus>>>;
export type PatchEmployeeStatusMutationBody = import("../api.schemas").EmployeeStatusUpdateRequestDto;
export type PatchEmployeeStatusMutationError = unknown;
