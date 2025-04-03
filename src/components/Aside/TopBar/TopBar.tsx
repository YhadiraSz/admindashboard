import logo from "../../../assets/images/logo.png";
import { IoClose } from "react-icons/io5";
import "./TopBar.css";

const TopBar = ({ toggleAside }: { toggleAside: () => void }) => {
  return (
    <div className="top">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h2>
          YHA <span className="danger">DEV</span>
        </h2>
      </div>
      <div className="close">
        <IoClose className="icon" onClick={toggleAside} /> {/* Oculta Aside */}
      </div>
    </div>
  );
};

export default TopBar;
