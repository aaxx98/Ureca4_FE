import { apiClient } from "../../client";
import type {
	CompareCustomerRiskParams,
	CustomerRiskCompareResponse,
	CustomerRiskResponse,
	ErrorResponse,
	GetCustomerRiskParams,
} from "../api.schemas";

/**
 * @summary 고객 특이사항 조회
 */
export const getCustomerRisk = (
	params?: GetCustomerRiskParams,
	signal?: AbortSignal,
) => {
	return apiClient<CustomerRiskResponse | undefined>({
		url: `/analysis/daily/customer-risk`,
		method: "GET",
		params,
		signal,
	});
};

/**
 * @summary 고객 특이사항 기간 비교
 */
export const compareCustomerRisk = (
	params: CompareCustomerRiskParams,
	signal?: AbortSignal,
) => {
	return apiClient<CustomerRiskCompareResponse | undefined>({
		url: `/analysis/daily/customer-risk/compare`,
		method: "GET",
		params,
		signal,
	});
};

export type GetCustomerRiskQueryResult = NonNullable<
	Awaited<ReturnType<typeof getCustomerRisk>>
>;
export type GetCustomerRiskQueryError = ErrorResponse | ErrorResponse;

export type CompareCustomerRiskQueryResult = NonNullable<
	Awaited<ReturnType<typeof compareCustomerRisk>>
>;
export type CompareCustomerRiskQueryError = ErrorResponse | ErrorResponse;
