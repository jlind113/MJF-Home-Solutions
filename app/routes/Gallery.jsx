import { Box, Typography, Stack, Chip, Divider } from "@mui/material";
import { useState } from "react";
import ImageGrid from "../components/ImageGrid";
import { cardEntranceStyles } from "../Style/Animations";

export default function Gallery() {
  const imageData = [
    {
      img: "/Photos/1100x800/Lightbox (1).webp",
      title: "Drywall Installation",
      category: "installation",
    },
    {
      img: "/Photos/1100x800/Lightbox (2).webp",
      title: "Ceiling Texture Application",
      category: "ceiling",
    },
    {
      img: "/Photos/1100x800/Lightbox (3).webp",
      title: "Ceiling Texture Application",
      category: "ceiling",
    },
    {
      img: "/Photos/1100x800/Lightbox (4).webp",
      title: "Drywall Installation",
      category: "installation",
    },
    {
      img: "/Photos/1100x800/Lightbox (5).webp",
      title: "Drywall Installation",
      category: "installation",
    },
    {
      img: "/Photos/1100x800/Lightbox (6).webp",
      title: "Drywall Installation",
      category: "installation",
    },
    {
      img: "/Photos/1100x800/Lightbox (7).webp",
      title: "Drywall Installation",
      category: "installation",
    },
    {
      img: "/Photos/1100x800/Lightbox (8).webp",
      title: "Carpentry",
      category: "carpentry",
    },
    {
      img: "/Photos/1100x800/Lightbox (9).webp",
      title: "Carpentry",
      category: "carpentry",
    },
    {
      img: "/Photos/1100x800/Lightbox (10).webp",
      title: "Installation",
      category: "installation",
    },
    {
      img: "/Photos/1100x800/Lightbox (11).webp",
      title: "Installation",
      category: "installation",
    },
    {
      img: "/Photos/1100x800/Lightbox (12).webp",
      title: "Installation",
      category: "installation",
    },
    {
      img: "/Photos/1100x800/Lightbox (13).webp",
      title: "Installation",
      category: "installation",
    },
    {
      img: "/Photos/1100x800/Lightbox (14).webp",
      title: "Installation",
      category: "installation",
    },
    {
      img: "/Photos/1100x800/Lightbox (15).webp",
      title: "Flooring",
      category: "flooring",
    },
    {
      img: "/Photos/1100x800/Lightbox (16).webp",
      title: "Flooring",
      category: "flooring",
    },
    {
      img: "/Photos/1100x800/Lightbox (17).webp",
      title: "Flooring",
      category: "flooring",
    },
    {
      img: "/Photos/1100x800/Lightbox (18).webp",
      title: "Flooring",
      category: "flooring",
    },
    {
      img: "/Photos/1100x800/Lightbox (19).webp",
      title: "Flooring",
      category: "flooring",
    },
    {
      img: "/Photos/1100x800/Lightbox (20).webp",
      title: "Finishing",
      category: "finishing",
    },
    {
      img: "/Photos/1100x800/Lightbox (21).webp",
      title: "Carpentry",
      category: "carpentry",
    },
    {
      img: "/Photos/1100x800/Lightbox (22).webp",
      title: "Finishing",
      category: "finishing",
    },
    {
      img: "/Photos/1100x800/Lightbox (23).webp",
      title: "Finishing",
      category: "finishing",
    },
    {
      img: "/Photos/1100x800/Lightbox (24).webp",
      title: "Finishing",
      category: "finishing",
    },
    {
      img: "/Photos/1100x800/Lightbox (25).webp",
      title: "Finishing",
      category: "finishing",
    },
    {
      img: "/Photos/1100x800/Lightbox (26).webp",
      title: "Finishing",
      category: "finishing",
    },
  ];

  const categories = [
    { key: "all", label: "All Work" },
    { key: "carpentry", label: "Carpentry" },
    { key: "installation", label: "Installation" },
    { key: "finishing", label: "Finishing" },
    { key: "flooring", label: "Flooring" },
    { key: "repair", label: "Repair" },
    { key: "ceiling", label: "Ceiling Work" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredImages =
    selectedCategory === "all"
      ? imageData
      : imageData.filter((image) => image.category === selectedCategory);

  return (
    <Box
      sx={{
        backgroundColor: "background.main",
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
            ...cardEntranceStyles.fadeUpOnMount,
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
            ...cardEntranceStyles.fadeUpOnMount,
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
            ...cardEntranceStyles.fadeUpOnMount,
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
            ...cardEntranceStyles.fadeUpOnMount,
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
