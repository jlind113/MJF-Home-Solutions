import { Typography, Stack, Box, Grid, Divider } from "@mui/material";

import ServiceCard from "./ServiceCard";
import { cardEntranceStyles } from "../Style/Animations";
import { NavLink } from "react-router";

export default function ServiceShowcase() {
  const serviceRowOne = [
    {
      id: "drywall-installation",
      image: "/Photos/1100x800/Lightbox (1).webp",
      text: "Drywall Installation",
    },
    {
      id: "drywall-repair",
      image: "/Photos/1100x800/Lightbox (2).webp",
      text: "Drywall Repair",
    },
    {
      id: "drywall-finishing",
      image: "/Photos/1100x800/Lightbox (3).webp",
      text: "Drywall Finishing",
    },
  ];

  const serviceRowTwo = [
    {
      id: "ceiling-texture",
      image: "/Photos/1100x800/Lightbox (5).webp",
      text: "Ceiling Texture Application",
    },
    {
      id: "custom-drywall",
      image: "/Photos/1100x800/Lightbox (6).webp",
      text: "Custom Drywall Work",
    },
    {
      id: "flooring",
      image: "/Photos/1100x800/Lightbox (8).webp",
      text: "Flooring",
    },
  ];

  const allServices = [...serviceRowOne, ...serviceRowTwo];

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
            ...cardEntranceStyles.fadeUpOnMount,
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

        <Box sx={{ width: "100%", maxWidth: 1200 }}>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Stack
              direction="row"
              spacing={3}
              justifyContent="center"
              sx={{ marginBottom: 3 }}
            >
              {serviceRowOne.map((service, index) => (
                <Box
                  key={service.id}
                  sx={{
                    ...cardEntranceStyles.staggeredFadeUp(index),
                    flex: "1 1 auto",
                    maxWidth: 350,
                  }}
                >
                  <NavLink to="/Services" style={{ textDecoration: "none" }}>
                    <ServiceCard
                      imgSource={service.image}
                      serviceText={service.text}
                    />
                  </NavLink>
                </Box>
              ))}
            </Stack>

            <Stack direction="row" spacing={3} justifyContent="center">
              {serviceRowTwo.map((service, index) => (
                <Box
                  key={service.id}
                  sx={{
                    ...cardEntranceStyles.staggeredFadeUp(index + 3),
                    flex: "1 1 auto",
                    maxWidth: 350,
                  }}
                >
                  <NavLink to="/Services" style={{ textDecoration: "none" }}>
                    <ServiceCard
                      imgSource={service.image}
                      serviceText={service.text}
                    />
                  </NavLink>
                </Box>
              ))}
            </Stack>
          </Box>

          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Grid container spacing={{ xs: 2, sm: 3 }} justifyContent="center">
              {allServices.map((service, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  key={service.id}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    ...cardEntranceStyles.staggeredFadeUp(index),
                  }}
                >
                  <NavLink
                    to="/Services"
                    style={{ textDecoration: "none", width: "100%" }}
                  >
                    <ServiceCard
                      imgSource={service.image}
                      serviceText={service.text}
                    />
                  </NavLink>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        <Box
          sx={{
            textAlign: "center",
            marginTop: { xs: 2, sm: 3 },
            ...cardEntranceStyles.fadeUpOnMount,
            animationDelay: "0.8s",
            animationFillMode: "both",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "0.9rem", sm: "1rem" },
              fontStyle: "italic",
            }}
          >
            Click any service to learn more about our expertise
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
