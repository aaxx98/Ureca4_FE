import ky from "ky"

import { getAccessToken, setAccessToken } from "./tokenStore"

const kyInstance = ky.create({
	prefixUrl: import.meta.env.VITE_API_BASE_URL,
	credentials: "include",
	hooks: {
		beforeRequest: [
			(request) => {
				const token = getAccessToken()
				if (token) {
					request.headers.set("Authorization", `Bearer ${token}`)
				}
			},
		],
		afterResponse: [
			async (request, _options, response) => {
				if (response.status !== 401) return response

				// auth/refresh 자체가 401이면 무한루프 방지
				if (request.url.includes("/auth/refresh")) {
					setAccessToken(null)
					return response
				}

				try {
					const data = await ky
						.post(`${import.meta.env.VITE_API_BASE_URL}/auth/refresh`, {
							credentials: "include",
						})
						.json<{ accessToken: string }>()

					setAccessToken(data.accessToken)
					request.headers.set("Authorization", `Bearer ${data.accessToken}`)
					return ky(request)
				} catch {
					setAccessToken(null)
					window.location.href = "/login"
				}
			},
		],
	},
})

// orval mutator 함수 - orval이 생성한 코드가 이 함수를 통해 요청
export const apiClient = <T>(config: {
	url: string
	method: string
	params?: Record<string, string | number | boolean>
	data?: unknown
	signal?: AbortSignal
}): Promise<T> => {
	return kyInstance(config.url.replace(/^\//, ""), {
		method: config.method,
		searchParams: config.params,
		json: config.data,
		signal: config.signal,
	}).json<T>()
}
