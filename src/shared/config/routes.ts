export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  MYPAGE: "/mypage",
  CONSULT: "/consultation-list",
  CONSULT_RESULT: "/consultation-result",
  EXCELLENT: "/excellent-cases",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
