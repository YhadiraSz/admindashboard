import EndPanelTop from "./EndPanelTop/EndPanelTop";
import EndPanelBottom from "./EndPanelBottom/EndPanelBottom";
import "./EndPanel.css";

const EndPanel = ({ toggleAside }: { toggleAside: () => void }) => {
  return (
    <div className="right">
      <EndPanelTop toggleMenu={toggleAside} /> {/* Pasamos la función */}
      <EndPanelBottom />
    </div>
  );
};

export default EndPanel;
