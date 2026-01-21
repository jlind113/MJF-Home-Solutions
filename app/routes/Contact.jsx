import { Stack } from "@mui/material";
import ContactForm from "../components/ContactForm";

export function meta() {
  return [
    { title: "Contact MJF Home Solutions - Professional Drywall & Home Improvement Services" },
    { 
      name: "description", 
      content: "Contact MJF Home Solutions for professional drywall, carpentry, flooring, and home improvement services in Ogden, Layton, Bountiful, and surrounding Utah areas. Call (801) 300-5579 for a free quote." 
    },
    { 
      name: "keywords", 
      content: "contact MJF Home Solutions, drywall contractor Utah, home improvement quote, Ogden drywall services, Layton carpentry, Utah flooring installation, professional contractors, free estimate" 
    },
    { name: "author", content: "Jack Lindgren" },
    { property: "og:title", content: "Contact MJF Home Solutions - Utah Home Improvement Experts" },
    { 
      property: "og:description", 
      content: "Get in touch with MJF Home Solutions for expert drywall, carpentry, and flooring services. Serving Ogden, Layton, Bountiful and surrounding Utah communities." 
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://mjf-home-solutions.netlify.app/Contact" },
    { property: "og:image", content: "https://mjf-home-solutions.netlify.app/Photos/Logos/Logo-1-200x200.webp" },
    { name: "geo.region", content: "UT" },
    { name: "geo.placename", content: "Bountiful, Utah" },
    { name: "ICBM", content: "40.889389, -111.880768" },
    { name: "robots", content: "index, follow" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "contact", content: "(801) 300-5579" },
    { name: "reply-to", content: "Mattford51@yahoo.com" }
  ];
}

export default function Contact() {
  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ backgroundColor: "background.dark" }}
    >
      <ContactForm />
    </Stack>
  );
}
