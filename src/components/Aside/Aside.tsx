import Sidebar from "./Sidebar/Sidebar";
import TopBar from "./TopBar/TopBar";
import "./Aside.css";
const Aside = () => {
  return (
    <aside>
      <TopBar />
      <Sidebar />
    </aside>
  );
};

export default Aside;
