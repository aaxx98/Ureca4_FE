import { Link } from "@tanstack/react-router";
import * as layout from "./pageLayout.css";

interface ContextNavItemProps {
  icon: React.ReactNode;
  label: string;
  /** 라우트 이동용 */
  to?: string;
  /** 탭 전환 등 onClick 전용 */
  onClick?: () => void;
  /** onClick 사용 시 활성 상태 수동 지정 */
  isActive?: boolean;
  badge?: React.ReactNode;
}

export function ContextNavItem({ icon, label, to, onClick, isActive, badge }: ContextNavItemProps) {
  if (to) {
    return (
      <Link
        to={to}
        className={layout.contextItem}
        activeProps={{ className: `${layout.contextItem} ${layout.contextItemActive}` }}
      >
        {icon}
        {label}
        {badge != null && <span className={layout.contextBadge}>{badge}</span>}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button
        type="button"
        className={`${layout.contextItem} ${isActive ? layout.contextItemActive : ""}`}
        onClick={onClick}
      >
        {icon}
        {label}
        {badge != null && <span className={layout.contextBadge}>{badge}</span>}
      </button>
    );
  }

  return (
    <div className={`${layout.contextItem} ${layout.contextItemDisabled}`}>
      {icon}
      {label}
      {badge != null && <span className={layout.contextBadge}>{badge}</span>}
    </div>
  );
}
