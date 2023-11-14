import React from 'react';
import '../styles/Finance.css';
import { Link } from 'react-router-dom';

const Finance = () => {
  return (
    <div className='Finance d-flex'>
      <Link to='/account/open' className='product py-5'>
        <img src={process.env.PUBLIC_URL + '/img/deposit.png'} alt="deposit"/>
        <h2 className='py-4 fontColor1'>예금</h2>
        <p>입출금이 자유로운 예금 <br /> 젊은 그대, <br /> 당신을 위한 Must Have 통장</p>
      </Link>
      <Link to='/account/open' className='product py-5 mx-4'>
        <img src={process.env.PUBLIC_URL + '/img/subaccount.png'} alt="subaccount"/>
        <h2 className='py-4 fontColor1'>적금</h2>
        <p>저축금액, 만기일, 자동이체 구간까지 <br />내맘대로 디자인하는 DIY 적금</p>
      </Link>
      <Link to='/account/open' className='product py-5'>
        <img src={process.env.PUBLIC_URL + '/img/loan.png'} alt="loan"/>
        <h2 className='py-4 fontColor1'>대출</h2>
        <p>누구나 3분이면 한도조회 OK!<br /> 근로소득자를 위한<br /> 무보증, 무담보, 신용대출로 <br />최대 3천5백만원까지!!</p>
      </Link>
      <Link to='/account/open' className='product py-5 ms-4'>
      <img src={process.env.PUBLIC_URL + '/img/fund.png'} alt="fund" href="#" />
        <h2 className='py-4 fontColor1'>펀드</h2>
        <p>은행, 온라인, 타증권사 펀드까지<br />명쾌한 진단과 처방<br /> 이젠은행은 <br />지금 펀드 클리닉 중!!!</p>
      </Link>
    </div>
  )
}

export default Finance;