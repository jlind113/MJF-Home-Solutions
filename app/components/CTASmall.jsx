// MUI Imports
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { Link } from "react-router";
import { tailwindTransitions } from '../Util/CustomTheme';

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
        className={tailwindTransitions.buttons.scale}
        sx={{
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
        className={tailwindTransitions.buttons.scale}
        sx={{
          px: 4,
          py: 1.5,
          fontWeight: 600,
          textTransform: "none",
          color: "text.primary",
          borderRadius: 2,
          borderWidth: 2,
          borderColor: "primary.main",
        }}
      >
        Get a Quote
      </Button>
    </Stack>
  );
}
