import '../styles/MyPage.css';
import React from 'react';
import { useState } from 'react';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ToggleButton from 'react-bootstrap/ToggleButton';
import AccountCard from '../components/AccountCard';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const MyPage = ({userInfo}) => {
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
                <div className='myname'>
                  <span class="text-bold">{userInfo.fname}</span>
                  님 반갑습니다.
                </div>
                <div className='mypage_total'>
                  <div className='my_profile_icon'>
                    <img src={process.env.PUBLIC_URL + '/img/person.png'} alt="person" className='' />
                  </div>
                  <div className='my_profile_btn'>
                    <p className='text-bold' id="user_id">{userInfo.username}</p>
                    <div style={{ display: "inline" }}>&nbsp;&nbsp;
                      <a href='/update' className='btn btn-outline-success updateBtn'><span style={{fontSize:"15px"}}>정보수정</span></a>
                    </div>
                    <div style={{ display: "inline" }}>&nbsp;&nbsp;
                      <a href='/open' className='btn btn-outline-success updateBtn'><span style={{fontSize:"15px"}}>계좌개설</span></a>
                    </div>
                    <div style={{ display: "inline" }}>&nbsp;&nbsp;
                      <a href='/account' className='btn btn-outline-success updateBtn'><span style={{fontSize:"15px"}}>계좌목록</span></a>
                    </div>
                  </div>

                </div>

              <div className='mypage_bottom'>
                <div className='my_page_summary1'>
                  이번 달 카드합산요금 
                  <br/>
                  89건 3,150,000원
                </div>
                <div className='my_page_summary2'>
                  고객님의 총 계좌 수는
                  <br/>
                  00 개 입니다.
                </div>
                
              </div>
              </div>
              <div className='ex'>
                <div className='mybox1'>
                  예금 불리기
                </div>
                <div className='mybox2'>
                  금융상품
                </div>
              </div>
            </div>
            <div className='mycommandbox'>
              메인 화면 아이콘 끌어오기
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