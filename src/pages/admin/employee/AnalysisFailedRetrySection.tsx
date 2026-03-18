import { useMemo, useState } from "react";
import { Button } from "../../../shared/ui/Button/Button";
import { useFailedAnalysisQuery, useMutationPostAnalysisRetry } from "../../../shared/api/custom/analysisRetry";
import * as s from "./AnalysisFailedRetrySection.css";

export function AnalysisFailedRetrySection() {
  const { data, isPending, isError, refetch } = useFailedAnalysisQuery();
  const items = data ?? [];

  const [selected, setSelected] = useState<Record<number, boolean>>({});
  const selectedIds = useMemo(
    () => Object.entries(selected).filter(([, v]) => v).map(([k]) => Number(k)),
    [selected],
  );

  const allIds = useMemo(() => items.map((it) => it.consultId), [items]);
  const allSelected = allIds.length > 0 && allIds.every((id) => selected[id]);
  const someSelected = allIds.some((id) => selected[id]);

  // [수정] Mutation에 성공/실패 핸들링 추가 🥊
  const retryMutation = useMutationPostAnalysisRetry({
    onSuccess: async () => {
      alert("재요청에 성공했습니다."); // 성공 알림 🥊
      setSelected({});
      await refetch();
    },
    onError: (error) => {
      console.error("재요청 실패:", error);
      alert("재요청에 실패했습니다. 다시 시도해주세요."); // 실패 알림 🥊
    }
  });

  function toggleOne(id: number) {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function toggleAll(checked: boolean) {
    if (!checked) {
      setSelected({});
      return;
    }
    const next: Record<number, boolean> = {};
    for (const id of allIds) next[id] = true;
    setSelected(next);
  }

  function handleRetrySelected() {
    if (selectedIds.length === 0) return;
    
    // 재확인 절차 추가 (실수 방지용) 🥊
    if (window.confirm(`선택한 ${selectedIds.length}건에 대해 재분석을 요청하시겠습니까?`)) {
      retryMutation.mutate({ consultIds: selectedIds });
    }
  }

  return (
    <section className={s.card}>
      <div className={s.header}>
        <div className={s.headerLeft}>
          <div className={s.titleRow}>
            <h2 className={s.title}>실패 분석 목록</h2>
            <span className={s.countBadge}>{items.length.toLocaleString()}건</span>
          </div>
          <p className={s.subtitle}>체크된 상담ID를 재분석 요청합니다.</p>
        </div>

        <div className={s.actions}>
          <Button
            variant="secondary"
            type="button"
            onClick={() => refetch()}
            disabled={isPending || retryMutation.isPending}
          >
            새로고침
          </Button>
          <Button
            variant="primary"
            type="button"
            onClick={handleRetrySelected}
            disabled={selectedIds.length === 0 || retryMutation.isPending || isPending}
          >
            {retryMutation.isPending ? "요청 중..." : "선택 항목 재요청"}
          </Button>
        </div>
      </div>

      {isPending && <div className={s.empty}>불러오는 중...</div>}
      {isError && <div className={s.empty}>데이터를 불러오지 못했습니다. (권한/로그인 상태를 확인해주세요)</div>}
      {!isPending && !isError && items.length === 0 && <div className={s.empty}>실패 항목이 없습니다.</div>}

      {!isPending && !isError && items.length > 0 && (
        <>
          <table className={s.table}>
            <thead className={s.thead}>
              <tr>
                <th className={`${s.th} ${s.checkboxCell}`}>
                  <input
                    className={s.checkbox}
                    type="checkbox"
                    checked={allSelected}
                    ref={(el) => {
                      if (!el) return;
                      el.indeterminate = !allSelected && someSelected;
                    }}
                    onChange={(e) => toggleAll(e.target.checked)}
                    aria-label="전체 선택"
                  />
                </th>
                <th className={s.th} style={{ width: "110px" }}>상담ID</th>
                <th className={s.th} style={{ width: "140px" }}>카테고리</th>
                <th className={s.th}>AI 요약 실패사유</th>
                <th className={s.th}>AI 채점 실패사유</th>
                <th className={s.th} style={{ width: "170px" }}>업데이트일시</th>
              </tr>
            </thead>
            <tbody>
              {items.map((it) => (
                <tr key={it.consultId} className={s.tr}>
                  <td className={`${s.td} ${s.checkboxCell}`}>
                    <input
                      className={s.checkbox}
                      type="checkbox"
                      checked={!!selected[it.consultId]}
                      onChange={() => toggleOne(it.consultId)}
                      aria-label={`${it.consultId} 선택`}
                    />
                  </td>
                  <td className={s.tdMono}>{it.consultId}</td>
                  <td className={s.tdSecondary}>{it.categoryCode}</td>
                  <td className={s.tdSecondary}>{it.summaryFailReason || "-"}</td>
                  <td className={s.tdSecondary}>{it.scoringFailReason || "-"}</td>
                  <td className={s.tdSecondary}>{it.updatedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={s.footer}>
            <div className={s.footerText}>선택됨: {selectedIds.length.toLocaleString()}건</div>
          </div>
        </>
      )}
    </section>
  );
}