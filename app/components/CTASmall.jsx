// MUI Imports
import { Button, Stack } from "@mui/material";

import { Link } from "react-router";
import { buttonHoverStyles, cardEntranceStyles } from "../Style/Animations";

export default function CTASmall() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      width={{ xs: "60%", sm: "auto" }}
    >
      <Button
        component={Link}
        to="/services"
        variant="contained"
        size="large"
        sx={{
          ...buttonHoverStyles.scale,
          ...cardEntranceStyles.fadeUpOnMount,
          px: 4,
          py: 1.5,
          fontWeight: 600,
          textTransform: "none",
          backgroundColor: "primary.main",
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
          ...buttonHoverStyles.scale,
          ...cardEntranceStyles.fadeUpOnMount,
          px: 4,
          py: 1.5,
          fontWeight: 600,
          textTransform: "none",
          color: "text.primary",
          borderRadius: 2,
          borderWidth: 2,
          borderColor: "accent.main",
        }}
      >
        Get a Quote
      </Button>
    </Stack>
  );
}
