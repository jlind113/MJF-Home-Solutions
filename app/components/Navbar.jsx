// MUI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

// MUI Icons Imports
import Menu from "@mui/icons-material/Menu";

import { useState } from "react";
import { NavLink, useLocation } from "react-router";
import "../app.css";
import { tailwindTransitions } from "../Util/CustomTheme";

function NavButton(link, text) {
  const location = useLocation();

  function checkLocation() {
    if (link === location.pathname) {
      return "primary.light";
    } else {
      return "text.primary";
    }
  }

  return (
    <NavLink to={link} className={tailwindTransitions.buttons.scale}>
      <Typography
        variant="button"
        color={checkLocation}
        sx={{
          fontWeight: 550,
          fontSize: "0.95rem",
          cursor: "pointer",
        }}
      >
        {text}
      </Typography>
    </NavLink>
  );
}

export default function Navbar({ SwapTheme, ThemeIcon }) {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (newState) => () => {
    setOpenDrawer(newState);
  };

  const DrawerList = (
    <Box role="presentation" sx={{ width: "30vw" }}>
      <List>
        <ListItem>
          <ListItemButton
            onClick={toggleDrawer(false)}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {NavButton("/", "Home")}
          </ListItemButton>
        </ListItem>
        <Divider sx={{ backgroundColor: "text.disabled" }} />

        <ListItem>
          <ListItemButton
            onClick={toggleDrawer(false)}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {NavButton("/Gallery", "Gallery")}
          </ListItemButton>
        </ListItem>
        <Divider sx={{ backgroundColor: "text.disabled" }} />

        <ListItem>
          <ListItemButton
            onClick={toggleDrawer(false)}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {NavButton("/Services", "Services")}
          </ListItemButton>
        </ListItem>
        <Divider sx={{ backgroundColor: "text.disabled" }} />

        <ListItem>
          <ListItemButton
            onClick={toggleDrawer(false)}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {NavButton("/Contact", "Contact Us")}
          </ListItemButton>
        </ListItem>
        <Divider sx={{ backgroundColor: "text.disabled" }} />

        <ListItem
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <IconButton
            onClick={() => SwapTheme()}
            className={tailwindTransitions.buttons.scale}
          >
            <ThemeIcon sx={{ color: "text.primary" }} />
          </IconButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Paper
      square
      variant="outlined"
      sx={{
        width: "100%",
        backgroundColor: "background.secondary",
        position: "sticky",
        zIndex: 1000,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: "secondary.main",
      }}
    >
      <Box
        sx={{
          maxWidth: "80vw",
          margin: "auto",
          paddingY: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <NavLink to={"/"}>
            <img
              src="/Photos/Logos/Logo-2-250x150.webp"
              alt="MJF Home Solutions Logo"
              style={{ height: "75px" }}
            />
          </NavLink>
          <Box sx={{ display: { sm: "none", lg: "block" } }}>
            <span>
              <Typography
                variant="h4"
                sx={{
                  color: "text.primary",
                }}
              >
                MJF Home Solutions
              </Typography>
            </span>
          </Box>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 3,
            alignItems: "center",
          }}
        >
          {NavButton("/", "Home")}
          {NavButton("/Services", "Services")}
          {NavButton("/Gallery", "Gallery")}
          {NavButton("/Contact", "Contact Us")}
          <IconButton
            onClick={() => SwapTheme()}
            className={tailwindTransitions.buttons.scale}
          >
            <ThemeIcon
              sx={{ color: "text.primary", width: "2rem", height: "2rem" }}
            />
          </IconButton>
        </Box>

        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Button onClick={toggleDrawer(true)} aria-label="Open menu">
            <Menu
              className={tailwindTransitions.buttons.scale}
              sx={{ color: "text.primary", width: "2em", height: "2em" }}
            />
          </Button>
          <Drawer
            open={openDrawer}
            anchor="right"
            onClose={toggleDrawer(false)}
          >
            {DrawerList}
          </Drawer>
        </Box>
      </Box>
    </Paper>
  );
}
