// MUI Imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";

import { SlickAuto } from "../components/Carousel";
import CTASmall from './CTASmall';

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
      variant='outlined'
      sx={{
        width: "100%",
        height: "fit-content",
        backgroundColor: "background.secondary",
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
      }}
    >
      <Stack
        direction={{ xs: "column", lg: "row" }}
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", lg: "50%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingX: { xs: 4, sm: 6, lg: 8 },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              letterSpacing: 2,
              fontSize: 16,
              mb: 1,
            }}
          >
            Bountiful, Utah
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "text.primary",
              textAlign: "center",
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              textWrap: "nowrap",
            }}
          >
            MJF Home Solutions
          </Typography>
          <Divider
            sx={{
              width: "60%",
              height: 2,
              marginY: 2,
              backgroundColor: "primary.main",
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: "text.primary",
              textAlign: "center",
              fontSize: 18,
              fontWeight: 530,
              lineHeight: 1.8,
              mb: 4,
              maxWidth: 500,
            }}
          >
            Premier drywall experts serving the Bountiful area with exceptional
            installation, repair services, and customer satisfaction for over a
            decade.
          </Typography>

          {/* CTA Section */}
          <CTASmall />
        </Box>

        {/* Carousel Section */}
        <Box
          sx={{
            width: { xs: "100%", lg: "1280px" },
            height: { xs: "300px", sm: "400px", lg: "720px" },
            minHeight: { lg: "50vh" },
            position: "relative",
            order: { xs: 1, lg: 2 },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              "&::after": {
                content: '""',
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
              },
            }}
          >
            <SlickAuto images={carouselImages} />
          </Box>
        </Box>
      </Stack>
    </Paper>
  );
}
