import { useState } from "react";
import { useGetCandidatesQuery } from "../../../shared/api/generated/admin-excellent-case";
import {
  useGetAgentsQuery,
  useGetCategoriesQuery,
} from "../../../shared/api/generated/meta-controller";
import {
  EvaluationListResponseSelectionStatus,
  GetCandidatesDirection,
  GetCandidatesStatus,
  type EvaluationListResponse,
} from "../../../shared/api/generated/api.schemas";
import { ROUTES } from "../../../shared/config/routes";
import { ContextNavItem } from "../../../shared/ui/ContextNavItem";
import { AnalysisIcon } from "../../../shared/ui/icons";
import * as layout from "../../../shared/ui/pageLayout.css";
import { AppSidebar } from "../../../widgets/AppSidebar/AppSidebar";
import { AdminExcellentCaseDetailModal } from "./AdminExcellentCaseDetailModal";
import * as s from "./AdminExcellentCasesPage.css";

type FilterStatus = "ALL" | "PENDING" | "SELECTED" | "REJECTED";

const STRIP_COLOR: Record<string, string> = {
  PENDING:  "#F59E0B",
  SELECTED: "#10B981",
  REJECTED: "#EF4444",
};

function getScoreColor(score?: number) {
  if (!score) return "#94A3B8";
  if (score >= 90) return "#F59E0B";
  if (score >= 80) return "#64748B";
  return "#10B981";
}

function formatDate(iso?: string) {
  if (!iso) return "";
  return iso.slice(0, 10).replace(/-/g, ".");
}

interface CandidateCardProps {
  item: EvaluationListResponse;
  onClick: () => void;
}

function CandidateCard({ item, onClick }: CandidateCardProps) {
  const status = item.selectionStatus ?? EvaluationListResponseSelectionStatus.PENDING;
  const initial = item.counselorName?.charAt(0) ?? "?";

  return (
    <div
      className={s.caseCard}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <div className={s.caseCardStrip} style={{ backgroundColor: STRIP_COLOR[status] ?? "#94A3B8" }} />
      <div className={s.caseCardBody}>
        <div className={s.caseCardHeader}>
          <span className={s.categoryPill}>{item.categoryName ?? "기타"}</span>
          <div
            className={s.scoreBadge}
            style={{
              background: `linear-gradient(135deg, ${getScoreColor(item.score)}, ${getScoreColor(item.score)}CC)`,
            }}
          >
            {item.score ?? "-"}
          </div>
        </div>

        <p className={s.caseTitle}>{item.title ?? "제목 없음"}</p>

        <div>
          {status === EvaluationListResponseSelectionStatus.PENDING && (
            <span className={s.statusBadgePending}>후보군</span>
          )}
          {status === EvaluationListResponseSelectionStatus.SELECTED && (
            <span className={s.statusBadgeSelected}>이달의 사례로 게시중</span>
          )}
          {status === EvaluationListResponseSelectionStatus.REJECTED && (
            <span className={s.statusBadgeRejected}>후보군 제외</span>
          )}
        </div>

        <div className={s.caseCardFooter}>
          <div className={s.counselorChip}>
            <div className={s.counselorAvatar}>{initial}</div>
            {item.counselorName}
          </div>
          <span className={s.dateText}>{formatDate(item.createdAt)}</span>
        </div>
      </div>
    </div>
  );
}

export function AdminExcellentCasesPage() {
  const [activeFilter, setActiveFilter]     = useState<FilterStatus>("ALL");
  const [keyword, setKeyword]               = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [agentFilter, setAgentFilter]       = useState("");
  const [sortBy, setSortBy]                 = useState("");
  const [direction, setDirection]           = useState<typeof GetCandidatesDirection[keyof typeof GetCandidatesDirection]>(GetCandidatesDirection.desc);
  const [selectedId, setSelectedId]         = useState<number | null>(null);

  // ─── API 호출 ───
  const { data, isPending, isError } = useGetCandidatesQuery({
    status: GetCandidatesStatus.ALL,
    sortBy: sortBy || undefined,
    direction,
  });

  // 메타 API: 카테고리 & 상담사 목록
  const { data: categoryData } = useGetCategoriesQuery();
  const { data: agentData }    = useGetAgentsQuery();

  const allItems  = data?.content ?? [];
  const categories = categoryData ?? [];
  const agents     = agentData    ?? [];

  // 소분류(smallCategory) 중복 제거
  const uniqueSmallCategories = Array.from(
    new Map(
      categories
        .filter(c => c.smallCategory)
        .map(c => [c.smallCategory, c])
    ).values()
  );

  // ─── 상태별 카운트 (원본 기준) ───
  const pendingItems  = allItems.filter(i => i.selectionStatus === EvaluationListResponseSelectionStatus.PENDING);
  const selectedItems = allItems.filter(i => i.selectionStatus === EvaluationListResponseSelectionStatus.SELECTED);
  const rejectedItems = allItems.filter(i => i.selectionStatus === EvaluationListResponseSelectionStatus.REJECTED);

  // ─── 클라이언트 필터 적용 ───
  const filteredItems = allItems
    .filter(i =>
      activeFilter === "ALL"      ? true :
      activeFilter === "PENDING"  ? i.selectionStatus === EvaluationListResponseSelectionStatus.PENDING  :
      activeFilter === "SELECTED" ? i.selectionStatus === EvaluationListResponseSelectionStatus.SELECTED :
      i.selectionStatus === EvaluationListResponseSelectionStatus.REJECTED
    )
    .filter(i => categoryFilter ? i.categoryName === categoryFilter : true)
    .filter(i => agentFilter    ? i.counselorName === agentFilter   : true)
    .filter(i => {
      if (!keyword.trim()) return true;
      const kw = keyword.trim().toLowerCase();
      return (
        (i.title?.toLowerCase().includes(kw)         ?? false) ||
        (i.counselorName?.toLowerCase().includes(kw) ?? false)
      );
    });

  const STAT_BOXES: {
    key: FilterStatus;
    label: string;
    count: number;
    countColor: string;
    boxClass: string;
  }[] = [
    { key: "ALL",      label: "전체 사례",           count: allItems.length,     countColor: "#0F172A", boxClass: s.statBoxAll      },
    { key: "PENDING",  label: "후보군",              count: pendingItems.length,  countColor: "#D97706", boxClass: s.statBoxPending  },
    { key: "SELECTED", label: "이달의 사례로 게시중", count: selectedItems.length, countColor: "#059669", boxClass: s.statBoxSelected },
    { key: "REJECTED", label: "후보군 제외",          count: rejectedItems.length, countColor: "#DC2626", boxClass: s.statBoxRejected },
  ];

  return (
    <>
      <AppSidebar label="대시보드">
        <ContextNavItem icon={<AnalysisIcon />} label="우수 사례 게시판" to={ROUTES.EXCELLENT} />
        <ContextNavItem icon={<AnalysisIcon />} label="우수사례 설정" to={ROUTES.ADMIN_EXCELLENT_CASES} />
      </AppSidebar>

      <main className={layout.main}>
        <div className={s.pageHeader}>
          <div className={s.headerBadge}>⭐ ADMIN · EXCELLENT CASES</div>
          <h1 className={s.headerTitle}>우수 상담사례 후보군 관리</h1>
          <p className={s.headerSubtitle}>AI가 선별한 후보 사례를 검토하고 최종 선정 또는 제외하세요</p>
        </div>

        <div className={s.content}>
          {/* ─── Stat Box Filter ─── */}
          <div className={s.statBoxGrid}>
            {STAT_BOXES.map(({ key, label, count, countColor, boxClass }) => (
              <button
                key={key}
                type="button"
                className={boxClass}
                data-active={String(activeFilter === key)}
                onClick={() => setActiveFilter(key)}
              >
                <div className={s.statBoxCount} style={{ color: countColor }}>
                  {isPending ? "-" : count}
                </div>
                <div className={s.statBoxLabel}>{label}</div>
              </button>
            ))}
          </div>

          {/* ─── Toolbar ─── */}
          <div className={s.toolbar}>
            <div className={s.toolbarLeft}>
              {/* 키워드 검색 */}
              <div className={s.searchWrap}>
                <svg className={s.searchIcon} width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  className={s.searchInput}
                  placeholder="제목 검색..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>

              {/* 카테고리 필터 (/api/meta/categories) */}
              <select
                className={s.filterSelect}
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">카테고리 전체</option>
                {uniqueSmallCategories.map(c => (
                  <option key={c.categoryCode} value={c.smallCategory}>
                    {c.smallCategory}
                  </option>
                ))}
              </select>

              {/* 상담사 필터 (/api/meta/agents) */}
              <select
                className={s.filterSelect}
                value={agentFilter}
                onChange={(e) => setAgentFilter(e.target.value)}
              >
                <option value="">상담사 전체</option>
                {agents.map(a => (
                  <option key={a.empId} value={a.name}>
                    {a.name}
                  </option>
                ))}
              </select>
            </div>

            <div className={s.toolbarRight}>
              {/* 정렬 기준 */}
              <select
                className={s.filterSelect}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="">최신순</option>
                <option value="score">점수순</option>
              </select>

              {/* 정렬 방향 */}
              <select
                className={s.filterSelect}
                value={direction}
                onChange={(e) => setDirection(e.target.value as typeof direction)}
              >
                <option value={GetCandidatesDirection.desc}>내림차순</option>
                <option value={GetCandidatesDirection.asc}>오름차순</option>
              </select>
            </div>
          </div>

          {/* ─── Content ─── */}
          {isPending && <p className={s.stateText}>불러오는 중...</p>}
          {isError   && <p className={s.stateText}>데이터를 불러오지 못했습니다.</p>}
          {!isPending && !isError && filteredItems.length === 0 && (
            <p className={s.stateText}>해당 조건의 후보 사례가 없습니다.</p>
          )}

          {!isPending && !isError && filteredItems.length > 0 && (
            <>
              <div className={s.sortRow}>
                <p className={s.sectionTitle}>목록 {filteredItems.length}건</p>
              </div>
              <div className={s.casesGrid}>
                {filteredItems.map((item) => (
                  <CandidateCard
                    key={item.consultId}
                    item={item}
                    onClick={() => item.consultId != null && setSelectedId(item.consultId)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      {selectedId != null && (
        <AdminExcellentCaseDetailModal
          consultId={selectedId}
          onClose={() => setSelectedId(null)}
        />
      )}
    </>
  );
}
