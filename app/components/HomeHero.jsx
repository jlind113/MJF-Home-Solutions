// MUI Imports
import {
  Box,
  Typography,
  Stack,
  Divider,
  Paper,
} from "@mui/material";
import { keyframes } from "@mui/system";

import { SlickAuto } from "../components/Carousel";
import CTASmall from "./CTASmall";
import { cardEntranceStyles } from '../Style/Animations';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

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
        height: "100%",
        backgroundColor: "background.light",
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 1,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2329a2ff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          zIndex: 0,
        },
      }}
    >
      <Stack
        direction={{ xs: "column", lg: "row" }}
        sx={{
          width: "100%",
          height: "100%",
          justifyContent: "space-around",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            ...cardEntranceStyles.fadeUpOnMount,
            width: { xs: "100%", lg: "50%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingX: { xs: 4, sm: 6, lg: 8 },
            paddingY: { xs: 4, lg: 0 },
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
              mb: 2,
            }}
          >
            MJF Home Solutions
          </Typography>
          <Divider
            sx={{
              width: { xs: "80%", lg: "100%" },
              height: 2,
              marginBottom: 2,
              background:
                "linear-gradient(90deg, transparent, #cc5a28, #29a2ff, transparent)",
              borderRadius: 2,
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: "text.primary",
              textAlign: "center",
              fontSize: { xs: "1.1rem", sm: "1.2rem", lg: "1.3rem" },
              fontWeight: 400,
              lineHeight: 1.8,
              mb: 4,
              maxWidth: 520,
              textShadow: "1px 1px 2px rgba(0,0,0,0.05)",
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
            width: { xs: "100%", lg: "1024px", xl: "1280px" },
            height: { xs: "100%", lg: "576px", xl: "720px" },
            position: "relative",
            order: { xs: 1, lg: 2 },
            borderRadius: { xs: 0, lg: 3 },
            overflow: "hidden",
            boxShadow: { lg: "0 20px 40px rgba(0,0,0,0.1)" },
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <SlickAuto images={carouselImages} />
        </Box>
      </Stack>
    </Paper>
  );
}
