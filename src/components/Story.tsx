import { useState } from "react";
import "../styles/story.css"; // ✅ CSS 적용

const years = ["2022", "2023", "2024", "2025"];

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
