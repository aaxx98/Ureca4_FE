import { useEffect, useRef, useState } from "react";
import type { GetConsultationListParams } from "../../../shared/api/generated/api.schemas";
import * as s from "./ConsultationListPage.css";

const RESULT_STATUS_OPTIONS  = ["처리중", "완료", "미완료", "요청중"];
const SUMMARY_STATUS_OPTIONS = ["요약완료", "요청중", "실패"];
const CHANNEL_OPTIONS        = ["전화", "채팅"];

interface FilterProps {
  params: GetConsultationListParams;
  onChange: (updates: Partial<GetConsultationListParams>) => void;
}

function DropdownFilter({
  value,
  placeholder,
  options,
  onChange,
}: {
  value: string;
  placeholder: string;
  options: string[];
  onChange: (v: string | undefined) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const isActive = !!value;
  const label = value || placeholder;

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
          <button
            type="button"
            className={`${s.dropdownItem}${!value ? ` ${s.dropdownItemActive}` : ""}`}
            onClick={() => { onChange(undefined); setOpen(false); }}
          >
            전체
          </button>
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              className={`${s.dropdownItem}${value === opt ? ` ${s.dropdownItemActive}` : ""}`}
              onClick={() => { onChange(opt); setOpen(false); }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function ConsultationListFilter({ params, onChange }: FilterProps) {
  const [inputValue, setInputValue] = useState(params.keyword ?? "");

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

      <DropdownFilter
        value={params.resultStatus ?? ""}
        placeholder="처리상태"
        options={RESULT_STATUS_OPTIONS}
        onChange={(v) => onChange({ resultStatus: v })}
      />
      <DropdownFilter
        value={params.summaryStatus ?? ""}
        placeholder="요약상태"
        options={SUMMARY_STATUS_OPTIONS}
        onChange={(v) => onChange({ summaryStatus: v })}
      />
      <DropdownFilter
        value={params.channel ?? ""}
        placeholder="채널"
        options={CHANNEL_OPTIONS}
        onChange={(v) => onChange({ channel: v })}
      />
    </div>
  );
}
