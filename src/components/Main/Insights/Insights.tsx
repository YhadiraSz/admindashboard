import { circles } from "../data/circles";
import "./Insights.css";
const Insights = () => {
  return (
    <div className="insights">
      {circles.map((circle) => {
        return (
          <div className={circle.topic} key={circle.id}>
            <circle.icon className="span" />
            <div className="middle">
              <div className="left">
                <h3>{circle.title}</h3>
                <h1>{circle.cost}</h1>
              </div>
              <div className="progress">
                <svg className="circle-svg">
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div className="number">
                  <p>{circle.numberPercent}</p>
                </div>
              </div>
            </div>
            <small className="text-muted">Last 24 Hours</small>
          </div>
        );
      })}
    </div>
  );
};

export default Insights;
