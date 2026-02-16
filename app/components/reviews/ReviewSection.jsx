import ReviewCard from "./ReviewCard";
import { Box, Stack } from "@mui/material";
import { Reviews } from "../../Util/ReviewInfo";

export default function ReviewSection() {
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        width: "100%",
        padding: "1rem",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 2, md: 4 }}
        sx={{ justifyContent: "center", alignItems: "center", padding: "1em" }}
      >
        {Reviews.map((review, i) => (
          <ReviewCard
            key={i}
            review={review.review}
            name={review.name}
            location={review.location}
            starCount={review.starCount}
            link={review.link}
            linkIcon={review.linkIcon}
          />
        ))}
      </Stack>
    </Box>
  );
}
