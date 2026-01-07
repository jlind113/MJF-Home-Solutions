import { Stack } from "@mui/material";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ backgroundColor: "background.primary" }}
    >
      <ContactForm />
    </Stack>
  );
}
