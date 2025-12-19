import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import HomeHero from "../components/HomeHero";
import CardRow from "../components/CardRow";
import About from "../components/About";

// Test imports
import TestPage from '../Test/TestPage';

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
        backgroundColor: "background.primary",
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
        <Box width={"100%"} height={"1vh"} />
      </Stack>
    </Box>
  );
}

// Test function

// export default function Home() {
//   return (
//     <Box
//       sx={{
//         height: "100%",
//       }}
//     >
//       <TestPage />
//     </Box>
//   );
// }