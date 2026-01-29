import { Box, Stack } from "@mui/material";
import HomeHero from "../components/HomeHero";
import CardRow from "../components/CardRow";
import About from "../components/About";
import ServiceShowcase from "../components/ServiceShowcase";
import ReviewSection from '../components/reviews/ReviewSection';

export function meta() {
  return [
    { title: "MJF Home Solutions - Professional Drywall, Carpentry & Home Improvement Services Utah" },
    { 
      name: "description", 
      content: "Premier drywall experts serving Bountiful, Ogden, Layton, and Utah areas with exceptional installation, repair, carpentry, and flooring services. Licensed professionals with over a decade of experience." 
    },
    { 
      name: "keywords", 
      content: "drywall installation Utah, drywall repair Bountiful, carpentry services Ogden, flooring installation Layton, home improvement Utah, drywall contractors, professional construction services" 
    },
    { name: "author", content: "Jack Lindgren" },
    { property: "og:title", content: "MJF Home Solutions - Utah's Premier Drywall & Home Improvement Experts" },
    { 
      property: "og:description", 
      content: "Professional drywall, carpentry, and flooring services in Bountiful, Ogden, Layton and surrounding Utah areas. Licensed contractors with exceptional customer satisfaction." 
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://mjf-home-solutions.netlify.app/" },
    { property: "og:image", content: "https://mjf-home-solutions.netlify.app/Photos/Logos/Logo-1-200x200.webp" },
    { name: "geo.region", content: "UT" },
    { name: "geo.placename", content: "Bountiful, Utah" },
    { name: "ICBM", content: "40.889389, -111.880768" },
    { name: "robots", content: "index, follow" },
    { name: "contact", content: "(801) 300-5579" },
    { name: "reply-to", content: "Mattford51@yahoo.com" }
  ];
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
        <Box width={"100%"} height={"1vh"} />
      </Stack>
    </Box>
  );
}