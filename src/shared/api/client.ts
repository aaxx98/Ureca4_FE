import ky from "ky";

import { getAccessToken, setAccessToken } from "./tokenStore";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function normalizeApiUrl(url: string) {
	const normalizedUrl = url.replace(/^\//, "");
	if (API_BASE_URL.endsWith("/api") && normalizedUrl.startsWith("api/")) {
		return normalizedUrl.slice(4);
	}
	return normalizedUrl;
}

const kyInstance = ky.create({
	prefixUrl: API_BASE_URL,
	credentials: "include",
	hooks: {
		beforeRequest: [
			(request) => {
				const token = getAccessToken();
				if (token) {
					request.headers.set("Authorization", `Bearer ${token}`);
				}
			},
		],
		afterResponse: [
			async (request, _options, response) => {
				if (response.status !== 401) return response;

				// 인증 엔드포인트 자체가 401이면 토큰 갱신 시도하지 않음
				if (
					request.url.includes("/auth/refresh") ||
					request.url.includes("/auth/login")
				) {
					setAccessToken(null);
					return response;
				}

				try {
					const data = await ky
						.post(`${API_BASE_URL}/auth/refresh`, {
							credentials: "include",
						})
						.json<{ accessToken: string }>();

					setAccessToken(data.accessToken);
					request.headers.set("Authorization", `Bearer ${data.accessToken}`);
					return ky(request);
				} catch {
					setAccessToken(null);
					window.location.href = "/login";
				}
			},
		],
	},
});

// orval mutator 함수 - orval이 생성한 코드가 이 함수를 통해 요청
export const apiClient = <T>(config: {
	url: string;
	method: string;
	headers?: Record<string, string>;
	params?: Record<string, string | number | boolean>;
	data?: unknown;
	signal?: AbortSignal;
}): Promise<T> => {
	const searchParams = config.params
		? Object.fromEntries(
				Object.entries(config.params).filter(
					([, v]) => v !== undefined && v !== null,
				),
			)
		: undefined;

	return kyInstance(normalizeApiUrl(config.url), {
		method: config.method,
		searchParams,
		json: config.data,
		signal: config.signal,
	}).json<T>();
};
