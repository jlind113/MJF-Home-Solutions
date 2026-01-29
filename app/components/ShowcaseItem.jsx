import { Grid, Box } from "@mui/material";
import { NavLink } from 'react-router';
import ServiceCard from './ServiceCard';
import { entranceAnims } from '../Style/Animations';

export default function ShowcaseItem({ image, text, alt }) {
  return (
    <Grid
      size={{ xs: 12, md: 6, lg: 4 }}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          ...entranceAnims.fadeUpOnMount,
        }}
      >
        <NavLink
          to={"/Services"}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <ServiceCard imgSource={image} serviceText={text} alt={alt} />
        </NavLink>
      </Box>
    </Grid>
  );
}