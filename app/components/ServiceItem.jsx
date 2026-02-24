import { Box, Paper, Typography, Grid } from "@mui/material";
import { SlickClick } from "./Carousel";
import GradientDivider from "./GradientDivider";

export default function ServiceItem({ name, subtext, description, images }) {
  return (
    <Paper variant="outlined" sx={style.root}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography variant="h3" sx={style.header}>
            {name}
          </Typography>
        </Grid>

        <Grid size={12}>
          <GradientDivider />
        </Grid>

        <Grid size={12}>
          <Typography variant="body1" color="text.primary" sx={style.subtext}>
            {subtext}
          </Typography>
        </Grid>

        <Grid size={12}>
          <Typography
            variant="body1"
            color="text.primary"
            sx={style.description}
          >
            {description}
          </Typography>
        </Grid>

        <Grid size={12}>
          <Box sx={style.carouselContainer}>
            <SlickClick images={images} />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

const style = {
  root: {
    backgroundColor: "background.main",
    borderColor: "primary.main",
    paddingX: "2vw",
    paddingY: "2vh",
  },
  header: {
    color: "text.primary",
    textAlign: "center",
  },
  subtext: {
    fontSize: { xs: 16, md: 18 },
  },
  description: {
    fontSize: { xs: 16, md: 18 },
    whiteSpace: "pre-line",
  },
  carouselContainer: {
    width: "100%",
    paddingX: { xs: "4vw", md: "2vw" },
    paddingY: "1vh",
  },
};
