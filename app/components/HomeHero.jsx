import { Box, Stack, Paper } from "@mui/material";
import { SlickAuto } from "../components/Carousel";
import CTASmall from "./CTASmall";
import GradientDivider from "./GradientDivider";
import Header from "./textItems/Header";
import BodyText from "./textItems/BodyText";
import { HomeInfo } from "../Util/HomeInfo";

export default function HomeHero() {
  const carouselImages = [
    HomeInfo.hero.images[0].src,
    HomeInfo.hero.images[1].src,
    HomeInfo.hero.images[2].src,
    HomeInfo.hero.images[3].src,
    HomeInfo.hero.images[4].src,
    HomeInfo.hero.images[5].src,
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
      }}
    >
      <Stack direction={{ xs: "column", lg: "row" }}>
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
          <Header text={HomeInfo.hero.text.header} />

          <GradientDivider />

          <Box sx={{ marginY: "1vh", maxWidth: 520, textAlign: "center" }}>
            <BodyText text={HomeInfo.hero.text.body}/>
          </Box>

          <Box>
            <CTASmall />
          </Box>
          
        </Box>
        <Box
          sx={{
            width: { xs: "100%", lg: "60%" },
          }}
        >
          <SlickAuto images={carouselImages} />
        </Box>
      </Stack>
    </Paper>
  );
}
