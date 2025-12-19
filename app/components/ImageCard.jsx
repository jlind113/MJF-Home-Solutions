// MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";

import { Close } from "@mui/icons-material";
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
        square
        variant='outlined'
        sx={{
          overflow: "hidden",
          backgroundColor: "background.secondary",
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
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
              onClick={() => handleClickOpen()}
            />
          </CardActionArea>
        </Card>
      </Paper>



                                                                        {/* CONVERT TO CARD */}
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
              sx={{ color: "text.primary" }}
            >
              <Close />
            </IconButton>
          </DialogActions>
        </Box>
        <DialogContent>
          <img src={src} alt={title} style={{ height: "100%", width: "100%" }} />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}
