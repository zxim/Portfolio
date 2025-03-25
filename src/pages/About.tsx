// 수직 스크롤 → 가로 캐러셀 필름 타임라인 (페이지 단위로 이동)
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const timelineData = [
  {
    year: "2016 ~ 2018",
    title: "구리고등학교 졸업",
    image: "/about/guri.jpg",
  },
  {
    year: "2019.03",
    title: "수원대학교 정보보호학과 입학",
    image: "/about/suwon1.jpeg",
  },
  {
    year: "2022",
    title: "PR-in 부회장 활동",
    description: "최우수상 수상",
    image: "/about/pr_in1.jpg",
  },
  {
    year: "2023",
    title: "PR-in 회장 활동",
    description: "우수상, 개인 MVP 수상",
    image: "/about/pr_in2.jpg",
  },
  {
    year: "2023",
    title: "한이음 ICT 멘토링 공모전 입선",
    image: "/about/hanium.jpg",
  },
  {
    year: "2025.02",
    title: "수원대학교 정보보호학과 졸업",
    image: "/about/suwon2.jpg",
  },
  {
    year: "2024.08 ~ 2025.02",
    title: "현대오토에버 모빌리티 SW 스쿨 수료",
    description: "최종 프로젝트 우수상 수상",
    image: "/about/autoever.jpg",
  },
];


const TimelineCarousel = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      let newIndex = index;
      if (e.deltaY > 0 && index < timelineData.length - 1) newIndex++;
      else if (e.deltaY < 0 && index > 0) newIndex--;

      if (newIndex !== index && trackRef.current) {
        setIndex(newIndex);
        gsap.to(trackRef.current, {
          x: -newIndex * window.innerWidth,
          duration: 0.8,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [index]);

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
        background: "#fff",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <style>
        {`
          body {
            overflow: hidden;
          }
        `}
      </style>
      <div
        ref={trackRef}
        style={{
          display: "flex",
          width: `${timelineData.length * 100}vw`,
          transform: `translateX(0)`
        }}
      >
        {timelineData.map((item, i) => (
          <div
            key={i}
            style={{
              width: "100vw",
              height: "100vh",
              backgroundImage: 'url("/film.png")',
              backgroundSize: "70% 70%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "10% 0%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              padding: "2rem",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* 사진 이미지 */}
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "65%",
                  maxHeight: "50%",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                  position: "absolute",
                  top: "35%",
                  left: "38.3%",
                  transform: "translate(-50%, -50%)",
                  zIndex: -1, 
                }}
              />
            )}

            {/* 텍스트 오버레이 */}
            <div
              style={{
                position: "absolute",
                bottom: "10%",
                left: "50%",
                transform: "translateX(-50%)",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                padding: "1rem 2rem",
                borderRadius: "12px",
              }}
            >

              <div style={{ fontSize: "1rem" }}>{item.year}</div>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "0.5rem" }}>{item.title}</div>
              {item.description && (
                <div style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>{item.description}</div>
              )}
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default TimelineCarousel;
