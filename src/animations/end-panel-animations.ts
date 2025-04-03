import type { Variants } from "framer-motion"

// Main EndPanel container animations
export const endPanelVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
}

