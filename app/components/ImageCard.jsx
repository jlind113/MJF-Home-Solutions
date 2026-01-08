// MUI Imports
import { Box, Paper, Dialog, IconButton, Typography } from "@mui/material";
import { Close, ZoomIn } from "@mui/icons-material";
import { useState } from "react";

export default function ImageCard({ src, title }) {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Paper
        elevation={2}
        sx={{
          width: { xs: "12em", sm: "14em", lg: "16em" },
          height: { xs: "9em", sm: "10.5em", lg: "12em" },
          backgroundColor: "background.secondary",
          overflow: "hidden",
          cursor: "pointer",
          position: "relative",
          borderRadius: 2,
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
          },
        }}
        onClick={handleOpen}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Simple img tag like the original */}
        <img
          src={src}
          loading="lazy"
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.5s ease",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />

        {/* Hover Overlay */}
        {isHovered && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(135deg, rgba(41, 162, 255, 0.7), rgba(204, 90, 40, 0.7))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "fadeIn 0.3s ease",
              "@keyframes fadeIn": {
                from: { opacity: 0 },
                to: { opacity: 1 },
              },
            }}
          >
            <ZoomIn
              sx={{
                color: "white",
                fontSize: "2rem",
              }}
            />
          </Box>
        )}

        {/* Title on Hover */}
        {isHovered && (
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: "rgba(0, 0, 0, 0.8)",
              padding: 1,
              animation: "slideUp 0.3s ease",
              "@keyframes slideUp": {
                from: { transform: "translateY(100%)" },
                to: { transform: "translateY(0)" },
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "white",
                fontSize: "0.8rem",
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              {title}
            </Typography>
          </Box>
        )}
      </Paper>

      {/* Updated Dialog with new slotProps syntax */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              backgroundColor: "transparent",
              boxShadow: "none",
            },
          },
          backdrop: {
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.9)",
            },
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
              },
            }}
          >
            <Close />
          </IconButton>

          <img
            src={src}
            alt={title}
            style={{
              maxWidth: "100%",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: "8px",
            }}
          />

          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              bottom: 16,
              left: "50%",
              transform: "translateX(-50%)",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              padding: "8px 16px",
              borderRadius: 2,
              fontSize: "1rem",
            }}
          >
            {title}
          </Typography>
        </Box>
      </Dialog>
    </>
  );
}
