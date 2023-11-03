import { Accordion } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import axios from "axios";
import DaumMap from '../components/DaumMap';
import '../styles/Signup.css'

function Signup() {
  const [address, setAddress] = useState(''); // 집주소 
  const [jobAddress, setJobAddress] = useState(''); // 직장주소 

  const [error, setError] = useState([]); // 정규식 실패하면 띄어줄 스테이트 배열형
  const [proper, setProper] = useState([]); // 정규식 성공하면 띄어줄 스테이트 배열형

  const [isId,setIsId] = useState(true);  // 정규식 성공 실패 구분하는 스테이트  
  const [isFname, setIsFname] = useState(true);
  const [isPw, setIsPw] = useState(true);
  const [isPwCheck, setIsPwCheck] = useState(true); // 비밀번호 확인
  const [isIdNo, setIdNo] = useState(true);
  const [isEmail, setIsEmail] = useState(true);
  const [isTel, setIsTel] = useState(true);     
  const [isCountry, setIsCountry] = useState(true);
  const [isaddress, setIsAddress] = useState(true);
  const [isTerms, setIsTerms] = useState(true); // 약관 확인

  const [checkBtn, setCheckBtn] = useState(true);   //회원가입 버튼 활성화 시켜줄 스테이트 전부 false면 활성화

  const [userInfo, setUserInfo] = useState({  //인풋으로 입력받은 값 저장할 유저정보 스테이트  
    username : '',
    fname : '',
    password : '',
    idNo : '',
    email : '',
    phone : '',
    country : '',
    address : '',    
    addressDetail : '',
    jobName : '',
    teamName : '',
    jobAddress : '',
    jobAddressDetail : '',
    jobPhone : '',
    agree : ''
  });

  useEffect(() => {       // address 변경되면 실행될 useEffect
    setUserInfo({
      ...userInfo,
      address:address,
      jobAddress:jobAddress
    })
  }, [address, jobAddress])

 useEffect(() => {         // 버튼 활성화 useEffect
  if(!isId && !isFname && !isPw && !isPwCheck && !isIdNo && !isTel && !isCountry && !isaddress && !isTerms ) {
    setCheckBtn(false);
  } else 
    setCheckBtn(true);
  }, [isId, isFname, isPw, isPwCheck, isIdNo, isTel, isCountry, isaddress, isTerms ,error, proper])

  const navigate = useNavigate();

  const changeHandler = (e) => {    // 입력 받은 값들 뽑아서 서버에 보내줄 함수
    setUserInfo({
      ...userInfo,
      [e.target.name] : e.target.value
    })
  }
  
  const idRegEX = () => {
    const idReg =  /^[a-z]+[a-z0-9]{5,19}$/g; // 영문 또는 숫자로 5자리이상
    if(!idReg.test(userInfo.username)) {
      let copy = [...error];
      copy[0] = '아이디는 영문자로 시작하는 6~20자 영문자 또는 숫자이어야 합니다.';
      setError(copy);
      setIsId(true);
      return;
    } else {
      axios.get(`${process.env.REACT_APP_SERVER_URL}/user`, {
        params: {
          username: userInfo.username
        }
      })
      .then(response => {
        if(response.data === '사용 가능한 아이디입니다'){
        let copy = [...proper];
        copy[0] = '사용 가능한 아이디입니다';
        setProper(copy);
        setIsId(false);
        } else {
          let copy = [...error];
          copy[0] = '이미 존재하는 아이디입니다.';
          setError(copy);
          setIsId(true);
        }
      }).catch(error=> {
        console.log(error);
      })
    }
  }

  const fnRegEX = () => {
    const fNameReg = /^[가-힣a-zA-Z]{2,20}$/ // 한글 영문만 2~20 까지
      if(!fNameReg.test(userInfo.fname)) {
        setIsFname(true);
        let copy = [...error];
        copy[1] = '이름은 한글 혹은 영문으로 2자리 이상 20자리 이하로 입력해 주세요';
        setError(copy);
        setIsFname(true);
        return;
      } else {
        let copy = [...proper];
        copy[1] = '올바른 이름 형식입니다.';
        setProper(copy);
      } 
      setIsFname(false);
  } 

  const pwRegEX = () => {
    const passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;    // 비밀번호 정규식 
    
      if(!passwordReg.test(userInfo.password)) {
        let copy = [...error];
        copy[2] = '비밀번호는 영문 숫자 합쳐서 8자리 이상 20자리 이하로 입력해주세요.';
        setError(copy);
        setIsPw(true);
        return;
      } else {
        let copy = [...proper];
        copy[2] = '올바른 비밀번호 형식입니다.';       
        setProper(copy);
      }
      setIsPw(false);
  }

  const pwCheck = (e) => {      // 비밀번호 확인 
    if(e.target.value === '') {
      let copy = [...error];
      copy[3] = ' ';
      setError(copy);
      setIsPwCheck(true);
      return;
    } else if (userInfo.password !== e.target.value) {
      let copy = [...error];
      copy[3] = '비밀번호가 일치하지 않습니다.';
      setError(copy);
      setIsPwCheck(true);
      return;
    } else {
      let copy = [...proper];
      copy[3] = '비밀번호가 일치 합니다.';       
      setProper(copy);
    }
    setIsPwCheck(false);
  }

  const idNumRegEX = (e) => {             // 
    e.target.value = e.target.value
    .replace(/^(\d{0,6})(\d{0,7})$/g, '$1-$2').replace(/-{1,2}$/g, '');
  }

  const idNumRegEX2= () => {            // 주민번호 검사식
    const idNumReg = /^\d{0,6}-\d{7}$/;
    if(!idNumReg.test(userInfo.idNo)) {
      let copy = [...error];
        copy[4] = '주민번호 형식에 맞게 입력해주세요';
        setError(copy);
        setIdNo(true);
        return;
    } else {
      let copy = [...proper];
      copy[4] = '올바른 주민번호 형식입니다';
      setProper(copy);
    }
    setIdNo(false);
  }

  const eRegEX = () => {  // 이메일 정규식 
    const emailReg = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;    
      if(!emailReg.test(userInfo.email)) {
        let copy = [...error];
        copy[5] = '';
        setError(copy);
        return;
      } else {
        let copy = [...proper];
        copy[5] = '올바른 이메일 형식입니다';
        setProper(copy);
      }
  }

  const phRegEx = (e) => {              // 숫자 외 입력안되고 하이픈 자동생성되는 전화번호 정규식 
    e.target.value = e.target.value             
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`); 
  }

  const phRegEx2 = () => {
    const phoneReg = /^\d{2,3}-\d{3,4}-\d{4}$/;
    if(!phoneReg.test(userInfo.phone)) {
      let copy = [...error];
        copy[6] = '전화번호 형식에 맞게 입력해주세요';
        setError(copy);
        setIsTel(true);
        return;
    } else {
      let copy = [...proper];
      copy[6] = '올바른 전화번호 형식입니다';
      setProper(copy);
    }
    setIsTel(false);
  }

  const countryCheckd = () => { // 국적
    if(userInfo.country === " ") {
      setIsCountry(true);
    } else {
      setIsCountry(false);
    }
  }

  const addressCheck = (e) => {       // 주소검사 
    if(e.target.value === '' || address === '') {   
      alert('주소는 필수 입력입니다.')
      setIsAddress(true);
      return;
    } else if (e.target.value !== '' || address !== '')
      setIsAddress(false);
   }

  const termsChecked = (e) => {      // 약관 체크확인용 함수 
    if(!e.target.checked) {
     setIsTerms(true);
     return;
    } else {
     setIsTerms(false);
    }
  }

 console.log(userInfo);
 console.log(isId, isFname, isPw, isPwCheck, isIdNo, isCountry, isaddress, isTel, isTerms ,checkBtn);

  return(
    <div className="Signup">
      <div className="Signup-container" >
        <h2 className='update-title'>회원가입</h2><hr />

        <div className="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
          <span className="input-group-text" id="basic-addon1">아이디</span>
          <input type="text" class="form-control" name="username" placeholder="필수입력" aria-label="Username" aria-describedby="basic-addon1" onChange={changeHandler} onBlur={idRegEX} />
        </div>
        { isId? <span id="error">{error[0]}</span> : <span id="proper">{proper[0]}</span> }

        <div className="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
          <span className="input-group-text" id="basic-addon1">이름</span>
          <input type="text" class="form-control" name="fname" placeholder="필수입력" aria-label="Username" aria-describedby="basic-addon1" onChange={changeHandler} onBlur={fnRegEX} />
        </div>
        { isFname? <span id="error">{error[1]}</span> : <span id="proper">{proper[1]}</span> }


        <div className="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
          <span className="input-group-text" id="basic-addon1">비밀번호</span>
          <input type="password" class="form-control" name="password" placeholder="필수입력" aria-label="Username" aria-describedby="basic-addon1" onChange={changeHandler} onBlur={pwRegEX} />
        </div>
        { isPw? <span id="error">{error[2]}</span> : <span id="proper">{proper[2]}</span> }

        
        <div className="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
          <span className="input-group-text" id="basic-addon1">비밀번호재확인</span>
          <input type="password" class="form-control" name="password-check" placeholder="비밀번호재확인" aria-label="Username" aria-describedby="basic-addon1" onBlur={pwCheck} />
        </div>
        { isPwCheck? <span id="error">{error[3]}</span> : <span id="proper">{proper[3]}</span> }
        {/* {pwError && <div style={{ color: 'red', marginBottom: '5px', }}>{pwError}</div>} */}

        <div className="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
          <span className="input-group-text" id="basic-addon1">주민번호</span>
          <input type="password" class="form-control" name="idNo" placeholder="필수입력" aria-label="Username" aria-describedby="basic-addon1" onChange={changeHandler} onInput={idNumRegEX} onBlur={idNumRegEX2} maxLength={14} />
        </div>
        { isIdNo? <span id="error">{error[4]}</span> : <span id="proper">{proper[4]}</span> }

        <div className="input-group mb-3 usermail-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
          <input type="text" class="form-control" name="email" placeholder="이메일 주소를 입력해주세요" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={changeHandler} onBlur={eRegEX} />
          <div className="input-group-text" id="basic-addon2">
            <Form.Select aria-label="Default select example">
              <option>도메인</option>
              <option value="1">naver.com</option>
              <option value="2">google.com</option>
              <option value="3">kakao.com</option>
              <option value="4">daum.net</option>
            </Form.Select>
          </div>
        </div>
        { isEmail? <span id="error">{error[5]}</span> : <span id="proper">{proper[5]}</span> }

        <div className="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
          <span className="input-group-text" id="basic-addon1">휴대폰번호</span>
          <input type="text" class="form-control" name="phone" placeholder="필수입력" aria-label="Username" aria-describedby="basic-addon1" onChange={changeHandler} onInput={phRegEx} maxLength={13} onBlur={phRegEx2} />
        </div>
        { isTel? <span id="error">{error[6]}</span> : <span id="proper">{proper[6]}</span> }


        <div className="input-group-text username-box" id="basic-addon2" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
          <Form.Select aria-label="Default select example" name="country" onChange={changeHandler} onClick={countryCheckd}>
            <option>국적을 선택하세요(필수선택)</option>
            <option value="korean">내국인</option>
            <option value="foreigner">외국인</option>
          </Form.Select>
        </div>

        <hr />

        <h3 className='update-title'>자택주소</h3>

        <div className="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
          <DaumMap setAddress={setAddress} />
          <input type="text" class="form-control" placeholder="주소" name="address" value={address} readOnly aria-label="Username" aria-describedby="basic-addon1"  />
        </div>

        <div className="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
          {/* <span class="input-group-text" id="basic-addon1">주소</span> */}
          <input type="text" class="form-control" placeholder="상세주소" name="addressDetail" aria-label="Username" aria-describedby="basic-addon1" onChange={changeHandler} onBlur={addressCheck} />
        </div>

        <hr />

        <h3 className='update-title'>직장정보</h3>

        <div className="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
          <span className="input-group-text" id="basic-addon1">직장명</span>
          <input type="text" class="form-control" name="jobName" placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={changeHandler} />
        </div>
        <div className="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
          <span className="input-group-text" id="basic-addon1">부서명</span>
          <input type="text" class="form-control" name="teamName" placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={changeHandler} />
        </div>
        <div className="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
          <DaumMap setAddress={setJobAddress} />
          <input type="text" class="form-control" placeholder="주소" name="jobAddress" value={jobAddress} readOnly aria-label="Username" aria-describedby="basic-addon1"  />
        </div>

        <div className="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
          {/* <span class="input-group-text" id="basic-addon1">주소</span> */}
          <input type="text" class="form-control" placeholder="상세주소" name="jobAddressDetail" aria-label="Username" aria-describedby="basic-addon1" onChange={changeHandler} />
        </div>
        <div className="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
          <span className="input-group-text" id="basic-addon1">직장연락처</span>
          <input type="text" class="form-control" name="jobPhone" placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={changeHandler} />
        </div>

        <div className="input-group mb-3 username-box" style={{ width: "50%", height: "50px", borderRadius: "10px" }}>
          <Accordion defaultActiveKey="0" style={{  }}>
            <Accordion.Item eventKey="0" >
              <Accordion.Header >개인정보 동의</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                <input name="agree" type="checkbox" onChange={changeHandler} onClick={termsChecked} value="y" /><br />
                <span>※개인정보는 필수로 동의해 주셔야 합니다※</span>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <br />
        <br />
        <button type="submit" className="btn btn-success" disabled={checkBtn} onClick={() => {
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
