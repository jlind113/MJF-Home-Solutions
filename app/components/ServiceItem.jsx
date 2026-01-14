// MUI Imports
import { Box, Divider, Paper, Typography, Grid } from "@mui/material";

import { SlickClick } from "./Carousel";

export default function ServiceItem({ name, subtext, description, images }) {
  return (
    <Paper
      square
      variant="outlined"
      sx={{
        backgroundColor: "background.light",
        p: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
        <Grid item xs={12} md={7} sx={{ order: { xs: 1, md: 2 } }}>
          <Box
            sx={{
              width: "100%",
              aspectRatio: { xs: "4 / 3", md: "16 / 10" },
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <SlickClick images={images} />
          </Box>
        </Grid>

        <Grid item xs={12} md={5} sx={{ order: { xs: 2, md: 1 } }}>
          <Typography
            component="h2"
            sx={{ typography: { xs: "h4", md: "h3" } }}
            color="text.primary"
          >
            {name}
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ fontSize: { xs: 16, md: 18 }, mt: 1 }}
          >
            {subtext}
          </Typography>

          <Divider sx={{ my: 2, backgroundColor: "primary.main" }} />

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
      </Grid>
    </Paper>
  );
}
