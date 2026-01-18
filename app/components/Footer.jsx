// MUI Imports
import { Box, Typography, Paper } from "@mui/material";
import FacebookRounded from "@mui/icons-material/FacebookRounded";
import GitHub from "@mui/icons-material/GitHub";

import { NavLink } from "react-router";
import "../app.css";
import { hoverAnims } from "../Style/Animations";
import { serviceAreas, hours, contactInfo } from "../Util/CompanyInfo";

export default function Footer() {
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
          >
            <FacebookRounded
              sx={{
                color: "info.dark",
                fontSize: 40,
                cursor: "pointer",
                ...hoverAnims.facebookIcon,
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
              marginBottom: 2,
            }}
          >
            Company
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <NavLink to="/" style={{ width: "fit-content" }}>
              <Typography
                variant="body2"
                sx={{
                  width: "fit-content",
                  color: "text.secondary",
                  ...hoverAnims.linkHover,
                }}
              >
                Home
              </Typography>
            </NavLink>
            <NavLink to="/Gallery" style={{ width: "fit-content" }}>
              <Typography
                variant="body2"
                sx={{
                  width: "fit-content",
                  color: "text.secondary",
                  ...hoverAnims.linkHover,
                }}
              >
                Gallery
              </Typography>
            </NavLink>
            <NavLink to={"/Services"} style={{ width: "fit-content" }}>
              <Typography
                variant="body2"
                sx={{
                  width: "fit-content",
                  color: "text.secondary",
                  ...hoverAnims.linkHover,
                }}
              >
                Services
              </Typography>
            </NavLink>
            <NavLink to="/Contact" style={{ width: "fit-content" }}>
              <Typography
                variant="body2"
                sx={{
                  width: "fit-content",
                  color: "text.secondary",
                  ...hoverAnims.linkHover,
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
              marginBottom: 2,
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
              marginBottom: 2,
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
              Call: {contactInfo.phone}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
              }}
            >
              Email: {contactInfo.email}
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
          © 2026 MJF Home Solutions. All rights reserved.
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
          <a
            href="https://github.com/jlind113"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub
              sx={{
                cursor: "pointer",
                ...hoverAnims.scale,
              }}
            />
          </a>
        </Typography>
      </Box>
    </Paper>
  );
}
