import Sidebar from "./Sidebar/Sidebar";
import TopBar from "./TopBar/TopBar";
import "./Aside.css";

const Aside = ({
  isVisible,
  toggleAside,
}: {
  isVisible: boolean;
  toggleAside: () => void;
}) => {
  return isVisible ? (
    <aside>
      <TopBar toggleAside={toggleAside} /> {/* Pasamos toggleAside */}
      <Sidebar />
    </aside>
  ) : null;
};

export default Aside;
