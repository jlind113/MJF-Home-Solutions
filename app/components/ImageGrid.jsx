// MUI Imports
import { Paper, Grid, Box } from "@mui/material";
import { useState, useEffect } from "react";

import ImageCard from "./ImageCard";

export default function ImageGrid({ images }) {
  const [visibleImages, setVisibleImages] = useState([]);

  // Batch load images for better performance
  useEffect(() => {
    setVisibleImages([]);
    const timer = setTimeout(() => {
      setVisibleImages(images);
    }, 100);

    return () => clearTimeout(timer);
  }, [images]);

  return (
    <Box
      sx={{
        width: "100%",
        padding: { xs: 1, sm: 2 },
      }}
    >
      <Grid
        container
        spacing={{ xs: 1.5, sm: 2, md: 2.5 }}
        justifyContent="center"
        alignItems="stretch"
      >
        {visibleImages.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={`${item.img}-${index}`}
            sx={{
              display: "flex",
              justifyContent: "center",
              animation: `fadeInScale 0.6s ease-out ${index * 0.05}s both`,
              "@keyframes fadeInScale": {
                from: {
                  opacity: 0,
                  transform: "scale(0.9) translateY(20px)",
                },
                to: {
                  opacity: 1,
                  transform: "scale(1) translateY(0)",
                },
              },
            }}
          >
            <ImageCard src={item.img} title={item.title} index={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
