import * as layout from "../../shared/ui/pageLayout.css";

interface AppSidebarProps {
  label: string;
  children: React.ReactNode;
}

export function AppSidebar({ label, children }: AppSidebarProps) {
  return (
    <aside className={layout.contextPanel}>
      <div className={layout.contextLabel}>{label}</div>
      {children}
    </aside>
  );
}
