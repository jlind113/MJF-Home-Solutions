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
    <Paper square variant="outlined" sx={style.root}>
      <Stack direction={{ xs: "column", lg: "row" }}>
        <Box sx={style.textContainer}>
          <Header text={HomeInfo.hero.text.header} />

          <GradientDivider />

          <Box sx={style.bodyTextContainer}>
            <BodyText text={HomeInfo.hero.text.body} />
          </Box>

          <Box>
            <CTASmall />
          </Box>
        </Box>
        <Box sx={style.carouselContainer}>
          <SlickAuto images={carouselImages} />
        </Box>
      </Stack>
    </Paper>
  );
}

const style = {
  root: {
    width: "100%",
    backgroundColor: "background.main",
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 1,
  },
  textContainer: {
    width: { xs: "100%", lg: "40%" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingX: "2vw",
    paddingY: { xs: "2vh", lg: 0 },
  },
  bodyTextContainer: {
    marginY: "1vh",
    maxWidth: 520,
    textAlign: "center",
  },
  carouselContainer: {
    width: { xs: "100%", lg: "60%" },
  },
};
