import React, { useEffect } from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/Login.css';
import { Form } from 'react-bootstrap';

const Login = ({setAuth, setUpdate}) => {
  const [member, setMember] = useState({ username : '', password : '' });
  const [remember, setRemember] = useState(false);

  const navigate = useNavigate();
  const changeHandler = (e) => {
    setMember({
      ...member,
      [e.target.name]: e.target.value
    })
  }
  const keyDownHandler = (e) => {
    if (e.key === "Enter")
      loginHandler();
  }
  const loginHandler = () => {
    if (remember)
      localStorage.setItem('ezenLoginInfo', JSON.stringify(member));
    else
      localStorage.removeItem('ezenLoginInfo');

    axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, member)
      .then(response => {
        const jwt = response.headers.authorization;
        if (jwt) {
          sessionStorage.setItem('jwt', jwt);
          setAuth(true);
          setUpdate(false);
          // alert('로그인 성공');
          navigate('/');
        }
      }).catch(error => alert('로그인 실패'));
  }

  useEffect(() => {
    let storeInfo = localStorage.getItem('ezenLoginInfo');
    if (storeInfo) {
      storeInfo = JSON.parse(storeInfo);
      setMember(storeInfo);
      setRemember(true);
    }
  }, [])

  return (
    // <div className='d-flex flex-column justify-content-center align-items-center'>
      <div className='Login mb-5 py-5 d-flex flex-column justify-content-center align-items-center'>
        <h2>
          Customer<strong className='fontColor1'>Member</strong>
        </h2>
        <p className='mb-5'>Ezen은행에 오신 것을 환영합니다.</p>
        <div className='form-floating mb-3'>
          <input type='text' className='form-control' id='floatingInput' value={member.username} placeholder='name@example.com' name="username" onChange={changeHandler} />
          <label htmlFor='floatingInput'>아이디</label>
        </div>
        <div className='form-floating mb-3'>
          <input type='password' className='form-control' id='floatingPassword' value={member.password} placeholder='Password' name="password" onChange={changeHandler} onKeyDown={keyDownHandler} />
          <label htmlFor='floatingPassword'>비밀번호</label>
        </div>
        <div className='form-floating'>
          <Form.Check label="Remember me" checked={remember} onChange={({ target: { checked } }) => setRemember(checked)} />
        </div>
        <button type="button" className="login-btn btn btn-success my-4" onClick={loginHandler}>로그인</button>
        <div>
          <span className='me-4'>아직 가입 전이신가요?</span>
          <Link to="/user/signup" style={{ color: '#137d34' }}>회원가입</Link>
        </div>
        <div>
          <span className='me-4'>아이디, 비밀번호를 잊으셨나요?</span>
          <Link to="/user/findIdPw" style={{ color: '#137d34' }}>ID/PW 찾기</Link>
        </div>
      </div>
    // </div>
  )
}

export default Login;