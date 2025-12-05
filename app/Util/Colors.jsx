import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#048ff0",
      light: "#36A5F3",
      dark: "#0264A8",
      contrastText: "#fff",
    },
    secondary: {
      main: "#E56614",
      light: "#EA8443",
      dark: "#A0470E",
      contrastText: "#fff",
    },
    background: {
      default: "#CCCCCC",
      paper: "#ffffff",
    },
    text: {
      primary: "#1F2A37",
      secondary: "#52616B",
      disabled: "#9AA5B1",
    },
    error: {
      main: "#E53935",
      light: "#EF6F6C",
      dark: "#B71C1C",
      contrastText: "#fff",
    },
    warning: {
      main: "#F6A609",
      light: "#FCD77A",
      dark: "#C77C04",
      contrastText: "#1F2A37",
    },
    info: {
      main: "#0284C7",
      light: "#38BDF8",
      dark: "#0369A1",
      contrastText: "#fff",
    },
    success: {
      main: "#2FB67C",
      light: "#52D899",
      dark: "#1F7A54",
      contrastText: "#0F172A",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#444444",
      light: "#36A5F3",
      dark: "#0264A8",
      contrastText: "#fff",
    },
    secondary: {
      main: "#E56614",
      light: "#EA8443",
      dark: "#A0470E",
      contrastText: "#fff",
    },
    background: {
      default: "#222222",
      paper: "#444444",
    },
    text: {
      primary: "#F4F4F5",
      secondary: "#D1D5DB",
      disabled: "#6B7280",
    },
    error: {
      main: "#F97066",
      light: "#FCA5A5",
      dark: "#C2410C",
      contrastText: "#0B1120",
    },
    warning: {
      main: "#FACC15",
      light: "#FDE68A",
      dark: "#CA8A04",
      contrastText: "#0B1120",
    },
    info: {
      main: "#38BDF8",
      light: "#7DD3FC",
      dark: "#0EA5E9",
      contrastText: "#0B1120",
    },
    success: {
      main: "#34D399",
      light: "#6EE7B7",
      dark: "#047857",
      contrastText: "#0B1120",
    },
  },
});
