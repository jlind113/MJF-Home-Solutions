import { Box, Stack } from "@mui/material";

import HomeHero from "../components/HomeHero";
import CardRow from "../components/CardRow";
import About from "../components/About";
import ServiceShowcase from "../components/ServiceShowcase";

export function meta() {
  return [
    { title: "MJF Home Solutions" },
    { name: "It's a site", content: "Welcome to MJF Home Solutions!" },
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
