import { Link, useLocation } from "react-router-dom";
import "../styles/sidebar.css"; // ✅ CSS 불러오기

const Sidebar = () => {
  const location = useLocation(); // ✅ 현재 URL 가져오기
  const currentPath = location.pathname === "/" ? "/home" : location.pathname; // ✅ "/"를 "/home"으로 변환

  return (
    <div className="sidebar">
      <div>
        <h2 className="logo">📷 Portfolio</h2>
        <nav>
          <Link to="/home" className={`nav-item ${currentPath === "/home" ? "active" : ""}`}>
            🏠 Home
          </Link>
          <Link to="/about" className={`nav-item ${currentPath === "/about" ? "active" : ""}`}>
            👤 About
          </Link>
          <Link to="/projects" className={`nav-item ${currentPath === "/projects" ? "active" : ""}`}>
            📂 Projects
          </Link>
          <Link to="/board" className={`nav-item ${currentPath === "/board" ? "active" : ""}`}>
            📝 Board
          </Link>
        </nav>
      </div>
      <div className="footer">© 2025 Min’s Portfolio</div>
    </div>
  );
};

export default Sidebar;
