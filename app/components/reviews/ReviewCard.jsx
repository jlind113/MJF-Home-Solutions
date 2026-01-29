import { Box, Paper, Stack, Typography } from "@mui/material";
import { FacebookRounded, Star } from "@mui/icons-material";

export default function ReviewCard({
  review,
  name,
  location,
  starCount,
  link,
}) {
  function fillStars() {
    const stars = [];
    for (let index = 0; index < starCount; index++) {
      stars.push(<Star key={index} htmlColor="yellow" />);
    }
    return stars;
  }

  return (
    <Paper
      elevation={2}
      sx={{
        padding: "1rem",
        backgroundColor: "background.main",
        borderRadius: 2,
      }}
    >
      <Stack direction={"column"} spacing={2}>
        <Box>
          <Stack direction={"row"}>{fillStars()}</Stack>
        </Box>
        <Box>
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            {review}
          </Typography>
        </Box>
        <Box>
          <Stack
            direction={"row"}
            spacing={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box>
              <Typography variant="body2" sx={{ color: "text.primary" }}>
                {name}
              </Typography>
              <Typography variant="body1" sx={{ color: "text.primary" }}>
                {location}
              </Typography>
            </Box>
            <a href={link}>
              <FacebookRounded
                sx={{ width: "2rem", height: "2rem", color: "primary.main" }}
              />
            </a>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}
