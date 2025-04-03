import { links } from "../data/links";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {links.map((link) => {
        // Verificar si el link tiene el id 6 antes de renderizarlo
        const messageCount =
          link.id === 6 ? (
            <span className="message-count">{link.message}</span>
          ) : null;

        return (
          <a
            href={link.linkName.toLowerCase()}
            key={link.id}
            className={link.active ? "active" : ""}
          >
            <span>
              <link.icon className="react-icons-sharp" />
            </span>
            <h3> {link.linkName}</h3>
            {messageCount}
          </a>
        );
      })}
    </div>
  );
};

export default Sidebar;
