import { useState } from "react";
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
      <div className={open ? `${layout.contextSubWrap} ${layout.contextSubWrapOpen}` : layout.contextSubWrap}>
        {children}
      </div>
    </div>
  );
}
