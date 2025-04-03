
import type { Variants } from "framer-motion"

// Animation variants for sidebar links
export const linkVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  closed: {
    y: 20,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
}

// Hover and tap animations for links
export const linkHoverAnimation = {
  scale: 1.05,
  transition: { duration: 0.2 },
}

export const linkTapAnimation = {
  scale: 0.95,
}

// Staggered animation for the sidebar container
export const sidebarContainerVariants: Variants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

