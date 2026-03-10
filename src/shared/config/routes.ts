export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  MYPAGE: "/mypage",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
