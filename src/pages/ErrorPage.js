import React from 'react';
import '../styles/ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className='error-container'>
      <div className='error-box'>
        <img src={process.env.PUBLIC_URL + '/img/error.png'} alt="error" href="#" />
      </div>
      <div className='error-text'>
        <strong ><br />죄송합니다. <br /> <h3>페이지를 찾을 수 없습니다.</h3>
          고객님께서는 <h4>존재하지 않는 주소</h4>로 입장하셨습니다.<br /><br />
          <h4>잠시 후</h4> 메인화면으로 이동 예정이오니 잠시만 기다려주시기 바랍니다.
          {/* 요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.<br /> */}
        </strong>
      </div>
    </div>
  )
}

export default ErrorPage;