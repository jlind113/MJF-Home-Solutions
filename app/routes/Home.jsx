import { Box, Stack } from "@mui/material";
import HomeHero from "../components/HomeHero";
import CardRow from "../components/CardRow";
import About from "../components/About";
import ServiceShowcase from "../components/ServiceShowcase";
import ReviewSection from "../components/reviews/ReviewSection";
import { HomeMeta } from "../Util/MetaInfo";
import FAQSection from '../components/FAQ/FAQSection';

export function meta() {
  return HomeMeta;
}

export default function Home() {
  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "background.dark",
      }}
    >
      <Stack
        direction={"column"}
        width={"100%"}
        height={"100%"}
        alignItems={"center"}
        spacing={4}
      >
        <HomeHero />
        <CardRow />
        <About />
        <ServiceShowcase />
        <ReviewSection />
        <FAQSection />
        <Box width={"100%"} height={"1vh"} />
      </Stack>
    </Box>
  );
}
