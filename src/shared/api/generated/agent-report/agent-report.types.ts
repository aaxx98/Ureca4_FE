import type { ErrorResponse } from "../api.schemas";
import type {
	getCategories1,
	getDailyQuality,
	getMetrics,
	getMonthlyQuality,
	getSatisfaction,
	getWeeklyQuality,
} from "./agent-report.queryFunctions";

export type GetSatisfactionQueryResult = NonNullable<Awaited<ReturnType<typeof getSatisfaction>>>;
export type GetSatisfactionQueryError = ErrorResponse;

export type GetMetricsQueryResult = NonNullable<Awaited<ReturnType<typeof getMetrics>>>;
export type GetMetricsQueryError = ErrorResponse;

export type GetCategories1QueryResult = NonNullable<Awaited<ReturnType<typeof getCategories1>>>;
export type GetCategories1QueryError = ErrorResponse;

export type GetWeeklyQualityQueryResult = NonNullable<Awaited<ReturnType<typeof getWeeklyQuality>>>;
export type GetWeeklyQualityQueryError = ErrorResponse;

export type GetMonthlyQualityQueryResult = NonNullable<Awaited<ReturnType<typeof getMonthlyQuality>>>;
export type GetMonthlyQualityQueryError = ErrorResponse;

export type GetDailyQualityQueryResult = NonNullable<Awaited<ReturnType<typeof getDailyQuality>>>;
export type GetDailyQualityQueryError = ErrorResponse;
