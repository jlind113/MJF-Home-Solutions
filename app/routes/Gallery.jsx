import { Box, Typography, Stack, Chip, Divider } from "@mui/material";
import { useState, useMemo } from "react";
import ImageGrid from "../components/ImageGrid";
import { entranceAnims } from "../Style/Animations";
import { services } from '../Util/ServiceInfo';

export default function Gallery() {
  const imageData = useMemo(() => {
    const allImages = [];
    Object.keys(services).forEach(serviceKey => {
      const service = services[serviceKey];
      if (service.images && service.images.length > 0) {
        // Only add images that have a valid path
        service.images.forEach(image => {
          if (image.path && image.path.trim() !== "") {
            allImages.push({
              ...image,
              category: serviceKey, // Ensure category matches the service key
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
    const filtered = imageData.filter((image) => image.category === selectedCategory);
    return filtered;
  }, [imageData, selectedCategory]);

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100vh",
        paddingY: { xs: 3, sm: 4, md: 6 },
        paddingX: { xs: 2, sm: 3 },
      }}
    >
      <Stack
        spacing={{ xs: 3, sm: 4, md: 5 }}
        alignItems="center"
        justifyContent={"center"}
      >
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: 800,
            ...entranceAnims.fadeUpOnMount,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "text.primary",
              fontWeight: 700,
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
              marginBottom: 2,
            }}
          >
            Project Gallery
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "1.1rem", sm: "1.2rem" },
              lineHeight: 1.6,
              marginBottom: 1,
            }}
          >
            Showcasing Our Work
          </Typography>

          <Divider
            sx={{
              width: { xs: "80%", lg: "100%" },
              height: 2,
              marginBottom: 2,
              background:
                "linear-gradient(90deg, transparent, #cc5a28, #29a2ff, transparent)",
              borderRadius: 2,
            }}
          />
        </Box>

        <Box
          sx={{
            ...entranceAnims.fadeUpOnMount,
            animationDelay: "0.2s",
            animationFillMode: "both",
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            gap={1}
            flexWrap="wrap"
            justifyContent="center"
            sx={{ maxWidth: 700 }}
          >
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
                sx={{
                  margin: 0.5,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(41, 162, 255, 0.3)",
                  },
                }}
              />
            ))}
          </Stack>
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontSize: "0.95rem",
            ...entranceAnims.fadeUpOnMount,
            animationDelay: "0.4s",
            animationFillMode: "both",
          }}
        >
          Showing {filteredImages.length} project
          {filteredImages.length !== 1 ? "s" : ""}
        </Typography>

        <Box
          sx={{
            width: "100%",
            maxWidth: 1400,
            ...entranceAnims.fadeUpOnMount,
            animationDelay: "0.6s",
            animationFillMode: "both",
          }}
        >
          <ImageGrid images={filteredImages} />
        </Box>
      </Stack>
    </Box>
  );
}
