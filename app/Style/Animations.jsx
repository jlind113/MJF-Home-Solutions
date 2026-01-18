export const hoverAnims = {
  scale: {
    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },

  navLink: {
    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      color: "info.light",
      transform: "scale(1.05)",
    },
  },

  drawerLink: {
    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      backgroundColor: "transparent",
      transform: "scale(1.05)",
    },
  },

  facebookIcon: {
    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": { 
      color: "info.main", 
      transform: "scale(1.05)",
    },
  },

  themeIcon: {
    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      color: "info.main",
      transform: "scale(1.1)",
    },
  },

  linkHover: {
    "&:hover": { color: "info.light" },
  },

  imageCardHover: {
    animation: "slideUp 0.3s ease",
    "@keyframes slideUp": {
      from: { transform: "translateY(100%)" },
      to: { transform: "translateY(0)" },
    },
  },

};

// Entrance
export const entranceAnims = {
  fadeUpOnMount: {
    animation: "fadeUp 0.6s ease-out",
    "@keyframes fadeUp": {
      from: {
        opacity: 0,
        transform: "translateY(30px)"
      },
      to: {
        opacity: 1,
        transform: "translateY(0)"
      },
    },
  },

  fadeIn: {
    animation: "fadeIn 0.3s ease",
    "@keyframes fadeIn": {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
  },

  staggeredFadeUp: (index) => ({
    animation: "fadeUp 0.6s ease-out",
    animationDelay: `${index * 0.1}s`,
    animationFillMode: "both",
  }),

  gridFadeIn: (index) => ({
    animation: `fadeInScale 0.6s ease-out ${index * 0.05}s both`,
    "@keyframes fadeInScale": {
      from: {
        opacity: 0,
        transform: "scale(0.9) translateY(20px)",
      },
      to: {
        opacity: 1,
        transform: "scale(1) translateY(0)",
      },
    },
  })

};

