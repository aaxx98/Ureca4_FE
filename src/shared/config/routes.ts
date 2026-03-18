export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  MYPAGE: "/mypage",
  CONSULT: "/consultation-list",
  CONSULT_RESULT: "/consultation-result",
  EXCELLENT: "/excellent-cases",
  NOTICE: "/notice",
  SUMMARY: "/summary",
  ANALYSIS: "/analysis",
  ADMIN_REPORT: "/admin-report",
  ADMIN_EXCELLENT_CASES: "/admin-excellent-cases",
  NOTIFICATIONS: "/notifications",
  ADMIN_EMPLOYEES: "/admin-employees",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
