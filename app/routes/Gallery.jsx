import Box from "@mui/material/Box";
import ImageGrid from "../components/ImageGrid";

export default function Gallery() {
  const imageData = [
    {
      img: "/Photos/1100x800/Lightbox (1).webp",
      title: "carpentry 1",
    },
    {
      img: "/Photos/1100x800/Lightbox (2).webp",
      title: "carpentry 2",
    },
    {
      img: "/Photos/1100x800/Lightbox (3).webp",
      title: "carpentry 3",
    },
    {
      img: "/Photos/1100x800/Lightbox (4).webp",
      title: "ceiling texture 1",
    },
    {
      img: "/Photos/1100x800/Lightbox (5).webp",
      title: "finishing 1",
    },
    {
      img: "/Photos/1100x800/Lightbox (6).webp",
      title: "finishing 2",
    },
    {
      img: "/Photos/1100x800/Lightbox (7).webp",
      title: "install 1",
    },
    {
      img: "/Photos/1100x800/Lightbox (8).webp",
      title: "install 2",
    },
    {
      img: "/Photos/1100x800/Lightbox (9).webp",
      title: "install 3",
    },
    {
      img: "/Photos/1100x800/Lightbox (10).webp",
      title: "repair 1",
    },
    {
      img: "/Photos/1100x800/Lightbox (11).webp",
      title: "flooring 2",
    },
    {
      img: "/Photos/1100x800/Lightbox (12).webp",
      title: "carpentry 1",
    },
    {
      img: "/Photos/1100x800/Lightbox (13).webp",
      title: "carpentry 2",
    },
    {
      img: "/Photos/1100x800/Lightbox (14).webp",
      title: "carpentry 3",
    },
    {
      img: "/Photos/1100x800/Lightbox (15).webp",
      title: "ceiling texture 1",
    },
    {
      img: "/Photos/1100x800/Lightbox (16).webp",
      title: "finishing 1",
    },
    {
      img: "/Photos/1100x800/Lightbox (17).webp",
      title: "finishing 2",
    },
    {
      img: "/Photos/1100x800/Lightbox (18).webp",
      title: "install 1",
    },
    {
      img: "/Photos/1100x800/Lightbox (19).webp",
      title: "install 2",
    },
    {
      img: "/Photos/1100x800/Lightbox (20).webp",
      title: "install 3",
    },
    {
      img: "/Photos/1100x800/Lightbox (21).webp",
      title: "repair 1",
    },
    {
      img: "/Photos/1100x800/Lightbox (22).webp",
      title: "flooring 2",
    },
    {
      img: "/Photos/1100x800/Lightbox (23).webp",
      title: "install 2",
    },
    {
      img: "/Photos/1100x800/Lightbox (24).webp",
      title: "install 3",
    },
    {
      img: "/Photos/1100x800/Lightbox (25).webp",
      title: "repair 1",
    },
    {
      img: "/Photos/1100x800/Lightbox (26).webp",
      title: "flooring 2",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "background.primary" }}>
      <Box
        sx={{
          width: "60%",
          marginX: "20%",
          paddingY: 8,
        }}
      >
        <ImageGrid images={imageData} />
      </Box>
    </Box>
  );
}
