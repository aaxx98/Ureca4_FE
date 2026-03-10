import type { InputHTMLAttributes } from "react";
import * as s from "./Input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  /** 우측에 삽입할 슬롯 (예: 비밀번호 토글 버튼) */
  rightSlot?: React.ReactNode;
}

export function Input({ label, error, rightSlot, id, className, ...inputProps }: InputProps) {
  const inputClass = [s.input, rightSlot ? s.inputWithRightSlot : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={s.fieldGroup}>
      <label className={s.label} htmlFor={id}>
        {label}
      </label>
      <div className={s.inputWrapper}>
        <input id={id} className={inputClass} {...inputProps} />
        {rightSlot && <div className={s.rightSlot}>{rightSlot}</div>}
      </div>
      {error && <p className={s.errorMessage}>{error}</p>}
    </div>
  );
}
