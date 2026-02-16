import { Box } from "@mui/material";
import FAQItem from "./FAQItem";
import Header from "../textItems/Header";
import { FAQInfo } from "../../Util/FAQInfo";
import GradientDivider from "../GradientDivider";

export default function FAQSection() {
  return (
    <Box
      sx={{
        width: "80vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header text={"Frequently Asked Questions"} />
      <Box sx={{ marginBottom: "1em", width: "100%" }}>
        <GradientDivider />
      </Box>
      <FAQItem
        question={FAQInfo.estimates.question}
        answer={FAQInfo.estimates.answer}
      />
      <FAQItem
        question={FAQInfo.difference.question}
        answer={FAQInfo.difference.answer}
      />
      <FAQItem
        question={FAQInfo.drywallServices.question}
        answer={FAQInfo.drywallServices.answer}
      />
    </Box>
  );
}
