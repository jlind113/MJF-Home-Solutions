import { Paper, Box, Typography, Stack } from "@mui/material";
import GradientDivider from "./GradientDivider";
import FacebookLink from "./FacebookLink";
import Header from "./textItems/Header";
import BodyText from "./textItems/BodyText";
import { HomeInfo } from "../Util/HomeInfo";

export default function About() {
  return (
    <Paper
      square
      variant="outlined"
      sx={{
        width: "100%",
        backgroundColor: "background.light",
        borderLeftWidth: 0,
        borderRightWidth: 0,
      }}
    >
      <Stack
        direction={{ xs: "column", lg: "row" }}
        alignItems={"center"}
        spacing={2}
      >
        <Box
          sx={{
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
          }}
        >
          <img
            src={HomeInfo.about.image.src}
            alt={HomeInfo.about.image.alt}
            loading="lazy"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          sx={{
            height: { xs: "50%", lg: "100%" },
            width: { xs: "100%", lg: "50%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Header text={"About Us"} />

          <Box sx={{ width: "100%", paddingX: { xs: "2vw", lg: 0 } }}>
            <GradientDivider />
          </Box>

          <Box
            sx={{
              textAlign: "left",
              paddingX: { xs: "3vw", lg: "1vw" },
              marginY: 1,
              maxWidth: { xs: 500, md: 800 },
            }}
          >
            <BodyText text={HomeInfo.about.text} />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
              marginBottom: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                color: "text.primary",
              }}
            >
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
