import '../styles/Customersub.css';
import React from 'react';
import { Accordion } from "react-bootstrap";
import axios from "axios";
import { Link } from 'react-router-dom';

const Customersub = () => {
  return (
    // <div className='customersub-container'>
      <div className='customersub-leftbox'>

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
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>고객상담</Accordion.Header>
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

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>영업점</Accordion.Header>
            <Accordion.Body className='accoBady'>
              영업점/ATM찾기
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>새소식/이벤트</Accordion.Header>
            <Accordion.Body className='accoBady'>
              새소식
            </Accordion.Body>
            <Accordion.Body className='accoBady'>
              이벤트
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>이젠소비자세상</Accordion.Header>
            <Link to="https://www.kca.go.kr/home/main.do" style={{ textDecoration: "none", color: "black" }}>
              <Accordion.Body className='accoBady'>
                소비자보호원
              </Accordion.Body>
            </Link>
          </Accordion.Item>
        </Accordion>


        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>이용안내</Accordion.Header>
            <Link to="#" style={{ textDecoration: "none", color: "black" }}>
              <Accordion.Body className='accoBady'>
                인터넷뱅킹
              </Accordion.Body>
            </Link>
            <Accordion.Body className='accoBady'>
              폰뱅킹
            </Accordion.Body>
            <Accordion.Body className='accoBady'>
              전자금융
            </Accordion.Body>
            <Accordion.Body className='accoBady'>
              스마트폰 앱
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className='customersub-num'>
          <img src={process.env.PUBLIC_URL + '/img/customer2.png'} alt="icon" href="#" />
          <Link to="/customer" style={{ textDecoration: "none", color: "black" }}>
            <h3><strong>고객센터</strong></h3>
          </Link>
        </div>
        <div className='cutomersub-num1'>
          <h3><strong>02-2675-1750</strong></h3>
        </div>
      </div>

    // </div>
  )
}

export default Customersub;