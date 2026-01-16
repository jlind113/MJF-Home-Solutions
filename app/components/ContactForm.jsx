// MUI Imports
import {
  Box,
  Grid,
  Paper,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Tooltip,
  Divider,
  Stack,
  Button,
} from "@mui/material";

import CustomTextField from "./CustomTextField";

export default function ContactForm() {
  return (
    <Paper
      elevation={4}
      component={"form"}
      autoComplete="on"
      name="contact"
      method="post"
      sx={{
        width: { xs: "90vw", sm: "80vw", md: "70vw", lg: "60vw", xl: "50vw" },
        height: "fit-content",
        backgroundColor: "background.main",
        marginY: { xs: "2vh", lg: "2vh" },
        paddingX: { xs: "1vw", lg: "2vw" },
      }}
    >
      <Grid
        container
        rowSpacing={2}
        columnSpacing={3}
        sx={{ marginY: "1vh", marginX: "1vw" }}
      >
        <input type="hidden" name="form-name" value="contact" />
        <Grid size={12}>
          <Typography variant="h6" textAlign={"center"}>
            Contact Us
          </Typography>
        </Grid>

        <CustomTextField
          tipTitle={"First Name"}
          required={true}
          type={"text"}
          name={"firstName"}
          label={"First Name"}
        />

        <CustomTextField
          tipTitle={"Last Name"}
          required={true}
          type={"text"}
          name={"lastName"}
          label={"Last Name"}
        />

        <CustomTextField
          tipTitle={"Phone Number"} 
          required={true}
          type={"tel"}
          name={"phone"}
          label={"Phone Number"}
        />

        <CustomTextField
          tipTitle={"Email"} 
          required={true}
          type={"email"}
          name={"email"}
          label={"Email"}
        />

        <CustomTextField
          tipTitle={"Street Address"} 
          required={false}
          type={"text"}
          name={"street"}
          label={"Street Address"}
        />

        <CustomTextField
          tipTitle={"State"} 
          required={false}
          type={"text"}
          name={"state"}
          label={"State"}
        />

        <CustomTextField
          tipTitle={"Zip Code"} 
          required={false}
          type={"text"}
          name={"zipCode"}
          label={"Zip Code"}
        />

        <Grid size={6}>
          <Tooltip title="Date of Service" placement="top-start">
            <TextField
              type="date"
              variant="outlined"
              name="date"
              label="Preferred Date of Service"
              size="small"
              fullWidth
              slotProps={{ inputLabel: { shrink: true } }}
              sx={{ backgroundColor: "background.main" }}
            />
          </Tooltip>
        </Grid>

        <Grid size={12}>
          <Typography variant="body2">Services</Typography>
          <Paper
            variant="outline"
            sx={{
              borderColor: "text.disabled",
              borderWidth: 1,
              backgroundColor: "background.secondary",
              paddingY: 1,
              paddingX: 2,
              marginTop: 1,
            }}
          >
            <Stack direction={"row"} justifyContent={"space-between"}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox name="custom" />}
                  label="Custom Drywall"
                />
                <FormControlLabel
                  control={<Checkbox name="finish" />}
                  label="Drywall Finishing"
                />
                <FormControlLabel
                  control={<Checkbox name="install" />}
                  label="Drywall Installation"
                />
                <FormControlLabel
                  control={<Checkbox name="repair" />}
                  label="Drywall Repair"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox name="carpentry" />}
                  label="Carpentry"
                />
                <FormControlLabel
                  control={<Checkbox name="ceiling" />}
                  label="Ceiling Texture Application"
                />
                <FormControlLabel
                  control={<Checkbox name="flooring" />}
                  label="Flooring"
                />
              </FormGroup>
            </Stack>
          </Paper>
        </Grid>
        <Grid size={12}>
          <Typography variant="body2">Comments</Typography>
          <TextField
            type="text"
            name="comments"
            multiline
            fullWidth
            minRows={4}
            placeholder={"Add any additional comments here..."}
            sx={{ backgroundColor: "background.main", marginTop: 1 }}
          />
        </Grid>
        <Grid size={12}>
          <Divider sx={{ width: "100%", backgroundColor: "text.disabled" }} />
          <Box sx={{ width: "100%" }}>
            <Typography
              variant="body2"
              fontSize={13}
              color="text.secondary"
              marginY={"1%"}
            >
              By providing your phone number, you agree to receive text messages
              (SMS) from MJF Home Solutions. Message and data rates may apply.
            </Typography>
          </Box>
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "90%",
              marginX: "5%",
              marginTop: "1vh",
              backgroundColor: "primary.main",
            }}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
