import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useGetCandidatesQuery, useMutationPatchRejectExcellentCaseQuery } from "../../../shared/api/generated/admin-excellent-case";
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
import * as layout from "../../../shared/ui/pageLayout.css";
import { DashboardSidebar } from "../../../widgets/DashboardSidebar/DashboardSidebar";
import { AdminExcellentCaseDetailModal } from "./AdminExcellentCaseDetailModal";
import * as s from "./AdminExcellentCasesPage.css";

type FilterStatus = "ALL" | "PENDING" | "SELECTED" | "REJECTED";

// 선정 모달 열 때 초기 탭을 select 모드로 고정하기 위한 prop
interface DetailModalState {
  consultId: number;
  openSelectMode: boolean;
}

function getScoreBadgeStyle(score?: number): React.CSSProperties {
  if (!score || score < 50)
    return { background: "#F1F5F9", color: "#94A3B8", boxShadow: "none" };
  if (score < 60)
    return { background: "linear-gradient(135deg, #E0F2FE, #BAE6FD)", color: "#0369A1", boxShadow: "none" };
  if (score < 70)
    return { background: "linear-gradient(135deg, #0EA5E9, #0284C7)", color: "#FFFFFF", boxShadow: "0 1px 6px rgba(2,132,199,0.3)" };
  if (score < 80)
    return { background: "linear-gradient(135deg, #06B6D4, #0891B2)", color: "#FFFFFF", boxShadow: "0 2px 8px rgba(8,145,178,0.35)" };
  if (score < 90)
    return { background: "linear-gradient(135deg, #F59E0B, #D97706)", color: "#FFFFFF", boxShadow: "0 2px 10px rgba(217,119,6,0.4)" };
  return { background: "linear-gradient(135deg, #F97316, #EA580C)", color: "#FFFFFF", boxShadow: "0 3px 14px rgba(234,88,12,0.55)", fontWeight: 800 };
}

function formatDate(iso?: string) {
  if (!iso) return "";
  return iso.slice(0, 10).replace(/-/g, ".");
}

function extractSituationTitle(title?: string): string {
  if (!title) return "제목 없음";
  const match = title.match(/\[상황\]\s*([\s\S]*?)(?:\s*(?:→|->))/);
  if (match) return match[1].trim();
  return title;
}

const STATUS_LABEL: Record<string, string> = {
  PENDING:  "후보군",
  SELECTED: "이달의 사례로 게시중",
  REJECTED: "후보군 제외",
};

const STATUS_BADGE_STYLE: Record<string, React.CSSProperties> = {
  PENDING:  { backgroundColor: "#FEF3C7", color: "#92400E" },
  SELECTED: { backgroundColor: "#DCFCE7", color: "#166534" },
  REJECTED: { backgroundColor: "#FEF2F2", color: "#991B1B" },
};

interface RowProps {
  item: EvaluationListResponse;
  onRowClick: () => void;
  onSelectClick: () => void;
  onRejectClick: (e: React.MouseEvent) => void;
  isRejecting: boolean;
}

function CandidateRow({ item, onRowClick, onSelectClick, onRejectClick, isRejecting }: RowProps) {
  const status = item.selectionStatus ?? EvaluationListResponseSelectionStatus.PENDING;

  const canSelect = status === EvaluationListResponseSelectionStatus.PENDING
    || status === EvaluationListResponseSelectionStatus.REJECTED;
  const canReject = status === EvaluationListResponseSelectionStatus.PENDING
    || status === EvaluationListResponseSelectionStatus.SELECTED;

  return (
    <tr onClick={onRowClick}>
      {/* 카테고리 */}
      <td className={s.td}>
        <span className={s.categoryPill}>{item.categoryName ?? "기타"}</span>
      </td>

      {/* 제목 */}
      <td className={s.td}>
        <div className={s.titleCell}>
          <div className={s.titleText}>
            {extractSituationTitle(item.title)}
          </div>
        </div>
      </td>

      {/* 상담사 */}
      <td className={s.td}>
        <span style={{ fontSize: "13px", color: "#374151" }}>{item.counselorName ?? "-"}</span>
      </td>

      {/* AI 점수 */}
      <td className={s.tdCenter}>
        <div
          className={s.scoreBadge}
          style={{ ...getScoreBadgeStyle(item.score), margin: "0 auto" }}
        >
          {item.score ?? "-"}
        </div>
      </td>

      {/* 상태 */}
      <td className={s.td}>
        <span style={{
          display: "inline-flex",
          padding: "3px 8px",
          borderRadius: "999px",
          fontSize: "11px",
          fontWeight: 600,
          ...STATUS_BADGE_STYLE[status],
        }}>
          {STATUS_LABEL[status]}
        </span>
      </td>

      {/* 등록일 */}
      <td className={s.td}>
        <span className={s.dateText}>{formatDate(item.createdAt)}</span>
      </td>

      {/* 관리 */}
      <td className={s.tdCenter} onClick={(e) => e.stopPropagation()}>
        <div className={s.actionCell}>
          {canSelect && (
            <button
              type="button"
              className={s.btnSelect}
              onClick={(e) => { e.stopPropagation(); onSelectClick(); }}
            >
              선정
            </button>
          )}
          {canReject && (
            <button
              type="button"
              className={s.btnReject}
              disabled={isRejecting}
              onClick={onRejectClick}
            >
              {isRejecting ? "처리중" : "제외"}
            </button>
          )}
        </div>
      </td>
    </tr>
  );
}

const PAGE_SIZE = 20;

export function AdminExcellentCasesPage() {
  const [activeFilter, setActiveFilter]     = useState<FilterStatus>("ALL");
  const [keyword, setKeyword]               = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [agentFilter, setAgentFilter]       = useState("");
  const [sortBy, setSortBy]                 = useState("");
  const [direction, setDirection]           = useState<typeof GetCandidatesDirection[keyof typeof GetCandidatesDirection]>(GetCandidatesDirection.desc);
  const [modalState, setModalState]         = useState<DetailModalState | null>(null);
  const [rejectingId, setRejectingId]       = useState<number | null>(null);
  const [page, setPage]                     = useState(0);

  useEffect(() => { setPage(0); }, [activeFilter, keyword, categoryFilter, agentFilter]);

  const queryClient = useQueryClient();

  // ─── API 호출 ───
  const { data, isPending, isError } = useGetCandidatesQuery({
    status: GetCandidatesStatus.ALL,
    sortBy: sortBy || undefined,
    direction,
  });
  const { data: categoryData } = useGetCategoriesQuery();
  const { data: agentData }    = useGetAgentsQuery();

  const rejectMutation = useMutationPatchRejectExcellentCaseQuery({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["/admin/excellent-cases/candidates"] });
        setRejectingId(null);
      },
      onError: () => setRejectingId(null),
    },
  });

  const allItems = data?.content ?? [];

  const uniqueSmallCategories = Array.from(
    new Map(
      (categoryData ?? [])
        .filter(c => c.smallCategory)
        .map(c => [c.smallCategory, c])
    ).values()
  );

  const agents = agentData ?? [];

  // 상태별 카운트
  const pendingItems  = allItems.filter(i => i.selectionStatus === EvaluationListResponseSelectionStatus.PENDING);
  const selectedItems = allItems.filter(i => i.selectionStatus === EvaluationListResponseSelectionStatus.SELECTED);
  const rejectedItems = allItems.filter(i => i.selectionStatus === EvaluationListResponseSelectionStatus.REJECTED);

  // 클라이언트 필터 적용
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

  const totalPages    = Math.ceil(filteredItems.length / PAGE_SIZE);
  const paginatedItems = filteredItems.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const STAT_BOXES: {
    key: FilterStatus;
    label: string;
    count: number;
    countColor: string;
    boxClass: string;
  }[] = [
    { key: "ALL",      label: "전체 사례",           count: allItems.length,     countColor: "#0F172A", boxClass: s.statBoxAll      },
    { key: "PENDING",  label: "AI선정 후보군",        count: pendingItems.length,  countColor: "#D97706", boxClass: s.statBoxPending  },
    { key: "SELECTED", label: "이달의 사례로 게시중", count: selectedItems.length, countColor: "#059669", boxClass: s.statBoxSelected },
    { key: "REJECTED", label: "후보군 제외",          count: rejectedItems.length, countColor: "#DC2626", boxClass: s.statBoxRejected },
  ];

  function handleReject(e: React.MouseEvent, consultId: number) {
    e.stopPropagation();
    setRejectingId(consultId);
    rejectMutation.mutate({ consultId });
  }

  return (
    <>
      <DashboardSidebar isAdmin />

      <main className={layout.main}>
        <div className={s.pageWrapper}>
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

              <select className={s.filterSelect} value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                <option value="">카테고리 전체</option>
                {uniqueSmallCategories.map(c => (
                  <option key={c.categoryCode} value={c.smallCategory}>{c.smallCategory}</option>
                ))}
              </select>

              <select className={s.filterSelect} value={agentFilter} onChange={(e) => setAgentFilter(e.target.value)}>
                <option value="">상담사 전체</option>
                {agents.map(a => (
                  <option key={a.empId} value={a.name}>{a.name}</option>
                ))}
              </select>
            </div>

            <div className={s.toolbarRight}>
              <select className={s.filterSelect} value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="">최신순</option>
                <option value="score">점수순</option>
              </select>
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

          {/* ─── Table ─── */}
          {isPending && <p className={s.stateText}>불러오는 중...</p>}
          {isError   && <p className={s.stateText}>데이터를 불러오지 못했습니다.</p>}

          {!isPending && !isError && (
            <div className={s.tableWrap}>
              <div className={s.tableScroll}>
                <table className={s.table}>
                  <thead className={s.thead}>
                    <tr>
                      <th className={s.th}>카테고리</th>
                      <th className={s.th}>제목</th>
                      <th className={s.th}>상담사</th>
                      <th className={s.thCenter}>AI 점수</th>
                      <th className={s.th}>상태</th>
                      <th className={s.th}>등록일</th>
                      <th className={s.thCenter}>관리</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredItems.length === 0 ? (
                      <tr>
                        <td className={s.td} colSpan={7} style={{ textAlign: "center", padding: "48px 0", color: "#94A3B8" }}>
                          해당 조건의 후보 사례가 없습니다.
                        </td>
                      </tr>
                    ) : (
                      paginatedItems.map((item: EvaluationListResponse) => (
                        <CandidateRow
                          key={item.consultId}
                          item={item}
                          onRowClick={() => item.consultId != null && setModalState({ consultId: item.consultId, openSelectMode: false })}
                          onSelectClick={() => item.consultId != null && setModalState({ consultId: item.consultId, openSelectMode: true })}
                          onRejectClick={(e) => item.consultId != null && handleReject(e, item.consultId)}
                          isRejecting={rejectingId === item.consultId}
                        />
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              <div className={s.tableFooter}>
                <span className={s.tableFooterText}>
                  전체 {filteredItems.length}건 · {page + 1} / {totalPages || 1} 페이지
                </span>
                {totalPages > 1 && (
                  <div className={s.pagination}>
                    <button
                      type="button"
                      className={s.pageBtn}
                      disabled={page === 0}
                      onClick={() => setPage(0)}
                    >
                      «
                    </button>
                    <button
                      type="button"
                      className={s.pageBtn}
                      disabled={page === 0}
                      onClick={() => setPage(p => p - 1)}
                    >
                      ‹
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i)
                      .filter(i => Math.abs(i - page) <= 2)
                      .map(i => (
                        <button
                          key={i}
                          type="button"
                          className={i === page ? s.pageBtnActive : s.pageBtn}
                          onClick={() => setPage(i)}
                        >
                          {i + 1}
                        </button>
                      ))}
                    <button
                      type="button"
                      className={s.pageBtn}
                      disabled={page >= totalPages - 1}
                      onClick={() => setPage(p => p + 1)}
                    >
                      ›
                    </button>
                    <button
                      type="button"
                      className={s.pageBtn}
                      disabled={page >= totalPages - 1}
                      onClick={() => setPage(totalPages - 1)}
                    >
                      »
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        </div>
      </main>

      {modalState != null && (
        <AdminExcellentCaseDetailModal
          consultId={modalState.consultId}
          initialSelectMode={modalState.openSelectMode}
          onClose={() => setModalState(null)}
        />
      )}
    </>
  );
}
