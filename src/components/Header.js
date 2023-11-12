import { Nav } from 'react-bootstrap';
import '../styles/Header.css';
import React from 'react';
import { Link, useNavigate, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import Main from '../pages/Main';


const Header = ({ isAuth, setAuth, userInfo, setUserInfo }) => {
  //isAuth = 사용자
  const navigate = useNavigate();

  const handleLogin = (path) => {
    //클릭된 로그인 상태에 따라서 확인하고 해당 경로로 이동시킴
    if((path === '/account' || path === '/transfer' || path === '/bill') && !isAuth) {
      //조회 또는 이체를 눌렀을 때 로그인이 되어 있지 않으면 로그인 페이지로 이동시킴
      navigate('/login');
    } else{
      //로그인이 되어있다면 해당 페이지로 이동
      navigate(path);
    }
    
  }
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
          <Nav.Link onClick={() => { handleLogin('/account') }} className="list-group-item">조회</Nav.Link>
          <Nav.Link onClick={() => { handleLogin('/transfer') }} className="list-group-item">이체</Nav.Link>
          <Nav.Link onClick={() => { navigate('/goods') }} className="list-group-item">금융상품</Nav.Link>
          <Nav.Link onClick={() => { handleLogin('/bill') }} className="list-group-item">공과금</Nav.Link>
          <Nav.Link onClick={() => { navigate('/main') }} className="list-group-item">외환</Nav.Link>

          <div className='nav-join' style={{ float: "right" }}>
          {
              isAuth ? <Link to="/mypage" onClick={() => {
                
              }} className='btn btn-success'>마이페이지</Link>
                
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