import React from "react";
import { users } from "../../data/users";
import "./RecentUpdates.css";
import { motion } from "framer-motion";
import {
  updatesContainerVariants,
  updateItemVariants,
} from "../../../../animations/recent-updates-animations";

const RecentUpdates = () => {
  return (
    <div className="recent-updates">
      {/* Título estático para un renderizado rápido */}
      <h2>Recent Updates</h2>
      <motion.div
        className="updates"
        variants={updatesContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {users.map((user, index) => (
          <motion.div
            className="update"
            key={user.id}
            variants={updateItemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="profile-photo">
              <img
                src={user.profile || "/placeholder.svg"}
                alt={`Profile of ${user.userName}`}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "low"}
                width="40"
                height="40"
                srcSet={
                  user.profile
                    ? `${user.profile} 1x, ${user.profile} 2x`
                    : undefined
                }
                decoding={index === 0 ? "sync" : "async"}
                style={{
                  background: "#f0f0f0",
                  aspectRatio: "1/1",
                }}
              />
            </div>
            <div className="message">
              <p>
                <b>{user.userName}</b> received his order of {user.productName}
              </p>
              <small className="text-muted">{user.time}</small>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// Memoización para evitar renderizados innecesarios
export default React.memo(RecentUpdates);
