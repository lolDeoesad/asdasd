import '../styles/Footer.css';


const Footer = () =>{
  return(
    <div className="footer-container">
      <div className='footer-box'>
        <div className='footer-info'>
          <div className='footer-info-text'>
            <div className='footer-info-text-inner1'>02-2675-1750</div>
            <div className='footer-info-text-inner2'>
              평일 09:00 - 18:00
              <br/>
              (점심시간 13:30 - 14:30 제외 · 주말/공휴일 제외)
              </div>
          </div>
          {/* <div className='footer-info-app'>
            <div className='footer-info-app-inner'><i class="fa-brands fa-apple fa-xl" />&nbsp; App store</div>
            <div className='footer-info-app-inner'><i class="fa-solid fa-play fa-lg" />&nbsp; Goole play</div>
          </div> */}
        </div>
        
        <div className='footer-nav'>

          <ul className='footer-nav-inner'>
            <li id='footer-nav-title'>About us</li>
            <li>회사 소개</li>
            <li>채용 안내</li>
            <li>엔터프라이즈</li>
          </ul>

          <ul className='footer-nav-inner'>
            <li id='footer-nav-title'>금융상품</li>
            <li>이젠 생명</li>
            <li>이젠동부화재</li>
            <li>이젠실비보험</li>
          </ul>

          {/* <ul className='footer-nav-inner'>
            <li id='footer-nav-title'>고객센터</li>
            <li>서비스 안내</li>
            <li>멘티 가이드</li>
            <li>멘토 가이드</li>
            <li>멘토 등록</li>
          </ul> */}

          <ul className='footer-nav-inner'>
            <li id='footer-nav-title'>고객센터</li>
            <li>공지사항</li>
            <li>자주묻는 질문</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
          </ul>
        </div>

      </div>

      <div className='ect-info' >
        <span style={{fontSize: "18px"}}>(주)이젠은행 ┃ 서울특별시 강서구 화곡로 149 3층 ┃ 대표: 이양정조 ┃ 개인정보관리 책임자: Elsorin ┃ 사업자등록번호 : 123-12-12345 ┃ 고객센터 : 02-2675-1750 </span>
        <span></span>
        <div style={{fontSize: "15px"}}>Copyright ©2023 EzenBank Inc. All Rights Reserved.</div>
      </div>
      
    </div>
  )
}

export default Footer;
