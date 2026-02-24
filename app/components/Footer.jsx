import { Box, Typography, Paper } from "@mui/material";
import GitHub from "@mui/icons-material/GitHub";
import { NavLink } from "react-router";
import "../app.css";
import { hoverAnims } from "../Style/Animations";
import { serviceAreas, hours, contactInfo } from "../Util/CompanyInfo";
import FacebookLink from "./FacebookLink";

function CompanyLink({ link, text }) {
  return (
    <Box sx={style.pageLink}>
      <NavLink to={link} style={{ width: "fit-content" }}>
        <Typography variant="body2" sx={style.linkText}>
          {text}
        </Typography>
      </NavLink>
    </Box>
  );
}

function HeaderItem({ text }) {
  return (
    <Typography variant="h4" sx={style.header}>
      {text}
    </Typography>
  );
}

function ListItem({ text }) {
  return (
    <Typography variant="body2" sx={style.listItems}>
      {text}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Paper square variant="outlined" sx={style.footerRoot}>
      <Box sx={style.footerContainer}>
        <Box sx={style.columnOneContainer}>
          <img
            src="/Photos/Logos/Logo-1-100x100.webp"
            alt="MJF Logo"
            style={style.logo}
          />
          <HeaderItem text={"MJF Home Solutions"} />
          <ListItem text={"Bountiful, UT, US"} />
          <FacebookLink />
        </Box>

        <Box>
          <HeaderItem text={"Company"} />
          <Box sx={style.linkContainer}>
            <CompanyLink link={"/"} text={"Home"} />
            <CompanyLink link={"/Gallery"} text={"Gallery"} />
            <CompanyLink link={"/Services"} text={"Services"} />
            <CompanyLink link={"/Contact"} text={"Contact Us"} />
          </Box>
        </Box>

        <Box>
          <HeaderItem text={"Service Areas"} />
          <Box sx={style.areaContainer}>
            {serviceAreas.map((area) => (
              <Box key={area}>
                <ListItem text={area} />
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <HeaderItem text={"Hours"} />
          <Box sx={style.hourHeader}>
            {hours.map((hour) => (
              <Box key={hour.day}>
                <ListItem text={`${hour.day}` + ": " + `${hour.time}`} />
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <HeaderItem text={"Contact"} />
          <Box sx={style.contactContainer}>
            <ListItem text={"Call: " + `${contactInfo.phone}`} />
            <ListItem text={"Email: " + `${contactInfo.email}`} />
          </Box>
        </Box>
      </Box>

      <Box sx={style.footerSubContainer}>
        <Typography variant="subtitle2" sx={style.copyrightText}>
          © 2026 MJF Home Solutions. All rights reserved.
        </Typography>
        <Typography variant="subtitle2" sx={style.designerContainer}>
          Designed by: Jack Lindgren
          <a
            href="https://github.com/jlind113"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub sx={style.githubIcon} />
          </a>
        </Typography>
      </Box>
    </Paper>
  );
}

const style = {
  pageLink: {
    width: "100%",
    display: "flex",
    flexDirection: { xs: "row", md: "column" },
    justifyContent: "center",
  },
  linkText: {
    width: "fit-content",
    color: "text.secondary",
    ...hoverAnims.linkHover,
  },
  linkContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
  header: {
    color: "text.primary",
    fontSize: "1.2rem",
    marginBottom: 2,
  },
  listItems: {
    color: "text.secondary",
  },
  footerRoot: {
    width: "100%",
    backgroundColor: "background.navbar",
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderTopColor: "secondary.light",
    marginTop: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: { xs: "center", md: "left" },
  },
  footerContainer: {
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
  },
  columnOneContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    alignItems: { xs: "center", md: "flex-start" },
  },
  logo: {
    width: "100px",
    height: "100px",
  },
  areaContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
  hourHeader: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
  footerSubContainer: {
    borderTopWidth: 1,
    borderStyle: "solid",
    color: "text.primary",
    padding: "1.5rem 2rem",
    textAlign: "center",
  },
  copyrightText: {
    color: "text.secondary",
    fontSize: "0.9rem",
  },
  designerContainer: {
    color: "text.secondary",
    fontSize: "0.9rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 1,
  },
  githubIcon: {
    cursor: "pointer",
    ...hoverAnims.scale,
  },
};
