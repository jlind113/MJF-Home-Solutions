import { Stack } from "@mui/material";
import ContactForm from "../components/ContactForm";
import { ContactMeta } from "../Util/MetaInfo";

export function meta() {
  return ContactMeta;
}

export default function Contact() {
  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ backgroundColor: "background.dark" }}
    >
      <ContactForm />
    </Stack>
  );
}
