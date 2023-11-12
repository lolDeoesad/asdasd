import '../styles/MyPage.css';
import React from 'react';

const AccountCard = () => {
  return (
    <div className="card account1" >
      <div className="card-body">
        <h5 className="card-title">이젠자유예금</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">금액10000000원</h6>
        <p className="card-text">오늘도 좋은하루 보내세요</p>
        <a href="#" className="card-link">자세히보기</a>
        <a href="#" className="card-link">로그</a>
      </div>
    </div>
  )
}

export default AccountCard;
