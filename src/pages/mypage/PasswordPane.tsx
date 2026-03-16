import { useId, useState } from "react";
import { useMutationPutChangePasswordQuery } from "../../shared/api/generated/auth/auth";
import { Button } from "../../shared/ui/Button/Button";
import { Input } from "../../shared/ui/Input/Input";
import { EyeIcon, EyeOffIcon } from "../../shared/ui/icons";
import * as s from "./MyPage.css";

export function PasswordPane() {
  const uid = useId();
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [show, setShow] = useState({ current: false, next: false, confirm: false });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [feedback, setFeedback] = useState<{ ok: boolean; msg: string } | null>(null);

  const { mutate, isPending } = useMutationPutChangePasswordQuery({
    mutation: {
      onSuccess: () => {
        setForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
        setFeedback({ ok: true, msg: "비밀번호가 변경되었습니다." });
        setTimeout(() => setFeedback(null), 3000);
      },
      onError: () =>
        setFeedback({
          ok: false,
          msg: "변경에 실패했습니다. 현재 비밀번호를 확인해주세요.",
        }),
    },
  });

  function validate() {
    const errs: Partial<typeof form> = {};
    if (!form.currentPassword) errs.currentPassword = "현재 비밀번호를 입력해주세요.";
    if (form.newPassword.length < 8) errs.newPassword = "8자 이상 입력해주세요.";
    if (form.newPassword !== form.confirmPassword)
      errs.confirmPassword = "비밀번호가 일치하지 않습니다.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function eyeSlot(visible: boolean, toggle: () => void) {
    return (
      <button type="button" className={s.eyeBtn} onClick={toggle}>
        {visible ? <EyeOffIcon /> : <EyeIcon />}
      </button>
    );
  }

  return (
    <div className={s.pane}>
      {feedback && (
        <div className={feedback.ok ? s.feedbackOk : s.feedbackErr}>{feedback.msg}</div>
      )}
      <div className={s.passwordForm}>
        <h2 className={s.cardSectionTitle}>비밀번호 변경</h2>
        <Input
          label="현재 비밀번호"
          id={`${uid}-current`}
          type={show.current ? "text" : "password"}
          placeholder="현재 비밀번호 입력"
          value={form.currentPassword}
          onChange={(e) => setForm((f) => ({ ...f, currentPassword: e.target.value }))}
          error={errors.currentPassword}
          rightSlot={eyeSlot(show.current, () =>
            setShow((prev) => ({ ...prev, current: !prev.current }))
          )}
        />
        <div className={s.passwordGrid}>
          <Input
            label="새 비밀번호"
            id={`${uid}-new`}
            type={show.next ? "text" : "password"}
            placeholder="8자 이상 영문+숫자+특수문자"
            value={form.newPassword}
            onChange={(e) => setForm((f) => ({ ...f, newPassword: e.target.value }))}
            error={errors.newPassword}
            rightSlot={eyeSlot(show.next, () =>
              setShow((prev) => ({ ...prev, next: !prev.next }))
            )}
          />
          <Input
            label="새 비밀번호 확인"
            id={`${uid}-confirm`}
            type={show.confirm ? "text" : "password"}
            placeholder="새 비밀번호 재입력"
            value={form.confirmPassword}
            onChange={(e) => setForm((f) => ({ ...f, confirmPassword: e.target.value }))}
            error={errors.confirmPassword}
            rightSlot={eyeSlot(show.confirm, () =>
              setShow((prev) => ({ ...prev, confirm: !prev.confirm }))
            )}
          />
        </div>
        <div className={s.formActions}>
          <Button variant="primary" onClick={() => validate() && mutate({ data: form })} disabled={isPending}>
            {isPending ? "변경 중..." : "비밀번호 변경"}
          </Button>
        </div>
      </div>
    </div>
  );
}
