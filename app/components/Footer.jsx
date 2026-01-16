// MUI Imports
import { Box, Typography, Paper } from "@mui/material";
import FacebookRounded from "@mui/icons-material/FacebookRounded";
import GitHub from "@mui/icons-material/GitHub";

import { Link, NavLink } from "react-router";
import "../app.css";

export default function Footer() {
  const serviceAreas = [
    "Ogden, UT",
    "Layton, UT",
    "Bountiful, UT",
    "Roy, UT",
    "Clearfield, UT",
    "Kaysville, UT",
    "Syracuse, UT",
    "Farmington, UT",
    "Clinton, UT",
    "North Salt Lake, UT",
  ];

  const hours = [
    { day: "Sun", time: "09:00 AM - 9:00 PM" },
    { day: "Mon", time: "09:00 AM - 05:00 PM" },
    { day: "Tue", time: "09:00 AM - 05:00 PM" },
    { day: "Wed", time: "09:00 AM - 05:00 PM" },
    { day: "Thu", time: "09:00 AM - 05:00 PM" },
    { day: "Fri", time: "09:00 AM - 05:00 PM" },
    { day: "Sat", time: "09:00 AM - 05:00 PM" },
  ];

  return (
    <Paper
      square
      variant="outlined"
      sx={{
        width: "100%",
        backgroundColor: "background.dark",
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderTopColor: "secondary.light",
        marginTop: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: { xs: "2rem 1rem", md: "3rem 1rem" },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(5, 1fr)",
          },
          gap: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <img
            src="/Photos/Logos/Logo-1-100x100.webp"
            alt="MJF Logo"
            style={{ width: "100px", height: "100px" }}
          />
          <Typography
            variant="h4"
            sx={{ color: "text.primary", fontSize: "1.1rem" }}
          >
            MJF Home Solutions
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontSize: "0.9rem" }}
          >
            Bountiful, UT, US
          </Typography>
          <a
            href="https://www.facebook.com/profile.php?id=100063689374404"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: "fit-content" }}
          >
            <FacebookRounded
              sx={{
                color: "info.main",
                fontSize: 40,
                cursor: "pointer",
                transition: "color 0.2s",
                "&:hover": { color: "info.light" },
              }}
            />
          </a>
        </Box>

        <Box>
          <Typography
            variant="h4"
            sx={{
              color: "text.primary",
              fontSize: "1.2rem",
              mb: 2,
            }}
          >
            Company
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <NavLink to="/">
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "info.light" },
                }}
              >
                Home
              </Typography>
            </NavLink>
            <NavLink to="/Gallery">
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "info.light" },
                }}
              >
                Gallery
              </Typography>
            </NavLink>
            <NavLink to={"/Services"}>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "info.light" },
                }}
              >
                Services
              </Typography>
            </NavLink>
            <NavLink to="/Contact">
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "info.light" },
                }}
              >
                Contact Us
              </Typography>
            </NavLink>
          </Box>
        </Box>

        <Box>
          <Typography
            variant="h4"
            sx={{
              color: "text.primary",
              fontSize: "1.2rem",
              mb: 2,
            }}
          >
            Service Areas
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {serviceAreas.map((area) => (
              <Typography
                key={area}
                variant="body2"
                sx={{
                  color: "text.secondary",
                }}
              >
                {area}
              </Typography>
            ))}
          </Box>
        </Box>

        <Box>
          <Typography
            variant="h4"
            sx={{
              color: "text.primary",
              fontSize: "1.2rem",
              mb: 2,
            }}
          >
            Hours
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {hours.map((hour) => (
              <Typography
                key={hour.day}
                variant="body2"
                sx={{
                  color: "text.secondary",
                }}
              >
                {hour.day}: {hour.time}
              </Typography>
            ))}
          </Box>
        </Box>

        <Box>
          <Typography
            variant="h4"
            sx={{
              color: "text.primary",
              fontSize: "1.2rem",
              mb: 2,
            }}
          >
            Contact
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
              }}
            >
              Call: 801-555-5555
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
              }}
            >
              Email: Mattford51@yahoo.com
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          borderTopWidth: 1,
          borderStyle: "solid",
          color: "text.primary",
          padding: "1.5rem 2rem",
          textAlign: "center",
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ color: "text.secondary", fontSize: "0.9rem" }}
        >
          © {new Date().getFullYear()} MJF Home Solutions. All rights reserved.
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            color: "text.secondary",
            fontSize: "0.9rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          Designed by: Jack Lindgren
          <Link to={"https://github.com/jlind113"}>
            <GitHub />
          </Link>
        </Typography>
      </Box>
    </Paper>
  );
}
