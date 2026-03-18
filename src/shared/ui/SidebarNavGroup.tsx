import { useState, useEffect } from "react";
import { ChevronDownIcon } from "./icons";
import * as layout from "./pageLayout.css";

interface Props {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function SidebarNavGroup({ icon, label, children, defaultOpen = true }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  // 초기 마운트 시 트랜지션을 비활성화해 핑 튀김 방지
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setAnimated(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const wrapClass = open
    ? `${layout.contextSubWrap} ${layout.contextSubWrapOpen}`
    : layout.contextSubWrap;

  return (
    <div>
      <button
        type="button"
        className={layout.contextGroupToggle}
        onClick={() => setOpen(prev => !prev)}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "9px" }}>
          {icon}
          {label}
        </span>
        <ChevronDownIcon rotated={open} />
      </button>
      <div
        className={wrapClass}
        style={animated ? undefined : { transition: "none" }}
      >
        {children}
      </div>
    </div>
  );
}
