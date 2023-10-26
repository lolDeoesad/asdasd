import { Accordion } from "react-bootstrap";
import '../styles/Signup.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DaumMap from '../components/DaumMap';
import Form from 'react-bootstrap/Form';

function Signup() {

  const [error, setError] = useState([  // 정규식 틀렸을때 띄어줄 스테이트     
    '아이디는 영문자로 시작하는 6~20자 영문자 또는 숫자이어야 합니다.',
    '이름은 한글 혹은 영문으로 2자리 이상 20자리 이하로 입력해주세요',
    '비밀번호는 영문 숫자 합쳐서 8자리 이상 20자리 이하로 입력해주세요.',
    '주민번호 형식에 맞게 입력해주세요',
    '이메일 형식에 맞게 입력해주세요',
    '전화번호 형식에 맞게 입력해주세요']);
  const [proper, setProper] = useState([  // 정규식 성공하면 띄어줄 스테이트  
    '올바른 아이디 형식입니다',
    '올바른 이름 형식입니다.',
    '올바른 비밀번호 형식입니다.',
    '올바른 주민번호 형식입니다',
    '올바른 이메일형식입니다',
    '올바른 전화번호 형식입니다']);


  const [address, setAddress] = useState('');
  const [jobAddress, setJobAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [fullAddress, setFullAddress] = useState('');
  const [isId, setIsId] = useState(null);  // 정규식 성공 실패 구분하는 스테이트  
  const [isFname, setIsFname] = useState(null);
  const [isPw, setIsPw] = useState(null);
  const [isIdNo, setIdNo] = useState(null);
  const [isEmail, setIsEmail] = useState(null);
  const [isTel, setIsTel] = useState(null);
  const [isChecked, setIsChecked] = useState(null);


  const [userInfo, setUserInfo] = useState({  //인풋으로 입력받은 값 저장할 유저정보 스테이트
    username: '',
    fname: '',
    password: '',
    idNo: '',
    email: '',
    phone: '',
    country: '',
    address: '',
    job: '',
    agree: ''
  });

  console.log(userInfo)

  const navigate = useNavigate();

  const changeHandler = (e) => {    // 입력 받은 값들 뽑아서 서버에 보내줄거임 
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value

    })
  }

  const idRegEX = () => {
    const idReg = /^[a-z]+[a-z0-9]{5,19}$/g; // 영문 또는 숫자로 5자리이상
    if (!idReg.test(userInfo.username)) {
      let copy = [...error];
      copy[0] = error[0]
      setError(copy);
      setIsId(true);
      return;
    } else {
      let copy = [...proper];
      copy[0] = proper[0]
      setProper(copy);
    }
    setIsId(false);
  }

  const fnRegEX = () => {
    const fNameReg = /^[가-힣a-zA-Z]{2,20}$/ // 한글 영문만 2~20 까지
    if (!fNameReg.test(userInfo.fname)) {
      setIsFname(true);
      let copy = [...error];
      copy[1] = error[1]
      setError(copy);
      setIsFname(true);
      return;
    } else {
      let copy = [...proper];
      copy[1] = proper[1]
      setProper(copy);
    }
    setIsFname(false);
  }

  const pwRegEX = () => {
    const passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;    // 비밀번호 정규식 

    if (!passwordReg.test(userInfo.password)) {
      let copy = [...error];
      copy[2] = error[2]
      setError(copy);
      setIsPw(true);
      return;
    } else {
      let copy = [...proper];
      copy[2] = proper[2]
      setProper(copy);
    }
    setIsPw(false);
  }

  const idNumRegEX = (e) => {
    e.target.value = e.target.value
      .replace(/^(\d{0,6})(\d{0,7})$/g, '$1-$2').replace(/-{1,2}$/g, '');
  }

  const idNumRegEX2 = () => {
    const idNumReg = /^\d{0,6}-\d{7}$/;
    if (!idNumReg.test(userInfo.idNo)) {
      let copy = [...error];
      copy[3] = error[3]
      setError(copy);
      setIdNo(true);
      return;
    } else {
      let copy = [...proper];
      copy[3] = proper[3]
    }
    setIdNo(false);
  }


  const eRegEX = () => {
    const emailReg = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;    // 이메일 정규식 
    if (!emailReg.test(userInfo.email)) {
      let copy = [...error];
      copy[4] = error[4]
      setError(copy);
      setIsEmail(true);
      return;
    } else {
      let copy = [...proper];
      copy[4] = proper[4]
    }
    setIsEmail(false);

  }


  const phRegEx = (e) => {              // 숫자 외 입력안되고 하이픈 자동생성되는 전화번호 정규식 
    e.target.value = e.target.value
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
  }

  const phRegEx2 = () => {
    const phoneReg = /^\d{2,3}-\d{3,4}-\d{4}$/;
    if (!phoneReg.test(userInfo.phone)) {
      let copy = [...error];
      copy[5] = error[5]
      setError(copy);
      setIsTel(true);
      return;
    } else {
      let copy = [...proper];
      copy[5] = proper[5]
    }
    setIsTel(false);
  }

  const checked = (e) => {
    if (!e.target.checked) {
      setIsChecked(true)
    } else {
      setIsChecked(false);
    }

  }

  const finalCheck = (e) => {

  }

  return (
    <div className="Signup">
      <div className="header-container">
      <img src={process.env.PUBLIC_URL + '/img/ezenbank.png'} alt="EzenBank" />
      </div>
      <div className="Signup-container">
      <h2 className='update-title'>회원가입</h2><hr />

        <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
          <span class="input-group-text" id="basic-addon1">아이디</span>
          <input type="text" class="form-control" name="username" placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={changeHandler} onBlur={idRegEX} />
        </div>
        {isId == null ? " " : isId ? <span id="error">{error[0]}</span> : <span id="proper">{proper[0]}</span>} {/* 처음부터 문구 나와있는거 별로여서 삼항연산자 중첩사용함 가독성 안좋음 */}
        {/* isId가 null 이냐? 물어봐서 (isId는 정규식 성공 실패 구분해줄 스테이트) trye 면 공백 false 면 삼항연산자 한번 더 물어봤음  */}

        <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
          <span class="input-group-text" id="basic-addon1">이름</span>
          <input type="text" class="form-control" name="username" placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={changeHandler} onBlur={fnRegEX} />
        </div>
        {isFname == null ? " " : isFname ? <span id="error">{error[1]}</span> : <span id="proper">{proper[1]}</span>}


        <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
          <span class="input-group-text" id="basic-addon1">비밀번호</span>
          <input type="password" class="form-control" name="password" placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={changeHandler} onBlur={pwRegEX} />
        </div>
        {isPw == null ? " " : isPw ? <span id="error">{error[2]}</span> : <span id="proper">{proper[2]}</span>}

        {/* 밑에꺼는 내코드로 진행 */}
        <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
          <span class="input-group-text" id="basic-addon1">비밀번호재확인</span>
          <input type="password" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={changeHandler} />
        </div>

        <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
          <span class="input-group-text" id="basic-addon1">주민번호</span>
          <input type="text" class="form-control" name="username" placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={changeHandler} onInput={idNumRegEX} onBlur={idNumRegEX2} maxLength={14} />
        </div>
        {isIdNo == null ? " " : isIdNo ? <span id="error">{error[3]}</span> : <span id="proper">{proper[3]}</span>}

        <div class="input-group mb-3 usermail-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <input type="text" class="form-control" name="email" placeholder="이메일주소를 입력해주세요" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={changeHandler} onBlur={eRegEX} />
            <div class="input-group-text" id="basic-addon2">
              <Form.Select aria-label="Default select example">
                <option>도메인</option>
                <option value="1">naver.com</option>
                <option value="2">google.com</option>
                <option value="3">kakao.com</option>
                <option value="4">daum.net</option>
              </Form.Select>
            </div>
          </div>
        {isEmail == null ? " " : isEmail ? <span id="error">{error[4]}</span> : <span id="proper">{proper[4]}</span>}



        

        <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
          <span class="input-group-text" id="basic-addon1">휴대폰번호</span>
          <input type="text" class="form-control" name="username" placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={changeHandler} onInput={phRegEx} maxLength={13} onBlur={phRegEx2} />
        </div>
        {isTel == null ? " " : isTel ? <span id="error">{error[5]}</span> : <span id="proper">{proper[5]}</span>}


        국적을 선택하세요 : {" "}
        <select name="country" onChange={changeHandler}>
          <option value=" ">====선택====</option>
          <option value="korean">내국인</option>
          <option value="foreigner">외국인</option>
        </select>

        <hr/>

        <h3 className='update-title'>자택주소</h3>

        <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
          <DaumMap setAddress={setAddress} />
          <input type="text" class="form-control" placeholder="주소" name="address" value={address} aria-label="Username" aria-describedby="basic-addon1" onChange={changeHandler} />
        </div>

        <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
          {/* <span class="input-group-text" id="basic-addon1">주소</span> */}
          <input type="text" class="form-control" placeholder="상세주소" aria-label="Username" aria-describedby="basic-addon1" onChange={changeHandler} />
        </div>

        <hr/>

        <h3 className='update-title'>직장정보</h3>

          <div class="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
            <span class="input-group-text" id="basic-addon1">직장명</span>
            <input type="text" class="form-control" name="job" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
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



        <input type="text" name="job" placeholder="직장정보" onChange={changeHandler}></input>
        <br /><br />
        {/* <input type="text" name="id" onChange={changeHandler}></input> */}
        <br></br>
        <Accordion defaultActiveKey="0" style={{ paddingLeft: 300, paddingRight: 300 }}>
          <Accordion.Item eventKey="0" >
            <Accordion.Header >약관</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              <input name="agree" type="checkbox" onChange={changeHandler} onClick={checked} value="y" /><br />
              <span>※약관은 필수로 동의해 주셔야 합니다※</span>

            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <button disabled={(isId && isFname && isPw && isIdNo && isEmail && isTel && isChecked)} onClick={() => {
          axios.post(`${process.env.REACT_APP_SERVER_URL}/user`, userInfo)
            .then(response => {
              alert(response.data);
              navigate('/')
            }).catch(error => {
              console.log(error);
            })
        }}>회원가입</button>
      </div>
      <div className="footer-container">

      </div>
    </div>

  );
}

export default Signup;
