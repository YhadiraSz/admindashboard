import React from "react";
import { products } from "../data/products";
import "./Orders.css";
import { motion } from "framer-motion";
import {
  ordersContainerVariants,
  tableHeaderVariants,
  tableRowVariants,
  linkVariants,
} from "../../../animations/orders-animations";

// Precomputar las clases de estado
const statusClassMap = {
  pending: "warning",
  declined: "danger",
  delivered: "primary",
};

const Orders = () => {
  return (
    <motion.div
      className="recent-orders"
      variants={ordersContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 variants={tableHeaderVariants}>Recent Orders</motion.h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Number</th>
            <th>Payment</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            const statusClass =
              statusClassMap[product.status.toLowerCase() as keyof typeof statusClassMap] || "";

            return (
              <motion.tr
                key={product.id}
                variants={tableRowVariants}
                custom={index}
                whileHover={{
                  backgroundColor: "rgba(0, 0, 0, 0.02)",
                  transition: { duration: 0.2 },
                }}
              >
                <td>{product.productName}</td>
                <td>{product.productNumber}</td>
                <td>{product.payment}</td>
                <td className={statusClass}>{product.status}</td>
                <motion.td
                  className="primary"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  Details
                </motion.td>
              </motion.tr>
            );
          })}
        </tbody>
      </table>
      <motion.a href="#" variants={linkVariants} whileHover="hover">
        Show all
      </motion.a>
    </motion.div>
  );
};

// Exportar con memoización
export default React.memo(Orders);
