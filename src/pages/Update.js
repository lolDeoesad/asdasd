import '../styles/Update.css';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useState } from 'react';
import DaumMap from '../components/DaumMap';
import AxiosInstance from '../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function Update ({userInfo}) {
  const [address, setAddress] = useState('');
  const [jobAddress, setJobAddress] = useState('');
  const [password, setPassword] = useState(''); //비밀번호 상태
  const [pwConfirm, setPwConfirm] = useState('');//비밀번호 확인상태
  const [pwError, setPwError] = useState(''); // 비번 에러메시지

  const [addressDetail, setAddressDetail] = useState('');
  const [fullAddress, setFullAddress] = useState('');
  const navigate = useNavigate();

  const [user, setUser] = useState({...userInfo});

  const changeHandler = (e) => {    // 입력 받은 값들 뽑아서 서버에 보내줄거임 
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const changeHandler2 = (e) => {    // 입력 받은 값들 뽑아서 서버에 보내줄거임 
    setAddressDetail(e.target.value);
    setFullAddress(address + '' + addressDetail);
  }

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; //비밀번호 정규식

  const handlePwChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (!passwordRegex.test(newPassword)) {
      setPwError('비밀번호는 영문과 숫자를 포함하여 최소 8자 이상이어야 합니다.');
    } else if (newPassword !== pwConfirm) {
      setPwError('비밀번호가 일치하지 않습니다.');
    } else {
      setPwError('');
    }
    changeHandler(e);
  };

  const handlePwConfirmchange = (e) => {
    const newConfirmPw = e.target.value;
    setPwConfirm(newConfirmPw);

    if (newConfirmPw !== password) {
      setPwError('비밀번호가 일치하지 않습니다.');
    } else {
      setPwError('');
    }
    changeHandler(e);
  };


  const handleSave = (e) => {
    e.preventDefault();
    // if(pwError === ''){
    // }
    // 서버에 수정 입력한 데이터를 보내주면서 DB의 내용을 수정하도록 요청
    AxiosInstance.put('/user', user)
      .then(response => {
        alert(response.data);
        navigate('/');
      })
      .catch(error => console.log(error));
  };

  return (
    <div className='main-update'>
      <div className='header-container'>
      {/* <Header/> */}
        {/* <img src={process.env.PUBLIC_URL + '/img/ezenbank.png'} alt="EzenBank" /> */}
      </div>
      <div className='update-container'>
        <div className='update-mainbox'>
          <h2 className='update-title'><br/>회원정보수정</h2><hr />

          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <span class="input-group-text" id="basic-addon1">아이디</span>
            <input type="text" class="form-control" name="username" placeholder="" aria-label="Username" aria-describedby="basic-addon1" readOnly onChange={changeHandler} value={user.username} />
          </div>

          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <span class="input-group-text" id="basic-addon1">이름</span>
            <input type="text" class="form-control" name="fname" placeholder="이름을 입력해주세요" aria-label="Username" aria-describedby="basic-addon1" onChange={changeHandler} value={user.fname}  />
          </div>


          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <span class="input-group-text" id="basic-addon1">비밀번호</span>
            <input type="password" class="form-control" name="password" placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={handlePwChange} />
          </div>

          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <span class="input-group-text" id="basic-addon1">비밀번호재확인</span>
            <input type="password" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={handlePwConfirmchange} />
          </div>

          {pwError && <div style={{ color: 'red', marginBottom: '5px', }}>{pwError}</div>}

          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <span class="input-group-text" id="basic-addon1">주민번호</span>
            <input type="text" class="form-control" name="idNo" placeholder="" aria-label="Username" aria-describedby="basic-addon1" readOnly onChange={changeHandler} value={user.idNo} />
          </div>

          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <span class="input-group-text" id="basic-addon1">회원번호</span>
            <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" readOnly onChange={changeHandler} value={user.id} />
          </div>

          <div class="input-group mb-3 usermail-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <input type="text" class="form-control" name="email" placeholder="이메일주소를 입력해주세요" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={changeHandler} value={user.email} />
            <div class="input-group-text" id="basic-addon2">

              <Form.Select aria-label="Default select example">
                <option>도메인</option>
                <option value="1">naver.com</option>
                <option value="2">google.com</option>
                <option value="3">daum.net</option>
              </Form.Select>

            </div>
          </div>


          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <span class="input-group-text" id="basic-addon1">휴대폰번호</span>
            <input type="text" class="form-control" name="phone" placeholder="번호를 입력해주세요" aria-label="Username" aria-describedby="basic-addon1" onChange={changeHandler} value={user.phone} />
          </div>
          {/* <li style={{ marginBottom: "5px", color: "red" }}>●입출금 내역 문자 알림은 ‘알림설정 - 입출금 문자 - 조회/변경’ 에서 변경할 수 있습니다.</li> */}

          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <span class="input-group-text" id="basic-addon1">국적</span>
            <input type="text" class="form-control" name="country" placeholder="" aria-label="Username" aria-describedby="basic-addon1" readOnly onChange={changeHandler} value={user.country} />
          </div>

          <hr />


          <h3 className='update-title'>자택주소/전화번호</h3>


          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <DaumMap setAddress={setAddress} />
            <input type="text" class="form-control" placeholder="주소" name="address" aria-label="Username" aria-describedby="basic-addon1" onChange={changeHandler} value={user.address} />
          </div>

          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            {/* <span class="input-group-text" id="basic-addon1">주소</span> */}
            <input type="text" class="form-control" placeholder="상세주소" aria-label="Username" aria-describedby="basic-addon1" onChange={changeHandler} value={user.addressDetail} />
          </div>

          <hr />
          <h3 className='update-title'>직장정보</h3>

          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <span class="input-group-text" id="basic-addon1">직장명</span>
            <input type="text" class="form-control" name="job" placeholder="" aria-label="Username" aria-describedby="basic-addon1" value={user.jobName}/>
          </div>
          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <span class="input-group-text" id="basic-addon1">부서명</span>
            <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" value={user.teamName}/>
          </div>
          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <DaumMap setAddress={setJobAddress} />
            <input type="text" class="form-control" placeholder="주소" aria-label="Username" aria-describedby="basic-addon1" value={user.jobAddress} />
          </div>

          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <input type="text" class="form-control" placeholder="상세주소" aria-label="Username" aria-describedby="basic-addon1" value={user.jobAddressDetail}/>
          </div>
          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <span class="input-group-text" id="basic-addon1">직장연락처</span>
            <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" value={user.jobPhone}/>
          </div>
          {/* <input type="hidden" name="job"/> */}

          <button type="button" class="btn btn-light" href="/mypage">취소</button>
          <button type="submit" class="btn btn-success" onClick={handleSave}>저장</button>
          {/* <a className="btn btn-success" href="/mypage">저장</a> */}

        </div>
      </div>

      
    </div>
  )
}
export default Update;