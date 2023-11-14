import React from 'react';
import '../styles/Bill.css';
import { Accordion, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Bill = () => {
  return (
    <div className='bill-container'>
      <div className='bill-topbox' >
        <div className='bill-text1'>
          <p><strong>생활의 편리함을 더해주는</strong></p>
          <h3><strong>이젠은행 공과금 납부</strong></h3>
          <hr />
        </div>
        <div className='bill-middles'>
          <div className='bill-icon'>
            <div>
              <Link to="/event">
                <img src={process.env.PUBLIC_URL + '/img/paperbill1.png'} alt="paperbill1" href="#" className='icons1' />
              </Link>
              <strong>지로납부</strong>
            </div>
            <div>
              <Link to="/event">
                <img src={process.env.PUBLIC_URL + '/img/phonebill.png'} alt="phonebill" href="#" className='icons1' />
              </Link>
              <strong>통신요금</strong>
            </div>
            <div>
              <Link to="/event">
                <img src={process.env.PUBLIC_URL + '/img/waterbill.png'} alt="waterbill" href="#" className='icons1' />
              </Link>
              <strong>수도요금</strong>
            </div>
            <div>
              <Link to="/event">
                <img src={process.env.PUBLIC_URL + '/img/tunderbill.png'} alt="tunderbill" href="#" className='icons1' />
              </Link>
              <strong>전기요금</strong>
            </div>
            <div>
              <Link to="/event">
                <img src={process.env.PUBLIC_URL + '/img/housebill.png'} alt="housebill" href="#" className='icons1' />
              </Link>
              <strong>주택관리비</strong>
            </div>
            <div>
              <Link to="/event">
                <img src={process.env.PUBLIC_URL + '/img/collegebill.png'} alt="collegebill" href="#" className='icons1' />
              </Link>
              <strong>대학등록금</strong>
            </div>
          </div>
        </div>
        {/* <div className='auto-bill'>
            <p><strong>편리한 자동납부</strong></p><br/>
            <p>생활요금은 자동납부로 쉽게 관리하세요.</p>
          </div> */}
      </div>

      <div className='bill-middlebox'>
        {/* <hr style={{ width: "900px" }} /> */}
        <div className='bill-time'>
          <Accordion defaultActiveKey="0" flush style={{ marginBottom: "10px", border: "1px solid", borderStyle: "none none solid none" }} className='accobody'>
            <Accordion.Item eventKey="1">
              <Accordion.Header><strong>공과금별 납부 가능 시간 안내</strong></Accordion.Header>
              <Accordion.Body className='accoBady'>
                <div className='bill-times'>
                  <div className='time1'>
                    <strong style={{ font: "bold" }}>납부 가능시간</strong>
                    <li>지로, 지방세, 사회보험료, 전기요금,<br />KT통신요금, 벌과금,<br />국세납부<br />00:30~23:30</li>
                    <li>관세납부<br />00:30~23:30</li>
                    <li>대학등록금 납부<br /> 평일 09:00~16:30<br />토요일/공휴일 24시간<br />(일부대학교 제외)</li>
                    <li>아파트 관리비 납부<br />24시간</li>
                  </div>
                  <div className='time1'>
                    <strong>자동납부 등록/변경/해지/조회 안내</strong>
                    <li>KB국민은행 지로, 금융결제원<br />CMS, 펌뱅킹<br />평일 24시간</li>
                    <li>KT통신요금, 국민연금, 건강보험<br />평일 09:00~23:30</li>
                    <li>자동납부 출금계좌납부<br />평일 09:00~17:00</li>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <Row className='bill-bottombox'>
        <Col>
          <ul className='bill-inner' >
            <li id='bill-nav-title'>지방세①</li>
            <li>환경개선부담금</li>
            <li>취득세</li>
            <li>세외수입</li>
          </ul>
        </Col>
        <Col>
        <ul className='bill-inner ' >
          <li id='bill-nav-title'>지방세②</li>
          <li>등록면허세</li>
          <li>자동차세</li>
          <li>지방소득세</li>
        </ul>
        </Col>
        <Col>
        
        <ul className='bill-inner ' >
          <li id='bill-nav-title'>지방세③</li>
          <li>지방교육세</li>
          <li>재산세</li>
          <li>주민세</li>
        </ul>
        </Col>
        <Col>
        <ul className='bill-inner' >
          <li id='bill-nav-title'>4대보험료</li>
          <li>통합징수보험료</li>
          <li>국민연금</li>
          <li>산재보험료</li>
          <li>고용보험료</li>
        </ul>
        </Col>
        <Col>
        <ul className='bill-inner ' >
          <li id='bill-nav-title'>기타요금</li>
          <li>국세/관세</li>
          <li>기금/국고</li>
          <li>범칙/벌과금</li>
        </ul>
        </Col>
        <Col>
        <ul className='bill-inner ' >
          <li id='bill-nav-title'>수도요금</li>
          <li>상수도</li>
          <li>하수도</li>
          {/* <li>범칙/벌과금</li> */}
        </ul>
        </Col>
        {/* <ul className='bill-inner '>
          <li id='bill-nav-title'>가스/전기요금</li>
          <li>도시가스</li>
          <li>전기요금</li>
        </ul> */}
      </Row>
    </div>
  )
}

export default Bill;