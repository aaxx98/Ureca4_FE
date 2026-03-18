import { useId, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import type {
  MyInfoResponseDto,
  MyInfoUpdateRequestDto,
} from "../../shared/api/generated/api.schemas";
import { getMyInfoKey } from "../../shared/api/generated/auth/auth.keys";
import { useMutationPutMyInfoQuery } from "../../shared/api/generated/auth/auth";
import { Button } from "../../shared/ui/Button/Button";
import { Input } from "../../shared/ui/Input/Input";
import * as s from "./MyPage.css";

function formatDate(dateStr?: string) {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" });
}

function toBirthInputValue(birth?: string) {
  if (!birth) return "";
  return birth.split("T")[0];
}

function normalizeGender(gender?: string) {
  if (!gender) return "";
  const g = gender.toUpperCase();
  if (g === "M" || g === "MALE" || g === "남" || g === "남성") return "MALE";
  if (g === "F" || g === "FEMALE" || g === "여" || g === "여성") return "FEMALE";
  return gender;
}

export function InfoPane({ data }: { data: MyInfoResponseDto }) {
  const uid = useId();
  const [form, setForm] = useState<MyInfoUpdateRequestDto>({
    name: data.name ?? "",
    email: data.email ?? "",
    phone: data.phone ?? "",
    birth: toBirthInputValue(data.birth),
    gender: normalizeGender(data.gender),
  });
  const [feedback, setFeedback] = useState<{ ok: boolean; msg: string } | null>(null);

  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutationPutMyInfoQuery({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: getMyInfoKey() });
        setFeedback({ ok: true, msg: "정보가 수정되었습니다." });
        setTimeout(() => setFeedback(null), 3000);
      },
      onError: () => setFeedback({ ok: false, msg: "수정에 실패했습니다." }),
    },
  });

  return (
    <div className={s.pane}>
      <div className={s.profileStrip}>
        <div className={s.avatar}>{data.name?.[0] ?? "?"}</div>
        <div className={s.profileTexts}>
          <div className={s.profileName}>{data.name ?? "—"}</div>
          <div className={s.profileMeta}>
            {data.deptName ?? "—"} · {data.roleName ?? "—"}
          </div>
          {data.joinedAt && (
            <div className={s.profileSub}>입사일 {formatDate(data.joinedAt)}</div>
          )}
        </div>
        <span className={data.isActive ? s.badgeActive : s.badgeInactive}>
          {data.isActive ? "활성" : "비활성"}
        </span>
      </div>

      {feedback && (
        <div className={feedback.ok ? s.feedbackOk : s.feedbackErr}>{feedback.msg}</div>
      )}

      <div className={s.formCard}>
        <div className={s.formGrid}>
          <div className={s.fieldGroup}>
            <Input
              label="이름"
              id={`${uid}-name`}
              value={form.name ?? ""}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            />
          </div>
          <div className={s.fieldGroup}>
            <Input
              label="로그인 ID"
              id={`${uid}-loginId`}
              value={data.loginId ?? ""}
              readOnly
            />
            <p className={s.hint}>로그인 ID는 변경할 수 없습니다</p>
          </div>
          <div className={s.fieldGroup}>
            <Input
              label="이메일"
              id={`${uid}-email`}
              type="email"
              value={form.email ?? ""}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            />
          </div>
          <div className={s.fieldGroup}>
            <Input
              label="연락처"
              id={`${uid}-phone`}
              value={form.phone ?? ""}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            />
          </div>
          <div className={s.fieldGroup}>
            <Input
              label="부서"
              id={`${uid}-dept`}
              value={data.deptName ?? ""}
              readOnly
            />
            <p className={s.hint}>부서 변경은 관리자에게 요청하세요</p>
          </div>
          <div className={s.fieldGroup}>
            <Input
              label="직급 / 역할"
              id={`${uid}-role`}
              value={data.roleName ?? ""}
              readOnly
            />
          </div>
          <div className={s.fieldGroup}>
            <Input
              label="생년월일"
              id={`${uid}-birth`}
              type="date"
              value={form.birth ?? ""}
              onChange={(e) => setForm((f) => ({ ...f, birth: e.target.value }))}
            />
          </div>
          <div className={s.genderField}>
            <label className={s.selectLabel} htmlFor={`${uid}-gender`}>
              성별
            </label>
            <select
              id={`${uid}-gender`}
              className={s.select}
              value={form.gender ?? ""}
              onChange={(e) => setForm((f) => ({ ...f, gender: e.target.value }))}
            >
              <option value="">선택 안함</option>
              <option value="MALE">남성</option>
              <option value="FEMALE">여성</option>
            </select>
          </div>
        </div>
        <div className={s.formActions}>
          <Button variant="primary" onClick={() => mutate({ data: form })} disabled={isPending}>
            {isPending ? "저장 중..." : "저장"}
          </Button>
        </div>
      </div>
    </div>
  );
}
