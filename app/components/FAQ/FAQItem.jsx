import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import BodyText from '../textItems/BodyText';
import SubText from "../textItems/SubText";

export default function FAQItem({ question, answer }) {
  return (
    <Accordion sx={{
        backgroundColor: "background.light"
    }}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel-content"
        id="panel-header"
      >
        <BodyText text={question} />
      </AccordionSummary>
      <AccordionDetails>
        <SubText text={answer} />
      </AccordionDetails>
    </Accordion>
  );
}
