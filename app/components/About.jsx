// MUI Imports
import { Paper, Box, Typography, Stack, Divider } from "@mui/material";

// MUI Icon Imports
import FacebookRounded from "@mui/icons-material/FacebookRounded";
import GradientDivider from './GradientDivider';

export default function About() {
  return (
    <Paper
      square
      variant="outlined"
      sx={{
        width: "100%",
        backgroundColor: "background.light",
        borderLeftWidth: 0,
        borderRightWidth: 0,
      }}
    >
      <Stack
        direction={{ xs: "column", lg: "row" }}
        alignItems={"center"}
        spacing={2}
      >
        <Box
          sx={{
            height: {
              xs: "100%",
              lg: "576px",
              xl: "720px",
            },
            width: {
              xs: "100%",
              lg: "1024px",
              xl: "1280px",
            },
            order: { xs: 2, lg: 0 },
          }}
        >
          <img
            src="/Photos/Hero/Kitchen-Frame.webp"
            alt="Drywall work"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          sx={{
            height: { xs: "50%", lg: "100%" },
            width: { xs: "100%", lg: "50%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "text.primary",
              textAlign: "center",
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "3rem" },
              textWrap: "nowrap",
              marginBottom: 2,
            }}
          >
            About Us
          </Typography>
          <GradientDivider />
          <Typography
            variant="body1"
            sx={{
              color: "text.primary",
              textAlign: "left",
              fontSize: { xs: "1rem", sm: "1.1rem", lg: "1.2rem" },
              paddingX: { xs: "3vw", lg: "1vw"},
              fontWeight: 530,
              lineHeight: 1.8,
              mb: 4,
              maxWidth: { xs: 500, md: 800 },
            }}
          >
            At MJF Home Solutions, we are a trusted drywall company proudly
            serving Bountiful, UT, and surrounding areas. With our team of
            skilled professionals, we provide top-quality drywall installation
            and repair services to meet all your needs. Count on us for reliable
            workmanship and exceptional customer service to enhance your home's
            appeal.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
              marginBottom: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                color: "text.primary",
              }}
            >
              Connect with us
            </Typography>
            <Box>
              <a
                href="https://www.facebook.com/profile.php?id=100063689374404"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookRounded
                  sx={{
                    color: "info.dark",
                    fontSize: 48,
                    cursor: "pointer",
                    transition: "color 0.2s scale 1s",
                    "&:hover": { color: "info.main", scale: 1.1 },
                  }}
                />
              </a>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Paper>
  );
}
