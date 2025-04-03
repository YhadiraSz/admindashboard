

import type { Variants } from "framer-motion"

// Animation variants for the top bar container
export const topBarContainerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
}

// Animation variants for the logo image
export const logoImageVariants: Variants = {
  hidden: { rotate: -180, opacity: 0 },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

// Animation variants for the logo text
export const logoTextVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
}

// Hover and tap animations for the close button
export const closeButtonHoverAnimation = {
  scale: 1.2,
  rotate: 90,
  transition: { duration: 0.2 },
}

export const closeButtonTapAnimation = {
  scale: 0.9,
}

