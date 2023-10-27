import { Nav } from 'react-bootstrap';
import '../styles/Header.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import UpdatePage from '../pages/UpdatePage';
import MyPage from '../pages/MyPage';
import Signup from '../components/Signup';

const Header = () => {

  const navigate = useNavigate();
  return (
    <div className='headers-container'>
      <div className='headers-box'>
        <div className='logo'>
          <img src={process.env.PUBLIC_URL + '/img/ezenbank.png'} alt="EzenBank" />
        </div>
        <div className='d-flex headers-nav'>
          {/* <ul> */}
          <Nav.Link onClick={() => { navigate('/') }} className="list-group-item">조회</Nav.Link>
          <Nav.Link onClick={() => { navigate('/') }} className="list-group-item">이체</Nav.Link>
          <Nav.Link onClick={() => { navigate('/') }} className="list-group-item">금융상품</Nav.Link>
          <Nav.Link onClick={() => { navigate('/') }} className="list-group-item">공과금</Nav.Link>
          <Nav.Link onClick={() => { navigate('/') }} className="list-group-item">외환</Nav.Link>

          <div className='nav-join' style={{float: "right"}}>
          <a href='/signup' className='btn btn-success'>회원가입</a>
          &nbsp;&nbsp;
          <a href='/login' className='btn btn-success'>로그인</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;