import { Nav } from 'react-bootstrap';
import '../styles/Header.css';
import React from 'react';
import { Link, useNavigate, Route, BrowserRouter as Router } from 'react-router-dom';
import Main from '../pages/Main';


const Header = ({ isAuth, setAuth, userInfo, setUserInfo }) => {

  const navigate = useNavigate();
  return (
    <div className='headers-container'>
      <div className='headers-box'>
        <div className='logo'>
            <Link to="/main">
              <img src={process.env.PUBLIC_URL + '/img/ezenbank.png'} alt="EzenBank" />
            </Link>
        </div>
        <div className='d-flex headers-nav'>
          {/* <ul> */}
          <Nav.Link onClick={() => { navigate('/account') }} className="list-group-item">조회</Nav.Link>
          <Nav.Link onClick={() => { navigate('/transfer') }} className="list-group-item">이체</Nav.Link>
          <Nav.Link onClick={() => { navigate('/main') }} className="list-group-item">금융상품</Nav.Link>
          <Nav.Link onClick={() => { navigate('/main') }} className="list-group-item">공과금</Nav.Link>
          <Nav.Link onClick={() => { navigate('/main') }} className="list-group-item">외환</Nav.Link>

          <div className='nav-join' style={{ float: "right" }}>
          {
              isAuth ? <Link to="/mypage" onClick={() => {
                
              }} className='btn btn-success'>마이페이지</Link>
                // sessionStorage.removeItem('jwt');
                // setAuth(false);
                // setUserInfo({ username: '' });
                : <Link to='/signup' className='btn btn-success'>회원가입</Link>
            } 
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {
              isAuth ? ( <Link to="/main" onClick={() => {
                sessionStorage.removeItem('jwt');
                setAuth(false);
                setUserInfo({ username: '' });
              }}className='btn btn-success'>로그아웃</Link>
              ) : (<Link to='/login' className='btn btn-success'>로그인</Link>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;