import { useEffect, useRef, useState } from "react";
import type { ListParams } from "../../shared/api/generated/api.schemas";
import { useMutationPostFilterGroupQuery } from "../../shared/api/generated/search-filter";
import { GRADE_MAP, RISK_TYPE_MAP } from "../../shared/config/meta";
import { BaseModal } from "../../shared/ui/BaseModal/BaseModal";
import { FilterIcon } from "../../shared/ui/icons";
import { EMPTY_DRAFT, buildFilterItems } from "./filterDraft";
import type { FilterDraft } from "./filterDraft";
import * as s from "./SummaryFilterPanel.css";

/* ─── 드롭다운 (단일 선택) ─── */

function DropdownFilter({
  placeholder,
  options,
  value,
  onChange,
}: {
  placeholder: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const selected = options.find((o) => o.value === value);
  const isActive = !!value;

  return (
    <div className={s.dropdownWrapper} ref={ref}>
      <button
        type="button"
        className={`${s.dropdownTrigger}${isActive ? ` ${s.dropdownTriggerActive}` : ""}`}
        onClick={() => setOpen((o) => !o)}
      >
        {selected?.label ?? placeholder}
        <span className={`${s.dropdownChevron}${open ? ` ${s.dropdownChevronOpen}` : ""}`}>▼</span>
      </button>
      {open && (
        <div className={s.dropdownMenu}>
          <button
            type="button"
            className={`${s.dropdownItem}${!value ? ` ${s.dropdownItemActive}` : ""}`}
            onClick={() => { onChange(""); setOpen(false); }}
          >
            전체
          </button>
          {options.map((o) => (
            <button
              key={o.value}
              type="button"
              className={`${s.dropdownItem}${value === o.value ? ` ${s.dropdownItemActive}` : ""}`}
              onClick={() => { onChange(o.value); setOpen(false); }}
            >
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── 드롭다운 (다중 선택) ─── */

function MultiDropdown({
  placeholder,
  options,
  value,
  onChange,
}: {
  placeholder: string;
  options: { value: string; label: string }[];
  value: string[];
  onChange: (v: string[]) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const toggle = (v: string) =>
    onChange(value.includes(v) ? value.filter((x) => x !== v) : [...value, v]);

  const isActive = value.length > 0;
  const label = isActive ? `${placeholder} (${value.length})` : placeholder;

  return (
    <div className={s.dropdownWrapper} ref={ref}>
      <button
        type="button"
        className={`${s.dropdownTrigger}${isActive ? ` ${s.dropdownTriggerActive}` : ""}`}
        onClick={() => setOpen((o) => !o)}
      >
        {label}
        <span className={`${s.dropdownChevron}${open ? ` ${s.dropdownChevronOpen}` : ""}`}>▼</span>
      </button>
      {open && (
        <div className={s.dropdownMenu}>
          {options.map((o) => {
            const checked = value.includes(o.value);
            return (
              <button
                key={o.value}
                type="button"
                className={`${s.dropdownItem}${checked ? ` ${s.dropdownItemActive}` : ""}`}
                onClick={() => toggle(o.value)}
              >
                <span className={checked ? s.checkboxIconChecked : s.checkboxIcon}>
                  {checked ? "✓" : ""}
                </span>
                {o.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ─── 상태 정의 ─── */

function buildParams(d: FilterDraft): ListParams {
  return {
    ...(d.keyword       && { keyword: d.keyword }),
    ...(d.fromDate      && { fromDate: d.fromDate }),
    ...(d.toDate        && { toDate: d.toDate }),
    ...(d.agentName     && { agentName: d.agentName }),
    ...(d.channel       && { channel: d.channel }),
    ...(d.customerName  && { customerName: d.customerName }),
    ...(d.customerPhone && { customerPhone: d.customerPhone }),
    ...(d.grade.length  && { grade: d.grade[0] }), // ListParams는 단일 grade
    ...(d.riskType.length && { riskType: d.riskType }),
    ...(d.productName   && { productCode: [d.productName] }),
    // categoryName(5), customerType(12), satisfaction(17)는 ListParams에 해당 필드 없음 — 저장 전용
  };
}


/* ─── 옵션 목록 ─── */

const CHANNEL_OPTS      = [{ value: "CALL", label: "전화" }, { value: "CHATTING", label: "채팅" }];
const CUSTOMER_TYPE_OPTS = [{ value: "개인", label: "개인" }, { value: "법인", label: "법인" }];
const SATISFACTION_OPTS = ["1", "2", "3", "4", "5"].map((v) => ({ value: v, label: `${v}점` }));
const GRADE_OPTS        = Object.entries(GRADE_MAP).map(([v, l]) => ({ value: v, label: l }));
const RISK_TYPE_OPTS    = Object.entries(RISK_TYPE_MAP).map(([v, l]) => ({ value: v, label: l }));

/* ─── 선택 필터 요약 ─── */

function getFilterSummary(d: FilterDraft) {
  const items: { label: string; value: string }[] = [];
  if (d.keyword)              items.push({ label: "키워드",    value: d.keyword });
  if (d.fromDate || d.toDate) items.push({ label: "상담 기간",  value: `${d.fromDate || "시작일"} ~ ${d.toDate || "종료일"}` });
  if (d.channel)              items.push({ label: "채널",      value: d.channel === "CALL" ? "전화" : "채팅" });
  if (d.riskType.length)      items.push({ label: "리스크 유형", value: d.riskType.map((v) => RISK_TYPE_MAP[v] ?? v).join(", ") });
  if (d.agentName)            items.push({ label: "상담사",     value: d.agentName });
  if (d.categoryName)         items.push({ label: "카테고리",   value: d.categoryName });
  if (d.customerName)         items.push({ label: "고객명",     value: d.customerName });
  if (d.customerPhone)        items.push({ label: "연락처",     value: d.customerPhone });
  if (d.customerType)         items.push({ label: "고객 유형",   value: d.customerType });
  if (d.grade.length)         items.push({ label: "고객 등급",   value: d.grade.map((v) => GRADE_MAP[v] ?? v).join(", ") });
  if (d.productName)          items.push({ label: "상품명",     value: d.productName });
  if (d.satisfaction)         items.push({ label: "만족도",     value: `${d.satisfaction}점` });
  return items;
}

/* ─── 컴포넌트 ─── */

interface Props {
  onSearch: (params: ListParams) => void;
  forceDraft?: FilterDraft | null;
}

export function SummaryFilterPanel({ onSearch, forceDraft }: Props) {
  const [draft, setDraft]                     = useState<FilterDraft>(EMPTY_DRAFT);

  useEffect(() => {
    if (forceDraft) {
      setDraft(forceDraft);
      onSearch(buildParams(forceDraft));
    }
  }, [forceDraft, onSearch]);
  const [expanded, setExpanded]               = useState(false);
  const [showSave, setShowSave]               = useState(false);
  const [isSaveClosing, setIsSaveClosing]     = useState(false);
  const [saveName, setSaveName]               = useState("");
  const [result, setResult]                   = useState<"success" | "error" | null>(null);
  const [isResultClosing, setIsResultClosing] = useState(false);

  const { mutate: saveFilter, isPending: isSaving } = useMutationPostFilterGroupQuery();

  const set = <K extends keyof FilterDraft>(k: K, v: FilterDraft[K]) =>
    setDraft((prev) => ({ ...prev, [k]: v }));

  const filterSummary = getFilterSummary(draft);
  const filterItems   = buildFilterItems(draft);

  const handleSearch = () => onSearch(buildParams(draft));
  const handleReset  = () => { setDraft(EMPTY_DRAFT); onSearch({}); };

  const handleOpenSave  = () => { setSaveName(""); setShowSave(true); };
  const handleCloseSave = () => {
    setIsSaveClosing(true);
    setTimeout(() => { setShowSave(false); setIsSaveClosing(false); }, 180);
  };

  const handleCloseResult = () => {
    setIsResultClosing(true);
    setTimeout(() => { setResult(null); setIsResultClosing(false); }, 180);
  };

  const handleSaveConfirm = () => {
    if (!saveName.trim() || filterItems.length === 0) return;
    saveFilter(
      { data: { groupName: saveName.trim(), filters: filterItems } },
      {
        onSuccess: () => { handleCloseSave(); setDraft(EMPTY_DRAFT); onSearch({}); setTimeout(() => setResult("success"), 200); },
        onError:   () => { handleCloseSave(); setDraft(EMPTY_DRAFT); onSearch({}); setTimeout(() => setResult("error"),   200); },
      },
    );
  };

  return (
    <>
      <div className={s.filterCard}>

        {/* 메인 행: 키워드 + 채널 + 리스크 유형 + 상세검색 토글 */}
        <div className={s.filterRow}>
          <div className={s.searchGroup}>
            <input
              type="text"
              className={s.searchInput}
              placeholder="키워드 검색 (상담 내용, 상품명)"
              value={draft.keyword}
              onChange={(e) => set("keyword", e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button type="button" className={s.searchBtn} onClick={handleSearch}>검색</button>
          </div>

          <DropdownFilter placeholder="채널" options={CHANNEL_OPTS} value={draft.channel} onChange={(v) => set("channel", v)} />
          <MultiDropdown  placeholder="리스크 유형" options={RISK_TYPE_OPTS} value={draft.riskType} onChange={(v) => set("riskType", v)} />

          <button
            type="button"
            className={`${s.accordionToggle}${expanded ? ` ${s.accordionToggleActive}` : ""}`}
            onClick={() => setExpanded((v) => !v)}
          >
            <FilterIcon size={13} />
            상세 검색
            <span className={`${s.dropdownChevron}${expanded ? ` ${s.dropdownChevronOpen}` : ""}`}>▼</span>
          </button>
        </div>

        {/* 아코디언: 상세 조건 */}
        {expanded && (
          <div className={s.accordionSection}>

            {/* 날짜 + 만족도 + 고객 유형 */}
            <div className={s.filterRow}>
              <div className={s.dateRangeGroup}>
                <span className={s.dateLabel}>상담 기간</span>
                <input type="date" className={s.dateInput} value={draft.fromDate} onChange={(e) => set("fromDate", e.target.value)} />
                <span className={s.dateSep}>~</span>
                <input type="date" className={s.dateInput} value={draft.toDate}   onChange={(e) => set("toDate",   e.target.value)} />
              </div>
              <DropdownFilter placeholder="고객 만족도" options={SATISFACTION_OPTS} value={draft.satisfaction} onChange={(v) => set("satisfaction", v)} />
              <DropdownFilter placeholder="고객 유형"   options={CUSTOMER_TYPE_OPTS} value={draft.customerType} onChange={(v) => set("customerType", v)} />
            </div>

            {/* 상담사 / 고객명 / 연락처 / 카테고리 */}
            <div className={s.filterRow}>
              <input className={s.textInput} placeholder="상담사 이름"  value={draft.agentName}    onChange={(e) => set("agentName",    e.target.value)} />
              <input className={s.textInput} placeholder="고객명"       value={draft.customerName} onChange={(e) => set("customerName", e.target.value)} />
              <input className={s.textInput} placeholder="고객 연락처"  value={draft.customerPhone} onChange={(e) => set("customerPhone", e.target.value)} />
              <input className={s.textInput} placeholder="카테고리명"   value={draft.categoryName} onChange={(e) => set("categoryName", e.target.value)} />
            </div>

            {/* 등급 + 상품명 */}
            <div className={s.filterRow}>
              <MultiDropdown placeholder="고객 등급" options={GRADE_OPTS} value={draft.grade} onChange={(v) => set("grade", v)} />
              <input className={s.textInput} placeholder="상품명" value={draft.productName} onChange={(e) => set("productName", e.target.value)} />
            </div>

          </div>
        )}

        {/* 푸터 */}
        <div className={s.filterFooter}>
          <button type="button" className={s.btnReset} onClick={handleReset}>↺ 초기화</button>
          <div className={s.footerRight}>
            <button type="button" className={s.btnSave} onClick={handleOpenSave}>☆ 조건 저장</button>
            <button type="button" className={s.btnSearch} onClick={handleSearch}>⌕ 검색</button>
          </div>
        </div>
      </div>

      {/* 저장 결과 모달 */}
      {result != null && (
        <BaseModal
          title={result === "success" ? "저장 완료" : "저장 실패"}
          onClose={handleCloseResult}
          isClosing={isResultClosing}
          footer={
            <div className={s.saveModalFooterRow}>
              <button type="button" className={s.btnSearch} onClick={handleCloseResult}>확인</button>
            </div>
          }
        >
          <p style={{ textAlign: "center", padding: "16px 0", fontSize: "14px", color: result === "success" ? "#059669" : "#DC2626" }}>
            {result === "success" ? "검색 조건이 성공적으로 저장됐습니다." : "저장에 실패했습니다. 다시 시도해 주세요."}
          </p>
        </BaseModal>
      )}

      {/* 조건 저장 모달 */}
      {showSave && (
        <BaseModal
          title="검색 조건 저장"
          subTitle="현재 선택된 조건을 저장합니다"
          onClose={handleCloseSave}
          isClosing={isSaveClosing}
          footer={
            <div className={s.saveModalFooterRow}>
              <button type="button" className={s.btnReset} onClick={handleCloseSave}>취소</button>
              <button
                type="button"
                className={s.btnSearch}
                onClick={handleSaveConfirm}
                disabled={isSaving || !saveName.trim() || filterItems.length === 0}
              >
                {isSaving ? "저장 중..." : "저장"}
              </button>
            </div>
          }
        >
          <p className={s.saveModalNameLabel}>저장 이름</p>
          <input
            className={s.saveModalNameInput}
            placeholder="예: 해지 위험 고객 VIP 필터"
            value={saveName}
            onChange={(e) => setSaveName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSaveConfirm()}
          />

          <p className={s.saveModalSectionTitle}>선택된 필터 조건</p>
          {filterSummary.length === 0 ? (
            <p className={s.saveModalEmpty}>선택된 조건이 없습니다. 조건을 먼저 설정해 주세요.</p>
          ) : (
            <div className={s.saveModalTagGrid}>
              {filterSummary.map((item) => (
                <span key={item.label} className={s.saveModalTag}>
                  <span className={s.saveModalTagLabel}>{item.label}</span>
                  <span className={s.saveModalTagValue}>{item.value}</span>
                </span>
              ))}
            </div>
          )}
        </BaseModal>
      )}
    </>
  );
}
