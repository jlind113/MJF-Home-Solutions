import { Divider } from '@mui/material';
import { leftToRight } from '../Style/Gradients';

export default function GradientDivider() {
    return (
        <Divider
            sx={{
                width: "100%",
                height: 2,
                ...leftToRight.orangeToBlue,
                borderRadius: 2,
            }}
        />
    );
};