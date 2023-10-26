import '../styles/Header.css';
import React from 'react';

const Header = () => {
  return (
    <div className='headers-container'>
      <div className='headers-box'>
        <div className='logo'>
          <img src={process.env.PUBLIC_URL + '/img/ezenbank.png'} alt="EzenBank" />
        </div>
        <div className='d-flex headers-nav'>
          <ul>
            <li class="list-group-item"><a href="#">조회</a></li>
            <li class="list-group-item"><a href="#">이체</a></li>
            <li class="list-group-item"><a href="#">공과금</a></li>
            <li class="list-group-item"><a href="#">외환</a></li>
            <li class="list-group-item"><a href="#">금융상품</a></li>
            {/* <div className='menu'>조회</div>
            <div>이체</div> 
            <div>공과금</div> 
            <div>외환</div> 
            <div>금융상품</div>  */}
          </ul>
        </div>
      </div>
      {/* <div className='nav-join'>
        <button type='submit'>회원가입</button>
        <button type='submit'>로그인</button>
      </div> */}
    </div>
  )
}

export default Header;