const Detail = ({ onClose }: { onClose: () => void }) => {
    const handleInnerClick = (e: React.MouseEvent) => {
      e.stopPropagation(); // 모달 내부 클릭 시 닫히는 것 방지
    };
  
    return (
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // 배경 어둡게
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 999,
        }}
      >
        <div
          onClick={handleInnerClick}
          style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "16px",
            maxWidth: "600px",
            width: "80%",
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          <h2 className="text-2xl font-bold mb-4">📌 AutoEver 프로젝트 상세</h2>
          <p className="mb-2">협력사 기반 침해사고 분석 및 보안 솔루션 대응</p>
          <ul className="list-disc list-inside">
            <li>공격자 Kali → Web → 침투 시나리오</li>
            <li>VPN, IPS로 내부망 보호</li>
            <li>SIEM과 로그 서버로 이벤트 수집 및 분석</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Detail;
  