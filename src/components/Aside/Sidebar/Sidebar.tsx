import React from "react";
import { links } from "../data/links";
import "./Sidebar.css";
import { motion } from "framer-motion";
import {
  linkVariants,
  linkHoverAnimation,
  linkTapAnimation,
  sidebarContainerVariants,
} from "../../../animations/sidebar-animations";

const Sidebar = () => {
  return (
    <motion.div
      className="sidebar"
      variants={sidebarContainerVariants}
      initial="closed"
      animate="open"
    >
      {links.map((link) => {
        const isMessageLink = link.id === 6;
        const messageCount = isMessageLink ? (
          <span className="message-count">{link.message}</span>
        ) : null;

        return (
          <motion.a
            variants={linkVariants}
            href={link.linkName.toLowerCase()}
            key={link.id}
            className={link.active ? "active" : ""}
            whileHover={linkHoverAnimation}
            whileTap={linkTapAnimation}
          >
            <span>
              <link.icon className="react-icons-sharp" />
            </span>
            <h3>{link.linkName}</h3>
            {messageCount}
          </motion.a>
        );
      })}
    </motion.div>
  );
};

// Exportar con React.memo para evitar renderizados innecesarios
export default React.memo(Sidebar);
