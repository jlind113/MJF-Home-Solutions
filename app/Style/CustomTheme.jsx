import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#5fc0ff",
      main: "#29a2ff",
      dark: "#1f7fcc",
    },
    secondary: {
      light: "#b7c0be",
      main: "#8a9592",
      dark: "#5f6866",
    },
    accent: {
      light: "#eaa885",
      main: "#cc5a28",
      dark: "#8f3a13",
    },
    background: {
      light: "#FFFFFF",
      main: "#F2F2F2",
      dark: "#E5E5E5",
    },
    text: {
      primary: "#1f2937",
      secondary: "#6b7280",
      disabled: "#9aa5b1",
    },
  },
  typography: {
    h1: {
      fontFamily: "DM Serif Text",
    },
    h2: {
      fontFamily: "DM Serif Text",
    },
    h3: {
      fontFamily: "DM Serif Text",
    },
    h4: {
      fontFamily: "DM Serif Text",
    },
    h5: {
      fontFamily: "DM Serif Text",
    },
    h6: {
      fontFamily: "DM Serif Text",
    },
    body1: {
      fontFamily: "Inter",
    },
    body2: {
      fontFamily: "Inter",
    },
    button: {
      fontFamily: "Lora",
    },
    subtitle1: {
      fontFamily: "Inter",
    },
    subtitle2: {
      fontFamily: "Lora",
    },
    caption: {
      fontFamily: "Inter",
    },
    overline: {
      fontFamily: "Inter",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 3440,
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#44adff",
      main: "#29a2ff",
      dark: "#1f7fcc",
    },
    secondary: {
      light: "#9aa3a0",
      main: "#4f5755",
      dark: "#333938",
    },
    accent: {
      light: "#e9a07d",
      main: "#c65526",
      dark: "#8a3a14",
    },
    background: {
      light: "#373737",
      main: "#212121",
      dark: "#0F0F0F",
    },
    text: {
      primary: "#e9eef1",
      secondary: "#b0b6bb",
      disabled: "#8b94a3",
    },
  },
  typography: {
    h1: {
      fontFamily: "DM Serif Text",
    },
    h2: {
      fontFamily: "DM Serif Text",
    },
    h3: {
      fontFamily: "DM Serif Text",
    },
    h4: {
      fontFamily: "DM Serif Text",
    },
    h5: {
      fontFamily: "DM Serif Text",
    },
    h6: {
      fontFamily: "DM Serif Text",
    },
    body1: {
      fontFamily: "Inter",
    },
    body2: {
      fontFamily: "Inter",
    },
    button: {
      fontFamily: "Lora",
    },
    subtitle1: {
      fontFamily: "Inter",
    },
    subtitle2: {
      fontFamily: "Lora",
    },
    caption: {
      fontFamily: "Inter",
    },
    overline: {
      fontFamily: "Inter",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 3440,
    },
  },
});
