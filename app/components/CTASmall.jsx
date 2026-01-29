import { Stack } from "@mui/material";
import { CTAButton } from './inputItems/Buttons';

export default function CTASmall() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 2, sm: 6 }}
      width={"100%"}
    >
      <CTAButton link={"/Services"} text={"Our Services"} />
      <CTAButton link={"/Contact"} text={"Get a Quote"} />
    </Stack>
  );
}
