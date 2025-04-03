import { users } from "../../data/users";
import "./RecentUpdates.css";
const RecentUpdates = () => {
  return (
    <div className="recent-updates">
      <h2>Recent Updates</h2>
      <div className="updates">
        {users.map((user) => {
          return (
            <div className="update" key={user.id}>
              <div className="profile-photo">
                <img src={user.profile} alt="Second Profile" />
              </div>
              <div className="message">
                <p>
                  <b>{user.userName}</b> received his order of{" "}
                  {user.productName}
                </p>
                <small className="text-muted">{user.time}</small>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentUpdates;
