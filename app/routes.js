import { index, route } from "@react-router/dev/routes";

export default [
    index("./routes/Home.jsx"),
    route("Gallery", "./routes/Gallery.jsx"),
    route("Contact", "./routes/Contact.jsx"),
    route("Services", "./routes/Services.jsx")
];
