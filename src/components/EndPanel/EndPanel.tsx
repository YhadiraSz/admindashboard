

import EndPanelTop from "./EndPanelTop/EndPanelTop";
import EndPanelBottom from "./EndPanelBottom/EndPanelBottom";
import "./EndPanel.css";
import { motion } from "framer-motion";
import { endPanelVariants } from "../../animations/end-panel-animations";

const EndPanel = ({ toggleAside }: { toggleAside: () => void }) => {
  return (
    <motion.div
      className="right"
      variants={endPanelVariants}
      initial="hidden"
      animate="visible"
    >
      <EndPanelTop toggleMenu={toggleAside} />
      <EndPanelBottom />
    </motion.div>
  );
};

export default EndPanel;
