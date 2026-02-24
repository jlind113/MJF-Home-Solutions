import { Paper, Typography, Stack } from "@mui/material";
import CreditCard from "@mui/icons-material/CreditCard";
import House from "@mui/icons-material/House";
import Apartment from "@mui/icons-material/Apartment";
import { entranceAnims } from "../Style/Animations";

export default function CardRow() {
  const cards = [
    { id: 0, icon: CreditCard, text: "LICENSED" },
    { id: 1, icon: House, text: "RESIDENTIAL" },
    { id: 2, icon: Apartment, text: "COMMERCIAL" },
  ];

  return (
    <Stack
      direction={{ xs: "column", lg: "row" }}
      spacing={{ xs: 3, lg: 8 }}
      sx={style.stackRoot}
    >
      {cards.map((card, index) => {
        const IconComponent = card.icon;
        return (
          <Paper
            square
            elevation={2}
            key={card.id}
            sx={{
              ...entranceAnims.staggeredFadeUp(index),
              ...style.paperRoot,
            }}
          >
            <IconComponent sx={style.icon} />
            <Typography variant="button" sx={style.text}>
              {card.text}
            </Typography>
          </Paper>
        );
      })}
    </Stack>
  );
}

const style = {
  stackRoot: {
    alignItems: { xs: "stretch", lg: "center" },
    justifyContent: "center",
    width: { xs: "70%", lg: "100%" },
    paddingY: "2rem",
  },
  paperRoot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: { xs: "100%", lg: "20%" },
    paddingY: "0.1rem",
    borderWidth: 2,
    borderColor: "text.primary",
    backgroundColor: "background.light",
  },
  icon: {
    width: "3rem",
    height: "3rem",
    fill: "text.primary",
  },
  text: {
    fontSize: "1.5rem",
    paddingX: 1,
    color: "text.primary",
  },
};
