import { useState } from "react";
import { NavLink } from "react-router";
import "../app.css";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Divider,
  IconButton,
  Typography,
  Paper,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import NavButton from "./NavButton";

export default function Navbar({ SwapTheme, ThemeIcon }) {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (newState) => () => {
    setOpenDrawer(newState);
  };

  const DrawerList = (
    <Box
      sx={{ width: 280, backgroundColor: "background.paper" }}
      role="presentation"
    >
      <List>
        <ListItem>
          <ListItemButton onClick={toggleDrawer(false)} sx={{ paddingLeft: 2 }}>
            <NavLink to="/">
              <Typography
                sx={{ color: "text.primary", textDecoration: "none" }}
              >
                Home
              </Typography>
            </NavLink>
          </ListItemButton>
        </ListItem>
        <Divider sx={{ backgroundColor: "text.disabled" }} />

        <ListItem>
          <ListItemButton onClick={toggleDrawer(false)} sx={{ paddingLeft: 2 }}>
            <NavLink to="/Gallery">
              <Typography
                sx={{ color: "text.primary", textDecoration: "none" }}
              >
                Gallery
              </Typography>
            </NavLink>
          </ListItemButton>
        </ListItem>
        <Divider sx={{ backgroundColor: "text.disabled" }} />

        <ListItem>
          <ListItemButton onClick={toggleDrawer(false)} sx={{ paddingLeft: 2 }}>
            <NavLink to="/Services">
              <Typography
                sx={{ color: "text.primary", textDecoration: "none" }}
              >
                Services
              </Typography>
            </NavLink>
          </ListItemButton>
        </ListItem>
        <Divider sx={{ backgroundColor: "text.disabled" }} />

        <ListItem>
          <ListItemButton onClick={toggleDrawer(false)} sx={{ paddingLeft: 2 }}>
            <NavLink to="/Contact">
              <Typography
                sx={{
                  color: "white",
                  textDecoration: "none",
                  fontFamily: "Montserrat",
                  fontWeight: 510,
                }}
              >
                Contact Us
              </Typography>
            </NavLink>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <IconButton onClick={() => SwapTheme()}>
            <ThemeIcon sx={{ color: "text.primary" }} />
          </IconButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Paper
      elevation={4}
      square={true}
      sx={{
        width: "100%",
        backgroundColor: "background.paper",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "1rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img
            src="/Images/Logo/MJF-Logo-2.png"
            alt="MJF Logo"
            style={{ height: "60px" }}
          />
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <span>
              <Typography
                sx={{
                  color: "text.primary",
                  fontSize: "2rem",
                  fontWeight: 500,
                  fontFamily: "DM Serif Text",
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
          <NavButton link={"/"} text={"Home"} />
          <NavButton link={"/Services"} text={"Services"} />
          <NavButton link={"/Gallery"} text={"Gallery"} />
          <NavButton link={"/Contact"} text={"Contact Us"} />
          <IconButton onClick={() => SwapTheme()}>
            <ThemeIcon sx={{ color: "text.primary", width: 32, height: 32 }} />
          </IconButton>
        </Box>

        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Button onClick={toggleDrawer(true)} aria-label="Open menu">
            <Menu
              sx={{ color: "background.paper", width: 32, height: 32 }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
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
