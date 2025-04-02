import Insights from "./Insights/Insights";
import Orders from "./Orders/Orders";

import "./Main.css";
const Main = () => {
  return (
    <main>
      <h1>Dasboard</h1>
      <div className="date">
        <input type="date" />
      </div>
      <Insights />
      <Orders />
    </main>
  );
};

export default Main;
