import { useState } from "react";
import type { GetConsultationListParams } from "../../../shared/api/generated/api.schemas";
import * as s from "./ConsultationListPage.css";

const RESULT_STATUS_OPTIONS  = ["처리중", "완료", "미완료", "보류"];
const SUMMARY_STATUS_OPTIONS = ["요약완료", "요청됨", "실패"];
const CATEGORY_OPTIONS       = ["문의", "불만", "가입", "해지", "변경"];
const CHANNEL_OPTIONS        = ["전화", "이메일", "채팅", "방문"];

interface FilterProps {
  params: GetConsultationListParams;
  onChange: (updates: Partial<GetConsultationListParams>) => void;
}

export function ConsultationListFilter({ params, onChange }: FilterProps) {
  const [inputValue, setInputValue] = useState(params.keyword ?? "");

  const hasFilter =
    params.keyword ||
    params.resultStatus ||
    params.summaryStatus ||
    params.categoryCode ||
    params.channel;

  function submitSearch() {
    onChange({ keyword: inputValue.trim() || undefined });
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") submitSearch();
  }

  return (
    <div className={s.filterBar}>
      <div className={s.searchGroup}>
        <input
          type="text"
          className={s.searchInput}
          placeholder="이름, 전화번호, 키워드 검색..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button type="button" className={s.searchBtn} onClick={submitSearch}>
          검색
        </button>
      </div>

      <select
        className={s.select}
        value={params.resultStatus ?? ""}
        onChange={(e) => onChange({ resultStatus: e.target.value || undefined })}
      >
        <option value="">처리상태 전체</option>
        {RESULT_STATUS_OPTIONS.map((v) => <option key={v} value={v}>{v}</option>)}
      </select>

      <select
        className={s.select}
        value={params.summaryStatus ?? ""}
        onChange={(e) => onChange({ summaryStatus: e.target.value || undefined })}
      >
        <option value="">요약상태 전체</option>
        {SUMMARY_STATUS_OPTIONS.map((v) => <option key={v} value={v}>{v}</option>)}
      </select>

      <select
        className={s.select}
        value={params.categoryCode ?? ""}
        onChange={(e) => onChange({ categoryCode: e.target.value || undefined })}
      >
        <option value="">유형 전체</option>
        {CATEGORY_OPTIONS.map((v) => <option key={v} value={v}>{v}</option>)}
      </select>

      <select
        className={s.select}
        value={params.channel ?? ""}
        onChange={(e) => onChange({ channel: e.target.value || undefined })}
      >
        <option value="">채널 전체</option>
        {CHANNEL_OPTIONS.map((v) => <option key={v} value={v}>{v}</option>)}
      </select>

      <span className={s.filterStatus}>
        {hasFilter ? "필터 적용 중" : "필터 적용 중 없음"}
      </span>
    </div>
  );
}
