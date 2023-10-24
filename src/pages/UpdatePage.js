import '../styles/UpdatePage.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DaumPostcode from 'react-daum-postcode';
import React, { useState } from 'react';
import DaumMap from '../components/DaumMap';
import { useDaumPostcodePopup } from 'react-daum-postcode';


function UpdatePage() {



  return (
    <div className='main-update'>
      <div className='header-container'>
        <img src={process.env.PUBLIC_URL + '/img/ezenbank.png'} alt="EzenBank" />
      </div>
      <div className='update-container'>
        <div className='update-mainbox'>
          <h2 className='update-title'>회원정보수정</h2><hr />

          {/* <h4>기본정보</h4> */}
          {/* <div className='username-upt'>
            <input type='text' placeholder='이름을 입력해주세요' style={{width : "300px", height: "50px", borderRadius: "10px", marginBottom: "3px"}}/><br/>
            <input type='text' placeholder='주민등록번호' style={{width : "300px", height: "50px", borderRadius: "10px", marginBottom: "3px"}} readOnly/><br/>
            <input type='text' placeholder='회원번호' style={{width : "300px", height: "50px", borderRadius: "10px", marginBottom: "3px"}} readOnly/><br/>
            <input type='text' placeholder='이메일 주소를 입력해주세요' style={{width : "300px", height: "50px", borderRadius: "10px", marginBottom: "3px"}}/><br/>
            <input type='text' placeholder='휴대폰번호를 입력해주세요' style={{width : "300px", height: "50px", borderRadius: "10px", marginBottom: "3px"}}/>
          </div> */}

          {/* <div class="form-text" id="basic-addon4">주민번호: </div>
          <div class="form-text" id="basic-addon4">회원번호: </div> */}



          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <span class="input-group-text" id="basic-addon1">이름</span>
            <input type="text" class="form-control" placeholder="이름을 입력해주세요" aria-label="Username" aria-describedby="basic-addon1" />
          </div>

          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <span class="input-group-text" id="basic-addon1">주민번호</span>
            <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" readOnly />
          </div>

          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <span class="input-group-text" id="basic-addon1">회원번호</span>
            <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" readOnly />
          </div>

          <div class="input-group mb-3 usermail-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <input type="text" class="form-control" placeholder="이메일주소를 입력해주세요" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div class="input-group-text" id="basic-addon2">
              <DropdownButton id="dropdown-basic-button" title="도메인">
                <Dropdown.Item href="#/action-1">naver.com</Dropdown.Item>
                <Dropdown.Item href="#/action-2">google.com</Dropdown.Item>
                <Dropdown.Item href="#/action-3">daum.net</Dropdown.Item>
                <Dropdown.Item href="#/action-4">kakao.com</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>

          <div>
            <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
              <span class="input-group-text" id="basic-addon1">휴대폰번호</span>
              <input type="text" class="form-control" placeholder="번호를 입력해주세요" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <li style={{marginBottom: "5px", color: "red"}}>●입출금 내역 문자 알림은 ‘알림설정 - 입출금 문자 - 조회/변경’ 에서 변경할 수 있습니다.</li>

            <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
              <span class="input-group-text" id="basic-addon1">국적</span>
              <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" readOnly />
            </div>

            <hr />

            <h3 className='update-title'>자택주소/전화번호</h3>

          </div>
          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
              <span class="input-group-text" id="basic-addon1">휴대폰번호</span>
              <input type="text" class="form-control" placeholder="번호를 입력해주세요" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          <br />
          <div class="form-check" style={{border: "auto"}}>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
            <label class="form-check-label" for="flexCheckChecked">
              번호 없음
            </label>
          </div>
        </div>
        <hr />
        <h3 className='update-title'>직장정보</h3>



        <button type="button" class="btn btn-light" href="#">취소</button>
        <button type="button" class="btn btn-primary" href="/mypage">저장</button>

      </div>
      <div className='footer-container'>

      </div>
    </div>
  )
}
export default UpdatePage;