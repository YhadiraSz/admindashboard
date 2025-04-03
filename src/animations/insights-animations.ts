import type { Variants } from "framer-motion";

export const insightsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

export const insightCardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

export const circleAnimation = {
  hidden: { strokeDashoffset: 110 },
  visible: (offset: number) => ({
    strokeDashoffset: offset,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      delay: 0.5,
    },
  }),
};

export const numberAnimation = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
};
