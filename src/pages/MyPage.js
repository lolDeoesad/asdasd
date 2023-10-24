import '../styles/MyPage.css';
import React from 'react';

const MyPage = () => {
  return (
    <div className='mypage'>
      <div className='header-container'>
        <img src={process.env.PUBLIC_URL + '/img/ezenbank.png'} alt="EzenBank" />
      </div>
      <div className='mypage-container'>
        <div className='mypage-mainbox'>

        </div>
      </div>
      <div className='footer-container'>

      </div>
    </div>
  )
}

export default MyPage;