import { Grid, Box } from "@mui/material";
import { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import { entranceAnims } from '../Style/Animations';

export default function ImageGrid({ images }) {
  const [visibleImages, setVisibleImages] = useState([]);

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
            size={{xs: 12, sm: 6, md: 4, lg: 3}}
            key={`${item.path}-${index}`}
            sx={{
              display: "flex",
              justifyContent: "center",
              ...entranceAnims.gridFadeIn(index)
            }}
          >
            <ImageCard src={item.path} title={item.name} index={index} alt={item.alt} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
