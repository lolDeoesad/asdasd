import '../styles/MyPage.css';
import React from 'react';
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';


const AccountCard = () => {
  return (
    <div class="card account1" >
      <div class="card-body">
        <h5 class="card-title">이젠자유예금</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">금액10000000원</h6>
        <p class="card-text">오늘도 좋은하루 보내세요</p>
        <a href="#" class="card-link">자세히보기</a>
        <a href="#" class="card-link">로그</a>
      </div>
    </div>
  )
}

export default AccountCard;
