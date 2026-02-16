import { Box, Paper, Stack, Typography } from "@mui/material";
import { FacebookRounded, StarRate } from "@mui/icons-material";

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
        <StarRate key={index} htmlColor="yellow" sx={{ scale: 1.2 }} />,
      );
    }
    return stars;
  }

  function setIcon() {
    switch (linkIcon) {
      case "facebook":
        return (
          <FacebookRounded
            sx={{ width: "100%", height: "100%", color: "primary.main" }}
          />
        );
      case "google":
        return (
          <svg style={{ width: "100%", height: "100%" }}>
            <path
              d="M20 10.2222C20 9.40001 19.9319 8.80001 19.7846 8.1778H10.2041V11.8889H15.8276C15.7143 12.8111 15.1021 14.2 13.7415 15.1333L13.7224 15.2575L16.7516 17.5573L16.9615 17.5778C18.8889 15.8333 20 13.2667 20 10.2222Z"
              fill="#3cba54"
            />
            <path
              d="M10.2041 20C12.9591 20 15.272 19.1111 16.9614 17.5778L13.7414 15.1333C12.8798 15.7222 11.7233 16.1333 10.2041 16.1333C7.50566 16.1333 5.21542 14.3889 4.39902 11.9778L4.27935 11.9877L1.12957 14.3766L1.08838 14.4889C2.76637 17.7555 6.21309 20 10.2041 20Z"
              fill="#f4c20d"
            />
            <path
              d="M4.39905 11.9778C4.18363 11.3556 4.05897 10.6889 4.05897 10C4.05897 9.3111 4.18363 8.64446 4.38772 8.02225L4.38201 7.88973L1.19276 5.46246L1.08841 5.5111C0.39683 6.86668 0 8.38893 0 10C0 11.6111 0.39683 13.1333 1.08841 14.4889L4.39905 11.9778Z"
              fill="#db3236"
            />
            <path
              d="M10.2041 3.86664C12.1201 3.86664 13.4126 4.67775 14.1496 5.35557L17.0294 2.6C15.2608 0.988893 12.9591 0 10.2041 0C6.21309 0 2.76637 2.24443 1.08838 5.51107L4.38769 8.02221C5.21542 5.61111 7.50566 3.86664 10.2041 3.86664Z"
              fill="#4885ed"
            />
          </svg>
        );
    }
  }

  return (
    <Paper
      elevation={2}
      sx={{
        padding: "1em",
        backgroundColor: "background.main",
        borderRadius: 2,
        width: { xs: "50%", md: "40%", lg: "30%" },
        height: "100%",
      }}
    >
      <Stack direction={"column"} spacing={2} alignItems={"center"}>
        <Box>
          <Stack direction={"row"} spacing={1.5}>
            {fillStars()}
          </Stack>
        </Box>
        <Box>
          <Typography
            variant="body1"
            sx={{ color: "text.primary", textAlign: "center" }}
          >
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
              <Typography
                variant="body2"
                sx={{ color: "text.primary", textAlign: "center" }}
              >
                {name}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.primary", textAlign: "center" }}
              >
                {location}
              </Typography>
            </Box>
            <a
              href={link}
              style={{ padding: 0, width: "2rem", height: "2rem" }}
            >
              {setIcon()}
            </a>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}
