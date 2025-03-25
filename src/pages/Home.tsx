const Home = () => {
  return (
    <div className="p-6">
      {/* 🔥 인삿말 */}
      <h2 className="text-5xl font-extrabold mb-4">👋안녕하세요, 프론트엔드 개발자 심민입니다.</h2>
      <p>
        빠르게 변화하는 트렌드에 맞춰 웹개발 과정을 즐기며, <br />
        최신 기술을 배우고 적용하는 것을 좋아합니다. <br />
        사용자 중심의 UI/UX에 관심이 많고, 더 나은 사용자 경험을 위해 고민하는 개발자입니다.
      </p><br />


      <div className="text-xl text-gray-700 mb-6">
        {/* 소제목 - 강조 */}
        <h3 className="text-2xl font-bold text-blue-600 mb-2">
          📋배움을 기록하고 나누는 개발자.
        </h3>

        {/* 본문 내용 */}
        <p>
          스터디를 하며 지식을 나누고 팀원과 함께 성장을 하려고 합니다. <br />
          기술 블로그를 운영하며 40+개 포스팅을 작성했습니다. <br />
        </p>
      </div><br />

      <div className="text-xl text-gray-700 mb-6">
        {/* 소제목 - 강조 */}
        <h3 className="text-2xl font-bold text-blue-600 mb-2">
          🚀나의 발자취.
        </h3>

        {/* 본문 내용 */}
        <p>
          현대오토에버 모빌리티 SW 스쿨 IT보안 최종 프로젝트 우수상 <br />
          2023 한이음 ICT 멘토링 공모전 입선 <br />
        </p>
      </div><br />


      {/* 🔗 링크 */}
      <div className="mt-6 space-y-2">
        <div className="flex items-center space-x-2">
          <img src="/github.png" alt="GitHub" style={{ width: '22px', height: '22px', objectFit: 'contain', top: '5px', position: 'relative', marginRight: '6px' }} />
          <span className="font-semibold text-gray-600">GitHub: </span>
          <a
            href="https://github.com/zxim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
             https://github.com/zxim
          </a><br />
        </div>
        <div className="flex items-center space-x-2">
          <img src="/velog.PNG" alt="velog" style={{ width: '22px', height: '22px', objectFit: 'contain', top: '5px', position: 'relative', marginRight: '6px' }} />
          <span className="font-semibold text-gray-600">Velog: </span>
          <a
            href="https://velog.io/@tlaals44/series"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline"
          >
             https://velog.io/@tlaals44/series
          </a><br />
        </div>
        <div className="flex items-center space-x-2">
          <img src="/email.png" alt="Email" style={{ width: '22px', height: '22px', objectFit: 'contain', top: '5px', position: 'relative', marginRight: '6px' }} />
          <span className="font-semibold text-gray-600">Email: </span>
          <a
            href="mailto:tlaals44@naver.com"
            className="text-red-500 hover:underline"
          >
             tlaals44@naver.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
