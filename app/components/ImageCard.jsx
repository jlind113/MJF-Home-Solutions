import { Box, Paper, Dialog, IconButton, Typography } from "@mui/material";
import { Close, ZoomIn } from "@mui/icons-material";
import { useState } from "react";
import { entranceAnims, hoverAnims } from "../Style/Animations";
import { leftToRight } from "../Style/Gradients";

export default function ImageCard({ src, title, alt }) {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Paper
        elevation={2}
        sx={style.root}
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
          <Box sx={style.imageBox}>
            <ZoomIn sx={style.zoom} />
          </Box>
        )}

        {isHovered && (
          <Box sx={style.hoverTextContainer}>
            <Typography variant="body2" sx={style.hoverText}>
              {title}
            </Typography>
          </Box>
        )}
      </Paper>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        slotProps={style.dialogProps}
        sx={{ ...entranceAnims.fadeIn }}
      >
        <Box sx={style.dialogContainer}>
          <IconButton onClick={handleClose} sx={style.closeButton}>
            <Close />
          </IconButton>

          <img src={src} alt={title} style={style.dialogImage} />
        </Box>
      </Dialog>
    </>
  );
}

const style = {
  root: {
    width: { xs: "12em", sm: "14em", lg: "16em" },
    height: { xs: "9em", sm: "10.5em", lg: "12em" },
    overflow: "hidden",
    cursor: "pointer",
    position: "relative",
    borderRadius: 1,
    ...hoverAnims.scale,
  },
  imageBox: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    ...leftToRight.blueToOrange,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...entranceAnims.fadeIn,
  },
  zoom: {
    color: "white",
    fontSize: "2rem",
    ...entranceAnims.fadeUpOnMount,
  },
  hoverTextContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    background: "#000000cc",
    padding: 1,
    ...hoverAnims.imageCardHover,
  },
  hoverText: {
    color: "white",
    fontSize: "0.8rem",
    fontWeight: 500,
    textAlign: "center",
  },
  dialogProps: {
    backdrop: {
      sx: {
        backgroundColor: "#000000e6",
      },
    },
  },
  dialogContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  closeButton: {
    position: "absolute",
    top: 4,
    right: 4,
    height: "2rem",
    width: "2rem",
    color: "background.dark",
    backgroundColor: "text.primary",
    "&:hover": { backgroundColor: "primary.dark", ...hoverAnims.scale },
  },
  dialogImage: {
    maxWidth: "100%",
    maxHeight: "90vh",
    objectFit: "contain",
    borderRadius: 1,
  },
};
