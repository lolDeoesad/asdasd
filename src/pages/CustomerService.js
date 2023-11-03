import '../styles/CustomerService.css';
import React from 'react';
import { Accordion } from "react-bootstrap";
import axios from "axios";

const CustomerService = () => {
  return (
    <div className='customer-container'>
      <div className='customer-leftbox'>
        {/* <hr/> */}
        
          <li>고객센터</li>
          <li>고객센터메인</li>
          <li>자주하는 질문</li>
          <li>영업점</li>
          <li>이젠소비자세상</li>
        


      </div>
      <div className='customer-rightbox'>

      </div>
    </div>
  )
}

export default CustomerService;