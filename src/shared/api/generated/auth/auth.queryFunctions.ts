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

export const getMyInfo = (signal?: AbortSignal) => {
	return apiClient<MyInfoResponseDto>({
		url: `/auth/me`,
		method: "GET",
		signal,
	});
};

export const getCheckEmail = (params: CheckEmailParams, signal?: AbortSignal) => {
	return apiClient<EmailCheckResponseDto>({
		url: `/auth/google/email-check`,
		method: "GET",
		params,
		signal,
	});
};

export const putChangePassword = (data: PasswordChangeRequestDto) => {
	return apiClient<PasswordChangeResponseDto>({
		url: `/auth/me/password`,
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		data,
	});
};

export const postRefresh = (signal?: AbortSignal) => {
	return apiClient<TokenRefreshResponseDto>({
		url: `/auth/refresh`,
		method: "POST",
		signal,
	});
};

export const postLogout = (signal?: AbortSignal) => {
	return apiClient<LogoutResponseDto>({
		url: `/auth/logout`,
		method: "POST",
		signal,
	});
};

export const postLogin = (data: LoginRequestDto, signal?: AbortSignal) => {
	return apiClient<LoginResponseDto>({
		url: `/auth/login`,
		method: "POST",
		headers: { "Content-Type": "application/json" },
		data,
		signal,
	});
};

export const postGoogleLogin = (data: GoogleAuthRequestDto, signal?: AbortSignal) => {
	return apiClient<GoogleAuthResponseDto>({
		url: `/auth/google`,
		method: "POST",
		headers: { "Content-Type": "application/json" },
		data,
		signal,
	});
};

export const putMyInfo = (data: MyInfoUpdateRequestDto) => {
	return apiClient<MyInfoUpdateResponseDto>({
		url: `/auth/me`,
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		data,
	});
};
