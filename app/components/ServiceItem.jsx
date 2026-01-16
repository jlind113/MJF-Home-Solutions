// MUI Imports
import { Box, Paper, Typography, Grid } from "@mui/material";

import { SlickClick } from "./Carousel";
import GradientDivider from "./GradientDivider";

export default function ServiceItem({ name, subtext, description, images }) {
  return (
    <Paper
      square
      variant="outlined"
      sx={{
        backgroundColor: "background.light",
        paddingX: "2vw",
        paddingY: "2vh",
      }}
    >
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography
            variant="h3"
            sx={{ color: "text.primary", textAlign: "center" }}
          >
            {name}
          </Typography>
        </Grid>
        
        <Grid size={12}>
          <GradientDivider />
        </Grid>

        <Grid size={12}>
          <Typography
            variant='body1'
            color="text.primary"
            sx={{ fontSize: { xs: 16, md: 18 } }}
          >
            {subtext}
          </Typography>
        </Grid>

        <Grid size={12}>
          <Typography
            variant="body1"
            color="text.primary"
            sx={{
              fontSize: { xs: 16, md: 18 },
              whiteSpace: "pre-line",
            }}
          >
            {description}
          </Typography>
        </Grid>

        <Grid size={12}>
          <Box
            sx={{
              width: "100%",
              paddingX: {xs: "4vw", md: "2vw"},
              paddingY: "1vh"
            }}
          >
            <SlickClick images={images} />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
