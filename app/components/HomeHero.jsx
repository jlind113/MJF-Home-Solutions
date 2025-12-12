import { Box, Typography, Stack, Divider } from "@mui/material";
import { SlickAuto } from "../components/Carousel";
import CTASmall from './CTASmall';

export default function HomeHero() {
  const carouselImages = [
    "/Images/Jobs/1.jpg",
    "/Images/Jobs/2.jpg",
    "/Images/Jobs/3.jpg",
    "/Images/Jobs/5.jpg",
    "/Images/Jobs/6.jpg",
    "/Images/Jobs/7.jpg",
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "50vh" },
        backgroundColor: "text.disabled",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Stack
        direction={{ xs: "column", lg: "row" }}
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "background.default",
        }}
      >
        {/* Text Content Section */}
        <Box
          sx={{
            width: { xs: "100%", lg: "45%" },
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
              width: "80%",
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
            width: { xs: "100%", lg: "55%" },
            height: { xs: "300px", sm: "400px", lg: "50vh" },
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
    </Box>
  );
}
