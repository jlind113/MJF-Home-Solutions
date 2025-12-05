import { Box } from "@mui/material";
import ImageGrid from "../components/ImageGrid";

export default function Gallery() {
  const imageData = [
    {
      img: "/Images/Carpentry/carpentry-1.jpeg",
      title: "carpentry 1",
    },
    {
      img: "/Images/Carpentry/carpentry-2.jpeg",
      title: "carpentry 2",
    },
    {
      img: "/Images/Carpentry/carpentry-3.jpeg",
      title: "carpentry 3",
    },
    {
      img: "/Images/Ceiling-Texture/ceiling-texture-1.jpeg",
      title: "ceiling texture 1",
    },
    {
      img: "/Images/Drywall-Finishing/drywall-finishing-1.jpeg",
      title: "finishing 1",
    },
    {
      img: "/Images/Drywall-Finishing/drywall-finishing-2.jpeg",
      title: "finishing 2",
    },
    {
      img: "/Images/Drywall-Installation/drywall-install-1.jpeg",
      title: "install 1",
    },
    {
      img: "/Images/Drywall-Installation/drywall-install-2.jpeg",
      title: "install 2",
    },
    {
      img: "/Images/Drywall-Installation/drywall-install-3.jpeg",
      title: "install 3",
    },
    {
      img: "/Images/Drywall-Repair/repair-1.jpeg",
      title: "repair 1",
    },
    {
      img: "/Images/Flooring/flooring-2.jpeg",
      title: "flooring 2",
    },
    // temp duplicates
    {
      img: "/Images/Carpentry/carpentry-1.jpeg",
      title: "carpentry 1",
    },
    {
      img: "/Images/Carpentry/carpentry-2.jpeg",
      title: "carpentry 2",
    },
    {
      img: "/Images/Carpentry/carpentry-3.jpeg",
      title: "carpentry 3",
    },
    {
      img: "/Images/Ceiling-Texture/ceiling-texture-1.jpeg",
      title: "ceiling texture 1",
    },
    {
      img: "/Images/Drywall-Finishing/drywall-finishing-1.jpeg",
      title: "finishing 1",
    },
    {
      img: "/Images/Drywall-Finishing/drywall-finishing-2.jpeg",
      title: "finishing 2",
    },
    {
      img: "/Images/Drywall-Installation/drywall-install-1.jpeg",
      title: "install 1",
    },
    {
      img: "/Images/Drywall-Installation/drywall-install-2.jpeg",
      title: "install 2",
    },
    {
      img: "/Images/Drywall-Installation/drywall-install-3.jpeg",
      title: "install 3",
    },
    {
      img: "/Images/Drywall-Repair/repair-1.jpeg",
      title: "repair 1",
    },
    {
      img: "/Images/Flooring/flooring-2.jpeg",
      title: "flooring 2",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "background.default" }}>
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
