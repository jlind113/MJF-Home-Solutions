import { Paper, Box, Typography } from "@mui/material";
import { FacebookRounded } from "@mui/icons-material";

export default function About() {
  return (
    <Paper
      elevation={4}
      sx={{
        width: "60%",
        backgroundColor: "background.paper",
        padding: 2,
        marginY: 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 4,
        gap: 6,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          height: "80%",
          overflow: "hidden",
          borderRadius: 4,
        }}
      >
        <img
          src="/Images/Jobs/5.jpg"
          alt="Drywall work"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Paper>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Typography
          variant="h3"
          sx={{
            color: "text.primary",
            borderBottom: "3px solid",
            borderColor: "primary.main",
            paddingBottom: 1,
            fontFamily: "DM Serif Text"
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: 18,
            lineHeight: 1.8,
            color: "text.primary",
            width: "80%",
            fontFamily: "Montserrat",
            fontWeight: 510,
          }}
        >
          At MJF Home Solutions, we are a trusted drywall company proudly
          serving Bountiful, UT, and surrounding areas. With our team of skilled
          professionals, we provide top-quality drywall installation and repair
          services to meet all your needs. Count on us for reliable workmanship
          and exceptional customer service to enhance your home's appeal.
        </Typography>
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              color: "text.primary",
              marginBottom: 2,
            }}
          >
            Connect with us
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <a
              href="https://www.facebook.com/profile.php?id=100063689374404"
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: "fit-content" }}
            >
              <FacebookRounded
                sx={{
                  color: "info.main",
                  fontSize: 48,
                  cursor: "pointer",
                  transition: "color 0.2s",
                  "&:hover": { color: "info.light" },
                }}
              />
            </a>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
