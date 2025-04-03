import type { Variants } from "framer-motion"

// Animation variants for the aside container
export const asideVariants: Variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    x: "-100%",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

