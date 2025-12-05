import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import { ClickCarousel } from "./Carousel";

export default function ServiceItem({
  name,
  subtext,
  description,
  images,
  serviceID,
}) {
  return (
    <Paper
      elevation={4}
      sx={{
        width: "60%",
        marginY: 4,
        borderRadius: 4,
        backgroundColor: "background.paper",
      }}
    >
      <Stack
        direction={"column"}
        alignItems={"center"}
        spacing={4}
        sx={{ width: "100%", paddingY: 4 }}
      >
        <Box
          sx={{
            backgroundColor: "background.paper",
            width: "50%",
            padding: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            color="text.primary"
            fontFamily="DM Serif Text"
            textAlign={"center"}
            paddingBottom={2}
          >
            {name}
          </Typography>
          <Divider
            variant="fullWidth"
            orientation="horizontal"
            sx={{ height: 2, backgroundColor: "text.primary" }}
          />
          <Typography
            variant="body1"
            color="text.primary"
            font-family="Montserrat"
            fontSize={18}
            paddingTop={2}
          >
            {subtext}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "60%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <ClickCarousel images={images} serviceID={serviceID} />
        </Box>
        <Box width={"60%"} paddingY={4}>
          <Typography
            variant="body1"
            fontSize={18}
            color="text.primary"
            font-family="Montserrat"
            sx={{ whiteSpace: "break-spaces" }}
          >
            {description}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}
