// MUI Imports
import {
  Box,
  Typography,
  Stack,
  Paper,
} from "@mui/material";

import { SlickAuto } from "../components/Carousel";
import CTASmall from "./CTASmall";
import { cardEntranceStyles } from '../Style/Animations';
import GradientDivider from "./GradientDivider";


export default function HomeHero() {
  const carouselImages = [
    "/Photos/Hero/Animal-Shelter.webp",
    "/Photos/Hero/Drywall.webp",
    "/Photos/Hero/Kitchen-Cabetry.webp",
    "/Photos/Hero/Kitchen-Frame.webp",
    "/Photos/Hero/Shelving.webp",
    "/Photos/Hero/Stairs.webp",
  ];

  return (
    <Paper
      square
      variant="outlined"
      sx={{
        width: "100%",
        backgroundColor: "background.light",
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 1,
        ...cardEntranceStyles.fadeUpOnMount,
      }}
    >
      <Stack
        direction={{ xs: "column", lg: "row" }}
      >
        <Box
          sx={{
            width: { xs: "100%", lg: "40%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingX: "2vw",
            paddingY: { xs: "2vh", lg: 0 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "text.primary",
              textAlign: "center",
              fontWeight: 700,
              fontSize: { xs: "2.2rem", sm: "3.2rem" },
              textWrap: "nowrap",
              marginY: "1vh",
            }}
          >
            MJF Home Solutions
          </Typography>

          <GradientDivider />

          <Typography
            variant="body1"
            sx={{
              color: "text.primary",
              textAlign: "center",
              fontSize: { xs: "1.1rem", sm: "1.2rem", lg: "1.3rem" },
              fontWeight: 400,
              lineHeight: 1.8,
              marginY: "1vh",
              maxWidth: 520,
            }}
          >
            Premier drywall experts serving the Bountiful area with exceptional
            installation, repair services, and customer satisfaction for over a
            decade.
          </Typography>

          <Box>
            <CTASmall />
          </Box>

        </Box>
        <Box
          sx={{
            width: {xs: "100%", lg: "60%" },
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <SlickAuto images={carouselImages} />
        </Box>
      </Stack>
    </Paper>
  );
}
