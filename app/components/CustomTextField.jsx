import { Grid, Tooltip, TextField } from "@mui/material";

export default function CustomTextField({
  tipTitle,
  required,
  type,
  name,
  label,
}) {
  if (required) {
    return (
      <Grid size={6}>
        <Tooltip title={tipTitle} placement="top-start">
          <TextField
            required
            type={type}
            variant="outlined"
            name={name}
            label={label}
            size="small"
            fullWidth
            sx={{ backgroundColor: "background.main" }}
          />
        </Tooltip>
      </Grid>
    );
  } else {
    return (
      <Grid size={6}>
        <Tooltip title={tipTitle} placement="top-start">
          <TextField
            type={type}
            variant="outlined"
            name={name}
            label={label}
            size="small"
            fullWidth
            sx={{ backgroundColor: "background.main" }}
          />
        </Tooltip>
      </Grid>
    );
  }
}
