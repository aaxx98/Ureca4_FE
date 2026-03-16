import type {
	getCheckEmail,
	getMyInfo,
	postGoogleLogin,
	postLogin,
	postLogout,
	postRefresh,
	putChangePassword,
	putMyInfo,
} from "./auth.queryFunctions";

export type GetMyInfoQueryResult = NonNullable<Awaited<ReturnType<typeof getMyInfo>>>;
export type GetMyInfoQueryError = unknown;

export type GetCheckEmailQueryResult = NonNullable<Awaited<ReturnType<typeof getCheckEmail>>>;
export type GetCheckEmailQueryError = unknown;

export type PutChangePasswordMutationResult = NonNullable<Awaited<ReturnType<typeof putChangePassword>>>;
export type PutChangePasswordMutationError = unknown;

export type PostRefreshMutationResult = NonNullable<Awaited<ReturnType<typeof postRefresh>>>;
export type PostRefreshMutationError = unknown;

export type PostLogoutMutationResult = NonNullable<Awaited<ReturnType<typeof postLogout>>>;
export type PostLogoutMutationError = unknown;

export type PostLoginMutationResult = NonNullable<Awaited<ReturnType<typeof postLogin>>>;
export type PostLoginMutationError = unknown;

export type PostGoogleLoginMutationResult = NonNullable<Awaited<ReturnType<typeof postGoogleLogin>>>;
export type PostGoogleLoginMutationError = unknown;

export type PutMyInfoMutationResult = NonNullable<Awaited<ReturnType<typeof putMyInfo>>>;
export type PutMyInfoMutationError = unknown;
