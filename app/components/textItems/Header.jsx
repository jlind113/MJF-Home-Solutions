import { Typography } from '@mui/material';

export default function Header({ text }) {
  return (
    <Typography
      variant="h2"
      sx={{
        color: "text.primary",
        textAlign: "center",
        fontSize: { xs: "2.2rem", sm: "3.2rem" },
        textWrap: "nowrap",
        marginY: "1vh",
      }}
    >
      {text}
    </Typography>
  );
}