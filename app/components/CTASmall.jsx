import { Button, Stack } from "@mui/material";
import { Link } from "react-router";
import { hoverAnims, entranceAnims } from "../Style/Animations";

function CTAButton({ link, text }) {
  return (
    <Button
      component={Link}
      to={link}
      variant="contained"
      sx={{
        ...hoverAnims.scale,
        ...entranceAnims.fadeUpOnMount,
        paddingX: { xs: "1.5rem", lg: "2rem" },
        paddingY: { xs: "0.6rem", lg: "0.8rem" },
        fontWeight: 500,
        fontSize: { xs: "1rem", lg: "1.2rem" },
        textTransform: "none",
        color: "text.primary",
        backgroundColor: "primary.dark",
        borderRadius: 1,
      }}
    >
      {text}
    </Button>
  );
}

export default function CTASmall() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 2, sm: 6 }}
      width={"100%"}
    >
      <CTAButton link={"/Services"} text={"Our Services"} />
      <CTAButton link={"/Contact"} text={"Get a Quote"} />
    </Stack>
  );
}
