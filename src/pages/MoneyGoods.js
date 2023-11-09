import React from 'react';
import '../styles/MoneyGoods.css';

const MoneyGoods = () => {
  return (
    <div className='money-container'>
      <div className='money-box'>
        <div className='money1'>
          <img src={process.env.PUBLIC_URL + '/img/deposit.png'} alt="deposit" href="#" />
          <h2><strong>예금</strong></h2>
          <p>입출금이 자유로운 예금 <br /> 젊은 그대, <br /> 당신을 위한 Must Have 통장</p>
        </div>
        <div className='money2'>
          <img src={process.env.PUBLIC_URL + '/img/subaccount.png'} alt="subaccount" href="#"  />
          <h2><strong>적금</strong></h2>
          <p>저축금액, 만기일, 자동이체 구간까지 <br />내맘대로 디자인하는 DIY 적금</p>
        </div>
        <div className='money3'>
          <img src={process.env.PUBLIC_URL + '/img/loan.png'} alt="loan" href="#" />
          <h2><strong>대출</strong></h2>
          <p>누구나 3분이면 한도조회 OK!<br /> 근로소득자를 위한<br /> 무보증, 무담보, 신용대출로 <br />최대 3천5백만원까지!!</p>
        </div>

      </div>
    </div>
  )
}

export default MoneyGoods;