import type { ReactNode } from "react";
import * as s from "./BaseModal.css";

interface Props {
  title: string;
  onClose: () => void;
  isClosing?: boolean;
  /** 제목 아래 작은 보조 텍스트 (예: 상담 번호) */
  subTitle?: string;
  /** 헤더와 바디 사이에 렌더링되는 탭바 */
  tabBar?: ReactNode;
  /** "md" = 480px (기본), "lg" = 760px */
  size?: "md" | "lg";
  children: ReactNode;
  /** 기본값: 닫기 버튼 */
  footer?: ReactNode;
}

export function BaseModal({
  title,
  onClose,
  isClosing,
  subTitle,
  tabBar,
  size = "md",
  children,
  footer,
}: Props) {
  const panelClass = isClosing
    ? (size === "lg" ? s.modalLgClosing : s.modalClosing)
    : (size === "lg" ? s.modalLg        : s.modal);

  return (
    <div className={isClosing ? s.overlayClosing : s.overlay}>
      <button type="button" className={s.backdrop} onClick={onClose} aria-label="닫기" />
      <div className={panelClass}>

        <div className={s.header}>
          <div className={s.headerTop}>
            <h2 className={s.title}>{title}</h2>
            <button type="button" className={s.closeBtn} onClick={onClose}>✕</button>
          </div>
          {subTitle && <p className={s.subTitle}>{subTitle}</p>}
        </div>

        {tabBar}

        <div className={s.body}>
          {children}
        </div>

        <div className={s.footer}>
          {footer ?? (
            <button type="button" className={s.closeFooterBtn} onClick={onClose}>닫기</button>
          )}
        </div>

      </div>
    </div>
  );
}
