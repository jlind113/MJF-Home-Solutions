import { Grid, Box } from "@mui/material";
import { NavLink } from 'react-router';
import ServiceCard from './ServiceCard';
import { entranceAnims } from '../Style/Animations';

export default function ShowcaseItem({ image, text, alt }) {
  return (
    <Grid
      size={{ xs: 12, md: 6, lg: 4 }}
      sx={style.gridContainer}
    >
      <Box
        sx={style.boxContainer}
      >
        <NavLink
          to={"/Services"}
          style={style.navLink}
        >
          <ServiceCard imgSource={image} serviceText={text} alt={alt} />
        </NavLink>
      </Box>
    </Grid>
  );
}

const style = {
  gridContainer: {
    display: "flex",
    justifyContent: "center",
  },
  boxContainer: {
    ...entranceAnims.fadeUpOnMount
  },
  navLink: {
    textDecoration: "none", 
    width: "100%"
  }
}