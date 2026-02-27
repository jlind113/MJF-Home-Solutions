import ReviewCard from "./ReviewCard";
import { Box, Stack } from "@mui/material";
import { Reviews } from "../../Util/ReviewInfo";

export default function ReviewSection() {
  return (
    <Box
      sx={style.boxRoot}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 2, md: 4 }}
        sx={style.stack}
      >
        {Reviews.map((review, index) => (
          <ReviewCard
            key={index}
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

const style = {
  boxRoot: {
    backgroundColor: "transparent",
    width: "100%",
    maxWidth: "1080px",
    padding: "1rem",
  },
  stack: {
    justifyContent: "center", 
    alignItems: "center", 
    padding: "1em",
  },
}