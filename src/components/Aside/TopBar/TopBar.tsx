import logo from "../../../assets/images/logo.png";
import { IoClose } from "react-icons/io5";
import "./TopBar.css"
const TopBar = () => {
  return (
    <div className="top">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h2>
          YHA <span className="danger">DEV</span>
        </h2>
      </div>
      <div className="close">
        <IoClose className="icon" />
      </div>
    </div>
  );
};

export default TopBar;
