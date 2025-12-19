// MUI Imports
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

// MUI Icon Imports
import CreditCard from "@mui/icons-material/CreditCard";
import House from "@mui/icons-material/House";
import Apartment from "@mui/icons-material/Apartment";

export default function CardRow() {
  return (
    <Stack
      direction={{ xs: "column", lg: "row" }}
      alignItems={{ xs: "stretch", lg: "center" }}
      justifyContent={{ xs: "center", lg: "center" }}
      spacing={{ xs: 4, lg: 8 }}
      width={{ xs: "50%", lg: "100%" }}
      paddingY={{ xs: 2, lg: 4 }}
    >
      <Paper
        square
        elevation={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingX: 2,
          paddingY: 1,
          marginX: 3,
          borderWidth: 2,
          borderColor: "text.primary",
          backgroundColor: "background.secondary",
        }}
      >
        <CreditCard sx={{ width: 48, height: 48, fill: "text.primary" }} />
        <Typography
          variant="button"
          sx={{ fontSize: 24, paddingX: 1, color: "text.primary" }}
        >
          LICENSED
        </Typography>
      </Paper>
      <Paper
        square
        elevation={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingX: 2,
          paddingY: 1,
          marginX: 3,
          borderWidth: 2,
          borderColor: "text.primary",
          backgroundColor: "background.secondary",
        }}
      >
        <House sx={{ width: 48, height: 48, fill: "text.primary" }} />
        <Typography
          variant="button"
          sx={{ fontSize: 24, paddingX: 1, color: "text.primary" }}
        >
          RESIDENTIAL
        </Typography>
      </Paper>
      <Paper
        square
        elevation={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingX: 2,
          paddingY: 1,
          marginX: 3,
          borderWidth: 2,
          borderColor: "text.primary",
          backgroundColor: "background.secondary",
        }}
      >
        <Apartment sx={{ width: 48, height: 48, fill: "text.primary" }} />
        <Typography
          variant="button"
          sx={{ fontSize: 24, paddingX: 1, color: "text.primary" }}
        >
          COMMERCIAL
        </Typography>
      </Paper>
    </Stack>
  );
}
