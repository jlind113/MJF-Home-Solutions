import { Box, Typography, Paper } from "@mui/material";
import GitHub from "@mui/icons-material/GitHub";
import { NavLink } from "react-router";
import "../app.css";
import { hoverAnims } from "../Style/Animations";
import { serviceAreas, hours, contactInfo } from "../Util/CompanyInfo";
import FacebookLink from './FacebookLink';

function CompanyLink({link, text}) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "row", md: "column" },
        justifyContent: "center",
      }}
    >
      <NavLink to={link} style={{ width: "fit-content" }}>
        <Typography
          variant="body2"
          sx={{
            width: "fit-content",
            color: "text.secondary",
            ...hoverAnims.linkHover,
          }}
        >
          {text}
        </Typography>
      </NavLink>
    </Box>
  )
};

function HeaderItem({text}) {
  return (
    <Typography
      variant="h4"
      sx={{
        color: "text.primary",
        fontSize: "1.2rem",
        marginBottom: 2,
      }}
    >
      {text}
    </Typography>
  );
};

function ListItem({text}) {
  return (
    <Typography
      variant="body2"
      sx={{
        color: "text.secondary",
      }}
    >
      {text}
    </Typography>
  );
};

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
          <HeaderItem text={"MJF Home Solutions"} />
          <ListItem text={"Bountiful, UT, US"} />
          <FacebookLink />
        </Box>

        <Box>
          <HeaderItem text={"Company"} />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <CompanyLink link={"/"} text={"Home"} />
            <CompanyLink link={"/Gallery"} text={"Gallery"} />
            <CompanyLink link={"/Services"} text={"Services"} />
            <CompanyLink link={"/Contact"} text={"Contact Us"} />
          </Box>
        </Box>

        <Box>
          <HeaderItem text={"Service Areas"} />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {serviceAreas.map((area) => (
              <Box key={area}>
                <ListItem text={area} />
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <HeaderItem text={"Hours"} />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {hours.map((hour) => (
              <Box key={hour.day}>
                <ListItem text={`${hour.day}` + ": " + `${hour.time}`} />
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <HeaderItem text={"Contact"} />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <ListItem text={"Call: " + `${contactInfo.phone}`} />
            <ListItem text={"Email: " + `${contactInfo.email}`} />
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
