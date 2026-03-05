import { useId, useState } from "react";
import { useLogin } from "../../shared/api/generated/auth";
import { setAccessToken } from "../../shared/api/tokenStore";
import * as s from "./LoginPage.css";

export function LoginPage() {
  const loginIdInputId = useId();
  const passwordInputId = useId();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { mutate: login, isPending } = useLogin({
    mutation: {
      onSuccess: (data) => {
        if (data.accessToken) {
          setAccessToken(data.accessToken);
        }
        console.log("로그인 성공", data);
      },
      onError: (error) => {
        console.error("로그인 실패", error);
        setError("아이디 또는 비밀번호가 올바르지 않습니다.");
      },
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!loginId.trim()) {
      setError("아이디를 입력해주세요.");
      return;
    }
    if (!password.trim()) {
      setError("비밀번호를 입력해주세요.");
      return;
    }

    login({ data: { loginId, password } });
  };

  return (
    <div className={s.pageContainer}>
      <div className={s.card}>
        <div className={s.logoSection}>
          <div className={s.logoMark}>
            <span className={s.logoU}>U+</span>
            <span className={s.logoPlus}>LG</span>
          </div>
          <p className={s.serviceTitle}>고객 상담 기록 관리 시스템</p>
        </div>

        <div className={s.divider} />

        <form className={s.form} onSubmit={handleSubmit} noValidate>
          {error && <div className={s.globalErrorBox}>{error}</div>}

          <div className={s.fieldGroup}>
            <label className={s.label} htmlFor={loginIdInputId}>
              아이디
            </label>
            <div className={s.inputWrapper}>
              <input
                id={loginIdInputId}
                type="text"
                className={s.input}
                placeholder="아이디를 입력하세요"
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
                autoComplete="username"
                disabled={isPending}
              />
            </div>
          </div>

          <div className={s.fieldGroup}>
            <label className={s.label} htmlFor={passwordInputId}>
              비밀번호
            </label>
            <div className={s.inputWrapper}>
              <input
                id={passwordInputId}
                type={showPassword ? "text" : "password"}
                className={`${s.input} ${s.inputWithToggle}`}
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                disabled={isPending}
              />
              <button
                type="button"
                className={s.toggleButton}
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
          </div>

          <button type="submit" className={s.submitButton} disabled={isPending}>
            {isPending ? "로그인 중..." : "로그인"}
          </button>
        </form>
      </div>
    </div>
  );
}

function EyeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <title>비밀번호 보기</title>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <title>비밀번호 숨기기</title>
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}
