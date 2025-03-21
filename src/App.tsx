import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Story from "@/components/Story";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Board from "@/pages/Board";
import "@/styles/global.css";

function App() {
  return (
    <div className="app-container">
      {/* 왼쪽 사이드바 (목록) */}
      <Sidebar />

      {/* 스토리 + 메인 컨텐츠 */}
      <div className="content-wrapper">
        {/* 스토리 (최상단 고정) */}
        <div className="story-container">
          <Story />
        </div>

        {/* 메인 컨텐츠 */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/board" element={<Board />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
