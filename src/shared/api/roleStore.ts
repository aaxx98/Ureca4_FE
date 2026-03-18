import type { UserRole } from "../config/roles";

const KEY = "az";

export const getRole = (): UserRole | null => {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(KEY);
  if (v === "상담사" || v === "관리자") return v;
  return null;
};

export const setRole = (role: string | null | undefined) => {
  if (typeof window === "undefined") return;
  if (role === "상담사" || role === "관리자") {
    localStorage.setItem(KEY, role);
  }
};

export const clearRole = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
};
