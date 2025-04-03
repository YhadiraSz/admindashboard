import { items } from "../../data/items";
import "./Analytics.css";
import { IoMdAdd } from "react-icons/io";

const Analytics = () => {
  return (
    <div className="sales-analytics">
      <h2>Sales Analytics</h2>
      {items.map((item) => {
        return (
          <div
            className={
              {
                online: "item online",
                offline: "item offline",
                customers: "item customers",
              }[item.itemSection.toLowerCase() || "item"]
            }
            key={item.id}
          >
            <div className="icon">
              <item.icon />
            </div>
            <div className="right">
              <div className="info">
                <h3>{item.itemName.toUpperCase()}</h3>
                <small className="text-muted">{item.itemTime}</small>
                <h5
                  className={
                    {
                      online: "success",
                      offline: "danger",
                      customers: "warning",
                    }[item.itemSection.toLowerCase() || ""]
                  }
                >
                  {item.itemProgress}%
                </h5>
                <h3>{item.itemMount}</h3>
              </div>
            </div>
          </div>
        );
      })}
      <div className="item add-product">
        <div>
          <IoMdAdd className="react-icons-sharp" />
          <h3>Add Product</h3>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
