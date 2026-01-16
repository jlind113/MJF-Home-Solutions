import { Divider } from '@mui/material';

export default function GradientDivider() {
    return (
        <Divider
            sx={{
                width: "100%",
                height: 2,
                background: "linear-gradient(90deg, transparent, #cc5a28, #29a2ff, transparent)",
                borderRadius: 2,
            }}
        />
    );
};