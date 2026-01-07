// MUI Imports
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";

// Component Imports
import serviceData from "../Util/ServiceData.json";
import ServiceItem from "../components/ServiceItem";

export default function Services() {
  const [service, setService] = useState(0);

  const services = serviceData.services ?? [];

  const serviceOptions = useMemo(
    () => services.map((s, index) => ({ value: index, label: s.name })),
    [services]
  );

  const currentService = services[service] ?? services[0];

  function handleChange(event) {
    setService(Number(event.target.value));
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
              <InputLabel id="serviceLabel">Service</InputLabel>
              <Select
                labelId="serviceLabel"
                id="serviceSelect"
                value={service}
                label="Service"
                onChange={handleChange}
              >
                {serviceOptions.map((opt) => (
                  <MenuItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Paper>
        </Stack>

        <Box sx={{ marginTop: { xs: 3, md: 5 } }}>
          {currentService ? (
            <ServiceItem
              name={currentService.name}
              subtext={currentService.subtext}
              description={currentService.description}
              images={currentService.images}
              serviceID={service}
            />
          ) : null}
        </Box>
      </Box>
    </Box>
  );
}
