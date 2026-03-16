import { useEffect, useId, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import type {
  MyInfoResponseDto,
  MyInfoUpdateRequestDto,
} from "../../shared/api/generated/api.schemas";
import { getGetMyInfoQueryKey } from "../../shared/api/generated/auth/auth.keys";
import {
  useChangePassword,
  useGetMyInfo,
  useUpdateMyInfo,
} from "../../shared/api/generated/auth/auth";
import {
  useGetSettings,
  useToggleSetting,
} from "../../shared/api/generated/notification/notification";
import { getGetSettingsQueryKey } from "../../shared/api/generated/notification/notification.keys";
import { Button } from "../../shared/ui/Button/Button";
import { ContextNavItem } from "../../shared/ui/ContextNavItem";
import { Input } from "../../shared/ui/Input/Input";
import { EyeIcon, EyeOffIcon, LockIcon, NoticeIcon, UserIcon } from "../../shared/ui/icons";
import * as layout from "../../shared/ui/pageLayout.css";
import { AppTopbar } from "../../widgets/AppTopbar/AppTopbar";
import * as s from "./MyPage.css";

type Section = "info" | "password" | "notification";

const SECTION_LABELS: Record<Section, string> = {
  info: "내 정보",
  password: "비밀번호 변경",
  notification: "알림 수신 설정",
};

const SECTIONS: Section[] = ["info", "password", "notification"];

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

export function MyPage() {
  const [activeSection, setActiveSection] = useState<Section>("info");
  const { data, isPending, isError } = useGetMyInfo();

  const scrollRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLElement>(null);
  const passwordRef = useRef<HTMLElement>(null);
  const notificationRef = useRef<HTMLElement>(null);
  const isProgrammaticScroll = useRef(false);
  const programmaticScrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sectionRefMap: Record<Section, React.RefObject<HTMLElement | null>> = {
    info: infoRef,
    password: passwordRef,
    notification: notificationRef,
  };

  function scrollToSection(section: Section) {
    setActiveSection(section);
    isProgrammaticScroll.current = true;
    if (programmaticScrollTimer.current) clearTimeout(programmaticScrollTimer.current);
    sectionRefMap[section].current?.scrollIntoView({ behavior: "smooth", block: "start" });
    // smooth scroll은 보통 800ms 이내 완료
    programmaticScrollTimer.current = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 900);
  }

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    function handleScroll() {
      if (isProgrammaticScroll.current) return;
      const containerTop = scrollEl.getBoundingClientRect().top;
      const refs = [infoRef.current, passwordRef.current, notificationRef.current];
      let active: Section = SECTIONS[0];
      SECTIONS.forEach((id, i) => {
        const el = refs[i];
        if (!el) return;
        if (el.getBoundingClientRect().top - containerTop <= 72) active = id;
      });
      setActiveSection(active);
    }

    scrollEl.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      scrollEl.removeEventListener("scroll", handleScroll);
      if (programmaticScrollTimer.current) clearTimeout(programmaticScrollTimer.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={layout.layout}>
      <AppTopbar />
      <div className={layout.body}>
        <aside className={layout.contextPanel}>
          <div className={layout.contextLabel}>마이페이지</div>
          <ContextNavItem
            icon={<UserIcon />}
            label="내 정보"
            onClick={() => scrollToSection("info")}
            isActive={activeSection === "info"}
          />
          <ContextNavItem
            icon={<LockIcon />}
            label="비밀번호 변경"
            onClick={() => scrollToSection("password")}
            isActive={activeSection === "password"}
          />
          <ContextNavItem
            icon={<NoticeIcon />}
            label="알림 수신 설정"
            onClick={() => scrollToSection("notification")}
            isActive={activeSection === "notification"}
          />
        </aside>

        <main className={layout.main}>
          <div className={s.body} ref={scrollRef}>
            <div className={s.stickyHeader}>
              <h1 className={s.title}>{SECTION_LABELS[activeSection]}</h1>
            </div>

            <div className={s.scrollContent}>
              <section ref={infoRef} className={s.section}>
                {isPending && <p className={s.stateText}>불러오는 중...</p>}
                {isError && <p className={s.stateError}>정보를 불러오지 못했습니다.</p>}
                {data && <InfoPane data={data} />}
              </section>

              <section ref={passwordRef} className={s.section}>
                <PasswordPane />
              </section>

              <section ref={notificationRef} className={s.section}>
                <NotificationPane />
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ── 알림 수신 설정 ── */

const NOTIFICATION_ITEMS = [
  { field: "notice", label: "공지사항 알림", key: "notifyNotice" as const },
  { field: "best_practice", label: "우수 사례 등록 알림", key: "notifyBestPractice" as const },
  { field: "policy_change", label: "운영정책 변경 알림", key: "notifyPolicyChange" as const },
] as const;

function NotificationPane() {
  const queryClient = useQueryClient();
  const { data, isPending, isError } = useGetSettings();
  const { mutate, isPending: isToggling } = useToggleSetting({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: getGetSettingsQueryKey() });
      },
    },
  });

  const settings = data?.data;

  return (
    <div className={s.pane}>
      {isError && (
        <div className={s.feedbackErr}>설정을 불러오지 못했습니다.</div>
      )}
      <div className={s.notificationCard}>
        {isPending ? (
          <p className={s.stateText}>불러오는 중...</p>
        ) : (
          NOTIFICATION_ITEMS.map((item, index) => (
            <div
              key={item.field}
              className={`${s.notificationRow} ${index < NOTIFICATION_ITEMS.length - 1 ? s.notificationRowBorder : ""}`}
            >
              <div className={s.notificationInfo}>
                <div className={s.notificationLabel}>{item.label}</div>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={!!settings?.[item.key]}
                disabled={isToggling || isError}
                className={`${s.toggle} ${settings?.[item.key] ? s.toggleOn : s.toggleOff}`}
                onClick={() => mutate({ field: item.field })}
              >
                <span className={s.toggleThumb} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

/* ── 내 정보 ── */

function InfoPane({ data }: { data: MyInfoResponseDto }) {
  const uid = useId();
  const [form, setForm] = useState<MyInfoUpdateRequestDto>({
    name: data.name ?? "",
    email: data.email ?? "",
    phone: data.phone ?? "",
    birth: toBirthInputValue(data.birth),
    gender: data.gender ?? "",
  });
  const [feedback, setFeedback] = useState<{ ok: boolean; msg: string } | null>(null);

  const queryClient = useQueryClient();
  const { mutate, isPending } = useUpdateMyInfo({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: getGetMyInfoQueryKey() });
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

/* ── 비밀번호 변경 ── */

function PasswordPane() {
  const uid = useId();
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [show, setShow] = useState({ current: false, next: false, confirm: false });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [feedback, setFeedback] = useState<{ ok: boolean; msg: string } | null>(null);

  const { mutate, isPending } = useChangePassword({
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

  function handleSubmit() {
    if (!validate()) return;
    mutate({ data: form });
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
        <Input
          label="현재 비밀번호"
          id={`${uid}-current`}
          type={show.current ? "text" : "password"}
          value={form.currentPassword}
          onChange={(e) => setForm((f) => ({ ...f, currentPassword: e.target.value }))}
          error={errors.currentPassword}
          rightSlot={eyeSlot(show.current, () =>
            setShow((prev) => ({ ...prev, current: !prev.current }))
          )}
        />
        <Input
          label="새 비밀번호"
          id={`${uid}-new`}
          type={show.next ? "text" : "password"}
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
          value={form.confirmPassword}
          onChange={(e) => setForm((f) => ({ ...f, confirmPassword: e.target.value }))}
          error={errors.confirmPassword}
          rightSlot={eyeSlot(show.confirm, () =>
            setShow((prev) => ({ ...prev, confirm: !prev.confirm }))
          )}
        />
        <div className={s.formActions}>
          <Button variant="primary" onClick={handleSubmit} disabled={isPending}>
            {isPending ? "변경 중..." : "비밀번호 변경"}
          </Button>
        </div>
      </div>
    </div>
  );
}
