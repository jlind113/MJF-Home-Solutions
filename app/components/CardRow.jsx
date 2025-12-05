import { Box, Paper, Typography } from "@mui/material";
import { CreditCard, House, Apartment } from "@mui/icons-material";

export default function CardRow() {
  return (
    <Box
      sx={{
        height: 40,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingY: 4,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          alignItems: "center",
          paddingX: 2,
          paddingY: 1,
          marginX: 3,
          borderRadius: 3,
          backgroundColor: "background.paper",
        }}
      >
        <CreditCard sx={{ width: 48, height: 48, fill: "text.primary" }} />
        <Typography sx={{ fontSize: 24, paddingX: 1, color: "text.primary" }}>
          LICENSED
        </Typography>
      </Paper>
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          alignItems: "center",
          paddingX: 2,
          paddingY: 1,
          marginX: 3,
          borderRadius: 3,
          backgroundColor: "background.paper",
        }}
      >
        <House sx={{ width: 48, height: 48, fill: "text.primary" }} />
        <Typography sx={{ fontSize: 24, paddingX: 1, color: "text.primary" }}>
          RESIDENTIAL
        </Typography>
      </Paper>
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          alignItems: "center",
          paddingX: 2,
          paddingY: 1,
          marginX: 3,
          borderRadius: 3,
          backgroundColor: "background.paper",
        }}
      >
        <Apartment sx={{ width: 48, height: 48, fill: "text.primary" }} />
        <Typography sx={{ fontSize: 24, paddingX: 1, color: "text.primary" }}>
          COMMERCIAL
        </Typography>
      </Paper>
    </Box>
  );
}
