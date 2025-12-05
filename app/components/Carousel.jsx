import { Box, IconButton, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export function AutoCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Paper
      elevation={2}
      sx={{
        position: "relative",
        width: "95%",
        height: "95%",
        overflow: "hidden",
        borderRadius: 4,
      }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 1s",
          }}
          className={`${index === currentIndex ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </Paper>
  );
}

export function ClickCarousel({ images, serviceID }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [serviceID]);

  const imageCount = images.length - 1;

  function backClick() {
    if (index === 0) {
      setIndex(imageCount);
    } else {
      setIndex(index - 1);
    }
  };

  function forwardClick() {
    if (index === imageCount) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "background.paper",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <IconButton
          sx={{ backgroundColor: "background.default", margin: 1 }}
          onClick={() => backClick()}
        >
          <ArrowBack sx={{ color: "text.primary" }} />
        </IconButton>
        <img
          src={images[index]}
          alt={`Slide ${index}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "scale-down",
            borderRadius: 8,
          }}
        />
        <IconButton
          sx={{ backgroundColor: "background.default", margin: 1 }}
          onClick={() => forwardClick()}
        >
          <ArrowForward sx={{ color: "text.primary" }} />
        </IconButton>
      </Box>
    </Box>
  );
};
