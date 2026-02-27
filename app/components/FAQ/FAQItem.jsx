import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import BodyText from "../textItems/BodyText";
import SubText from "../textItems/SubText";

export default function FAQItem({ question, answer }) {
  return (
    <Accordion
      sx={style.accordionRoot}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel-content"
        id="panel-header"
        sx={style.summary}
      >
        <BodyText text={question} />
      </AccordionSummary>
      <AccordionDetails
        sx={style.details}
      >
        <SubText text={answer} />
      </AccordionDetails>
    </Accordion>
  );
}

const style = {
  accordionRoot: {
    backgroundColor: "background.main",
  },
  summary: {
    backgroundColor: "background.main",
  },
  details: {
    borderTopWidth: "1px",
    borderColor: "primary.main",
  },
}