import { Link } from "@tanstack/react-router";
import * as s from "./NavTab.css";

interface NavTabProps {
  icon: React.ReactNode;
  label: string;
  /** to가 없으면 disabled 상태로 렌더링 */
  to?: string;
}

export function NavTab({ icon, label, to }: NavTabProps) {
  if (to) {
    return (
      <Link
        to={to}
        className={s.tab}
        activeProps={{ className: `${s.tab} ${s.tabActive}` }}
      >
        {icon}
        {label}
      </Link>
    );
  }

  return (
    <div className={`${s.tab} ${s.tabDisabled}`}>
      {icon}
      {label}
    </div>
  );
}
