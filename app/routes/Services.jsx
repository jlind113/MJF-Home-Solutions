// MUI Imports
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";

// React Imports
import { useState } from "react";

// Component Imports
import serviceData from "../Util/ServiceData.json";
import ServiceItem from "../components/ServiceItem";

export default function Services() {
  const [service, setService] = useState(0);
  const [open, setOpen] = useState(false);
  let newImages = service;

  const serviceObject = {
    key: serviceData.services[service],
  };

  function handleChange(event) {
    setService(event.target.value);
    setOpen(false);
    newImages = 0;
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "background.primary",
      }}
    >
      <Paper
        square
        variant='outlined'
        sx={{
          minWidth: 10,
          maxWidth: 300,
          backgroundColor: "background.default",
          marginTop: 6,
          marginBottom: 4,
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="serviceLabel" sx={{ color: "text.primary" }}>
            Service
          </InputLabel>
          <Select
            labelId="serviceLabel"
            id="serviceSelect"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={service}
            label="Service"
            autoWidth
            onChange={handleChange}
          >
            <MenuItem value={0} sx={{ color: "text.primary"  }}>
              Carpentry
            </MenuItem>
            <MenuItem value={1} sx={{ color: "text.primary" }}>
              Ceiling Texture Application
            </MenuItem>
            <MenuItem value={2} sx={{ color: "text.primary" }}>
              Custom Drywall
            </MenuItem>
            <MenuItem value={3} sx={{ color: "text.primary" }}>
              Drywall Finishing
            </MenuItem>
            <MenuItem value={4} sx={{ color: "text.primary" }}>
              Drywall Installation
            </MenuItem>
            <MenuItem value={5} sx={{ color: "text.primary" }}>
              Drywall Repair
            </MenuItem>
            <MenuItem value={6} sx={{ color: "text.primary" }}>
              Flooring
            </MenuItem>
          </Select>
        </FormControl>
      </Paper>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 4,
        }}
      >
        <ServiceItem
          name={serviceObject.key.name}
          subtext={serviceObject.key.subtext}
          description={serviceObject.key.description}
          images={serviceObject.key.images}
          serviceID={service}
        />
      </Box>
    </Box>
  );
}
