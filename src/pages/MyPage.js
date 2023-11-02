import '../styles/MyPage.css';
import React from 'react';
import { useState } from 'react';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ToggleButton from 'react-bootstrap/ToggleButton';
import AccountCard from '../components/AccountCard';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const MyPage = () => {
  const navigate = useNavigate();


  return (
    <div className='mypage'>
      <div className='header-container'>
        {/* <Header/> */}
        {/* <img src={process.env.PUBLIC_URL + '/img/ezenbank.png'} alt="EzenBank" /> */}
      </div>

      <div className='mypage-container'>
        <div className='mypageBox1'>
          <div className='d-flex justify-content-center' style={{ marginTop: "5%", height: "300px" }}>
            <div className='bannerbox' style={{ marginRight: "5%" }}>
              <img className='ezenSecurity' src={process.env.PUBLIC_URL + '/img/security.png'} alt="security" />
            </div>
          </div>
          <div className='accountBox'>
            <h1><strong>마이페이지</strong></h1>
            <hr className='solid' />
            {/* <p>전계좌조회 순서대로 원화 출금계좌 상위 6개만 제공됩니다. <a>계좌순서변경</a></p><br />
            <div className='d-flex'>
              <AccountCard />
              <AccountCard />
              <AccountCard />
            </div> */}
          </div>
          <div className='mybox' >
            <div className='mybox-bigline'>
              <div className='myloginbox'>
                <br/><p>    님 환영합니다.</p>
                <div className='a'>
                  <img src={process.env.PUBLIC_URL + '/img/person.png'} alt="person" className='' />
                  <p>아이디</p>
                  <br /><br />
                  <a href='/update' className='btn btn-outline-success updateBtn'>정보수정</a>
                </div>
              </div>
              <div className='b'>
                <div className='mybox1'>

                </div>
                <div className='mybox2'>

                </div>
              </div>
            </div>
            <div className='mycommandbox'>

            </div>
            {/* <br /> <strong >최근 거래내역</strong> */}
          </div>



        </div>



        {/* 


          
        <div className='accountbox'>
          <h4>입출금 계좌현황</h4>
          <p>전계좌조회 순서대로 원화 출금계좌 상위 6개만 제공됩니다. <a>계좌순서변경</a></p>




        </div>
        <div className='accountBtn'>
          <ButtonGroup>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div> */}



        {/* <div>
                  <h3>쉽고 편리한 거래를 위한 추천서비스</h3>
                  <h2><strong>고객님의 바쁜 업무를 위해 준비했어요!</strong></h2>
                </div> */}




      </div>







      {/* <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <span class="input-group-text" id="basic-addon1">이름</span>
            <input type="text" class="form-control" placeholder="이름을 입력해주세요" aria-label="Username" aria-describedby="basic-addon1" />
          </div> */}

    </div>
  )
}

export default MyPage;