import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import BodyText from "../textItems/BodyText";
import SubText from "../textItems/SubText";

export default function FAQItem({ question, answer }) {
  return (
    <Accordion
      sx={{
        backgroundColor: "background.main",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel-content"
        id="panel-header"
        sx={{ backgroundColor: "background.main" }}
      >
        <BodyText text={question} />
      </AccordionSummary>
      <AccordionDetails
        sx={{ borderTopWidth: "1px", borderColor: "primary.main" }}
      >
        <SubText text={answer} />
      </AccordionDetails>
    </Accordion>
  );
}
