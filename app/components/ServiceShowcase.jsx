import { Typography, Stack, Box, Grid, Divider } from "@mui/material";

import ServiceCard from "./ServiceCard";
import { entranceAnims } from "../Style/Animations";
import { NavLink } from "react-router";
import { services } from "../Util/ServiceInfo";

export default function ServiceShowcase() {
  function ShowcaseItem(image, text, alt) {
    return (
      <Grid
        size={{ xs: 12, md: 6, lg: 4 }}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            ...entranceAnims.fadeUpOnMount,
          }}
        >
          <NavLink
            to={"/Services"}
            style={{ textDecoration: "none", width: "100%" }}
          >
            <ServiceCard imgSource={image} serviceText={text} alt={alt} />
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
          {ShowcaseItem(
            services.carpentry.images[0].path,
            services.carpentry.name,
            services.carpentry.images[0].alt,
          )}
          {ShowcaseItem(
            services.ceiling.images[0].path,
            services.ceiling.name,
            services.ceiling.images[0].alt,
          )}
          {ShowcaseItem(
            services.custom.images[0].path,
            services.custom.name,
            services.custom.images[0].alt,
          )}
          {ShowcaseItem(
            services.finishing.images[0].path,
            services.finishing.name,
            services.finishing.images[0].alt,
          )}
          {ShowcaseItem(
            services.installation.images[0].path,
            services.installation.name,
            services.installation.images[0].alt,
          )}
          {ShowcaseItem(
            services.flooring.images[0].path,
            services.flooring.name,
            services.flooring.images[0].alt,
          )}
        </Grid>
      </Stack>
    </Box>
  );
}
