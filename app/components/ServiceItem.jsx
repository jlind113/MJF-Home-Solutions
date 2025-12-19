// MUI Imports
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
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
      square
      variant='outlined'
      sx={{
        width: "60%",
        marginY: 4,
        backgroundColor: "background.secondary",
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
            width: "50%",
            padding: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            color="text.primary"
            textAlign={"center"}
            paddingBottom={2}
          >
            {name}
          </Typography>
          <Divider
            variant="fullWidth"
            orientation="horizontal"
            sx={{ height: 2, backgroundColor: "primary.main" }}
          />
          <Typography
            variant="body1"
            color="text.primary"
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
            sx={{ whiteSpace: "break-spaces" }}
          >
            {description}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}
