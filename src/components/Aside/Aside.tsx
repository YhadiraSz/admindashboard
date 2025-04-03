import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import TopBar from "./TopBar/TopBar";
import "./Aside.css";
import { motion, AnimatePresence } from "framer-motion";
import { asideVariants } from "../../animations/aside-animations";

const Aside = ({
  isVisible,
  toggleAside,
}: {
  isVisible: boolean;
  toggleAside: () => void;
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial="closed"
          animate="open"
          exit="closed"
          variants={asideVariants}
          className="visible"
        >
          <TopBar toggleAside={toggleAside} />
          <Sidebar />
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default React.memo(Aside);
