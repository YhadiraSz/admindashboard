import logo from "../../../assets/images/logo.webp";
import { IoClose } from "react-icons/io5";
import "./TopBar.css";
import { motion } from "framer-motion";
import {
  topBarContainerVariants,
  logoImageVariants,
  logoTextVariants,
  closeButtonHoverAnimation,
  closeButtonTapAnimation,
} from "../../../animations/topbar-animations";

const TopBar = ({ toggleAside }: { toggleAside: () => void }) => {
  return (
    <motion.div
      className="top"
      variants={topBarContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="logo">
        <motion.img
          src={logo}
          alt="Logo"
          variants={logoImageVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.h2
          variants={logoTextVariants}
          initial="hidden"
          animate="visible"
        >
          YHA <span className="danger">DEV</span>
        </motion.h2>
      </div>
      <div className="close">
        <motion.div
          whileHover={closeButtonHoverAnimation}
          whileTap={closeButtonTapAnimation}
        >
          <IoClose className="icon" onClick={toggleAside} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TopBar;
