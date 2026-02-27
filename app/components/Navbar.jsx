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
    <Box role="presentation" sx={style.drawerListBox}>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.destination} sx={style.drawerListItem}>
            <ListItemButton
              onClick={toggleDrawer(false)}
              sx={style.drawerListButton}
            >
              <NavLink to={link.destination} style={style.drawerNavLink}>
                <Typography
                  variant="button"
                  color={checkLocation(link.destination, location)}
                  sx={style.drawerTypography}
                >
                  {link.text}
                </Typography>
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem style={style.drawerIconListItem}>
          <IconButton
            onClick={handleThemeToggle}
            aria-label="Toggle theme"
            sx={style.drawerIconButton}
          >
            <ThemeIcon sx={style.drawerThemeIcon} />
          </IconButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Paper square variant="outlined" sx={style.rootPaper}>
      <Box sx={style.rootBox}>
        <Box sx={style.brandRootBox}>
          <NavLink to={"/"}>
            <img
              src="/Photos/Logos/Logo-2-250x150.webp"
              alt="MJF Home Solutions Logo"
              style={style.logo}
            />
          </NavLink>
          <Box sx={style.brandBox}>
            <span>
              <Typography variant="h4" sx={style.brandText}>
                MJF Home Solutions
              </Typography>
            </span>
          </Box>
        </Box>

        <Box sx={style.navLinkBox}>
          {navLinks.map((link) => (
            <Button key={link.destination} sx={style.navLinkButton}>
              <NavLink to={link.destination}>
                <Typography
                  variant="button"
                  color={checkLocation(link.destination, location)}
                  sx={style.navLinkText}
                >
                  {link.text}
                </Typography>
              </NavLink>
            </Button>
          ))}

          <IconButton
            aria-label="Toggle theme"
            onClick={handleThemeToggle}
            sx={style.themeIconButton}
          >
            <ThemeIcon sx={style.themeIcon} />
          </IconButton>
        </Box>

        <Box sx={style.toggleBox}>
          <Button onClick={toggleDrawer(true)} aria-label="Open menu">
            <Menu sx={style.toggleMenu} />
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

const style = {
  drawerListBox: {
    width: { xs: "70vw", sm: "50vw" },
  },
  drawerListItem: {
    marginTop: "2vh",
  },
  drawerListButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    ...hoverAnims.drawerLink,
  },
  drawerNavLink: {
    height: 0,
  },
  drawerTypography: {
    fontSize: "0.95rem",
    cursor: "pointer",
    ...hoverAnims.linkHover,
  },
  drawerIconListItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "2vh",
  },
  drawerIconButton: {
    "&:hover": { backgroundColor: "transparent" },
  },
  drawerThemeIcon: {
    color: "text.primary",
    width: "2rem",
    height: "2rem",
    ...hoverAnims.themeIcon,
  },
  rootPaper: {
    width: "100%",
    backgroundColor: "background.navbar",
    position: "sticky",
    zIndex: 1000,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "secondary.main",
  },
  rootBox: {
    maxWidth: "80vw",
    margin: "auto",
    paddingY: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brandRootBox: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
  logo: {
    height: "75px",
  },
  brandBox: {
    display: { xs: "none", lg: "block" },
  },
  brandText: {
    color: "text.primary",
  },
  navLinkBox: {
    display: { xs: "none", md: "flex" },
    gap: 3,
    alignItems: "center",
  },
  navLinkButton: {
    ...hoverAnims.scale,
    padding: 0,
    backgroundColor: "transparent",
  },
  navLinkText: {
    fontSize: "1.1rem",
    cursor: "pointer",
    ...hoverAnims.linkHover,
  },
  themeIconButton: {
    "&:hover": { backgroundColor: "transparent" },
  },
  themeIcon: {
    color: "text.primary",
    width: "2rem",
    height: "2rem",
    ...hoverAnims.themeIcon,
  },
  toggleBox: {
    display: { xs: "block", md: "none" },
  },
  toggleMenu: {
    ...hoverAnims.scale,
    color: "text.primary",
    width: "2em",
    height: "2em",
  },
};
