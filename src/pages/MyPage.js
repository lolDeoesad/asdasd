import '../styles/MyPage.css';
import React from 'react';
import { useState } from 'react';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ToggleButton from 'react-bootstrap/ToggleButton';
// import AccountCard from '../components/AccountCard';
// import Header from '../components/Header';
import { Link, useNavigate } from 'react-router-dom';
// import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import MyModal from '../components/MyModal';
import axiosInstance from '../utils/axiosInstance';

const MyPage = ({ userInfo, setAuth, setUpdate }) => {
  const [modalShow, setModalShow] = React.useState(false);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  const navigate = useNavigate();
  return (
    <div className='mypage'>
      <div className='header-container'>
        {/* <Header/> */}
        {/* <img src={process.env.PUBLIC_URL + '/img/ezenbank.png'} alt="EzenBank" /> */}
      </div>

      <div className='mypage-container'>
        <div className='mypageBox1'>

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
                  <span className="text-bold">{userInfo.fname}</span>
                  님 반갑습니다.
                </div>
                <div className='mypage_total'>
                  <div className='my_profile_icon'>
                    <img src={process.env.PUBLIC_URL + '/img/person.png'} alt="person" className='' />
                  </div>
                  <div className='my_profile_btn'>
                    <p className='text-bold' id="user_id">{userInfo.username}</p>
                    <div style={{ display: "inline" }}>&nbsp;&nbsp;
                      <Link to='/user/update' className='btn btn-outline-success updateBtn'><span style={{ fontSize: "15px" }}>정보수정</span></Link>
                    </div>
                    <div style={{ display: "inline" }}>&nbsp;&nbsp;
                      <Link to='/account/open' className='btn btn-outline-success updateBtn'><span style={{ fontSize: "15px" }}>계좌개설</span></Link>
                    </div>
                    <div style={{ display: "inline" }}>&nbsp;&nbsp;
                      <Link to='/account/detail' className='btn btn-outline-success updateBtn'><span style={{ fontSize: "15px" }}>계좌목록</span></Link>
                    </div>
                    {
                      userInfo.role=="ADMIN"
                      ?
                        <div style={{ display: "inline" }}>&nbsp;&nbsp;
                          <Link to='/user/approval' className='btn btn-outline-success updateBtn'><span style={{ fontSize: "15px" }}>계정승인</span></Link>
                        </div>
                      :
                        <div style={{ display: "inline" }}>&nbsp;&nbsp;
                          <Link to='/' className='btn btn-outline-success updateBtn' onClick={()=>{
                            axiosInstance.delete('/user')
                              .then(response => {
                                if(response.status === 200) {
                                  setUpdate(false);
                                  setAuth(false);
                                  navigate('/');
                                }
                              }).catch(error => console.log(error))
                          }}><span style={{ fontSize: "15px" }}>회원탈퇴</span></Link>
                        </div>
                    }
                  </div>

                </div>

                <div className='mypage_bottom'>
                  <div className='my_page_summary1'>
                    <Button variant="primary" onClick={() => setModalShow(true)} 
                    style={{width: "200px", height: "100px", marginTop: "20px", backgroundColor: "rgba(0, 0, 0, 0)", textAlign: "center"}}>
                      <strong style={{marginBottom: "20px"}}>11월 이용대금 명세서</strong>
                    </Button>

                    <MyModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />

                    {/* <button onClick={openModal}><strong>이번 달 카드합산요금 </strong></button>
                    <Modal isOpen={isModalOpen} closeModal={closeModal}>
                    <br />
                    <h2>89건 3,150,000원</h2>
                    <p>?? 뭐?</p>
                    </Modal> */}
                  </div>
                  <div className='my_page_summary2'> 
                    고객님의 총 계좌 수는
                    <br />
                    {userInfo.accountList ? userInfo.accountList.length : '0'}개 입니다.
                    <br />
                    <Link to="/account">
                      
                    </Link>
                  </div>

                </div>
                {/* 시큐리티 배너 */}
                <div className='d-flex justify-content-center' style={{ marginTop: "5%", height: "300px" }}>
                  <div className='bannerbox' style={{ marginRight: "5%" }}>
                    <img className='ezenSecurity' src={process.env.PUBLIC_URL + '/img/security.png'} alt="security" />
                  </div>
                </div>
              </div>

              {/* -------------------------------------------------------------------------------------------- */}
              <div className='ex'>
                <div className='mycommandbox'>
                  {/* 메인 화면 아이콘 끌어오기 */}
                  <div>
                    <img src={process.env.PUBLIC_URL + '/img/deposit.png'} alt="deposit" href="#" className='deposit' />
                    <strong style={{ fontSize: "18px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;입출금</strong>
                  </div>
                  <div>
                    <img src={process.env.PUBLIC_URL + '/img/subaccount.png'} alt="subaccount" href="#" className='subaccount' />
                    <strong style={{ fontSize: "18px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;청약통장</strong>
                  </div>
                  <div>
                    <img src={process.env.PUBLIC_URL + '/img/creditcard.png'} alt="creditcard" href="#" className='creditcard' />
                    <strong style={{ fontSize: "18px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;신용카드 추가 생성</strong>
                  </div>
                  <div>
                    <img src={process.env.PUBLIC_URL + '/img/fund.png'} alt="fund" href="#" className='fund' />
                    <strong style={{ fontSize: "18px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;펀드</strong>
                  </div>
                  <div>
                    <img src={process.env.PUBLIC_URL + '/img/loan.png'} alt="loan" href="#" className='loan' />
                    <strong style={{ fontSize: "18px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;대출</strong>
                  </div>
                  <div>
                    <img src={process.env.PUBLIC_URL + '/img/portfolio.png'} alt="portfolio" href="#" className='portfolio' />
                    <strong style={{ fontSize: "18px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;포트폴리오</strong>
                  </div>
                  <div>
                    <img src={process.env.PUBLIC_URL + '/img/sudoku.png'} alt="sudoku" href="#" className='sudoku' />
                    <strong style={{ fontSize: "18px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;미니게임</strong>
                  </div>
                </div>

              </div>

              {/* <div className='ex'>
                <div className='mybox1'>
                  <div>
                    <img src={process.env.PUBLIC_URL + '/img/deposit.png'} alt="deposit" href="#" className='deposit' />
                    <strong style={{ fontSize: "18px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;입출금</strong>
                  </div>
                  <div>
                    <img src={process.env.PUBLIC_URL + '/img/subaccount.png'} alt="subaccount" href="#" className='subaccount' />
                    <strong style={{ fontSize: "18px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;청약통장</strong>
                  </div>
                  <div>
                    <img src={process.env.PUBLIC_URL + '/img/creditcard.png'} alt="creditcard" href="#" className='creditcard' />
                    <strong style={{ fontSize: "18px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;신용카드 추가 생성</strong>
                  </div>
                </div>
                <div className='mybox2'>
                  
                  <div>
                    <img src={process.env.PUBLIC_URL + '/img/fund.png'} alt="fund" href="#" className='fund' />
                    <strong style={{ fontSize: "18px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;펀드</strong>
                  </div>
                  <div>
                    <img src={process.env.PUBLIC_URL + '/img/loan.png'} alt="loan" href="#" className='loan' />
                    <strong style={{ fontSize: "18px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;대출</strong>
                  </div>
                  <div>
                    <img src={process.env.PUBLIC_URL + '/img/portfolio.png'} alt="portfolio" href="#" className='portfolio' />
                    <strong style={{ fontSize: "18px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;포트폴리오</strong>
                  </div>
                </div>
              </div>
            </div> */}


            </div>
            {/* <br /> <strong >최근 거래내역</strong> */}
          </div>
        </div>



      </div>
    </div>

  )
}

export default MyPage;




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