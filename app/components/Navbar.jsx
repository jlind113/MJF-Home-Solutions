// MUI Imports
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  IconButton,
  Typography,
  Paper,
  useColorScheme,
} from "@mui/material";

// MUI Icons Imports
import Menu from "@mui/icons-material/Menu";
import LightMode from "@mui/icons-material/LightMode";
import DarkMode from "@mui/icons-material/DarkMode";

import { useState } from "react";
import { NavLink, useLocation } from "react-router";
import "../app.css";
import { hoverAnims } from "../Style/Animations";

function checkLocation(link, location) {
  if (link === location.pathname) {
    return "primary.light";
  } else {
    return "text.primary";
  }
}

export default function Navbar() {
  const { mode, setMode } = useColorScheme();
  const location = useLocation();
  const [openDrawer, setOpenDrawer] = useState(false);
  
  // Change color theme
  const handleThemeToggle = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  
  // Change nav drawer open and close state
  const toggleDrawer = (newState) => () => {
    setOpenDrawer(newState);
  };
  
  // Change icon for the color theme button
  const ThemeIcon = mode === "light" ? LightMode : DarkMode;

  // Early return if there's no mode available. Prevents SSR issues
  if (!mode) {
    return null;
  }

  const navLinks = [
    { destination: "/", text: "Home" },
    { destination: "/Gallery", text: "Gallery" },
    { destination: "/Services", text: "Services" },
    { destination: "/Contact", text: "Contact Us" },
  ];

  const DrawerList = (
    <Box role="presentation" sx={{ width: { xs: "70vw", sm: "50vw" } }}>
      <List>
        {navLinks.map((link) => (
          <ListItem
            key={link.destination}
            sx={{ marginTop: "2vh"}}
          >
            <ListItemButton
              onClick={toggleDrawer(false)}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                ...hoverAnims.drawerLink,
              }}
            >
              <NavLink to={link.destination} style={{ height: 0 }}>
                <Typography
                  variant="button"
                  color={checkLocation(link.destination, location)}
                  sx={{
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    ...hoverAnims.linkHover,
                  }}
                >
                  {link.text}
                </Typography>
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "2vh"
          }}
        >
          <IconButton
            onClick={handleThemeToggle}
            sx={{ "&:hover": { backgroundColor: "transparent" } }}
          >
            <ThemeIcon
              sx={{
                color: "text.primary",
                width: "2rem",
                height: "2rem",
                ...hoverAnims.themeIcon,
              }}
            />
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <NavLink to={"/"}>
            <img
              src="/Photos/Logos/Logo-2-250x150.webp"
              alt="MJF Home Solutions Logo"
              style={{ height: "75px" }}
            />
          </NavLink>
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <span>
              <Typography
                variant="h4"
                sx={{
                  color: "text.primary"
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
          {navLinks.map((link) => (
            <Button
              key={link.destination}
              sx={{
                ...hoverAnims.scale,
                padding: 0,
                backgroundColor: "transparent",
              }}
            >
              <NavLink to={link.destination}>
                <Typography
                  variant="button"
                  color={checkLocation(link.destination, location)}
                  sx={{
                    fontSize: "1.1rem",
                    cursor: "pointer",
                    ...hoverAnims.linkHover
                  }}
                >
                  {link.text}
                </Typography>
              </NavLink>
            </Button>
          ))}

          <IconButton
            onClick={handleThemeToggle}
            sx={{ "&:hover": { backgroundColor: "transparent" } }}
          >
            <ThemeIcon
              sx={{
                color: "text.primary",
                width: "2rem",
                height: "2rem",
                ...hoverAnims.themeIcon,
              }}
            />
          </IconButton>
        </Box>

        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Button onClick={toggleDrawer(true)} aria-label="Open menu">
            <Menu
              sx={{
                ...hoverAnims.scale,
                color: "text.primary",
                width: "2em",
                height: "2em",
              }}
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
