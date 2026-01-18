// MUI Imports
import {
  Box,
  MenuItem,
  FormControl,
  Select,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

// Component Imports
import {services} from "../Util/ServiceInfo";
import ServiceItem from "../components/ServiceItem";

export default function Services() {
  const [service, setService] = useState(0);

  const serviceArray = [
    services.carpentry,
    services.ceiling,
    services.custom,
    services.finishing,
    services.installation,
    services.repair,
    services.flooring
  ]

  function handleChange(event) {
    setService(event.target.value);
  }

  return (
    <Box
      sx={{
        minHeight: "100%",
        backgroundColor: "background.dark",
        py: { xs: 4, md: 6 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Typography
            sx={{ typography: { xs: "h4", md: "h3" }, color: "text.primary" }}
          >
            Services
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 760 }}
          >
            Choose a service to see a description and photos.
          </Typography>

          <Paper
            elevation={1}
            sx={{
              width: { xs: "100%", sm: 360 },
              backgroundColor: "background.light",
            }}
          >
            <FormControl fullWidth size="small">
              <Select
                labelId="serviceLabel"
                id="serviceSelect"
                value={service}
                onChange={handleChange}
              >
                <MenuItem value={0}>{serviceArray[0].name}</MenuItem>
                <MenuItem value={1}>{serviceArray[1].name}</MenuItem>
                <MenuItem value={2}>{serviceArray[2].name}</MenuItem>
                <MenuItem value={3}>{serviceArray[3].name}</MenuItem>
                <MenuItem value={4}>{serviceArray[4].name}</MenuItem>
                <MenuItem value={5}>{serviceArray[5].name}</MenuItem>
                <MenuItem value={6}>{serviceArray[6].name}</MenuItem>
              </Select>
            </FormControl>
          </Paper>
        </Stack>

        <Box sx={{ marginTop: { xs: 3, md: 5 } }}>
          <ServiceItem
            name={serviceArray[service].name}
            subtext={serviceArray[service].subtext}
            description={serviceArray[service].description}
            images={serviceArray[service].images}
          />
        </Box>
      </Box>
    </Box>
  );
}
