import { useState } from "react";
import "../styles/story.css"; // ✅ CSS 적용

const years = ["현대 오토에버", "해커톤","2024 한이음", "2023 한이음", "2022 교내 프로젝트", "개인 프로젝트"];

const Story = () => {
  const [activeYear, setActiveYear] = useState<string | null>(null);

  return (
    <div className="story-container">
      {years.map((year) => (
        <div
          key={year}
          className={`story-item ${activeYear === year ? "active" : ""}`}
          onClick={() => setActiveYear(year)}
        >
          {year}
        </div>
      ))}
    </div>
  );
};

export default Story;
