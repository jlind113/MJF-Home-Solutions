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
import { hoverAnims } from "../Style/Animations";
import Header from "./textItems/Header";

export default function ContactForm() {
  return (
    <Paper
      variant="outlined"
      elevation={0}
      component={"form"}
      name="contact"
      method="post"
      sx={style.paperRoot}
    >
      <Grid container rowSpacing={2} columnSpacing={3} sx={style.gridRoot}>
        <input type="hidden" name="form-name" value="contact" />

        <Grid size={12}>
          <Header text={"Get In Touch"} />
        </Grid>

        <Grid size={6}>
          <Tooltip title={"First Name"} placement="top-start">
            <TextField
              required
              type={"text"}
              variant="outlined"
              name={"firstName"}
              label={"First Name"}
              size="small"
              fullWidth
              sx={style.textInput}
            />
          </Tooltip>
        </Grid>

        <Grid size={6}>
          <Tooltip title={"Last Name"} placement="top-start">
            <TextField
              required
              type={"text"}
              variant="outlined"
              name={"lastName"}
              label={"Last Name"}
              size="small"
              fullWidth
              sx={style.textInput}
            />
          </Tooltip>
        </Grid>

        <Grid size={6}>
          <Tooltip title={"Phone Number"} placement="top-start">
            <TextField
              required
              type={"tel"}
              variant="outlined"
              name={"phone"}
              label={"Phone Number"}
              size="small"
              fullWidth
              sx={style.textInput}
            />
          </Tooltip>
        </Grid>

        <Grid size={6}>
          <Tooltip title={"Email"} placement="top-start">
            <TextField
              required
              type={"email"}
              variant="outlined"
              name={"email"}
              label={"Email"}
              size="small"
              fullWidth
              sx={style.textInput}
            />
          </Tooltip>
        </Grid>

        <Grid size={6}>
          <Tooltip title={"Street Address"} placement="top-start">
            <TextField
              type={"text"}
              variant="outlined"
              name={"street"}
              label={"Street Address"}
              size="small"
              fullWidth
              sx={style.textInput}
            />
          </Tooltip>
        </Grid>

        <Grid size={6}>
          <Tooltip title={"State"} placement="top-start">
            <TextField
              type={"text"}
              variant="outlined"
              name={"state"}
              label={"State"}
              size="small"
              fullWidth
              sx={style.textInput}
            />
          </Tooltip>
        </Grid>

        <Grid size={6}>
          <Tooltip title={"Zip Code"} placement="top-start">
            <TextField
              type={"text"}
              variant="outlined"
              name={"zipCode"}
              label={"Zip Code"}
              size="small"
              fullWidth
              sx={style.textInput}
            />
          </Tooltip>
        </Grid>

        <Grid size={6}>
          <Tooltip title={"Date of Service"} placement="top-start">
            <TextField
              slotProps={{ inputLabel: { shrink: true } }}
              type={"date"}
              variant="outlined"
              name={"date"}
              label={"Preferred Date of Service"}
              size="small"
              fullWidth
              sx={style.textInput}
            />
          </Tooltip>
        </Grid>

        <Grid size={12}>
          <Typography variant="body2">Services</Typography>
          <Paper variant="outlined" sx={style.serviceList}>
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
            sx={style.commentBox}
          />
        </Grid>
        <Grid size={12}>
          <Divider sx={style.divider} />
          <Box sx={style.disclaimerContainer}>
            <Typography variant="body2" sx={style.disclaimerText}>
              By providing your phone number, you agree to receive text messages
              (SMS) from MJF Home Solutions. Message and data rates may apply.
            </Typography>
          </Box>
          <Box sx={style.sendButtonContainer}>
            <Button type="submit" variant="contained" sx={style.sendButton}>
              Send
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

const style = {
  paperRoot: {
    width: { xs: "90vw", sm: "80vw", md: "70vw", lg: "60vw", xl: "50vw" },
    height: "fit-content",
    backgroundColor: "background.main",
    marginY: { xs: "2em", lg: "2em" },
    padding: { xs: "1em", lg: "2em" },
  },
  gridRoot: {
    marginY: "1em",
    marginX: "1em",
  },
  textInput: {
    backgroundColor: "background.light",
    borderRadius: 1,
  },
  serviceList: {
    borderWidth: "1px",
    borderColor: "text.disabled",
    backgroundColor: "background.light",
    paddingY: "0.5em",
    paddingX: "2em",
    marginTop: "1em",
    borderRadius: 1,
  },
  commentBox: {
    backgroundColor: "background.light",
    marginTop: "1em",
    borderRadius: 1,
  },
  divider: {
    width: "100%",
    backgroundColor: "text.disabled",
  },
  disclaimerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  disclaimerText: {
    fontSize: 13,
    color: "text.secondary",
    width: "90%",
    marginY: "1em",
  },
  sendButtonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  sendButton: {
    width: "40%",
    marginTop: "1em",
    backgroundColor: "primary.main",
    ...hoverAnims.scale,
  },
};
