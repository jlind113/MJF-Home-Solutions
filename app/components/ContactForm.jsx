// MUI Imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";


export default function ContactForm() {
  return (
    <Paper
      square
      elevation={4}
      component={"form"}
      noValidate
      autoComplete="off"
      sx={{
        width: { xs: "90vw", sm: "80vw", md: "70vw", lg: "60vw", xl: "50vw" },
        height: "fit-content",
        backgroundColor: "background.secondary",
        marginY: { xs: "2vh", lg: "2vh" },
        paddingX: { xs: "1vw", lg: "2vw" },
      }}
    >
      <Grid
        container
        component={"form"}
        rowSpacing={2}
        columnSpacing={3}
        sx={{ marginY: "1vh", marginX: "1vw" }}
      >
        <Grid size={12}>
          <Typography variant="h6" textAlign={"center"}>
            Contact Us
          </Typography>
        </Grid>
        <Grid size={6}>
          <Tooltip title="First Name" placement="top-start">
            <TextField
              required
              type="text"
              variant="outlined"
              id="First Name Input"
              label="First Name"
              size="small"
              fullWidth
              sx={{ backgroundColor: "background.secondary" }}
            />
          </Tooltip>
        </Grid>
        <Grid size={6}>
          <TextField
            required
            type="text"
            variant="outlined"
            id="Last Name Input"
            label="Last Name"
            defaultValue={""}
            size="small"
            fullWidth
            sx={{ backgroundColor: "background.secondary" }}
          />
        </Grid>
        <Grid size={6}>
          <TextField
            required
            type="tel"
            variant="outlined"
            id="Phone Number Input"
            label="Phone Number"
            defaultValue={""}
            size="small"
            fullWidth
            sx={{ backgroundColor: "background.secondary" }}
          />
        </Grid>
        <Grid size={6}>
          <TextField
            required
            type="text"
            variant="outlined"
            label="Address"
            defaultValue={""}
            size="small"
            fullWidth
            sx={{ backgroundColor: "background.secondary" }}
          />
        </Grid>
        <Grid size={6}>
          <TextField
            type="email"
            variant="outlined"
            id="Email Input"
            label="Email"
            defaultValue={""}
            size="small"
            fullWidth
            sx={{ backgroundColor: "background.secondary" }}
          />
        </Grid>
        <Grid size={6}>
          <TextField
            type="date"
            variant="outlined"
            id="Date Input"
            label="Preferred Date of Service"
            defaultValue={""}
            size="small"
            fullWidth
            slotProps={{ inputLabel: { shrink: true } }}
            sx={{ backgroundColor: "background.secondary" }}
          />
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
            }}
          >
            <Stack direction={"row"} justifyContent={"space-between"}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Custom Drywall"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Drywall Finishing"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Drywall Installation"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Drywall Repair"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Carpentry" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Ceiling Texture Application"
                />
                <FormControlLabel control={<Checkbox />} label="Flooring" />
              </FormGroup>
            </Stack>
          </Paper>
        </Grid>
        <Grid size={12}>
          <Typography variant="body2">How can we help?</Typography>
          <TextField
            type="text"
            multiline
            fullWidth
            minRows={4}
            label={"Type your response here..."}
            sx={{ backgroundColor: "background.secondary" }}
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
              (SMS) from MJF Home Solutions. You can unsubscribe at anytime by
              replying STOP. Message and data rates may apply. Message frequency
              varies. See our Privacy Policy for more details.
            </Typography>
          </Box>
          <Button
            variant="contained"
            type="submit"
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
