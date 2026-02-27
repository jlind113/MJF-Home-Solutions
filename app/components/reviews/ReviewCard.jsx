import { Box, Paper, Stack, Typography } from "@mui/material";
import { FacebookRounded, StarRate } from "@mui/icons-material";
import googleIcon from "/Photos/icons/google-icon.svg";

export default function ReviewCard({
  review,
  name,
  location,
  starCount,
  link,
  linkIcon,
}) {
  function fillStars() {
    const stars = [];
    for (let index = 0; index < starCount; index++) {
      stars.push(
        <StarRate key={index} sx={{ scale: 1.5, color: "reviewStars.primary" }} />,
      );
    }
    return stars;
  }

  function setIcon() {
    switch (linkIcon) {
      case "facebook":
        return <FacebookRounded sx={style.facebookIcon} />;
      case "google":
        return (
          <img style={style.googleIcon} src={googleIcon} />
        );
    }
  }

  return (
    <Paper elevation={2} sx={style.paperRoot}>
      <Stack direction={"column"} spacing={2} alignItems={"center"}>
        <Box>
          <Stack direction={"row"} spacing={2}>
            {fillStars()}
          </Stack>
        </Box>
        <Box>
          <Typography variant="body1" sx={style.reviewText}>
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
              <Typography variant="body1" sx={style.reviewSubtext}>
                {name}
              </Typography>
              <Typography variant="body2" sx={style.reviewSubtext}>
                {location}
              </Typography>
            </Box>
            <Box
              sx={{
                width: "2.5rem",
                height: "2.5rem",
              }}
            >
              {setIcon()}
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}

const style = {
  paperRoot: {
    padding: "1em",
    backgroundColor: "background.main",
    borderRadius: 2,
    width: { xs: "50%", md: "40%", lg: "30%" },
    height: { xs: "50%", md: "40%", lg: "30%" },
    minWidth: "250px",
    minHeight: "250px",
    maxWidth: "500px",
    maxHeight: "500px",
  },
  reviewText: {
    color: "text.primary",
    textAlign: {xs: "center", md: "left"},
    fontSize: "1.1rem",
  },
  reviewSubtext: {
    color: "text.primary",
    textAlign: "left",
  },
  reviewLink: {
    padding: 0,
    width: "2rem",
    height: "2rem",
  },
  facebookIcon: {
    width: "2.5rem",
    height: "2.5rem",
    color: "primary.main",
  },
  googleIcon: {
    width: "2rem",
    height: "2rem",
  },
};
