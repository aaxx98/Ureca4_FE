import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    primary: "#E1006A",
    primaryHover: "#B8005A",
    primaryLight: "#FFE6F2",

    bgPage: "#0D1B3E",
    bgPageSecondary: "#132244",

    surface: "#FFFFFF",
    surfaceHover: "#F9FAFB",

    textPrimary: "#1A1A2E",
    textSecondary: "#6B7280",
    textDisabled: "#9CA3AF",
    textInverse: "#FFFFFF",

    border: "#D1D5DB",
    borderFocus: "#E1006A",

    error: "#EF4444",
    errorLight: "#FEF2F2",
    success: "#10B981",
    successLight: "#ECFDF5",
  },

  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "32px",
  },

  fontWeight: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },

  lineHeight: {
    tight: "1.25",
    normal: "1.5",
    relaxed: "1.75",
  },

  spacing: {
    "1": "4px",
    "2": "8px",
    "3": "12px",
    "4": "16px",
    "5": "20px",
    "6": "24px",
    "8": "32px",
    "10": "40px",
    "12": "48px",
    "16": "64px",
  },

  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    full: "9999px",
  },

  shadow: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    card: "0 20px 40px rgba(0, 0, 0, 0.25)",
  },

  transition: {
    fast: "150ms ease",
    normal: "250ms ease",
  },
});
