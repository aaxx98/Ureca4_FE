import { useMutation, useQuery } from "@tanstack/react-query";
import type {
	DataTag,
	QueryKey,
	UseMutationOptions,
	UseMutationResult,
	UseQueryOptions,
	UseQueryResult,
} from "@tanstack/react-query";
import type {
	AdminEmployeeUpdateRequestDto,
	EmployeeCreateRequestDto,
	EmployeeStatusUpdateRequestDto,
	GetEmployeesParams,
} from "../api.schemas";
import {
	getEmployeeDetailOptions,
	getEmployeesOptions,
	patchEmployeeStatusOptions,
	postEmployeeOptions,
	putEmployeeOptions,
} from "./admin-employee-management.queryOptions";
import type {
	GetEmployeeDetailQueryResult,
	GetEmployeesQueryResult,
	PatchEmployeeStatusMutationResult,
	PostEmployeeMutationResult,
	PutEmployeeMutationResult,
} from "./admin-employee-management.types";

/** @summary 직원 계정 정보 목록 조회 */
export function useGetEmployeesQuery<TData = GetEmployeesQueryResult, TError = unknown>(
	params?: GetEmployeesParams,
	options?: { query?: Partial<UseQueryOptions<GetEmployeesQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getEmployeesOptions(params, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 직원 계정 정보 상세 조회 */
export function useGetEmployeeDetailQuery<TData = GetEmployeeDetailQueryResult, TError = unknown>(
	id: number,
	options?: { query?: Partial<UseQueryOptions<GetEmployeeDetailQueryResult, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
	const queryOptions = getEmployeeDetailOptions(id, options);
	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
	query.queryKey = queryOptions.queryKey;
	return query;
}


/** @summary 직원 계정 정보 수정 */
export function useMutationPutEmployeeQuery<TError = unknown, TContext = unknown>(
	options?: UseMutationOptions<PutEmployeeMutationResult, TError, { id: number; data: AdminEmployeeUpdateRequestDto }, TContext>,
): UseMutationResult<PutEmployeeMutationResult, TError, { id: number; data: AdminEmployeeUpdateRequestDto }, TContext> {
	return useMutation(putEmployeeOptions({ mutation: options }));
}


/** @summary 직원 계정 생성 */
export function useMutationPostEmployeeQuery<TError = unknown, TContext = unknown>(
	options?: UseMutationOptions<PostEmployeeMutationResult, TError, { data: EmployeeCreateRequestDto }, TContext>,
): UseMutationResult<PostEmployeeMutationResult, TError, { data: EmployeeCreateRequestDto }, TContext> {
	return useMutation(postEmployeeOptions({ mutation: options }));
}


/** @summary 직원 계정 활성화/비활성화 */
export function useMutationPatchEmployeeStatusQuery<TError = unknown, TContext = unknown>(
	options?: UseMutationOptions<PatchEmployeeStatusMutationResult, TError, { empId: number; data: EmployeeStatusUpdateRequestDto }, TContext>,
): UseMutationResult<PatchEmployeeStatusMutationResult, TError, { empId: number; data: EmployeeStatusUpdateRequestDto }, TContext> {
	return useMutation(patchEmployeeStatusOptions({ mutation: options }));
}
