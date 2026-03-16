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
export function useGetEmployeesQuery<
	TData = GetEmployeesQueryResult,
	TError = unknown,
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
export function useGetEmployeesQuery<
	TData = GetEmployeesQueryResult,
	TError = unknown,
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
export function useGetEmployeesQuery<
	TData = GetEmployeesQueryResult,
	TError = unknown,
>(
	params?: GetEmployeesParams,
	options?: {
		query?: Partial<UseQueryOptions<GetEmployeesQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useGetEmployeesQuery<
	TData = GetEmployeesQueryResult,
	TError = unknown,
>(
	params?: GetEmployeesParams,
	options?: {
		query?: Partial<UseQueryOptions<GetEmployeesQueryResult, TError, TData>>;
	},
	queryClient?: QueryClient,
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getEmployeesOptions(params, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

/** @summary 직원 계정 정보 상세 조회 */
export function useGetEmployeeDetailQuery<
	TData = GetEmployeeDetailQueryResult,
	TError = unknown,
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
export function useGetEmployeeDetailQuery<
	TData = GetEmployeeDetailQueryResult,
	TError = unknown,
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
export function useGetEmployeeDetailQuery<
	TData = GetEmployeeDetailQueryResult,
	TError = unknown,
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
export function useGetEmployeeDetailQuery<
	TData = GetEmployeeDetailQueryResult,
	TError = unknown,
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
	const queryOptions = getEmployeeDetailOptions(id, options);
	const query = useQuery(queryOptions, queryClient) as UseQueryResult<
		TData,
		TError
	> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};
	query.queryKey = queryOptions.queryKey;
	return query;
}

export function useMutationPutEmployeeQuery<
	TError = unknown,
	TContext = unknown,
>(
	options?: {
		mutation?: UseMutationOptions<
			PutEmployeeMutationResult,
			TError,
			{ id: number; data: AdminEmployeeUpdateRequestDto },
			TContext
		>;
	},
	queryClient?: QueryClient,
): UseMutationResult<
	PutEmployeeMutationResult,
	TError,
	{ id: number; data: AdminEmployeeUpdateRequestDto },
	TContext
> {
	return useMutation(putEmployeeOptions(options), queryClient);
}

export function useMutationPostEmployeeQuery<
	TError = unknown,
	TContext = unknown,
>(
	options?: {
		mutation?: UseMutationOptions<
			PostEmployeeMutationResult,
			TError,
			{ data: EmployeeCreateRequestDto },
			TContext
		>;
	},
	queryClient?: QueryClient,
): UseMutationResult<
	PostEmployeeMutationResult,
	TError,
	{ data: EmployeeCreateRequestDto },
	TContext
> {
	return useMutation(postEmployeeOptions(options), queryClient);
}

export function useMutationPatchEmployeeStatusQuery<
	TError = unknown,
	TContext = unknown,
>(
	options?: {
		mutation?: UseMutationOptions<
			PatchEmployeeStatusMutationResult,
			TError,
			{ empId: number; data: EmployeeStatusUpdateRequestDto },
			TContext
		>;
	},
	queryClient?: QueryClient,
): UseMutationResult<
	PatchEmployeeStatusMutationResult,
	TError,
	{ empId: number; data: EmployeeStatusUpdateRequestDto },
	TContext
> {
	return useMutation(patchEmployeeStatusOptions(options), queryClient);
}
