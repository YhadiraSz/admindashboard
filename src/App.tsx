import { useState, useEffect } from "react";
import "./App.css";
import Aside from "./components/Aside/Aside";
import EndPanel from "./components/EndPanel/EndPanel";
import Main from "./components/Main/Main";
import { ThemeProvider } from "./context/ThemeProvider";
import { AnimatePresence, motion } from "framer-motion";
import { overlayVariants } from "./animations/app-animations";

function App() {
  const [isAsideVisible, setIsAsideVisible] = useState(true);

  const toggleAside = () => {
    setIsAsideVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      // Si el ancho de la pantalla es mayor a 768px (modo laptop), forzar el menú abierto
      if (window.innerWidth >= 768) {
        setIsAsideVisible(true);
      }
    };

    // Ejecutamos al inicio para asegurarnos de que el estado es correcto
    handleResize();

    // Escuchar cambios en el tamaño de la pantalla
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ThemeProvider>
      <div className="container">
        <Aside isVisible={isAsideVisible} toggleAside={toggleAside} />

        {/* Overlay for mobile when menu is open */}
        <AnimatePresence>
          {isAsideVisible && window.innerWidth <= 768 && (
            <motion.div
              className="overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={toggleAside}
            />
          )}
        </AnimatePresence>

        <Main />
        <EndPanel toggleAside={toggleAside} />
      </div>
    </ThemeProvider>
  );
}

export default App;
