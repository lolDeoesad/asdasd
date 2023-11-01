import CarouselBN from '../components/CarouselBN';
import '../styles/Main.css';
import React, { useState } from 'react';

const Main = () => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className='mains-container'>
      <div className='mains'>
        <div className='mains-box1'>
          <div className='mains-banner'>
            <CarouselBN />
          </div>
        </div>
        &nbsp;&nbsp;
        <div className='mains-box2'>
          <div className='mains-btn1'>
            <a href='/find' className='btn btn-success mainBtn1'>조회</a>
            &nbsp;&nbsp;
            <a href='/send' className='btn btn-success mainBtn2'>이체</a>
            <div className='mains-icon'>
              <div className={`icon1 icons ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={process.env.PUBLIC_URL + '/img/bill.png'} alt="bill" href="#" className='icons' />
                <p>공과금</p>
              </div>
              <div className={`icon2 icons ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={process.env.PUBLIC_URL + '/img/exchange.png'} alt="exchange" href="#" className='icons' />
                <p>환율</p>
              </div>

            </div>
            <div className='mains-icon '>
              <div className={`icon3 icons ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={process.env.PUBLIC_URL + '/img/accounttransfer.png'} alt="accounttransfer" href="#" className='icons' />
                <p>계좌이체</p>
              </div>
              <div className={`icon4 icons ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={process.env.PUBLIC_URL + '/img/customer.png'} alt="customer" href="#" className='icons' />
                <p>고객센터</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='mains-box3'>

      </div> */}
    </div>
  )
}

export default Main;