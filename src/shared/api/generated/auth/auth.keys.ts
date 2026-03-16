import type { CheckEmailParams } from "../api.schemas";

export const getMyInfoKey = () => [`/auth/me`] as const;

export const getCheckEmailKey = (params?: CheckEmailParams) =>
	[`/auth/google/email-check`, ...(params ? [params] : [])] as const;
