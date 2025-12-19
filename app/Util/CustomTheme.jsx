import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#36A5F3",
      main: "#29a2ff",
      dark: "#0264A8",
    },
    secondary: {
      light: "#EA8443",
      main: "#a6a6ce",
      dark: "#A0470E",
    },
    accent: {
      light: "#ff8432",
      main: "#ff6600",
      dark: "#c34e00",
    },
    background: {
      primary: "#f3f8fc",
      paper: "#fff",
      navbar: "#fff",
      footer: "#fff",
      hero: "#fff",
    },
    text: {
      primary: "#0e1316",
      secondary: "#52616B",
      disabled: "#9AA5B1",
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
      fontFamily: "Montserrat",
    },
    body2: {
      fontFamily: "Montserrat",
    },
    button: {
      fontFamily: "Montserrat",
    },
    subtitle1: {
      fontFamily: "Montserrat",
    },
    subtitle2: {
      fontFamily: "Montserrat",
    },
    caption: {
      fontFamily: "Bellefair",
    },
    overline: {
      fontFamily: "Bellefair",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#44adff",
      main: "#1197ff",
      dark: "#0676cc",
    },
    secondary: {
      light: "#EA8443",
      main: "#313159",
      dark: "#A0470E",
    },
    accent: {
      light: "#ffaf79",
      main: "#ff8b3d",
      dark: "#bb5816",
    },
    background: {
      primary: "#03080c",
      secondary: "#050518",
      paper: "#111111",
      navbar: "#111111",
      footer: "#111111",
      hero: "#111111",
    },
    text: {
      primary: "#e9eef1",
      secondary: "#bfbfbf",
      disabled: "#888888",
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
      fontFamily: "Montserrat",
    },
    body2: {
      fontFamily: "Montserrat",
    },
    button: {
      fontFamily: "Montserrat",
    },
    subtitle1: {
      fontFamily: "Montserrat",
    },
    subtitle2: {
      fontFamily: "Montserrat",
    },
    caption: {
      fontFamily: "Bellefair",
    },
    overline: {
      fontFamily: "Bellefair",
    },
  },
});

export const tailwindTransitions = {
  buttons: {
    scale: "transition-transform duration-200 ease-out hover:scale-110 ",
  },
};
