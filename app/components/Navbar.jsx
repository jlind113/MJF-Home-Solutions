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
  useTheme
} from "@mui/material";

// MUI Icons Imports
import Menu from "@mui/icons-material/Menu";

import { useState } from "react";
import { NavLink, useLocation } from "react-router";
import "../app.css";
import { buttonHoverStyles, cardEntranceStyles } from "../Style/Animations";

function checkLocation(link) {
  const location = useLocation();
  if (link === location.pathname) {
    return "primary.light";
  } else {
    return "text.primary";
  }
}

export default function Navbar({ SwapTheme, ThemeIcon }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = (newState) => () => {
    setOpenDrawer(newState);
  };
  const navLinks = [
    { destination: "/", text: "Home" },
    { destination: "/Gallery", text: "Gallery" },
    { destination: "/Services", text: "Services" },
    { destination: "/Contact", text: "Contact Us" },
  ];
  const theme = useTheme();
  let label = theme.palette.mode;

  const DrawerList = (
    <Box role="presentation" sx={{ width: { xs: "70vw", sm: "50vw" } }}>
      <List>
        {navLinks.map((link, index) => (
          <ListItem>
            <ListItemButton
              onClick={toggleDrawer(false)}
              sx={{
                ...cardEntranceStyles.staggeredFadeUp(index),
                ...buttonHoverStyles.scale,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <NavLink to={link.destination}>
                <Typography
                  variant="button"
                  color={checkLocation(link.destination)}
                  sx={{
                    fontWeight: 550,
                    fontSize: "0.95rem",
                    cursor: "pointer",
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
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <IconButton
            onClick={() => SwapTheme()}
            sx={{ ...buttonHoverStyles.scale, width: "3rem", height: "3rem" }}
          >
            <ThemeIcon
              sx={{
                color: "text.primary",
                width: "2rem",
                height: "3rem",
                "&:hover": { color: "text.secondary" },
              }}
            />
          </IconButton>
          <Typography variant="subtitle2">
            {label.charAt(0).toUpperCase() + label.slice(1)} mode
          </Typography>
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
            ...cardEntranceStyles.fadeUpOnMount,
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
          {navLinks.map((link) => (
            <Button
              key={link.destination}
              sx={{
                ...buttonHoverStyles.scale,
                padding: 0,
              }}
            >
              <NavLink to={link.destination}>
                <Typography
                  variant="button"
                  color={checkLocation(link.destination)}
                  sx={{
                    fontWeight: 550,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                  }}
                >
                  {link.text}
                </Typography>
              </NavLink>
            </Button>
          ))}

          <IconButton
            onClick={() => SwapTheme()}
            sx={{ ...buttonHoverStyles.scale }}
          >
            <ThemeIcon
              sx={{ color: "text.primary", width: "2rem", height: "2rem" }}
            />
          </IconButton>
        </Box>

        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Button onClick={toggleDrawer(true)} aria-label="Open menu">
            <Menu
              sx={{
                ...buttonHoverStyles.scale,
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
