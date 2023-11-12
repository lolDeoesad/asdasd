import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = ({ isAuth, setAuth, setUserInfo }) => {
  const logoutHandler = () => {
    sessionStorage.removeItem('jwt');
    setAuth(false);
    setUserInfo({ username: '' });
  };

  return (
    <div className='Header fixed-top d-flex justify-content-between align-items-center py-2 pe-5'>

      <Link to="/" className='logo-img ps-3 d-flex align-items-center'>
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="EzenBank" />
      </Link>

      <div className='header-nav d-flex'>
        <Link className='me-5 text-nowrap' to="/account">조회</Link>
        <Link className='me-5 text-nowrap' to="/transaction">이체</Link>
        <Link className='me-5 text-nowrap' to="/finance">금융상품</Link>
        <Link className='me-5 text-nowrap' to="/bill">공과금</Link>
        <Link className='me-5 text-nowrap' to="/exchange">외환</Link>
      </div>

      <div className='Header-Btn me-4'>
        {
          isAuth
          ? <>
              <Link to="/user/mypage" className='header-btn btn btn-success me-4 my-1'>마이페이지</Link>
              <Link to="/" className='header-btn btn btn-success me-4 my-1' onClick={logoutHandler}>로그아웃</Link>
            </>
          : <>
              <Link to='/user/signup' className='header-btn btn btn-success me-4 my-1'>회원가입</Link>
              <Link to='/login' className='header-btn btn btn-success me-4 my-1'>로그인</Link>
            </>
        }
      </div>
      
    </div>
  )
}

export default Header;