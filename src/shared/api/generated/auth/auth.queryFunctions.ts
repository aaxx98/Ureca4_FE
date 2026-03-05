import type {
	MutationFunction,
	UseMutationOptions,
} from "@tanstack/react-query";
import { apiClient } from "../../client";
import type {
	CheckEmailParams,
	EmailCheckResponseDto,
	GoogleAuthRequestDto,
	GoogleAuthResponseDto,
	LoginRequestDto,
	LoginResponseDto,
	LogoutResponseDto,
	MyInfoResponseDto,
	MyInfoUpdateRequestDto,
	MyInfoUpdateResponseDto,
	PasswordChangeRequestDto,
	PasswordChangeResponseDto,
	TokenRefreshResponseDto,
} from "../api.schemas";

export const changePassword = (
	passwordChangeRequestDto: PasswordChangeRequestDto,
) => {
	return apiClient<PasswordChangeResponseDto>({
		url: `/auth/me/password`,
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		data: passwordChangeRequestDto,
	});
};

export const getChangePasswordMutationOptions = <
	TError = PasswordChangeResponseDto | PasswordChangeResponseDto,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof changePassword>>,
		TError,
		{ data: PasswordChangeRequestDto },
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof changePassword>>,
	TError,
	{ data: PasswordChangeRequestDto },
	TContext
> => {
	const mutationKey = ["changePassword"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof changePassword>>,
		{ data: PasswordChangeRequestDto }
	> = (props) => {
		const { data } = props ?? {};
		return changePassword(data);
	};

	return { mutationFn, ...mutationOptions };
};

export type ChangePasswordMutationResult = NonNullable<
	Awaited<ReturnType<typeof changePassword>>
>;
export type ChangePasswordMutationBody = PasswordChangeRequestDto;
export type ChangePasswordMutationError =
	| PasswordChangeResponseDto
	| PasswordChangeResponseDto;

export const refresh = (signal?: AbortSignal) => {
	return apiClient<TokenRefreshResponseDto>({
		url: `/auth/refresh`,
		method: "POST",
		signal,
	});
};

export const getRefreshMutationOptions = <
	TError = TokenRefreshResponseDto,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof refresh>>,
		TError,
		void,
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof refresh>>,
	TError,
	void,
	TContext
> => {
	const mutationKey = ["refresh"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof refresh>>,
		void
	> = () => refresh();

	return { mutationFn, ...mutationOptions };
};

export type RefreshMutationResult = NonNullable<
	Awaited<ReturnType<typeof refresh>>
>;
export type RefreshMutationError = TokenRefreshResponseDto;

export const logout = (signal?: AbortSignal) => {
	return apiClient<LogoutResponseDto>({
		url: `/auth/logout`,
		method: "POST",
		signal,
	});
};

export const getLogoutMutationOptions = <
	TError = LogoutResponseDto,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof logout>>,
		TError,
		void,
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof logout>>,
	TError,
	void,
	TContext
> => {
	const mutationKey = ["logout"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof logout>>,
		void
	> = () => logout();

	return { mutationFn, ...mutationOptions };
};

export type LogoutMutationResult = NonNullable<
	Awaited<ReturnType<typeof logout>>
>;
export type LogoutMutationError = LogoutResponseDto;

export const login = (
	loginRequestDto: LoginRequestDto,
	signal?: AbortSignal,
) => {
	return apiClient<LoginResponseDto>({
		url: `/auth/login`,
		method: "POST",
		headers: { "Content-Type": "application/json" },
		data: loginRequestDto,
		signal,
	});
};

export const getLoginMutationOptions = <
	TError = LoginResponseDto | LoginResponseDto,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof login>>,
		TError,
		{ data: LoginRequestDto },
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof login>>,
	TError,
	{ data: LoginRequestDto },
	TContext
> => {
	const mutationKey = ["login"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof login>>,
		{ data: LoginRequestDto }
	> = (props) => {
		const { data } = props ?? {};
		return login(data);
	};

	return { mutationFn, ...mutationOptions };
};

export type LoginMutationResult = NonNullable<
	Awaited<ReturnType<typeof login>>
>;
export type LoginMutationBody = LoginRequestDto;
export type LoginMutationError = LoginResponseDto | LoginResponseDto;

export const googleLogin = (
	googleAuthRequestDto: GoogleAuthRequestDto,
	signal?: AbortSignal,
) => {
	return apiClient<GoogleAuthResponseDto>({
		url: `/auth/google`,
		method: "POST",
		headers: { "Content-Type": "application/json" },
		data: googleAuthRequestDto,
		signal,
	});
};

export const getGoogleLoginMutationOptions = <
	TError =
		| GoogleAuthResponseDto
		| GoogleAuthResponseDto
		| GoogleAuthResponseDto,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof googleLogin>>,
		TError,
		{ data: GoogleAuthRequestDto },
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof googleLogin>>,
	TError,
	{ data: GoogleAuthRequestDto },
	TContext
> => {
	const mutationKey = ["googleLogin"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof googleLogin>>,
		{ data: GoogleAuthRequestDto }
	> = (props) => {
		const { data } = props ?? {};
		return googleLogin(data);
	};

	return { mutationFn, ...mutationOptions };
};

export type GoogleLoginMutationResult = NonNullable<
	Awaited<ReturnType<typeof googleLogin>>
>;
export type GoogleLoginMutationBody = GoogleAuthRequestDto;
export type GoogleLoginMutationError =
	| GoogleAuthResponseDto
	| GoogleAuthResponseDto
	| GoogleAuthResponseDto;

export const updateMyInfo = (
	myInfoUpdateRequestDto: MyInfoUpdateRequestDto,
) => {
	return apiClient<MyInfoUpdateResponseDto>({
		url: `/auth/me`,
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		data: myInfoUpdateRequestDto,
	});
};

export const getUpdateMyInfoMutationOptions = <
	TError = MyInfoUpdateResponseDto | MyInfoUpdateResponseDto,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof updateMyInfo>>,
		TError,
		{ data: MyInfoUpdateRequestDto },
		TContext
	>;
}): UseMutationOptions<
	Awaited<ReturnType<typeof updateMyInfo>>,
	TError,
	{ data: MyInfoUpdateRequestDto },
	TContext
> => {
	const mutationKey = ["updateMyInfo"];
	const { mutation: mutationOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey } };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof updateMyInfo>>,
		{ data: MyInfoUpdateRequestDto }
	> = (props) => {
		const { data } = props ?? {};
		return updateMyInfo(data);
	};

	return { mutationFn, ...mutationOptions };
};

export type UpdateMyInfoMutationResult = NonNullable<
	Awaited<ReturnType<typeof updateMyInfo>>
>;
export type UpdateMyInfoMutationBody = MyInfoUpdateRequestDto;
export type UpdateMyInfoMutationError =
	| MyInfoUpdateResponseDto
	| MyInfoUpdateResponseDto;

export const getMyInfo = (signal?: AbortSignal) => {
	return apiClient<MyInfoResponseDto>({
		url: `/auth/me`,
		method: "GET",
		signal,
	});
};

export const checkEmail = (params: CheckEmailParams, signal?: AbortSignal) => {
	return apiClient<EmailCheckResponseDto>({
		url: `/auth/google/email-check`,
		method: "GET",
		params,
		signal,
	});
};
