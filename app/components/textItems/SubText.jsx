import { Typography } from '@mui/material';

export default function SubText({text}) {
    return (
        <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "0.9rem", sm: "1rem", lg: "1.1rem" },
            }}
          >
            {text}
          </Typography>
    );
};