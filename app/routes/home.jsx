import { Box, Stack } from "@mui/material";
import HomeHero from "../components/HomeHero";
import CardRow from "../components/CardRow";
import About from "../components/About";

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
        backgroundColor: "background.default",
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
      </Stack>
    </Box>
  );
}
