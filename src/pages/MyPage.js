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
              <img className='imgezenLife' src={process.env.PUBLIC_URL + '/img/ezenLife.png'} alt="ezenLife" />
            </div>
          </div>
          <div className='accountBox'>
            <h4>입출금 계좌현황</h4>
            <p>전계좌조회 순서대로 원화 출금계좌 상위 6개만 제공됩니다. <a>계좌순서변경</a></p><br />
            <div className='d-flex'>
              <AccountCard />
              <AccountCard />
              <AccountCard />
            </div>
          </div>
          <div className='history' >
            <br /> <strong >최근 거래내역</strong>
          </div>



        </div>


        <div className='mypageBox2'>
          <div className='userPagebox'  >
            <div class="card" >
              <div class="card-body">
                <h5 class="card-title">고객님!</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">환영합니다!</h6>
                <p class="card-text">오늘도 좋은하루 보내세요</p>
                <a href="#" class="card-link">시간연장</a>
                <a href="/main" class="card-link">로그아웃</a>
              </div>
            </div>
            <div className='menubox' style={{ marginTop: "10%", borderRadius: "10px" }}>
              <br /><h4><strong className=''>주요메뉴</strong></h4><br />
              {/* <ul class="list-group list-group-flush"> */}

              <Nav.Link onClick={() => { navigate('/account') }} className="list-group-item mylink">전체 계좌조회</Nav.Link><br/><br/>
              <hr/>
              <Nav.Link onClick={() => { navigate('/') }} className="list-group-item mylink">계좌이체</Nav.Link><br/><br/>
              <hr/>
              <Nav.Link onClick={() => { navigate('/') }} className="list-group-item mylink">최근 거래내역</Nav.Link>
              {/* <Nav.Link onClick={() => { navigate('/') }} className="list-group-item">공과금</Nav.Link>
              <Nav.Link onClick={() => { navigate('/') }} className="list-group-item">외환</Nav.Link> */}

              {/* <li class="list-group-item"><a href="#">전체계좌조회</a></li>
              <li class="list-group-item"><a href="#">계좌이체</a></li>
              <li class="list-group-item"><a href="#">최근 거래내역</a></li> */}

              {/* </ul> */}

            </div>
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





      <div className='footer-container'>


        {/* <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <span class="input-group-text" id="basic-addon1">이름</span>
            <input type="text" class="form-control" placeholder="이름을 입력해주세요" aria-label="Username" aria-describedby="basic-addon1" />
          </div> */}
      </div>
    </div>
  )
}

export default MyPage;