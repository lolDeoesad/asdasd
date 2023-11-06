import '../styles/Customersub.css';
import React from 'react';
import { Accordion } from "react-bootstrap";
import axios from "axios";
import { Link } from 'react-router-dom';
import Customersub from '../components/Customersub';

const Qna = () => {
  return (
    <div className='Qna-container'>
      <div className='Qna-leftbox'>
        <Customersub />
      </div>
      <div className='Qna-rightbox'>
        <h2><strong>고객센터</strong></h2>
      </div>

    </div>
  )
}

export default Qna;