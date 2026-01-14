import { keyframes } from "@mui/system";

// Hover

// Smooth scale up animation for buttons and cards
export const scaleUp = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

// Loading and Entrance

// Fade in from bottom
export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Slide down animation for dropdowns/modals
export const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Text

// Typewriter effect
export const typewriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

// Text color wave effect
export const textWave = keyframes`
  0%, 100% {
    color: inherit;
  }
  50% {
    color: #29a2ff;
  }
`;

// Micro-interactions

// Wobble effect for error states or attention-grabbing
export const wobble = keyframes`
  0% {
    transform: translateX(0);
  }
  15% {
    transform: translateX(-5px) rotate(-5deg);
  }
  30% {
    transform: translateX(5px) rotate(3deg);
  }
  45% {
    transform: translateX(-3px) rotate(-3deg);
  }
  60% {
    transform: translateX(3px) rotate(2deg);
  }
  75% {
    transform: translateX(-1px) rotate(-1deg);
  }
  100% {
    transform: translateX(0);
  }
`;

// Heartbeat for important notifications
export const heartbeat = keyframes`
  0%, 50%, 100% {
    transform: scale(1);
  }
  5%, 45% {
    transform: scale(1.1);
  }
`;

// Swing effect for hanging elements
export const swing = keyframes`
  20% {
    transform: rotate(15deg);
  }
  40% {
    transform: rotate(-10deg);
  }
  60% {
    transform: rotate(5deg);
  }
  80% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

// Reusable Animation Configs

// Common animation durations and easings
export const animationConfigs = {
  fast: {
    duration: "0.2s",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  normal: {
    duration: "0.3s",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  slow: {
    duration: "0.5s",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  bouncy: {
    duration: "0.5s",
    easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  },
  smooth: {
    duration: "0.3s",
    easing: "ease-in-out",
  },
};

// Ready to use Animation Styles

// Hover effects for buttons
export const buttonHoverStyles = {
  scale: {
    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
};

// Card entrance animations
export const cardEntranceStyles = {
  fadeUpOnMount: {
    animation: `${fadeInUp} 0.6s ease-out`,
  },

  staggeredFadeUp: (index) => ({
    animation: `${fadeInUp} 0.6s ease-out`,
    animationDelay: `${index * 0.1}s`,
    animationFillMode: "both",
  }),
};



/*
    Examples
*/

/*
import { buttonHoverStyles } from '../Style/Animations';
<Button 
    sx={{
        ...buttonHoverStyles.lift,
        // your other styles
    }}
>
    Get a Quote
</Button>
*/

/*
import { cardEntranceStyles } from '../Style/Animations';
<Card sx={cardEntranceStyles.fadeUpOnMount}>
</Card>
*/

/*
import { loadingStyles } from '../Style/Animations';
<CircularProgress sx={loadingStyles.spinner} />
*/

/*
import { cardEntranceStyles } from '../Style/Animations';
{cards.map((card, index) => (
  <Card 
    key={card.id}
    sx={cardEntranceStyles.staggeredFadeUp(index)}
  >
    // card content //
  </Card>
))}
*/

/*
import { fadeInUp, animationConfigs } from '../Style/Animations';
<Box 
  sx={{
    animation: `${fadeInUp} ${animationConfigs.slow.duration} ${animationConfigs.bouncy.easing}`,
  }}
>
  // content //
</Box>
*/
