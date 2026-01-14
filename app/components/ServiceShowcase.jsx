import { Typography, Stack, Box, Grid, Divider } from "@mui/material";

import ServiceCard from "./ServiceCard";
import { cardEntranceStyles } from "../Style/Animations";
import { NavLink } from "react-router";

export default function ServiceShowcase() {
  const services = [
    {
      id: "drywall-installation",
      image: "/Photos/1100x800/Lightbox (1).webp",
      text: "Drywall Installation",
    },
    {
      id: "ceiling-texture",
      image: "/Photos/1100x800/Lightbox (2).webp",
      text: "Ceiling Texture Application",
    },
    {
      id: "drywall-finishing",
      image: "/Photos/1100x800/Lightbox (3).webp",
      text: "Drywall Finishing",
    },
    {
      id: "drywall-repair",
      image: "/Photos/1100x800/Lightbox (5).webp",
      text: "Drywall Repair",
    },
    {
      id: "custom-drywall",
      image: "/Photos/1100x800/Lightbox (6).webp",
      text: "Custom Drywall Work",
    },
    {
      id: "carpentry",
      image: "/Photos/1100x800/Lightbox (8).webp",
      text: "Carpentry",
    },
  ];

  function ShowcaseItem(image, text) {
    return (
      <Grid
        size={{ xs: 12, md: 6, lg: 4 }}
        sx={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Box
          sx={{
            ...cardEntranceStyles.fadeUpOnMount,
          }}
        >
          <NavLink
            to={"/Services"}
            style={{ textDecoration: "none", width: "100%" }}
          >
            <ServiceCard imgSource={image} serviceText={text} />
          </NavLink>
        </Box>
      </Grid>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        paddingY: { xs: 3, sm: 4, md: 6 },
        paddingX: { xs: 2, sm: 3, md: 4 },
        backgroundColor: "background.main",
      }}
    >
      <Stack
        direction="column"
        spacing={{ xs: 3, sm: 4, md: 5 }}
        alignItems="center"
      >
        <Box
          sx={{
            textAlign: "center",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "text.primary",
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              marginBottom: 1,
              position: "relative",
            }}
          >
            Our Services
          </Typography>
          <Divider
            sx={{
              width: { xs: "80%", lg: "100%" },
              height: 2,
              background:
                "linear-gradient(90deg, transparent, #cc5a28, #29a2ff, transparent)",
              borderRadius: 2,
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "1rem", sm: "1.1rem" },
              maxWidth: 600,
              marginTop: 2,
            }}
          >
            Professional construction services tailored to meet your residential
            and commercial needs
          </Typography>
        </Box>

        <Grid
          container
          spacing={2}
          sx={{ width: "100%", maxWidth: 1200 }}
          justifyContent="center"
        >
          {ShowcaseItem(services[0].image, services[0].text)}
          {ShowcaseItem(services[1].image, services[1].text)}
          {ShowcaseItem(services[2].image, services[2].text)}
          {ShowcaseItem(services[3].image, services[3].text)}
          {ShowcaseItem(services[4].image, services[4].text)}
          {ShowcaseItem(services[5].image, services[5].text)}
        </Grid>
      </Stack>
    </Box>
  );
}
