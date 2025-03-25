import { useState } from "react";
import Detail from "./Detail";

const Projects = () => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      {/* 전역 스크롤 숨김 */}
      <style>
        {`
          body {
            overflow-x: hidden;
          }
        `}
      </style>

      <div className="flex flex-col items-center p-8 relative">
        {/* 프레임 */}
        <div
          style={{
            width: "500px",
            height: "600px",
            backgroundImage: 'url("/frame.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
            cursor: "pointer",
            filter: showDetail ? "blur(2px) brightness(0.7)" : "none",
            transition: "0.3s ease",
          }}
          onClick={() => setShowDetail(true)}
        >
          <img
            src="/detail/autoever2.png"
            alt="AutoEver 구조도"
            style={{
              position: "absolute",
              top: "13%",
              left: "20%",
              width: "50%",
              height: "70%",
              objectFit: "cover",
              border: "none",
            }}
          />
        </div>

        {/* 모달 */}
        {showDetail && <Detail onClose={() => setShowDetail(false)} />}
      </div>
    </>
  );
};

export default Projects;
