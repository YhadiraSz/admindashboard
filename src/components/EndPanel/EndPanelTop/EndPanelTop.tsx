import { IoMenu, IoMoonSharp } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import profile1 from "../../../assets/images/profile-1.webp";
import "./EndPanelTop.css";
import { motion } from "framer-motion";
import { useTheme } from "../../../context/theme-context";
import {
  topContainerVariants,
  buttonVariants,
  themeTogglerVariants,
  profileVariants,
  profileItemVariants,
  profilePhotoVariants,
} from "../../../animations/end-panel-top-animations";

const EndPanelTop = ({ toggleMenu }: { toggleMenu: () => void }) => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <motion.div
      className="top"
      variants={topContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.button
        id="menu-btn"
        onClick={toggleMenu}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <IoMenu />
      </motion.button>

      <motion.div
        className="theme-toggler"
        variants={themeTogglerVariants}
        whileHover="hover"
        onClick={toggleDarkMode}
      >
        <MdSunny className={`react-icons-sharp ${!darkMode ? "active" : ""}`} />
        <IoMoonSharp
          className={`react-icons-sharp ${darkMode ? "active" : ""}`}
        />
      </motion.div>

      <motion.div className="profile" variants={profileVariants}>
        <motion.div className="info" variants={profileItemVariants}>
          <p>
            Hey, <b>Yhadira</b>
          </p>
          <small className="text-muted">Admin</small>
        </motion.div>

        <motion.div
          className="profile-photo"
          variants={profilePhotoVariants}
          whileHover="hover"
        >
          <img src={profile1 || "/placeholder.svg"} alt="profile" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default EndPanelTop;
