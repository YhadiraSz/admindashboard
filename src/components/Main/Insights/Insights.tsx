import React from "react";
import { circles } from "../data/circles";
import "./Insights.css";
import { motion } from "framer-motion";
import {
  insightsContainerVariants,
  insightCardVariants,
  circleAnimation,
  numberAnimation,
} from "../../../animations/insights-animations";

// Precomputar offsets para cada tipo de círculo
const offsetMap = {
  sales: -30,
  expenses: 20,
  income: 35,
  default: 92,
};

const Insights = () => {
  return (
    <motion.div
      className="insights"
      variants={insightsContainerVariants}
      initial="hidden"
      animate="visible"
    >
      {circles.map((circle) => {
        // Obtener el offset del mapa precomputado
        const offset = offsetMap[circle.topic as keyof typeof offsetMap] || offsetMap.default;

        return (
          <motion.div
            className={circle.topic}
            key={circle.id}
            variants={insightCardVariants}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.3 },
            }}
          >
            {/* Ícono estático */}
            <circle.icon className="span" />

            <div className="middle">
              <motion.div
                className="left"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.3,
                    duration: 0.5,
                  },
                }}
              >
                <h3>{circle.title}</h3>
                <h1>{circle.cost}</h1>
              </motion.div>
              <div className="progress">
                <svg className="circle-svg">
                  <motion.circle
                    cx="38"
                    cy="38"
                    r="36"
                    variants={circleAnimation}
                    custom={offset}
                  ></motion.circle>
                </svg>
                <motion.div className="number" variants={numberAnimation}>
                  <p>{circle.numberPercent}</p>
                </motion.div>
              </div>
            </div>
            <motion.small
              className="text-muted"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.5, duration: 0.3 },
              }}
            >
              Last 24 Hours
            </motion.small>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

// Exportar con memoización
export default React.memo(Insights);
