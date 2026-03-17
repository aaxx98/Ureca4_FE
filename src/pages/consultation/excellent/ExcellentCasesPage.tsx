import { useState } from "react";
import { useGetWeeklyBoardQuery } from "../../../shared/api/generated/weekly-excellent-case-board";
import { ROUTES } from "../../../shared/config/routes";
import { ContextNavItem } from "../../../shared/ui/ContextNavItem";
import { AnalysisIcon } from "../../../shared/ui/icons";
import * as layout from "../../../shared/ui/pageLayout.css";
import { AppSidebar } from "../../../widgets/AppSidebar/AppSidebar";
import { ExcellentCaseCard } from "./ExcellentCaseCard";
import { ExcellentCaseDetailModal } from "./ExcellentCaseDetailModal";
import { ExcellentCaseHeroCard } from "./ExcellentCaseHeroCard";
import * as s from "./ExcellentCasesPage.css";

function getCurrentISOWeek() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));
  const yearStart = new Date(d.getFullYear(), 0, 1);
  const week = Math.ceil((((d.valueOf() - yearStart.valueOf()) / 86400000) + 1) / 7);
  return { year: d.getFullYear(), week };
}

export function ExcellentCasesPage() {
  const [{ year, week }, setWeek] = useState(getCurrentISOWeek);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedId, setSelectedId]             = useState<number | null>(null);

  const { data, isPending, isError } = useGetWeeklyBoardQuery({ year, week });
  const items = data ?? [];

  const categories = Array.from(new Set(items.map((i) => i.smallCategory).filter(Boolean))) as string[];
  const sorted      = [...items].sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
  const heroCase    = sorted[0];
  const otherCases  = sorted.slice(1);
  const filtered    = selectedCategory
    ? otherCases.filter(i => i.smallCategory === selectedCategory)
    : otherCases;

  function navigate(delta: number) {
    setWeek(prev => {
      const d = new Date(prev.year, 0, 1 + (prev.week - 1) * 7);
      d.setDate(d.getDate() + delta * 7);
      d.setDate(d.getDate() + 4 - (d.getDay() || 7));
      const yearStart = new Date(d.getFullYear(), 0, 1);
      const w = Math.ceil((((d.valueOf() - yearStart.valueOf()) / 86400000) + 1) / 7);
      return { year: d.getFullYear(), week: w };
    });
  }

  return (
    <>
      <AppSidebar label="대시보드">
        <ContextNavItem icon={<AnalysisIcon />} label="우수 사례 게시판" to={ROUTES.EXCELLENT} isActive />
      </AppSidebar>

      <main className={layout.main}>
        <div className={s.pageHeader}>
          <div className={s.headerTop}>
            <div>
              <div className={s.headerBadge}>🏆 EXCELLENT CASES</div>
              <h1 className={s.headerTitle}>우수 상담 사례</h1>
              <p className={s.headerSubtitle}>AI가 선별하고 관리자가 인증한 이번 주 최고의 상담 사례</p>
            </div>
            <div className={s.weekNav}>
              <button type="button" className={s.weekNavBtn} onClick={() => navigate(-1)}>‹</button>
              <span className={s.weekLabel}>{year}년 {week}주차</span>
              <button type="button" className={s.weekNavBtn} onClick={() => navigate(1)}>›</button>
            </div>
          </div>
          {items.length > 0 && (
            <div className={s.statsRow}>
              <span className={s.statChip}>전체 {items.length}건</span>
              {categories.map(cat => (
                <span key={cat} className={s.statChip}>{cat} {items.filter((i) => i.smallCategory === cat).length}건</span>
              ))}
            </div>
          )}
        </div>

        <div className={s.content}>
          {isPending && <p className={s.stateText}>불러오는 중...</p>}
          {isError   && <p className={s.stateText}>데이터를 불러오지 못했습니다.</p>}
          {!isPending && !isError && items.length === 0 && (
            <p className={s.stateText}>이번 주 등록된 우수 사례가 없습니다.</p>
          )}

          {!isPending && !isError && heroCase && (
            <>
              <div>
                <p className={s.sectionTitle}>🌟 이번 주 톱 케이스</p>
                <ExcellentCaseHeroCard
                  item={heroCase}
                  onClick={() => heroCase.consultId != null && setSelectedId(heroCase.consultId)}
                />
              </div>

              {otherCases.length > 0 && (
                <div>
                  <p className={s.sectionTitle}>
                    전체 사례
                    <span className={s.sectionSub}>{otherCases.length}건</span>
                  </p>
                  <div className={s.filterRow} style={{ marginBottom: "16px" }}>
                    <button
                      type="button"
                      className={selectedCategory === null ? s.filterPillActive : s.filterPill}
                      onClick={() => setSelectedCategory(null)}
                    >
                      전체
                    </button>
                    {categories.map(cat => (
                      <button
                        key={cat}
                        type="button"
                        className={selectedCategory === cat ? s.filterPillActive : s.filterPill}
                        onClick={() => setSelectedCategory(prev => prev === cat ? null : cat)}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                  <div className={s.casesGrid}>
                    {filtered.map(item => (
                      <ExcellentCaseCard
                        key={item.snapshotId ?? item.consultId}
                        item={item}
                        onClick={() => item.consultId != null && setSelectedId(item.consultId)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {selectedId != null && (
        <ExcellentCaseDetailModal
          consultId={selectedId}
          onClose={() => setSelectedId(null)}
        />
      )}
    </>
  );
}
