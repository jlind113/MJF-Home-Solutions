import { Close } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import { Fragment, useState } from "react";

export default function ImageCard({ src, title }) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClickClose() {
    setOpen(false);
  }

  return (
    <Fragment>
      <Paper
        sx={{
          overflow: "hidden",
          borderRadius: 4,
          backgroundColor: "background.paper",
          transition: "transform 0.25s",
          "&:hover": {
            transform: "translateY(-6px)",
          },
        }}
      >
        <Card>
          <CardActionArea>
            <CardMedia
              component={"img"}
              loading="lazy"
              src={src}
              alt={title}
              sx={{
                height: { xs: 160, sm: 200, lg: 240 },
                objectFit: "cover",
              }}
              onClick={() => handleClickOpen()}
            />
          </CardActionArea>
        </Card>
      </Paper>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={() => handleClickClose()}
        aria-labelledby="responsive-dialog-title"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "background.paper",
            borderRadius: 4
          }}
        >
          <DialogTitle
            id="responsive-dialog-title"
            sx={{ color: "text.primary" }}
          >
            {title}
          </DialogTitle>
          <DialogActions>
            <IconButton
              onClick={() => handleClickClose()}
              sx={{ color: "text.primary", backgroundColor: "background.default" }}
            >
              <Close />
            </IconButton>
          </DialogActions>
        </Box>
        <DialogContent>
          <img src={src} alt={title} style={{ width: "100%" }} />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}
