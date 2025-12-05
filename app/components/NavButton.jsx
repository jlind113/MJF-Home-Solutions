import { NavLink } from "react-router";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function NavButton({ link, text }) {
  const theme = useTheme();

  return (
    <NavLink
      to={link}
      style={({ isActive }) => ({
        color: isActive
          ? theme.palette.primary.light
          : theme.palette.text.primary,
        transition: "color 0.2s, transform 0.2s",
        cursor: "pointer",
        display: "inline-block",
      })}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <Typography
        component="span"
        variant="button"
        sx={{ fontFamily: "Montserrat", fontWeight: 600 }}
      >
        {text}
      </Typography>
    </NavLink>
  );
}
