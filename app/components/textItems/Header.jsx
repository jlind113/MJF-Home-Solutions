import { Typography } from "@mui/material";

export default function Header({ text }) {
  return (
    <Typography variant="h2" sx={style.text}>
      {text}
    </Typography>
  );
}

const style = {
  text: {
    color: "text.primary",
    textAlign: "center",
    fontSize: { xs: "2.2rem", sm: "3.2rem" },
    marginY: "1vh",
  },
};
