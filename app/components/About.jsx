import { Paper, Box, Typography, Stack } from "@mui/material";
import GradientDivider from "./GradientDivider";
import FacebookLink from "./FacebookLink";
import Header from "./textItems/Header";
import BodyText from "./textItems/BodyText";
import { HomeInfo } from "../Util/HomeInfo";

export default function About() {
  return (
    <Paper square variant="outlined" sx={style.paperRoot}>
      <Stack
        direction={{ xs: "column", lg: "row" }}
        alignItems={"center"}
        spacing={2}
      >
        <Box sx={style.imgBox}>
          <img
            src={HomeInfo.about.image.src}
            alt={HomeInfo.about.image.alt}
            loading="lazy"
            style={style.image}
          />
        </Box>
        <Box sx={style.textRoot}>
          <Header text={"About Us"} />

          <Box sx={style.gradientContainer}>
            <GradientDivider />
          </Box>

          <Box sx={style.bodyTextContainer}>
            <BodyText text={HomeInfo.about.text} />
          </Box>

          <Box sx={style.connectContainer}>
            <Typography variant="h6" sx={style.connectText}>
              Connect with us
            </Typography>
            <Box>
              <FacebookLink />
            </Box>
          </Box>
        </Box>
      </Stack>
    </Paper>
  );
}

const style = {
  paperRoot: {
    width: "100%",
    backgroundColor: "background.main",
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  imgBox: {
    height: {
      xs: "100%",
      lg: "576px",
      xl: "720px",
    },
    width: {
      xs: "100%",
      lg: "1024px",
      xl: "1280px",
    },
    order: { xs: 2, lg: 0 },
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  textRoot: {
    height: { xs: "50%", lg: "100%" },
    width: { xs: "100%", lg: "50%" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  gradientContainer: {
    width: "100%",
    paddingX: { xs: "2vw", lg: 0 },
  },
  bodyTextContainer: {
    textAlign: "left",
    paddingX: { xs: "3vw", lg: "1vw" },
    marginY: 1,
    maxWidth: { xs: 500, md: 800 },
  },
  connectContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    marginBottom: 2,
  },
  connectText: {
    fontWeight: 500,
    color: "text.primary",
  },
};
