import Header from '../components/Header';
import '../styles/LoginPage.css';
import React from 'react';

const LoginPage = () => {

  return (
    <div className='main-container'>

      <div className='header-container'>


      </div>
      <div className='login-container'>
        <div className='login-box'>
          <h2 className='login-title'>
            Customer
            <strong>Member</strong>
          </h2>
          <p className='sub-title'>Ezen은행에 오신 것을 환영합니다.</p>
          <div className='login-input'>
            <div className='form-floating mb-3'>
              <input type='text' className='form-control' id='floatingInput' placeholder='name@example.com' />
              <label htmlFor='floatingInput'>아이디</label>
            </div>
            <div className='form-floating'>
              <input type='password' className='form-control' id='floatingPassword' placeholder='Password' />
              <label htmlFor='floatingPassword'>비밀번호</label>
            </div>
            <button type="submit" class="login-btn btn-primary" href="/mypage">로그인</button>
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
      <div className='footer-container'>
        
      </div>

    </div>
  )
}

export default LoginPage;