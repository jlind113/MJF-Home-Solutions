import { Box } from "@mui/material";
import HomeHero from "../components/HomeHero";
import CardRow from "../components/CardRow";
import About from '../components/About';

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
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background.default",
      }}
    >
      <HomeHero />
      <CardRow />
      <About />
    </Box>
  );
}
