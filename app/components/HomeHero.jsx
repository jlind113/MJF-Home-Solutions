import { Box, Typography, Paper } from "@mui/material";
import { AutoCarousel } from "../components/Carousel";

export default function HomeHero() {
  const carouselImages = [
    "/Images/Jobs/1.jpg",
    "/Images/Jobs/2.jpg",
    "/Images/Jobs/3.jpg",
    "/Images/Jobs/4.jpg",
    "/Images/Jobs/5.jpg",
    "/Images/Jobs/6.jpg",
    "/Images/Jobs/7.jpg",
  ];

  return (
    <Paper
      elevation={4}
      sx={{
        width: "60%",
        minHeight: 500,
        backgroundColor: "background.paper",
        marginY: 4,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        overflow: "hidden",
        borderRadius: 4,
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 6,
          gap: 3,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "text.primary",
            fontSize: "3rem",
            width: "80%",
            fontFamily: "DM Serif Text",
            borderBottom: "3px solid",
            borderBottomColor: "primary.main",
          }}
        >
          MJF Home Solutions
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: 18,
            lineHeight: 1.8,
            color: "text.primary",
            width: "80%",
            fontFamily: "Montserrat",
            fontWeight: 510,
          }}
        >
          Based in Bountiful UT, MJF Home Solutions is a premier drywall company
          serving the area with expert installation, repair services, and
          exceptional customer satisfaction for over a decade.
        </Typography>
      </Box>
      <Box
        sx={{
          width: "50%",
          minWidth: 400,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AutoCarousel images={carouselImages} />
      </Box>
    </Paper>
  );
}
