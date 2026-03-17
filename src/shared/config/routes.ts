export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  MYPAGE: "/mypage",
  CONSULT: "/consultation-list",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
