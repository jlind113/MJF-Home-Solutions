import { Typography } from "@mui/material";

export default function BodyText({ text }) {
  return (
    <Typography variant="body1" sx={style.text}>
      {text}
    </Typography>
  );
}

const style = {
  text: {
    color: "text.primary",
    fontSize: { xs: "1rem", sm: "1.1rem", lg: "1.2rem" },
    fontWeight: 530,
    lineHeight: 1.8,
  },
};
