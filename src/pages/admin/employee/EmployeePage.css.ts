import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../../../shared/design";

export const pageHeader = style({
	padding: `${vars.spacing["8"]} ${vars.spacing["8"]} 0`,
	flexShrink: 0,
});
export const pageHeaderRow = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
});
export const headerTitle = style({
	fontSize: vars.fontSize["2xl"],
	fontWeight: vars.fontWeight.bold,
	color: vars.color.textPrimary,
	letterSpacing: "-0.4px",
	margin: 0,
});
export const headerSubtitle = style({
	fontSize: vars.fontSize.xs,
	color: vars.color.textSecondary,
	marginTop: "5px",
});

export const filterRow = style({
	display: "flex",
	gap: vars.spacing["3"],
	marginTop: vars.spacing["4"],
});
export const searchInput = style({
	flex: 1,
	maxWidth: "300px",
	padding: `${vars.spacing["2"]} ${vars.spacing["3"]}`,
	border: `1px solid ${vars.color.border}`,
	borderRadius: vars.radius.md,
	fontSize: vars.fontSize.sm,
	color: vars.color.textPrimary,
	outline: "none",
	":focus": { borderColor: vars.color.primary },
});
export const filterSelect = style({
	padding: `${vars.spacing["2"]} ${vars.spacing["3"]}`,
	border: `1px solid ${vars.color.border}`,
	borderRadius: vars.radius.md,
	fontSize: vars.fontSize.sm,
	color: vars.color.textPrimary,
	backgroundColor: vars.color.surface,
	cursor: "pointer",
});

export const content = style({
	flex: 1,
	padding: vars.spacing["6"],
	paddingLeft: vars.spacing["8"],
	paddingRight: vars.spacing["8"],
	overflowY: "auto",
	display: "flex",
	flexDirection: "column",
	gap: vars.spacing["4"],
});

export const tableCard = style({
	backgroundColor: vars.color.surface,
	borderRadius: vars.radius.lg,
	boxShadow: vars.shadow.sm,
	overflow: "hidden",
	width: "100%",
	minWidth: 0,
});
export const tableScroll = style({
	width: "100%",
	overflowX: "auto",
	overflowY: "hidden",
});
export const table = style({
	width: "max-content",
	minWidth: "100%",
	borderCollapse: "collapse",
});
export const thead = style({ borderBottom: `2px solid ${vars.color.border}` });
export const th = style({
	padding: `${vars.spacing["3"]} ${vars.spacing["4"]}`,
	textAlign: "left",
	fontSize: vars.fontSize.xs,
	fontWeight: vars.fontWeight.semibold,
	color: vars.color.textSecondary,
	backgroundColor: "#F9FAFB",
	whiteSpace: "nowrap",
});
export const tr = style({
	borderBottom: `1px solid ${vars.color.border}`,
	cursor: "pointer",
	transition: `background-color ${vars.transition.fast}`,
	":hover": { backgroundColor: "#F9FAFB" },
});
export const td = style({
	padding: `${vars.spacing["3"]} ${vars.spacing["4"]}`,
	fontSize: vars.fontSize.sm,
	color: vars.color.textPrimary,
	verticalAlign: "middle",
});
export const tdSecondary = style([td, { color: vars.color.textSecondary }]);

export const statusBadge = style({
	display: "inline-flex",
	alignItems: "center",
	padding: `2px ${vars.spacing["2"]}`,
	borderRadius: vars.radius.full,
	fontSize: "11px",
	fontWeight: vars.fontWeight.semibold,
});
export const actionBtn = style({
	width: "28px",
	height: "28px",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	border: "none",
	borderRadius: vars.radius.sm,
	backgroundColor: "transparent",
	color: vars.color.textSecondary,
	cursor: "pointer",
	transition: `all ${vars.transition.fast}`,
	":hover": { backgroundColor: "#F3F4F6", color: vars.color.textPrimary },
});

export const pagination = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	flexWrap: "wrap",
	gap: vars.spacing["3"],
	padding: `${vars.spacing["3"]} ${vars.spacing["4"]}`,
});
export const pageInfo = style({
	fontSize: vars.fontSize.xs,
	color: vars.color.textSecondary,
	flexShrink: 0,
});
export const pageButtons = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	flexWrap: "wrap",
	gap: vars.spacing["1"],
	marginLeft: "auto",
});
export const pageBtn = style({
	minWidth: "32px",
	height: "32px",
	padding: `0 ${vars.spacing["2"]}`,
	border: `1px solid ${vars.color.border}`,
	borderRadius: vars.radius.sm,
	backgroundColor: vars.color.surface,
	color: vars.color.textSecondary,
	fontSize: vars.fontSize.xs,
	cursor: "pointer",
	transition: `all ${vars.transition.fast}`,
	":hover": { borderColor: vars.color.primary, color: vars.color.primary },
});
export const pageBtnActive = style([
	pageBtn,
	{
		backgroundColor: vars.color.primary,
		borderColor: vars.color.primary,
		color: "#FFFFFF",
		fontWeight: vars.fontWeight.semibold,
		":hover": {
			backgroundColor: vars.color.primaryHover,
			borderColor: vars.color.primaryHover,
		},
	},
]);
export const pageBtnDisabled = style([
	pageBtn,
	{
		opacity: 0.4,
		cursor: "not-allowed",
		":hover": {
			borderColor: vars.color.border,
			color: vars.color.textSecondary,
		},
	},
]);

const fadeIn = keyframes({
	from: { opacity: 0, transform: "translateY(4px)" },
	to: { opacity: 1, transform: "translateY(0)" },
});
export const tableAnimate = style({ animation: `${fadeIn} 180ms ease` });
export const stateText = style({
	textAlign: "center",
	padding: `${vars.spacing["16"]} 0`,
	color: vars.color.textSecondary,
	fontSize: vars.fontSize.sm,
});
