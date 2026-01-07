// MUI Imports
import {
  Grid,
  Box,
  Paper,
  Collapse,
  FormControlLabel,
  Switch,
  Fade,
  Grow,
  Slide,
  Typography,
} from "@mui/material";

import { useRef, useState } from "react";

export default function TestPage() {
  return (
    <Box sx={style.container}>
      <Grid container spacing={1} columns={2} sx={style.gridRoot}>

      </Grid>
    </Box>
  );
}

function FontItem({ font, size }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant={size}
        sx={{ fontFamily: font, textAlign: "left", color: "text.primary" }}
      >
        {font} {size}
      </Typography>
    </Box>
  );
}

function TransitionItem() {
  const [checked, setChecked] = useState(false);
  const containerRef = useRef(null);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const selectVariant = (value) => {
    switch (value) {
      case 1:
        return <Fade in={checked}>{icon}</Fade>;
      case 2:
        return <Collapse in={checked}>{icon}</Collapse>;
      case 3:
        return <Grow in={checked}>{icon}</Grow>;
      case 4:
        return (
          <Slide direction="left" in={checked} container={containerRef.current}>
            {icon}
          </Slide>
        );
    }
  };

  return (
    <Box
      sx={{
        width: "50%",
        height: "50%",
        display: "flex",
        flexDirection: "row",
      }}
      ref={containerRef}
    >
      <Box sx={{ width: "20%", height: "100%" }}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label={checked === false ? "Show" : "Hide"}
        />
      </Box>
      <Box sx={{ width: "20%", height: "100%" }}>{selectVariant(1)}</Box>
      <Box sx={{ width: "20%", height: "100%" }}>{selectVariant(2)}</Box>
      <Box sx={{ width: "20%", height: "100%" }}>{selectVariant(3)}</Box>
      <Box sx={{ width: "20%", height: "100%" }}>{selectVariant(4)}</Box>
    </Box>
  );
}

const icon = (
  <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
    <svg width="100px" height="100px">
      <Box
        component="polygon"
        points="0,100 50,00, 100,100"
        sx={{
          fill: "white",
          stroke: "black",
          strokeWidth: 1,
        }}
      />
    </svg>
  </Paper>
);

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "background.main",
    height: "100%",
    width: "100vw",
  },
  gridRoot: {
    marginY: "1vh",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  innerBox: {
    marginLeft: "25%",
    backgroundColor: "background.dark",
    height: "100px",
    width: "50%",
  },
};
