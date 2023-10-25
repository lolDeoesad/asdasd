import '../styles/MyPage.css';
import React from 'react';

const MyPage = () => {
  return (
    <div className='mypage'>
      <div className='header-container'>
        <img src={process.env.PUBLIC_URL + '/img/ezenbank.png'} alt="EzenBank" />
      </div>

      <div className='mypage-container'>
        <div className='d-flex justify-content-center' style={{ marginTop: "5%" }}>
          <div className='bannerbox' style={{ marginRight: "5%" }}>
            <img className='imgsecurity' src={process.env.PUBLIC_URL + '/img/securitybn.png'} alt="securitybn" />
          </div>
                <h3>쉽고 편리한 거래를 위한 추천서비스</h3>
                <h2><strong>고객님의 바쁜 업무를 위해 준비했어요!</strong></h2>

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
            <div className='menubox' style={{ marginTop: "10%", borderRadius: "10px"}}>
            <br /><h4><strong className=''>주요메뉴</strong></h4><br/>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><a href="#">전체계좌조회</a></li>
                <li class="list-group-item"><a href="#">계좌이체</a></li>
                <li class="list-group-item"><a href="#">최근 거래내역</a></li>
                {/* <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li> */}
              </ul>

            </div>
          </div>

        </div>









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