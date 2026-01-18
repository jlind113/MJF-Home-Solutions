// MUI Imports
import { Box, Paper, Dialog, IconButton, Typography } from "@mui/material";
import { Close, ZoomIn } from "@mui/icons-material";
import { useState } from "react";
import { entranceAnims, hoverAnims } from '../Style/Animations';

export default function ImageCard({ src, title, alt }) {
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
          overflow: "hidden",
          cursor: "pointer",
          position: "relative",
          borderRadius: 2,
          ...hoverAnims.scale
        }}
        onClick={handleOpen}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={src}
          loading="lazy"
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.5s ease",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />

        {isHovered && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(135deg, #29a2ffb3, #cc5a28b3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ...entranceAnims.fadeIn
            }}
          >
            <ZoomIn
              sx={{
                color: "white",
                fontSize: "2rem",
                ...entranceAnims.fadeUpOnMount
              }}
            />
          </Box>
        )}

        {isHovered && (
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: "rgba(0, 0, 0, 0.8)",
              padding: 1,
              ...hoverAnims.imageCardHover
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
        sx={{...entranceAnims.fadeIn}}
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
              backgroundColor: "#000000",
              ...hoverAnims.linkHover
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
        </Box>
      </Dialog>
    </>
  );
}
