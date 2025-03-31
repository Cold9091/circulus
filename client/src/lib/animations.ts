// Animações sofisticadas inspiradas no estilo da Apple
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: {
      delay: i,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // Curva de easing suave, estilo Apple
    },
  }),
};

export const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1], // Curva de easing sofisticada
    },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Novas animações de paralaxe e blur
export const parallaxScroll = {
  hidden: { y: 0 },
  visible: (custom: number) => ({
    y: custom,
    transition: {
      type: "tween",
      ease: "linear",
      duration: 0.1,
    },
  }),
};

export const blurIn = {
  hidden: { filter: "blur(8px)", opacity: 0 },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const revealText = {
  hidden: { y: 120 },
  visible: {
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const textCharacterAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

// Micro-interações para elementos interativos
export const buttonTap = {
  tap: { 
    scale: 0.97,
    boxShadow: "0px 0px 0px rgba(0,0,0,0.1)"
  }
};

export const buttonHover = {
  hover: { 
    scale: 1.03,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

export const cardHover = {
  rest: { 
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
  hover: { 
    scale: 1.03,
    y: -6,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export const cardTilt = {
  hover: (direction: number) => ({
    rotateX: direction ? 3 : -3,
    rotateY: direction ? -3 : 3,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  })
};

export const iconSpin = {
  hover: {
    rotate: 360,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

export const linkHover = {
  hover: {
    scale: 1.05,
    x: 2,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};
