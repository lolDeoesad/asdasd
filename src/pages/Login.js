import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import '../styles/Login.css';
import axios from "axios";
const Login = ({setAuth}) => {

  const [member, setMember] = useState({
    username : '',
    password : '',
    fname : '',
    email : '',
    idNo : '',
    phone : '',
    country : '',
    address : '',
    job : '',
    agree : ''
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setMember({
      ...member,
      [e.target.name] : e.target.value
    })
  }

  return (
    <div className='main-container'>
      <div className='login-container'>
        <div className='login-box'>
          <h2 className='login-title'>
            Customer
            <strong>Member</strong>
          </h2>
          <p className='sub-title'>Ezen은행에 오신 것을 환영합니다.</p>
          <div className='login-input'>
            <div className='form-floating mb-3'>
              <input type='text' className='form-control' id='floatingInput' placeholder='name@example.com' name="username" onChange={changeHandler} />
              <label htmlFor='floatingInput'>아이디</label>
            </div>
            <div className='form-floating'>
              <input type='password' className='form-control' id='floatingPassword' placeholder='Password' name="password" onChange={changeHandler} />
              <label htmlFor='floatingPassword'>비밀번호</label>
            </div>
            <button type="button" class="login-btn btn-primary" onClick={() => {
              axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, member)
              .then(response => {
                const jwt = response.headers.authorization;
                if(jwt) {
                  console.log(jwt);
                  sessionStorage.setItem('jwt', jwt);
                  setAuth(true);
                  alert('로그인 성공');
                  navigate('/main');
                } 
              }).catch(error => {
                alert('로그인 실패');
                console.log(error);
              })
            }}>로그인</button>
            <div className='member-sign'>
              <ul>
                <li className='joinbox'>
                  <span>아직 가입 전이신가요?</span>
                  <a href='/signup' className='join-btn btn-primary' type='submit'>회원가입</a>
                </li>
                <li className='findbox'>
                  <span>아이디, 비밀번호를 잊으셨나요?</span>
                  <a href='/find' className='find-btn btn-primary' type='submit'>ID/PW 찾기</a>
                </li>
                
              </ul>

              {/* <button type="submit" class="btn btn-primary">로그인</button>
              <button type="button" class="btn btn-primary">회원가입</button> */}
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Login;