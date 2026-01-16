import { Button, Stack } from "@mui/material";
import { Link } from "react-router";
import { buttonHoverStyles, cardEntranceStyles } from "../Style/Animations";

export default function CTASmall() {
  function CTAButton(link, text) {
    return (
      <Button
        component={Link}
        to={link}
        variant="contained"
        sx={{
          ...buttonHoverStyles.scale,
          ...cardEntranceStyles.fadeUpOnMount,
          px: {xs: "1.5rem", lg: "2rem"},
          py: {xs: "0.6rem", lg: "0.8rem"},
          fontWeight: 500,
          fontSize: {xs: "1rem", lg: "1.2rem"},
          textTransform: "none",
          color: "text.primary",
          backgroundColor: "primary.dark",
          borderRadius: 2,
        }}
      >
        {text}
      </Button>
    );
  }

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 2, sm: 6 }}
      width={"100%"}
    >
      {CTAButton("/Services", "Our Services")}
      {CTAButton("/Contact", "Get a Quote")}
    </Stack>
  );
}
