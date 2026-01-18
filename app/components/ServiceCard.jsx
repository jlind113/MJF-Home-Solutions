import { Typography, Box, Card } from "@mui/material";
import { useState } from "react";

export default function ServiceCard({ imgSource, serviceText }) {
  const [isHovered, setIsHovered] = useState(false);
  // State to trigger animations

  return (
    <Card
      sx={{
        maxWidth: { xs: 250, sm: 280, md: 320 },
        height: { xs: 250, sm: 280, md: 320 },
        borderRadius: 2,
        cursor: "pointer",
        transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          transform: "translateY(-8px)",
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
        {/* Image Component */}
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

          {/* Image Gradient overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: isHovered
              ? "linear-gradient(to top, #1f7fcc 0%, #1f7eccbe 15%, transparent 30%)"
              : "linear-gradient(to top, #000000 0%, #00000096 15%, transparent 30%)",
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
              color: "#ffffffe6",
              fontSize: "0.85rem",
              marginTop: 0.5,
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.3s ease",
            }}
          >
            View Our Services →
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
