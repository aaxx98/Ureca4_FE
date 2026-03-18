import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  useGetManualHistoryQuery,
  useMutationPatchActivateManualQuery,
  useMutationPatchDeactivateManualQuery,
  useMutationPostManualQuery,
  useMutationPutManualQuery,
} from "../../../shared/api/generated/admin-manual-management";
import { useGetCategoriesQuery } from "../../../shared/api/generated/meta-controller";
import type { ManualResponse } from "../../../shared/api/generated/api.schemas";
import * as layout from "../../../shared/ui/pageLayout.css";
import * as s from "./AdminManualPage.css";

type SettingsTab = "create" | "edit";

const MANUAL_HISTORY_KEY = ["/admin/manuals/history"];

/* ─── 신규 등록 ─── */
function CreateManualForm() {
  const queryClient = useQueryClient();
  const [categoryCode, setCategoryCode] = useState("");
  const [title, setTitle]               = useState("");
  const [content, setContent]           = useState("");

  const { data: categories = [] } = useGetCategoriesQuery();

  const mutation = useMutationPostManualQuery({
    mutation: {
      onSuccess: () => {
        alert("매뉴얼이 등록되었습니다.");
        setCategoryCode("");
        setTitle("");
        setContent("");
        queryClient.invalidateQueries({ queryKey: MANUAL_HISTORY_KEY });
      },
      onError: () => alert("등록 중 오류가 발생했습니다. 다시 시도해 주세요."),
    },
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!categoryCode || !title.trim() || !content.trim()) {
      alert("카테고리, 제목, 본문을 모두 입력해주세요.");
      return;
    }
    mutation.mutate({ data: { categoryCode, title: title.trim(), content: content.trim() } });
  }

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.formGroup}>
        <label className={s.formLabel}>카테고리</label>
        <select
          value={categoryCode}
          onChange={(e) => setCategoryCode(e.target.value)}
          className={s.formSelect}
        >
          <option value="">카테고리 선택</option>
          {categories.map((cat) => (
            <option key={cat.categoryCode} value={cat.categoryCode ?? ""}>
              {cat.smallCategory ?? cat.mediumCategory ?? cat.largeCategory ?? cat.categoryCode}
            </option>
          ))}
        </select>
      </div>
      <div className={s.formGroup}>
        <label className={s.formLabel}>제목</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="매뉴얼 제목을 입력하세요"
          className={s.formInput}
          maxLength={100}
        />
      </div>
      <div className={s.formGroup}>
        <label className={s.formLabel}>본문</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="매뉴얼 내용을 입력하세요"
          className={s.formTextarea}
          rows={10}
        />
      </div>
      <div className={s.formFooter}>
        <button type="submit" disabled={mutation.isPending} className={s.btnPrimary}>
          {mutation.isPending ? "등록 중..." : "등록하기"}
        </button>
      </div>
    </form>
  );
}

/* ─── 기존 수정 ─── */
function EditManualForm() {
  const queryClient = useQueryClient();
  const [selected, setSelected] = useState<ManualResponse | null>(null);
  const [title, setTitle]       = useState("");
  const [content, setContent]   = useState("");

  const { data = [], isPending } = useGetManualHistoryQuery();

  function handleSelect(item: ManualResponse) {
    setSelected(item);
    setTitle(item.title ?? "");
    setContent(item.content ?? "");
  }

  const putMutation = useMutationPutManualQuery({
    mutation: {
      onSuccess: () => {
        alert("매뉴얼이 수정되었습니다.");
        queryClient.invalidateQueries({ queryKey: MANUAL_HISTORY_KEY });
      },
      onError: () => alert("수정 중 오류가 발생했습니다. 다시 시도해 주세요."),
    },
  });

  const activateMutation = useMutationPatchActivateManualQuery({
    mutation: {
      onSuccess: () => {
        alert("매뉴얼이 활성화되었습니다.");
        queryClient.invalidateQueries({ queryKey: MANUAL_HISTORY_KEY });
      },
      onError: () => alert("활성화 처리 중 오류가 발생했습니다."),
    },
  });

  const deactivateMutation = useMutationPatchDeactivateManualQuery({
    mutation: {
      onSuccess: () => {
        alert("매뉴얼이 비활성화되었습니다.");
        queryClient.invalidateQueries({ queryKey: MANUAL_HISTORY_KEY });
      },
      onError: () => alert("비활성화 처리 중 오류가 발생했습니다."),
    },
  });

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!selected?.manualId) return;
    if (!title.trim() || !content.trim()) {
      alert("제목과 본문을 모두 입력해주세요.");
      return;
    }
    putMutation.mutate({
      manualId: selected.manualId,
      data: { title: title.trim(), content: content.trim() },
    });
  }

  return (
    <div className={s.editLayout}>
      {/* 왼쪽: 매뉴얼 목록 */}
      <div className={s.editList}>
        <p className={s.editListLabel}>매뉴얼 선택</p>
        {isPending && <p className={s.stateText}>불러오는 중...</p>}
        {!isPending && data.length === 0 && <p className={s.stateText}>등록된 매뉴얼이 없습니다.</p>}
        {!isPending && data.map((item) => (
          <button
            key={item.manualId}
            type="button"
            className={selected?.manualId === item.manualId ? s.editListItemActive : s.editListItem}
            onClick={() => handleSelect(item)}
          >
            <span className={s.editListItemCategory}>
              {item.categoryName ?? item.categoryCode ?? "-"}
            </span>
            <span className={s.editListItemTitle}>{item.title ?? "(제목 없음)"}</span>
            {item.isActive ? (
              <span className={s.statusBadgeActive} style={{ marginLeft: "auto", flexShrink: 0 }}>활성</span>
            ) : (
              <span className={s.statusBadgeInactive} style={{ marginLeft: "auto", flexShrink: 0 }}>비활성</span>
            )}
          </button>
        ))}
      </div>

      {/* 오른쪽: 수정 폼 */}
      <div className={s.editFormWrap}>
        {!selected ? (
          <p className={s.stateText}>왼쪽에서 수정할 매뉴얼을 선택하세요.</p>
        ) : (
          <form onSubmit={handleSave} className={s.form}>
            <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
              {selected.categoryName && (
                <span className={s.categoryPill}>{selected.categoryName}</span>
              )}
              {selected.isActive ? (
                <span className={s.statusBadgeActive}>현재 활성</span>
              ) : (
                <span className={s.statusBadgeInactive}>현재 비활성</span>
              )}
            </div>

            <div className={s.formGroup}>
              <label className={s.formLabel}>제목</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={s.formInput}
                maxLength={100}
              />
            </div>
            <div className={s.formGroup}>
              <label className={s.formLabel}>본문</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className={s.formTextarea}
                rows={8}
              />
            </div>
            <div className={s.formFooter}>
              <div style={{ display: "flex", gap: "8px" }}>
                {selected.isActive ? (
                  <button
                    type="button"
                    className={s.btnDeactivate}
                    disabled={deactivateMutation.isPending}
                    onClick={() => deactivateMutation.mutate({ manualId: selected.manualId! })}
                  >
                    {deactivateMutation.isPending ? "처리 중..." : "비활성화"}
                  </button>
                ) : (
                  <button
                    type="button"
                    className={s.btnActivate}
                    disabled={activateMutation.isPending}
                    onClick={() => activateMutation.mutate({ manualId: selected.manualId! })}
                  >
                    {activateMutation.isPending ? "처리 중..." : "활성화"}
                  </button>
                )}
              </div>
              <button type="submit" disabled={putMutation.isPending} className={s.btnPrimary}>
                {putMutation.isPending ? "저장 중..." : "저장하기"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export function AdminManualSettingsPage() {
  const [tab, setTab] = useState<SettingsTab>("create");

  return (
    <main className={layout.main}>
        <div className={s.pageWrapper}>
          <div className={s.pageHeader}>
            <div className={s.headerBadge}>⚙️ ADMIN · MANUAL SETTINGS</div>
            <h1 className={s.headerTitle}>매뉴얼 설정</h1>
            <p className={s.headerSubtitle}>새 매뉴얼을 등록하거나 기존 매뉴얼을 수정하세요</p>
          </div>

          <div className={s.content}>
            {/* 탭 */}
            <div className={s.tabBar}>
              <button
                type="button"
                className={tab === "create" ? s.tabActive : s.tab}
                onClick={() => setTab("create")}
              >
                신규 등록
              </button>
              <button
                type="button"
                className={tab === "edit" ? s.tabActive : s.tab}
                onClick={() => setTab("edit")}
              >
                기존 수정
              </button>
            </div>

            {tab === "create" && <CreateManualForm />}
            {tab === "edit"   && <EditManualForm />}
          </div>
        </div>
    </main>
  );
}
