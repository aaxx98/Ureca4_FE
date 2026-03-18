import { style } from "@vanilla-extract/css";
import { vars } from "../../../shared/design";

/* ─── Page Layout ─── */

export const pageWrapper = style({
	display: "flex",
	flexDirection: "column",
	flex: 1,
	minHeight: 0,
	overflowY: "auto",
	overflowX: "hidden",
});

export const pageHeader = style({
	backgroundImage:
		"linear-gradient(135deg, #0F2557 0%, #1D4ED8 60%, #6D28D9 100%)",
	backgroundColor: "#0F2557",
	padding: `${vars.spacing["8"]} ${vars.spacing["8"]} ${vars.spacing["6"]}`,
	flexShrink: 0,
});

export const headerBadge = style({
	display: "inline-flex",
	alignItems: "center",
	gap: "6px",
	padding: `3px ${vars.spacing["3"]}`,
	border: "1px solid rgba(255,255,255,0.3)",
	borderRadius: vars.radius.full,
	fontSize: vars.fontSize.xs,
	color: "rgba(255,255,255,0.85)",
	backgroundColor: "rgba(255,255,255,0.1)",
	marginBottom: vars.spacing["2"],
});

export const headerTitle = style({
	fontSize: vars.fontSize["3xl"],
	fontWeight: vars.fontWeight.bold,
	color: "#FFFFFF",
	margin: `0 0 4px 0`,
	letterSpacing: "-0.6px",
});

export const headerSubtitle = style({
	fontSize: vars.fontSize.sm,
	color: "rgba(255,255,255,0.65)",
	margin: 0,
});

export const content = style({
	padding: vars.spacing["6"],
	paddingLeft: vars.spacing["8"],
	paddingRight: vars.spacing["8"],
	paddingBottom: vars.spacing["8"],
	display: "flex",
	flexDirection: "column",
	gap: vars.spacing["4"],
});

/* ─── Table ─── */

export const tableWrap = style({
	backgroundColor: vars.color.surface,
	borderRadius: vars.radius.lg,
	border: `1px solid ${vars.color.border}`,
	overflow: "hidden",
	flexShrink: 0,
});

export const tableScroll = style({ overflowX: "auto" });

export const table = style({ width: "100%", borderCollapse: "collapse" });

export const thead = style({ backgroundColor: "#F8FAFC" });

export const th = style({
	padding: "10px 14px",
	textAlign: "left",
	fontSize: vars.fontSize.xs,
	fontWeight: vars.fontWeight.semibold,
	color: vars.color.textSecondary,
	borderBottom: `1px solid ${vars.color.border}`,
	whiteSpace: "nowrap",
});

export const thCenter = style([th, { textAlign: "center" }]);

export const tr = style({ cursor: "default" });

export const td = style({
	padding: "12px 14px",
	fontSize: vars.fontSize.sm,
	borderBottom: `1px solid #F1F5F9`,
	verticalAlign: "middle",
	selectors: {
		"tr:last-child &": { borderBottom: "none" },
		"tr:hover &": { backgroundColor: "#F8FAFC" },
	},
});

export const tdCenter = style([td, { textAlign: "center" }]);

export const categoryPill = style({
	display: "inline-flex",
	padding: `2px ${vars.spacing["2"]}`,
	borderRadius: vars.radius.full,
	fontSize: "11px",
	fontWeight: vars.fontWeight.semibold,
	backgroundColor: "#EFF6FF",
	color: "#1E40AF",
	whiteSpace: "nowrap",
});

export const titleText = style({
	fontSize: vars.fontSize.sm,
	fontWeight: vars.fontWeight.semibold,
	color: vars.color.textPrimary,
});

export const dateText = style({
	fontSize: vars.fontSize.xs,
	color: vars.color.textSecondary,
	whiteSpace: "nowrap",
});

export const statusBadgeActive = style({
	display: "inline-flex",
	alignItems: "center",
	padding: `2px ${vars.spacing["2"]}`,
	borderRadius: vars.radius.full,
	fontSize: "11px",
	fontWeight: vars.fontWeight.semibold,
	backgroundColor: "#DCFCE7",
	color: "#166534",
});

export const statusBadgeInactive = style({
	display: "inline-flex",
	alignItems: "center",
	padding: `2px ${vars.spacing["2"]}`,
	borderRadius: vars.radius.full,
	fontSize: "11px",
	fontWeight: vars.fontWeight.semibold,
	backgroundColor: "#F1F5F9",
	color: "#64748B",
});

export const actionCell = style({
	display: "flex",
	gap: "6px",
	justifyContent: "center",
});

export const btnActivate = style({
	padding: `4px 10px`,
	fontSize: "11px",
	fontWeight: vars.fontWeight.semibold,
	backgroundColor: "#DCFCE7",
	color: "#166534",
	border: `1px solid #BBF7D0`,
	borderRadius: vars.radius.sm,
	cursor: "pointer",
	whiteSpace: "nowrap",
	transition: `all ${vars.transition.fast}`,
	":hover": { backgroundColor: "#BBF7D0" },
});

export const btnDeactivate = style({
	padding: `4px 10px`,
	fontSize: "11px",
	fontWeight: vars.fontWeight.semibold,
	backgroundColor: "#FEF2F2",
	color: "#DC2626",
	border: `1px solid #FECACA`,
	borderRadius: vars.radius.sm,
	cursor: "pointer",
	whiteSpace: "nowrap",
	transition: `all ${vars.transition.fast}`,
	":hover": { backgroundColor: "#FEE2E2" },
});

/* ─── Tabs ─── */

export const tabBar = style({
	display: "flex",
	gap: "2px",
	backgroundColor: "#F1F5F9",
	borderRadius: vars.radius.lg,
	padding: "4px",
	width: "fit-content",
	flexShrink: 0,
});

export const tab = style({
	padding: `${vars.spacing["2"]} ${vars.spacing["5"]}`,
	borderRadius: vars.radius.md,
	fontSize: vars.fontSize.sm,
	fontWeight: vars.fontWeight.medium,
	color: vars.color.textSecondary,
	cursor: "pointer",
	border: "none",
	backgroundColor: "transparent",
	transition: `all ${vars.transition.fast}`,
	":hover": { color: vars.color.textPrimary },
});

export const tabActive = style([
	tab,
	{
		backgroundColor: vars.color.surface,
		color: vars.color.textPrimary,
		boxShadow: vars.shadow.sm,
		fontWeight: vars.fontWeight.semibold,
	},
]);

/* ─── Form ─── */

export const form = style({
	display: "flex",
	flexDirection: "column",
	gap: vars.spacing["4"],
	backgroundColor: vars.color.surface,
	borderRadius: vars.radius.lg,
	border: `1px solid ${vars.color.border}`,
	padding: vars.spacing["6"],
	flexShrink: 0,
});

export const formGroup = style({
	display: "flex",
	flexDirection: "column",
	gap: vars.spacing["2"],
});

export const formLabel = style({
	fontSize: vars.fontSize.sm,
	fontWeight: vars.fontWeight.semibold,
	color: vars.color.textPrimary,
});

export const formInput = style({
	padding: `${vars.spacing["2"]} ${vars.spacing["3"]}`,
	border: `1px solid ${vars.color.border}`,
	borderRadius: vars.radius.md,
	fontSize: vars.fontSize.sm,
	color: vars.color.textPrimary,
	backgroundColor: vars.color.surface,
	outline: "none",
	transition: `border-color ${vars.transition.fast}`,
	":focus": { borderColor: vars.color.primary },
	"::placeholder": { color: vars.color.textSecondary },
});

export const formSelect = style([formInput, { cursor: "pointer" }]);

export const formTextarea = style([
	formInput,
	{
		resize: "vertical",
		fontFamily: "inherit",
		lineHeight: vars.lineHeight.normal,
	},
]);

export const formFooter = style({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	paddingTop: vars.spacing["2"],
	borderTop: `1px solid ${vars.color.border}`,
	marginTop: vars.spacing["2"],
});

export const btnPrimary = style({
	padding: `${vars.spacing["2"]} ${vars.spacing["5"]}`,
	backgroundColor: "#1D4ED8",
	color: "#FFFFFF",
	borderRadius: vars.radius.md,
	fontSize: vars.fontSize.sm,
	fontWeight: vars.fontWeight.semibold,
	border: "none",
	cursor: "pointer",
	transition: `all ${vars.transition.fast}`,
	":hover": { backgroundColor: "#1E40AF" },
	":disabled": { opacity: 0.5, cursor: "default" },
});

/* ─── Edit Layout ─── */

export const editLayout = style({
	display: "grid",
	gridTemplateColumns: "280px 1fr",
	gap: vars.spacing["4"],
	minHeight: 0,
});

export const editList = style({
	backgroundColor: vars.color.surface,
	borderRadius: vars.radius.lg,
	border: `1px solid ${vars.color.border}`,
	padding: vars.spacing["4"],
	display: "flex",
	flexDirection: "column",
	gap: vars.spacing["2"],
	flexShrink: 0,
});

export const editListLabel = style({
	fontSize: vars.fontSize.xs,
	fontWeight: vars.fontWeight.semibold,
	color: vars.color.textSecondary,
	textTransform: "uppercase",
	letterSpacing: "0.05em",
	marginBottom: vars.spacing["1"],
});

export const editListItem = style({
	display: "flex",
	alignItems: "center",
	gap: vars.spacing["2"],
	padding: `${vars.spacing["2"]} ${vars.spacing["3"]}`,
	borderRadius: vars.radius.md,
	border: `1px solid transparent`,
	backgroundColor: "transparent",
	cursor: "pointer",
	textAlign: "left",
	width: "100%",
	fontSize: vars.fontSize.sm,
	transition: `all ${vars.transition.fast}`,
	":hover": { backgroundColor: "#F8FAFC", borderColor: vars.color.border },
});

export const editListItemActive = style([
	editListItem,
	{
		backgroundColor: "#EFF6FF",
		borderColor: "#BFDBFE",
		color: "#1D4ED8",
	},
]);

export const editListItemCategory = style({
	fontSize: "10px",
	fontWeight: vars.fontWeight.semibold,
	backgroundColor: "#EFF6FF",
	color: "#1E40AF",
	padding: `1px 6px`,
	borderRadius: vars.radius.full,
	flexShrink: 0,
});

export const editListItemTitle = style({
	flex: 1,
	minWidth: 0,
	overflow: "hidden",
	textOverflow: "ellipsis",
	whiteSpace: "nowrap",
	color: vars.color.textPrimary,
	fontSize: vars.fontSize.xs,
});

export const editFormWrap = style({
	minWidth: 0,
});

/* ─── Empty / State ─── */

export const stateText = style({
	textAlign: "center",
	padding: `${vars.spacing["16"]} 0`,
	color: vars.color.textSecondary,
	fontSize: vars.fontSize.sm,
});

export const searchCard = style({
	display: "flex",
	flexDirection: "column",
	gap: vars.spacing["4"],
	backgroundColor: vars.color.surface,
	borderRadius: vars.radius.lg,
	border: `1px solid ${vars.color.border}`,
	padding: vars.spacing["5"],
});

export const searchGrid = style({
	display: "grid",
	gridTemplateColumns: "minmax(260px, 1.1fr) minmax(220px, 1fr)",
	gap: vars.spacing["4"],
	alignItems: "end",
	"@media": {
		"screen and (max-width: 900px)": {
			gridTemplateColumns: "1fr",
		},
	},
});

export const searchField = style({
	display: "flex",
	flexDirection: "column",
	gap: vars.spacing["2"],
	minWidth: 0,
});

export const searchLabel = style({
	fontSize: vars.fontSize.sm,
	fontWeight: vars.fontWeight.semibold,
	color: vars.color.textPrimary,
});

export const searchInput = style({
	width: "100%",
	padding: `${vars.spacing["3"]} ${vars.spacing["4"]}`,
	border: `1px solid ${vars.color.border}`,
	borderRadius: vars.radius.md,
	fontSize: vars.fontSize.sm,
	color: vars.color.textPrimary,
	backgroundColor: vars.color.surface,
	outline: "none",
	transition: `border-color ${vars.transition.fast}, box-shadow ${vars.transition.fast}`,
	":focus": {
		borderColor: vars.color.primary,
		boxShadow: `0 0 0 3px rgba(29, 78, 216, 0.12)`,
	},
	"::placeholder": {
		color: vars.color.textSecondary,
	},
});

export const searchActions = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	gap: vars.spacing["3"],
	"@media": {
		"screen and (max-width: 640px)": {
			flexDirection: "column",
			alignItems: "stretch",
		},
	},
});

export const totalCount = style({
	fontSize: vars.fontSize.sm,
	color: vars.color.textSecondary,
});

export const categorySelectWrap = style({
	position: "relative",
});

export const categorySelectInputWrap = style({
	position: "relative",
});

export const categorySelectInput = style([
	searchInput,
	{
		paddingRight: vars.spacing["10"],
	},
]);

export const categorySelectClear = style({
	position: "absolute",
	top: "50%",
	right: vars.spacing["3"],
	transform: "translateY(-50%)",
	border: "none",
	background: "transparent",
	color: vars.color.textSecondary,
	fontSize: "18px",
	cursor: "pointer",
	lineHeight: 1,
});

export const categorySelectDropdown = style({
	position: "absolute",
	top: "calc(100% + 6px)",
	left: 0,
	right: 0,
	maxHeight: "260px",
	overflowY: "auto",
	margin: 0,
	padding: vars.spacing["2"],
	listStyle: "none",
	backgroundColor: vars.color.surface,
	border: `1px solid ${vars.color.border}`,
	borderRadius: vars.radius.md,
	boxShadow: vars.shadow.md,
	zIndex: 20,
});

export const categorySelectItem = style({
	padding: `${vars.spacing["2"]} ${vars.spacing["3"]}`,
	borderRadius: vars.radius.sm,
	fontSize: vars.fontSize.sm,
	color: vars.color.textPrimary,
	cursor: "pointer",
});

export const categorySelectItemHighlighted = style([
	categorySelectItem,
	{
		backgroundColor: "#EFF6FF",
		color: vars.color.primary,
	},
]);

export const categorySelectEmpty = style({
	padding: `${vars.spacing["3"]} ${vars.spacing["3"]}`,
	fontSize: vars.fontSize.sm,
	color: vars.color.textSecondary,
});

export const authorText = style({
	fontSize: vars.fontSize.sm,
	color: "#374151",
});

export const paginationCard = style({
	backgroundColor: vars.color.surface,
	borderRadius: vars.radius.lg,
	border: `1px solid ${vars.color.border}`,
	padding: `${vars.spacing["3"]} ${vars.spacing["5"]}`,
});

export const pagination = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	gap: vars.spacing["3"],
	flexWrap: "wrap",
});

export const pageInfo = style({
	fontSize: vars.fontSize.sm,
	color: vars.color.textSecondary,
});

export const pageButtons = style({
	display: "flex",
	alignItems: "center",
	gap: vars.spacing["2"],
	flexWrap: "wrap",
});

const pageButtonBase = style({
	minWidth: "36px",
	height: "36px",
	padding: `0 ${vars.spacing["3"]}`,
	borderRadius: vars.radius.md,
	border: `1px solid ${vars.color.border}`,
	backgroundColor: vars.color.surface,
	color: vars.color.textPrimary,
	fontSize: vars.fontSize.sm,
	fontWeight: vars.fontWeight.medium,
	cursor: "pointer",
	transition: `all ${vars.transition.fast}`,
	":hover": {
		borderColor: vars.color.primary,
		color: vars.color.primary,
	},
});

export const pageBtn = style([pageButtonBase]);

export const pageBtnActive = style([
	pageButtonBase,
	{
		borderColor: vars.color.primary,
		backgroundColor: vars.color.primary,
		color: "#FFFFFF",
		":hover": {
			color: "#FFFFFF",
		},
	},
]);

export const pageBtnDisabled = style([
	pageButtonBase,
	{
		opacity: 0.45,
		cursor: "not-allowed",
		":hover": {
			borderColor: vars.color.border,
			color: vars.color.textPrimary,
		},
	},
]);
