import { Link, useLocation } from "react-router-dom";
import "../styles/sidebar.css"; // ✅ CSS 불러오기

const Sidebar = () => {
  const location = useLocation(); // ✅ 현재 URL 가져오기

  return (
    <div className="sidebar">
      <div>
        <h2 className="logo">📷 Portfolio</h2>
        <nav>
          <Link to="/" className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
            🏠 홈
          </Link>
          <Link to="/about" className={`nav-item ${location.pathname === "/about" ? "active" : ""}`}>
            👤 About
          </Link>
          <Link to="/projects" className={`nav-item ${location.pathname === "/projects" ? "active" : ""}`}>
            📂 Projects
          </Link>
          <Link to="/board" className={`nav-item ${location.pathname === "/board" ? "active" : ""}`}>
            📝 Board
          </Link>
        </nav>
      </div>
      <div className="footer">© 2025 Min’s Portfolio</div>
    </div>
  );
};

export default Sidebar;
