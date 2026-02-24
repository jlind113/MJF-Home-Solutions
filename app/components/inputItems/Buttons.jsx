import { Link } from "react-router";
import { hoverAnims, entranceAnims } from "../../Style/Animations";
import { Button } from "@mui/material";

export function CTAButton({ link, text }) {
  return (
    <Button
      component={Link}
      to={link}
      variant="contained"
      sx={style.CTAButton}
    >
      {text}
    </Button>
  );
}

const style = {
  CTAButton: {
    ...hoverAnims.scale,
    ...entranceAnims.fadeUpOnMount,
    paddingX: { xs: "1.5rem", lg: "2rem" },
    paddingY: { xs: "0.6rem", lg: "0.8rem" },
    fontSize: { xs: "1rem", lg: "1.2rem" },
    textTransform: "none",
    color: "white",
    backgroundColor: "primary.dark",
    borderRadius: 1,
  },
};
