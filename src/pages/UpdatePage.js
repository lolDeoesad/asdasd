import '../styles/UpdatePage.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useState } from 'react';
import DaumMap from '../components/DaumMap';


function UpdatePage() {
  const [address, setAddress] = useState('');
  const [jobAddress, setJobAddress] = useState('');
  const[password, setPassword] = useState(''); //비밀번호 상태
  const[pwConfirm, setPwConfirm] = useState('');//비밀번호 확인상태
  const[pwError, setPwError] = useState(''); // 비번 에러메시지

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; //비밀번호 정규식

  const handlePwChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    
    if(!passwordRegex.test(newPassword)) {
      setPwError('비밀번호는 영문과 숫자를 포함하여 최소 8자 이상이어야 합니다.');
    }else if (newPassword !== pwConfirm){
      setPwError('비밀번호가 일치하지 않습니다.');
    }else {
      setPwError('');
    }
  };

  const handlePwConfirmchange = (e) => {
    const newConfirmPw = e.target.value;
    setPwConfirm(newConfirmPw);
    
    if(newConfirmPw !== password){
      setPwError('비밀번호가 일치하지 않습니다.');
    }else{
      setPwError('');
    }
  };

  
  const handleSave = () => {
    if(pwError === ''){

    }
  };

  return (
    <div className='main-update'>
      <div className='header-container'>
        <img src={process.env.PUBLIC_URL + '/img/ezenbank.png'} alt="EzenBank" />
      </div>
      <div className='update-container'>
        <div className='update-mainbox'>
          <h2 className='update-title'>회원정보수정</h2><hr />

            <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <span class="input-group-text" id="basic-addon1">이름</span>
            <input type="text" class="form-control" placeholder="이름을 입력해주세요" aria-label="Username" aria-describedby="basic-addon1" />
          </div>


          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <span class="input-group-text" id="basic-addon1">비밀번호</span>
            <input type="password" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={handlePwChange} />
          </div>

          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <span class="input-group-text" id="basic-addon1">비밀번호재확인</span>
            <input type="password" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={handlePwConfirmchange}  />
          </div>

          {pwError && <div style={{ color: 'red', marginBottom: '5px', }}>{pwError}</div>}

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
              <DropdownButton id="dropdown-basic-button btn-success" title="도메인">
                <Dropdown.Item href="#/action-1">naver.com</Dropdown.Item>
                <Dropdown.Item href="#/action-2">google.com</Dropdown.Item>
                <Dropdown.Item href="#/action-3">daum.net</Dropdown.Item>
                <Dropdown.Item href="#/action-4">kakao.com</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>


          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <span class="input-group-text" id="basic-addon1">휴대폰번호</span>
            <input type="text" class="form-control" placeholder="번호를 입력해주세요" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <li style={{ marginBottom: "5px", color: "red" }}>●입출금 내역 문자 알림은 ‘알림설정 - 입출금 문자 - 조회/변경’ 에서 변경할 수 있습니다.</li>

          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <span class="input-group-text" id="basic-addon1">국적</span>
            <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" readOnly />
          </div>

          <hr />


          <h3 className='update-title'>자택주소/전화번호</h3>

      
          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <DaumMap setAddress={setAddress} /> 
            <input type="text" class="form-control" placeholder="주소" value={address} aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            
            <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            {/* <span class="input-group-text" id="basic-addon1">주소</span> */}
            <input type="text" class="form-control" placeholder="상세주소" aria-label="Username" aria-describedby="basic-addon1"  />
          </div>


          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <span class="input-group-text" id="basic-addon1">휴대폰번호</span>
            <input type="text" class="form-control" placeholder="번호를 입력해주세요" aria-label="Username" aria-describedby="basic-addon1" />
            <div class="form-check " style={{ marginLeft: "10px" }}>
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
              <label class="form-check-label" for="flexCheckChecked">
                번호 없음
              </label>
            </div>
          </div>
          <br />

          <hr />
          <h3 className='update-title'>직장정보</h3>

          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <span class="input-group-text" id="basic-addon1">직장명</span>
            <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <span class="input-group-text" id="basic-addon1">부서명</span>
            <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <DaumMap setAddress={setJobAddress} /> 
            <input type="text" class="form-control" placeholder="주소" value={jobAddress} aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            
            <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            {/* <span class="input-group-text" id="basic-addon1">주소</span> */}
            <input type="text" class="form-control" placeholder="상세주소" aria-label="Username" aria-describedby="basic-addon1"  />
          </div>
          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <span class="input-group-text" id="basic-addon1">직장연락처</span>
            <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
          </div>

          <button type="button" class="btn btn-light" href="/mypage">취소</button>
          {/* <button type="button" class="btn btn-primary" href="/mypage">저장</button> */}
          <a className="btn btn-success" href="/mypage" onClick={handleSave}>저장</a>

        </div>
      </div>

      <div className='footer-container'>

      </div>
    </div>
  )
}
export default UpdatePage;