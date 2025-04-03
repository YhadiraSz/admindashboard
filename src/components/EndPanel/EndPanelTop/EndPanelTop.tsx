import { IoMenu, IoMoonSharp } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import profile1 from "../../../assets/images/profile-1.jpg";
import "./EndPanelTop.css";

const EndPanelTop = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <div className="top">
      <button id="menu-btn" onClick={toggleMenu}>
        {" "}
        {/* Llamamos a toggleMenu */}
        <IoMenu />
      </button>
      <div className="theme-toggler">
        <MdSunny className="react-icons-sharp active" />
        <IoMoonSharp className="react-icons-sharp" />
      </div>
      <div className="profile">
        <div className="info">
          <p>
            Hey, <b>Yhadira</b>
          </p>
          <small className="text-muted">Admin</small>
        </div>
        <div className="profile-photo">
          <img src={profile1} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default EndPanelTop;
