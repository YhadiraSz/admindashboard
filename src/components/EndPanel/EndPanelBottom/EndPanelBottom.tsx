import Analytics from "./Analytics/Analytics";
import RecentUpdates from "./RecentUpdates/RecentUpdates";
import { motion } from "framer-motion";

const EndPanelBottom = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { staggerChildren: 0.3 },
      }}
    >
      <RecentUpdates />
      <Analytics />
    </motion.div>
  );
};

export default EndPanelBottom;
