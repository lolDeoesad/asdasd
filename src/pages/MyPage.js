import '../styles/MyPage.css';
import React from 'react';

const MyPage = () => {
  return (
    <div className='mypage'>
      <div className='header-container'>
        <img src={process.env.PUBLIC_URL + '/img/ezenbank.png'} alt="EzenBank" />
      </div>
      <div className='mypage-container'>
        <div className='mypage-mainbox'>
          <div className='bannerbox' style={{width: "700px", height: "280px"}}>
            <img src={process.env.PUBLIC_URL + '/img/securitybanner.png'} alt="securitybn" style={{width: "900px", height: "250px", borderRadius: "20px"}}/>
            <div className='userPagebox' style={{width: "300px", height:"700px"}}/>
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