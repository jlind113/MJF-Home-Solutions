import { Box, Stack } from "@mui/material";
import HomeHero from "../components/HomeHero";
import CardRow from "../components/CardRow";
import About from "../components/About";
import ServiceShowcase from "../components/ServiceShowcase";

export function meta() {
  return [
    { title: "MJF Home Solutions" },
    { name: "description", content: "Commercial and residential construction" },
    { name: "keywords", content: "Construction, Drywall, Carpentry, Flooring, Home improvement, Remodeling, Repair, Installation" },
    { name: "author", content: "Jack Lindgren" }
  ];
}

export default function Home() {
  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "background.main",
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
        <Box width={"100%"} height={"1vh"} />
      </Stack>
    </Box>
  );
}