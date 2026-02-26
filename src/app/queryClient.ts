import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// 데이터를 "신선하다"고 간주하는 시간 (이 시간 안엔 서버 재요청 안 함)
			staleTime: 1000 * 60 * 5, // 5분
			// 컴포넌트가 언마운트된 후 캐시를 메모리에 유지하는 시간
			gcTime: 1000 * 60 * 10, // 10분
			// 요청 실패 시 재시도 횟수
			retry: 1,
			// 탭 전환 후 돌아올 때 자동으로 재요청할지 여부
			refetchOnWindowFocus: false,
		},
		mutations: {
			retry: 0,
		},
	},
})
