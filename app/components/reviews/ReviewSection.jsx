import ReviewCard from "./ReviewCard";
import { Box, Stack } from "@mui/material";

export default function ReviewSection() {
  return (
    <Box
      sx={{
        backgroundColor: "background.main",
        width: "100%",
        paddingY: "2rem",
      }}
    >
      <Stack direction={"row"} spacing={4} justifyContent={"center"}>
        <ReviewCard
          review={"Review Here"}
          name={"Name Here"}
          location={"Location"}
          starCount={5}
          link={"https://youtu.be/dQw4w9WgXcQ?si=hHPD4B8cbT5aIm7W"}
        />
        <ReviewCard
          review={"Review Here"}
          name={"Name Here"}
          location={"Location"}
          starCount={3}
          link={"https://youtu.be/dQw4w9WgXcQ?si=hHPD4B8cbT5aIm7W"}
        />
        <ReviewCard
          review={"Review Here"}
          name={"Name Here"}
          location={"Location"}
          starCount={4}
          link={"https://youtu.be/dQw4w9WgXcQ?si=hHPD4B8cbT5aIm7W"}
        />
      </Stack>
    </Box>
  );
}
