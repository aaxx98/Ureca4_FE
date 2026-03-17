import type { UserRole } from "../config/roles";

const KEY = "az";

export const getRole = (): UserRole | null => {
  const v = localStorage.getItem(KEY);
  if (v === "상담사" || v === "관리자") return v;
  return null;
};

export const setRole = (role: string | null | undefined) => {
  if (role === "상담사" || role === "관리자") {
    localStorage.setItem(KEY, role);
  }
};

export const clearRole = () => {
  localStorage.removeItem(KEY);
};
