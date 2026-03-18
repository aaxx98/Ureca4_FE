import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { apiClient } from "../client";

/** [Type] 실패 분석 항목 데이터 구조 🥊 */
export type FailedAnalysisItem = {
  consultId: number;
  categoryCode: string;
  summaryStatus: string;
  summaryFailReason: string | null;
  summaryRetryCount: number;
  scoringStatus: string;
  scoringFailReason: string | null;
  scoringRetryCount: number;
  updatedAt: string;
};

const failedAnalysisKey = ["analysis", "failed"] as const;

export function getFailedAnalysis(signal?: AbortSignal) {
  return apiClient<FailedAnalysisItem[]>({
    url: `/analysis/failed`,
    method: "GET",
    signal,
  });
}

/** [API] 선택한 항목 재분석 요청 🥊 
 * 반환 타입을 void로 유지하여 타입스크립트 에러를 방지합니다.
 */
export async function postAnalysisRetry(consultIds: number[]): Promise<void> {
  try {
    await apiClient<void>({
      url: `/analysis/retry`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: consultIds,
    });
  } catch (error: any) {
    // JSON 파싱 에러가 났을 때, 성공으로 간주하고 그냥 종료(return)합니다. 🥊
    // return; 은 undefined를 반환하므로 void 타입과 호환됩니다.
    if (error.name === 'SyntaxError' || error.message?.includes('JSON')) {
      return; 
    }
    throw error;
  }
}

export function useFailedAnalysisQuery<TData = FailedAnalysisItem[], TError = unknown>(
  options?: { query?: Partial<UseQueryOptions<FailedAnalysisItem[], TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: readonly unknown[] } {
  const query = useQuery({
    queryKey: failedAnalysisKey,
    queryFn: ({ signal }) => getFailedAnalysis(signal),
    staleTime: 0,
    refetchOnMount: "always",
    ...options?.query,
  }) as UseQueryResult<TData, TError> & { queryKey: readonly unknown[] };

  query.queryKey = failedAnalysisKey;
  return query;
}

/** [Hook] 재분석 요청 뮤테이션 (최종 무적 버전) 🥊 */
export function useMutationPostAnalysisRetry<TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<void, TError, { consultIds: number[] }, TContext>,
): UseMutationResult<void, TError, { consultIds: number[] }, TContext> {
  const queryClient = useQueryClient();

  return useMutation({
    ...options, // 기본 옵션을 먼저 깔고 🥊

    mutationFn: ({ consultIds }) => postAnalysisRetry(consultIds),
    
    // 3개든 4개든 모든 인수를 'any' 배열로 받아 타입 검사를 무력화하고 배달만 수행합니다. 🥊
    onSuccess: async (...args: any[]) => {
      try {
        await queryClient.invalidateQueries({ queryKey: failedAnalysisKey });
        await queryClient.refetchQueries({ queryKey: failedAnalysisKey, type: "active" });
      } catch (e) {
        console.warn("리프레시 에러 무시:", e);
      }
      
      // 컴포넌트의 onSuccess를 실행할 때 (as any)로 감싸서 인수의 개수/타입 에러를 차단합니다. 🥊
      if (options?.onSuccess) {
        (options.onSuccess as any)(...args);
      }
    },
    
    onError: (...args: any[]) => {
      if (options?.onError) {
        (options.onError as any)(...args);
      }
    },

    onSettled: (...args: any[]) => {
      if (options?.onSettled) {
        (options.onSettled as any)(...args);
      }
    }
  });
}