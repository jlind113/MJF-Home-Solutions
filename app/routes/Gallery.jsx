import { Box, Typography, Stack, Chip } from "@mui/material";
import { useState, useMemo } from "react";
import ImageGrid from "../components/ImageGrid";
import { entranceAnims, hoverAnims } from "../Style/Animations";
import { services } from "../Util/ServiceInfo";
import Header from "../components/textItems/Header";
import GradientDivider from "../components/GradientDivider";
import BodyText from "../components/textItems/BodyText";
import { GalleryMeta } from "../Util/MetaInfo";

export function meta() {
  return GalleryMeta;
}

export default function Gallery() {
  const imageData = useMemo(() => {
    const allImages = [];
    Object.keys(services).forEach((serviceKey) => {
      const service = services[serviceKey];
      if (service.images && service.images.length > 0) {
        service.images.forEach((image) => {
          if (image.path && image.path.trim() !== "") {
            allImages.push({
              ...image,
              category: serviceKey,
            });
          }
        });
      }
    });
    return allImages;
  }, []);

  const categories = [
    { key: "all", label: "All Work" },
    { key: "carpentry", label: services.carpentry.name },
    { key: "installation", label: services.installation.name },
    { key: "finishing", label: services.finishing.name },
    { key: "flooring", label: services.flooring.name },
    { key: "repair", label: services.repair.name },
    { key: "ceiling", label: services.ceiling.name },
    { key: "custom", label: services.custom.name },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredImages = useMemo(() => {
    if (selectedCategory === "all") {
      return imageData;
    }
    const filtered = imageData.filter(
      (image) => image.category === selectedCategory,
    );
    return filtered;
  }, [imageData, selectedCategory]);

  return (
    <Box sx={style.rootBoxContainer}>
      <Stack
        spacing={{ xs: 3, sm: 4, md: 5 }}
        alignItems="center"
        justifyContent="center"
      >
        <Box sx={style.headerTextContainer}>
          <Header text={"Project Gallery"} />

          <Box sx={style.headerBox}>
            <BodyText text={"Showcasing Our Work"} />
          </Box>

          <GradientDivider />
        </Box>

        <Box sx={style.buttonBox}>
          <Stack direction="row" spacing={1} sx={style.buttonStack}>
            {categories.map((category) => (
              <Chip
                key={category.key}
                label={category.label}
                variant={
                  selectedCategory === category.key ? "filled" : "outlined"
                }
                color={
                  selectedCategory === category.key ? "primary" : "default"
                }
                onClick={() => setSelectedCategory(category.key)}
                sx={style.sortingChip}
              />
            ))}
          </Stack>
        </Box>

        <Typography variant="body2" sx={style.sortingText}>
          Showing {filteredImages.length} project
          {filteredImages.length !== 1 ? "s" : ""}
        </Typography>

        <Box sx={style.gridContainer}>
          <ImageGrid images={filteredImages} />
        </Box>
      </Stack>
    </Box>
  );
}

const style = {
  rootBoxContainer: {
    backgroundColor: "background.dark",
    minHeight: "100vh",
    paddingY: { xs: 3, sm: 4, md: 6 },
    paddingX: { xs: 2, sm: 3 },
  },
  headerTextContainer: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 800,
    ...entranceAnims.fadeUpOnMount,
  },
  headerBox: {
    marginBottom: 2,
  },
  buttonBox: {
    ...entranceAnims.fadeUpOnMount,
    animationDelay: "0.2s",
    animationFillMode: "both",
  },
  buttonStack: {
    maxWidth: 700,
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 1,
  },
  sortingChip: {
    margin: 0.5,
    cursor: "pointer",
    ...hoverAnims.scale,
  },
  sortingText: {
    color: "text.secondary",
    fontSize: "0.95rem",
    ...entranceAnims.fadeUpOnMount,
    animationDelay: "0.4s",
    animationFillMode: "both",
  },
  gridContainer: {
    width: "100%",
    maxWidth: 1400,
    ...entranceAnims.fadeUpOnMount,
    animationDelay: "0.6s",
    animationFillMode: "both",
  },
};
