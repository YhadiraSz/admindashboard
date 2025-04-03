import { items } from "../../data/items";
import "./Analytics.css";
import { IoMdAdd } from "react-icons/io";
import { motion } from "framer-motion";
import {
  analyticsContainerVariants,
  analyticsHeaderVariants,
  analyticsItemVariants,
  iconVariants,
  infoVariants,
  addProductVariants,
} from "../../../../animations/analytics-animations";

const Analytics = () => {
  return (
    <motion.div
      className="sales-analytics"
      variants={analyticsContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 variants={analyticsHeaderVariants}>Sales Analytics</motion.h2>
      {items.map((item) => {
        return (
          <motion.div
            className={
              {
                online: "item online",
                offline: "item offline",
                customers: "item customers",
              }[item.itemSection.toLowerCase() || "item"]
            }
            key={item.id}
            variants={analyticsItemVariants}
            whileHover="hover"
          >
            <motion.div className="icon" variants={iconVariants}>
              <item.icon />
            </motion.div>
            <motion.div className="right" variants={infoVariants}>
              <div className="info">
                <h3>{item.itemName.toUpperCase()}</h3>
                <small className="text-muted">{item.itemTime}</small>
                <h5
                  className={
                    {
                      online: "success",
                      offline: "danger",
                      customers: "warning",
                    }[item.itemSection.toLowerCase() || ""]
                  }
                >
                  {item.itemProgress}%
                </h5>
                <h3>{item.itemMount}</h3>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
      <motion.div
        className="item add-product"
        variants={addProductVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <div>
          <IoMdAdd className="react-icons-sharp" />
          <h3>Add Product</h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Analytics;
