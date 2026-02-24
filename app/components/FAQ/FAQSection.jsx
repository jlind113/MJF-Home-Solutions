import { Box } from "@mui/material";
import FAQItem from "./FAQItem";
import Header from "../textItems/Header";
import { FAQInfo } from "../../Util/FAQInfo";
import GradientDivider from "../GradientDivider";

export default function FAQSection() {
  return (
    <Box sx={style.boxRoot}>
      <Header text={"Frequently Asked Questions"} />
      <Box sx={style.gradientContainer}>
        <GradientDivider />
      </Box>
      {FAQInfo.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </Box>
  );
}

const style = {
  boxRoot: {
    width: "50vw",
    maxWidth: "1080px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  gradientContainer: {
    marginBottom: "1em",
    width: "100%",
  },
};
