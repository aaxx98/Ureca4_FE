import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	redirect,
	Scripts,
} from "@tanstack/react-router";
import ky from "ky";

import { Providers } from "../app/providers";
import appCss from "../app/styles.css?url";
import { getAccessToken, setAccessToken } from "../shared/api/tokenStore";
import { ROUTES } from "../shared/config/routes";

async function tryRestoreSession(currentPath: string) {
	// 이미 로그인/oauth 페이지면 복원 시도 불필요
	if (currentPath === ROUTES.LOGIN || currentPath.startsWith("/oauth")) return;

	try {
		const data = await ky
			.post(`${import.meta.env.VITE_API_BASE_URL}/auth/refresh`, {
				credentials: "include",
			})
			.json<{ accessToken: string }>();
		setAccessToken(data.accessToken);
	} catch {
		// refresh 실패 = 세션 만료 → 로그인 페이지로
		throw redirect({ to: ROUTES.LOGIN });
	}
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
	{
		beforeLoad: async ({ location }) => {
			if (!getAccessToken()) {
				await tryRestoreSession(location.pathname);
			}
		},
		head: () => ({
			meta: [
				{
					charSet: "utf-8",
				},
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					title: "App",
				},
			],
			links: [
				{
					rel: "stylesheet",
					href: appCss,
				},
			],
		}),
		component: RootComponent,
		shellComponent: RootDocument,
	},
);

function RootComponent() {
	return (
		<Providers>
			<Outlet />
		</Providers>
	);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<Scripts />
			</body>
		</html>
	);
}
