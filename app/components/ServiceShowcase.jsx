import { Typography, Stack, Box, Grid } from "@mui/material";
import ServiceCard from "./ServiceCard";
import { entranceAnims } from "../Style/Animations";
import { NavLink } from "react-router";
import { services } from "../Util/ServiceInfo";
import Header from "./textItems/Header";
import GradientDivider from "./GradientDivider";

function ShowcaseItem({ image, text, alt }) {
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

export default function ServiceShowcase() {
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
          <Header text={"Our Services"} />
          <GradientDivider />
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
          <ShowcaseItem
            image={services.carpentry.images[0].path}
            text={services.carpentry.name}
            alt={services.carpentry.images[0].alt}
          />
          <ShowcaseItem
            image={services.ceiling.images[0].path}
            text={services.ceiling.name}
            alt={services.ceiling.images[0].alt}
          />
          <ShowcaseItem
            image={services.custom.images[0].path}
            text={services.custom.name}
            alt={services.custom.images[0].alt}
          />
          <ShowcaseItem
            image={services.finishing.images[0].path}
            text={services.finishing.name}
            alt={services.finishing.images[0].alt}
          />
          <ShowcaseItem
            image={services.installation.images[0].path}
            text={services.installation.name}
            alt={services.installation.images[0].alt}
          />
          <ShowcaseItem
            image={services.flooring.images[0].path}
            text={services.flooring.name}
            alt={services.flooring.images[0].alt}
          />
        </Grid>
      </Stack>
    </Box>
  );
}
