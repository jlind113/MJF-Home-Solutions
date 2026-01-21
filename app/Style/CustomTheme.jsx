import { createTheme } from "@mui/material";

export const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
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
          navbar: "#FFFFFF",
        },
        text: {
          primary: "#1f2937",
          secondary: "#6b7280",
          disabled: "#9aa5b1",
        },
      },
    },
    dark: {
      palette: {
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
          navbar: "#0F0F0F",
        },
        text: {
          primary: "#e9eef1",
          secondary: "#b0b6bb",
          disabled: "#8b94a3",
        },
      },
    },
  },
  typography: {
    h1: { fontFamily: "DM Serif Text" },
    h2: { fontFamily: "DM Serif Text", fontWeight: 700 },
    h3: { fontFamily: "DM Serif Text" },
    h4: { fontFamily: "DM Serif Text" },
    h5: { fontFamily: "DM Serif Text" },
    h6: { fontFamily: "DM Serif Text" },
    body1: {
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: 1.8,
    },
    body2: { fontFamily: "Inter" },
    button: { fontFamily: "Lora", fontWeight: 550 },
    subtitle1: { fontFamily: "Inter" },
    subtitle2: { fontFamily: "Lora" },
    caption: { fontFamily: "Inter" },
    overline: { fontFamily: "Inter" },
  },
});
