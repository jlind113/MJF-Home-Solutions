import { Button, Stack } from "@mui/material";
import { Link } from "react-router";

export default function CTASmall() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      width={{ xs: "100%", sm: "auto" }}
    >
      <Button
        component={Link}
        to="/services"
        variant="contained"
        size="large"
        sx={{
          px: 4,
          py: 1.5,
          fontWeight: 600,
          textTransform: "none",
          borderRadius: 2,
        }}
      >
        Our Services
      </Button>
      <Button
        component={Link}
        to="/contact"
        variant="outlined"
        size="large"
        sx={{
          px: 4,
          py: 1.5,
          fontWeight: 600,
          textTransform: "none",
          borderRadius: 2,
        }}
      >
        Get a Quote
      </Button>
    </Stack>
  );
}
