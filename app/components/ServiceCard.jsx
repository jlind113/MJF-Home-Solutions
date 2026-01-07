import { Typography, Box, Card } from "@mui/material";
import { useState } from "react";

export default function ServiceCard({ imgSource, serviceText }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: 350 },
        height: { xs: 250, sm: 280, md: 320 },
        backgroundColor: "background.main",
        overflow: "hidden",
        borderRadius: 2,
        position: "relative",
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        sx={{
          position: "relative",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={imgSource}
          alt={serviceText}
          sx={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            ...(isHovered && {
              transform: "scale(1.05)",
            }),
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: isHovered
              ? "linear-gradient(to top, rgba(41, 162, 255, 0.8) 0%, rgba(41, 162, 255, 0.2) 50%, transparent 100%)"
              : "linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, transparent 100%)",
            transition: "background 0.3s ease",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            p: { xs: 2, sm: 2.5 },
            transform: isHovered ? "translateY(0)" : "translateY(10px)",
            transition: "transform 0.3s ease",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "white",
              fontWeight: 600,
              fontSize: { xs: "1.1rem", sm: "1.2rem" },
              lineHeight: 1.3,
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              ...(isHovered && {
                transform: "translateY(-4px)",
                transition: "transform 0.3s ease",
              }),
            }}
          >
            {serviceText}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: "0.85rem",
              marginTop: 0.5,
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.3s ease",
              transition: "0.2s",
            }}
          >
            Learn More →
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
