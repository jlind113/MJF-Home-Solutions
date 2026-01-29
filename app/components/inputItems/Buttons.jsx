import { Link } from "react-router";
import { hoverAnims, entranceAnims } from "../../Style/Animations";
import { Button } from "@mui/material";

export function CTAButton({ link, text }) {
  return (
    <Button
      component={Link}
      to={link}
      variant="contained"
      sx={{
        ...hoverAnims.scale,
        ...entranceAnims.fadeUpOnMount,
        ...styles.CTAButton,
      }}
    >
      {text}
    </Button>
  );
}

const styles = {
  CTAButton: {
    paddingX: { xs: "1.5rem", lg: "2rem" },
    paddingY: { xs: "0.6rem", lg: "0.8rem" },
    fontSize: { xs: "1rem", lg: "1.2rem" },
    textTransform: "none",
    color: "white",
    backgroundColor: "primary.dark",
    borderRadius: 1,
  },
};
