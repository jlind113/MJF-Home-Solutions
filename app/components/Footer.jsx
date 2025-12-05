import { NavLink } from "react-router";
import "../app.css";
import { Box, Typography, Paper } from "@mui/material";
import { FacebookRounded } from "@mui/icons-material";

export default function Footer() {
  const services = [
    { path: "/services/DrywallInstallation", label: "Drywall Installation" },
    { path: "/services/DrywallRepair", label: "Drywall Repair" },
    { path: "/services/DrywallFinishing", label: "Drywall Finishing" },
    {
      path: "/services/CeilingTextureApplication",
      label: "Ceiling Texture Application",
    },
    { path: "/services/CustomDrywallWork", label: "Custom Drywall Work" },
    { path: "/services/Flooring", label: "Flooring" },
    { path: "/services/Carpentry", label: "Carpentry" },
  ];

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
    { day: "Sunday", time: "08:00 AM - 06:00 PM" },
    { day: "Monday", time: "09:00 AM - 05:00 PM" },
    { day: "Tuesday", time: "09:00 AM - 05:00 PM" },
    { day: "Wednesday", time: "09:00 AM - 05:00 PM" },
    { day: "Thursday", time: "09:00 AM - 05:00 PM" },
    { day: "Friday", time: "09:00 AM - 05:00 PM" },
    { day: "Saturday", time: "08:00 AM - 06:00 PM" },
  ];

  return (
    <Paper
      elevation={10}
      square={true}
      sx={{
        width: "100%",
        backgroundColor: "background.paper",
        marginTop: "auto",
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: { xs: "2rem 1rem", md: "3rem 2rem" },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(5, 1fr)",
          },
          gap: 4,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <img
            src="/Images/Logo/MJF-Logo.webp"
            alt="MJF Logo"
            style={{ width: "80px", height: "80px" }}
          />
          <Typography
            sx={{ color: "text.primary", fontWeight: 600, fontSize: "1.1rem" }}
          >
            MJF Home Solutions
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: "0.9rem" }}>
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
            sx={{
              color: "text.primary",
              fontWeight: 600,
              fontSize: "1.1rem",
              mb: 2,
            }}
          >
            Company
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <NavLink to="/">
              <Typography
                sx={{
                  color: "text.secondary",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  "&:hover": { color: "info.light" },
                }}
              >
                Home
              </Typography>
            </NavLink>
            <NavLink to="/Gallery">
              <Typography
                sx={{
                  color: "text.secondary",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  "&:hover": { color: "info.light" },
                }}
              >
                Gallery
              </Typography>
            </NavLink>
            <NavLink to="/Contact">
              <Typography
                sx={{
                  color: "text.secondary",
                  textDecoration: "none",
                  fontSize: "0.9rem",
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
            sx={{
              color: "text.primary",
              fontWeight: 600,
              fontSize: "1.1rem",
              mb: 2,
            }}
          >
            Services
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {services.map((service) => (
              <NavLink key={service.path} to={service.path}>
                <Typography
                  sx={{
                    color: "text.secondary",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    "&:hover": { color: "info.light" },
                  }}
                >
                  {service.label}
                </Typography>
              </NavLink>
            ))}
          </Box>
        </Box>

        <Box>
          <Typography
            sx={{ color: "text.primary", fontWeight: 600, fontSize: "1.1rem", mb: 2 }}
          >
            Service Areas
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {serviceAreas.map((area) => (
              <Typography
                key={area}
                sx={{ color: "text.secondary", fontSize: "0.9rem" }}
              >
                {area}
              </Typography>
            ))}
          </Box>
        </Box>

        <Box>
          <Typography
            sx={{ color: "text.primary", fontWeight: 600, fontSize: "1.1rem", mb: 2 }}
          >
            Hours
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {hours.map((hour) => (
              <Typography
                key={hour.day}
                sx={{ color: "text.secondary", fontSize: "0.9rem" }}
              >
                {hour.day}: {hour.time}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          borderTop: "1px solid",
          color: "text.primary",
          padding: "1.5rem 2rem",
          textAlign: "center",
        }}
      >
        <Typography sx={{ color: "text.secondary", fontSize: "0.9rem" }}>
          © {new Date().getFullYear()} MJF Home Solutions. All rights reserved.
        </Typography>
      </Box>
    </Paper>
  );
}
