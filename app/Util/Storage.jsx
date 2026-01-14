import { lightTheme, darkTheme } from "../Style/CustomTheme";

function isBrowser() {
  return typeof window !== "undefined";
}

export function SetTheme(newTheme) {
  if (isBrowser()) {
    localStorage.setItem("theme", newTheme);
  }
}

export function GetTheme() {
  if (!isBrowser()) {
    return lightTheme;
  }

  const savedTheme = localStorage.getItem("theme");

  if (!savedTheme || savedTheme === null) {
    localStorage.setItem("theme", "light");
    return lightTheme;
  }

  return savedTheme === "light" ? lightTheme : darkTheme;
}
