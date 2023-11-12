import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () =>{
  return(
    <div className="Footer d-flex flex-column align-items-center py-4">
      <div className='footer-nav d-flex'>
        <div className='footer-info'>
          <div className='footer-info-text1 text-start'>02-2675-1750</div>
          <div className='footer-info-text2 text-start'>평일 09:00 - 18:00<br/>(점심시간 13:30 - 14:30 제외 · 주말/공휴일 제외)</div>
          <div className='d-flex mt-2'>
            <div className='footer-info-app me-2'><i className="fa-brands fa-apple fa-xl" />&nbsp; App store</div>
            <div className='footer-info-app'><i className="fa-solid fa-play fa-lg" />&nbsp; Goole play</div>
          </div>
        </div>
        
        <ul>
          <li>About us</li>
          <li>회사 소개</li>
          <li>채용 안내</li>
          <li><Link to="/about">영업점 안내</Link></li>
        </ul>

        <ul>
          <li>금융상품</li>
          <li>이젠 생명</li>
          <li>이젠 화재</li>
          <li>이젠 멤버스</li>
          <li>이젠 주택청약</li>
        </ul>

        <ul>
          <li>고객센터</li>
          <li>공지사항</li>
          <li>자주묻는 질문</li>
          <li>이용약관</li>
          <li>개인정보처리방침</li>
        </ul>

      </div>

      <div className='ect-info' >
        <div className='my-4'>(주)이젠은행 ┃ 서울특별시 강서구 화곡로 149 3층 ┃ 대표: 이양정조 ┃ 개인정보관리 책임자: Elsorin ┃ 사업자등록번호 : 123-12-12345 ┃ 고객센터 : 02-2675-1750 </div>
        <div style={{fontSize: "0.875rem", color:"gray"}}>Copyright ©2023 EzenBank Inc. All Rights Reserved.</div>
      </div>
      
    </div>
  )
}
export default Footer;