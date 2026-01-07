// MUI Imports
import { Paper, ImageList, ImageListItem } from "@mui/material";

import ImageCard from "./ImageCard";

export default function ImageGrid({ images }) {
  return (
    <Paper
      square
      variant="outlined"
      sx={{
        width: "100%",
        paddingX: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "background.secondary",
      }}
    >
      <ImageList
        sx={{ width: "100%", height: "100%", paddingY: 4 }}
        cols={4}
        rowHeight={"auto"}
      >
        {images.map((item) => (
          <ImageListItem key={item.img} sx={{ margin: 0.5 }}>
            <ImageCard src={item.img} title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </Paper>
  );
}
