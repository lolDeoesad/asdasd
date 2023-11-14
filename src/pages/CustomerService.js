import '../styles/CustomerService.css';
import React from 'react';
import { Accordion } from "react-bootstrap";
import axios from "axios";
import { Link } from 'react-router-dom';

const CustomerService = () => {
  return (
    <div className='customer-container'>
      <div className='customer-leftbox'>

        {/* <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>고객상담</Accordion.Header>
            <Accordion.Body>
              자주하는 질문
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>  */}
        <h2><strong>고객센터</strong></h2>
        <hr style={{ width: "250px" }} />
        <Accordion defaultActiveKey="0" flush style={{ marginTop: "-20px", marginBottom: "10px" }}>
          <Accordion.Item eventKey="0">
            <Accordion.Header><strong>고객상담</strong></Accordion.Header>
            <Link to="/qna" style={{ textDecoration: "none", color: "black" }}>
              <Accordion.Body className='accoBady'>
                자주하는 질문
              </Accordion.Body>
            </Link>
            <Accordion.Body className='accoBady'>
              이메일상담
            </Accordion.Body>
            <Accordion.Body className='accoBady'>
              원격지원PC상담
            </Accordion.Body>
            <Accordion.Body className='accoBady'>
              전화예약상담
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0" flush style={{ marginBottom: "10px" }}>
          <Accordion.Item eventKey="1">
            <Accordion.Header><strong>영업점</strong></Accordion.Header>
            <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
              <Accordion.Body className='accoBady'>
                영업점/ATM찾기
              </Accordion.Body>
            </Link>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0" flush style={{ marginBottom: "10px" }}>
          <Accordion.Item eventKey="2">
            <Accordion.Header><strong>새소식/이벤트</strong></Accordion.Header>
            <Link to="/event" style={{ textDecoration: "none", color: "black" }}>
              <Accordion.Body className='accoBady'>
                이벤트
              </Accordion.Body>
            </Link>
            <Accordion.Body className='accoBady'>
              새소식
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0" flush style={{ marginBottom: "10px" }}>
          <Accordion.Item eventKey="1">
            <Accordion.Header><strong>이젠소비자세상</strong></Accordion.Header>
            <Link to="https://www.kca.go.kr/home/main.do" style={{ textDecoration: "none", color: "black" }}>
              <Accordion.Body className='accoBady'>
                소비자보호원
              </Accordion.Body>
            </Link>
          </Accordion.Item>
        </Accordion>


        <Accordion defaultActiveKey="0" flush style={{ marginBottom: "10px" }}>
          <Accordion.Item eventKey="1">
            <Accordion.Header><strong>이용안내</strong></Accordion.Header>
            <Link to="/security" style={{ textDecoration: "none", color: "black" }}>
              <Accordion.Body className='accoBady'>
                보안센터
              </Accordion.Body>
            </Link>
            <Accordion.Body className='accoBady'>
              폰뱅킹
            </Accordion.Body>
            <Accordion.Body className='accoBady'>
              인터넷뱅킹
            </Accordion.Body>
            <Accordion.Body className='accoBady'>
              스마트폰 앱
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className='customer-num'>
          <img src={process.env.PUBLIC_URL + '/img/customer2.png'} alt="icon" href="#" />
          <Link to="/customer" style={{ textDecoration: "none", color: "black" }}>
            <h3><strong>고객센터</strong></h3>
          </Link>
        </div>
        <div className='cutomer-num1'>
          <h3><strong>02-2675-1750</strong></h3>
        </div>
      </div>
      <div className='customer-rightbox'>
        {/* <h2><strong>고객센터</strong></h2> */}
        {/* <hr style={{ width: "250px" }} /> */}
        <div className='customer-poster'>
          <img src={process.env.PUBLIC_URL + '/img/cusposter.png'} alt="poster" href="#" />
        </div>
      </div>
    </div>
  )
}

export default CustomerService;