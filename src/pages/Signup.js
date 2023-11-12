import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Accordion, Col, Form, Row } from "react-bootstrap";

import '../styles/Signup.css'

import DaumMap from '../components/DaumMap';

function Signup() {
  const [userInfo, setUserInfo] = useState({  //인풋으로 입력받은 값을 저장할 유저정보 스테이트  
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
    agree : '',
    showIdNo : ''
  });
  const messageList = {
    username    : '영문자로 시작하는 영문 혹은 숫자 6~20자로 입력해주세요.', 
    fname       : '한글 혹은 영문 2~20자리로 입력해주세요.',
    password    : '영문 혹은 숫자 8~20자리로 입력해주세요.',
    pwdCheck    : '비밀번호가 일치하지 않습니다.',
    idNo        : '형식에 맞게 입력해주세요.',
    email       : '형식에 맞게 입력해주세요.',
    phone       : '형식에 맞게 입력해주세요.',
    country     : '필수 선택 항목입니다.',
    address     : '필수 선택 항목입니다.',
    addressDetail : '필수 입력 항목입니다.',
    agree       : '필수 선택 항목입니다.',
    default     : '사용 가능한 입력입니다.',
    option      : '선택 입력 항목입니다.'
  };
  const [message, setMessage] = useState({});
  const regExs = {
    username : /^[a-z]+[a-z0-9]{5,19}$/g, ///^[a-z]+\w{5,19}$/,
    fname : /^[가-힣a-zA-Z]{2,20}$/,
    password : /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/,
    idNo : /^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))-[1-4][0-9]{6}$/, // /^\d{0,6}-\d{7}$/,
    email : /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/,
    phone : /^\d{2,3}-\d{3,4}-\d{4}$/,
  };
  const [address, setAddress] = useState(''); // 집주소 
  const [jobAddress, setJobAddress] = useState(''); // 직장주소 
  const navigate = useNavigate();
  
  useEffect(() => {       // address 변경되면 실행될 useEffect
    setUserInfo({ ...userInfo, address:address, jobAddress:jobAddress })
  }, [address, jobAddress])
  useEffect(()=> {
    if(regExs.username.test(userInfo.username)) {
      axios.get(`${process.env.REACT_APP_SERVER_URL}/hasUser`, { params: { username: userInfo.username }})
      .then(response => {
          if(response.data === '사용 가능한 아이디입니다')
            message.username = '';
          else
            message.username = userInfo.username + '는 이미 존재하는 아이디입니다.';
          setMessage({...message});
        }).catch(error => message.username = '아이디 확인 중입니다.')
    } else {
      message.username = messageList.username;
      setMessage({...message});
    }
  }, [userInfo.username])

  useEffect(()=> {
    ['fname', 'password', 'idNo', 'email', 'phone'].map(field => {
      message[field] = regExs[field].test(userInfo[field]) ? '' : messageList[field];
    })
    message.pwdCheck = (userInfo.password === userInfo.pwdCheck) ? '' : messageList.pwdCheck;
    ['country', 'address', 'addressDetail', 'agree'].map(field => {
      message[field] = userInfo[field] ? '' : messageList[field];
    })
    setMessage({...message});
  }, [userInfo])

  const changeHandler = e => {
    setUserInfo({ ...userInfo, [e.target.name] : e.target.value});
  }

  const idNoHandler = e => {
    let _oriIdNum = '';
    if(userInfo.showIdNo && e.target.value.length < userInfo.showIdNo.length)
      _oriIdNum = userInfo.oriIdNum.substring(0, userInfo.oriIdNum.length-1);
    else
      _oriIdNum = (userInfo.oriIdNum ? userInfo.oriIdNum : '') + e.target.value.slice(-1);
    let idNoFormat = _oriIdNum.replace(/^(\d{0,6})(\d{0,7})$/g, '$1-$2').replace(/-{1,2}$/g, '');
    userInfo.oriIdNum = _oriIdNum;
    userInfo.idNo = idNoFormat;
    userInfo.showIdNo = idNoFormat.substring(0, 8) + (idNoFormat.length > 8 ? '*'.repeat(idNoFormat.length-8) : '');
    setUserInfo({ ...userInfo});
  }

  const domainHandler = e => {
    let _email = userInfo.email;
    if(userInfo.domain)
      _email = _email.substring(0, _email.indexOf('@'));
    setUserInfo({ ...userInfo, ['domain'] : e.target.value, ['email'] : _email + (e.target.value ? '@' + e.target.value : '')});
  }

  const phoneHandler = e => {
    userInfo.phone = e.target.value.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
    setUserInfo({ ...userInfo});
  }

  const agreeHandler = e => {
    e.stopPropagation();
    if(e.target.checked)
      setUserInfo({ ...userInfo, ['agree'] : e.target.value});
    else
      setUserInfo({ ...userInfo, ['agree'] : ''});
  }

  return (
    <div className="Signup borderColor1 p-5"> {/*  */}
      <h2 className='my-2 fontColor1'>회원가입</h2>
      <hr style={{width:'100%'}}/>

      <Row className="row justify-content-center">
        <Col className="col-8 col-xl-auto">
          <div className='form-floating mb-3 me-3'>
            <input className={message.username ? "form-control is-invalid" : "form-control"} id='floatingUsername' value={userInfo.username} placeholder='username' name="username" onChange={changeHandler}/>
            <label htmlFor='floatingUsername'>아이디</label>
          </div>
        </Col>
        <Col className="d-flex align-items-center col-8 mb-3 col-xl-5 mb-xl-0">
          {message.username ? <span className="error">{message.username}</span> : <span className="proper">{messageList.default}</span>}
        </Col>
      </Row>

      <Row className="row justify-content-center">
        <Col className="col-8 col-xl-auto">
          <div className='form-floating mb-3 me-3'>
            <input className={message.fname ? "form-control is-invalid" : "form-control"} id='floatingFname' value={userInfo.fname} placeholder='name' name="fname" onChange={changeHandler}/>
            <label htmlFor='floatingFname'>이름</label>
          </div>
        </Col>
        <Col className="d-flex align-items-center col-8 mb-3 col-xl-5 mb-xl-0">
          {message.fname ? <span className="error">{message.fname}</span> : <span className="proper">{messageList.default}</span>}
        </Col>
      </Row>

      <Row className="row justify-content-center">
        <Col className="col-8 col-xl-auto">
          <div className='form-floating mb-3 me-3'>
            <input type='password' className={message.password ? "form-control is-invalid" : "form-control"} id='floatingPassword' value={userInfo.password} placeholder='password' name="password" onChange={changeHandler}/>
            <label htmlFor='floatingPassword'>비밀번호</label>
          </div>
        </Col>
        <Col className="d-flex align-items-center col-8 mb-3 col-xl-5 mb-xl-0">
          {message.password ? <span className="error">{message.password}</span> : <span className="proper">{messageList.default}</span>}
        </Col>
      </Row>

      <Row className="row justify-content-center">
        <Col className="col-8 col-xl-auto">
          <div className='form-floating mb-3 me-3'>
            <input type='password' className={message.pwdCheck ? "form-control is-invalid" : "form-control"} id='floatingPwdCheck' value={userInfo.pwdCheck} placeholder='pwdCheck' name="pwdCheck" onChange={changeHandler}/>
            <label htmlFor='floatingPassword'>비밀번호 재확인</label>
          </div>
        </Col>
        <Col className="d-flex align-items-center col-8 mb-3 col-xl-5 mb-xl-0">
          {message.pwdCheck ? <span className="error">{message.pwdCheck}</span> : <span className="proper">비밀번호가 일치합니다.</span>}
        </Col>
      </Row>

      <Row className="row justify-content-center">
        <Col className="col-8 col-xl-auto">
          <div className='form-floating mb-3 me-3'>
            <input className={message.idNo ? "form-control is-invalid" : "form-control"} id='floatingIdNo' value={userInfo.showIdNo} placeholder='010203-4567890' name="idNo" onChange={idNoHandler} maxLength={14}/>
            <label htmlFor='floatingIdNo'>주민등록번호</label>
          </div>
        </Col>
        <Col className="d-flex align-items-center col-8 mb-3 col-xl-5 mb-xl-0">
          {message.idNo ? <span className="error">{message.idNo}</span> : <span className="proper">{messageList.default}</span>}
        </Col>
      </Row>

      <Row className="row justify-content-center">
        <Col className="col-8 col-xl-auto d-flex">
          <div className='form-floating mb-3' style={{width:'250px'}}>
            <input className={message.email ? "form-control is-invalid" : "form-control"} id='floatingEmail' value={userInfo.email} placeholder='user@domain.com' name="email" onChange={changeHandler}/>
            <label htmlFor='floatingEmail'>이메일</label>
          </div>
          <Form.Select aria-label="Default select example" style={{width:'150px', height:'58px'}} className="mb-3 me-3" name="domain" value={userInfo.domain} onChange={domainHandler}>
            <option value={''} >직접 입력</option>
            { ['naver.com', 'google.com', 'kakao.com', 'daum.net'].map((domain, i) => <option key={i} value={domain} id={`option${i}`}>{domain}</option>) }
          </Form.Select>
        </Col>
        <Col className="d-flex align-items-center col-8 mb-3 col-xl-5 mb-xl-0">
          {message.email ? <span className="error">{message.email}</span> : <span className="proper">{messageList.default}</span>}
        </Col>
      </Row>

      <Row className="row justify-content-center">
        <Col className="col-8 col-xl-auto">
          <div className='form-floating mb-3 me-3'>
            <input className={message.phone ? "form-control is-invalid" : "form-control"} id='floatingPhone' value={userInfo.phone} placeholder='010-1234-5678' name="phone" onChange={phoneHandler} maxLength={13}/>
            <label htmlFor='floatingPhone'>휴대폰번호</label>
          </div>
        </Col>
        <Col className="d-flex align-items-center col-8 mb-3 col-xl-5 mb-xl-0">
          {message.phone ? <span className="error">{message.phone}</span> : <span className="proper">{messageList.default}</span>}
        </Col>
      </Row>

      <Row className="row justify-content-center">
        <Col className="col-8 col-xl-auto">
          <Form.Select aria-label="Default select example" style={{width:'400px', height:'58px'}} className={message.country ? "mb-3 me-3 is-invalid" : "mb-3 me-3"} name="country" value={userInfo.country} onChange={changeHandler}>
            <option value={''} >국적을 선택하세요(필수 선택)</option>
            <option value="korean">내국인</option>
            <option value="foreigner">외국인</option>
          </Form.Select>
        </Col>
        <Col className="d-flex align-items-center col-8 mb-3 col-xl-5 mb-xl-0">
          {message.country ? <span className="error">{message.country}</span> : <span className="proper">{messageList.default}</span>}
        </Col>
      </Row>

      <hr style={{width:'100%'}}/>
      <h2 className='mb-4 fontColor1'>자택주소</h2>

      <Row className="row justify-content-center">
        <Col className="col-8 col-xl-auto d-flex">
          <DaumMap setAddress={setAddress} />
          <div className='form-floating mb-3 me-3' style={{width:'270px'}}>
            <input className={message.address ? "form-control is-invalid" : "form-control"} id='floatingAddress' value={userInfo.address} placeholder='city' name="address" onChange={changeHandler}/>
            <label htmlFor='floatingAddress'>주소</label>
          </div>
        </Col>
        <Col className="d-flex align-items-center col-8 mb-3 col-xl-5 mb-xl-0">
          {message.address ? <span className="error">{message.address}</span> : <span className="proper">{messageList.default}</span>}
        </Col>
      </Row>

      <Row className="row justify-content-center">
        <Col className="col-8 col-xl-auto">
          <div className='form-floating mb-3 me-3'>
            <input className={message.addressDetail ? "form-control is-invalid" : "form-control"} id='floatingAddressDetail' value={userInfo.addressDetail} placeholder='apt' name="addressDetail" onChange={changeHandler}/>
            <label htmlFor='floatingAddressDetail'>상세주소</label>
          </div>
        </Col>
        <Col className="d-flex align-items-center col-8 mb-3 col-xl-5 mb-xl-0">
          {message.addressDetail ? <span className="error">{message.addressDetail}</span> : <span className="proper">{messageList.default}</span>}
        </Col>
      </Row>

      <hr style={{width:'100%'}}/>
      <h2 className='mb-4 fontColor1'>직장정보</h2>

      <Row className="row justify-content-center">
        <Col className="col-8 col-xl-auto">
          <div className='form-floating mb-3 me-3'>
            <input className="form-control" id='floatingJobName' value={userInfo.jobName} placeholder='jobName' name="jobName" onChange={changeHandler}/>
            <label htmlFor='floatingJobName'>직장명</label>
          </div>
        </Col>
        <Col className="d-flex align-items-center col-8 mb-3 col-xl-5 mb-xl-0">
          <span className="proper">{messageList.option}</span>
        </Col>
      </Row>

      <Row className="row justify-content-center">
        <Col className="col-8 col-xl-auto">
          <div className='form-floating mb-3 me-3'>
            <input className="form-control" id='floatingTeamName' value={userInfo.teamName} placeholder='teamName' name="teamName" onChange={changeHandler}/>
            <label htmlFor='floatingTeamName'>부서명</label>
          </div>
        </Col>
        <Col className="d-flex align-items-center col-8 mb-3 col-xl-5 mb-xl-0">
          <span className="proper">{messageList.option}</span>
        </Col>
      </Row>

      <Row className="row justify-content-center">
        <Col className="col-8 col-xl-auto d-flex">
          <DaumMap setAddress={setJobAddress} />
          <div className='form-floating mb-3 me-3' style={{width:'270px'}}>
            <input className="form-control" id='floatingJobAddress' value={userInfo.jobAddress} placeholder='jobCity' name="jobAddress" onChange={changeHandler}/>
            <label htmlFor='floatingJobAddress'>주소</label>
          </div>
        </Col>
        <Col className="d-flex align-items-center col-8 mb-3 col-xl-5 mb-xl-0">
          <span className="proper">{messageList.option}</span>
        </Col>
      </Row>

      <Row className="row justify-content-center">
        <Col className="col-8 col-xl-auto">
          <div className='form-floating mb-3 me-3'>
            <input className="form-control" id='floatingJobAddressDetail' value={userInfo.jobAddressDetail} placeholder='jobBuilding' name="jobAddressDetail" onChange={changeHandler}/>
            <label htmlFor='floatingJobAddressDetail'>상세주소</label>
          </div>
        </Col>
        <Col className="d-flex align-items-center col-8 mb-3 col-xl-5 mb-xl-0">
          <span className="proper">{messageList.option}</span>
        </Col>
      </Row>

      <Row className="row justify-content-center">
        <Col className="col-8 col-xl-auto">
          <div className='form-floating mb-3 me-3'>
            <input className="form-control" id='floatingJobPhone' value={userInfo.jobPhone} placeholder='jobPhone' name="jobPhone" onChange={changeHandler}/>
            <label htmlFor='floatingJobPhone'>직장연락처</label>
          </div>
        </Col>
        <Col className="d-flex align-items-center col-8 mb-3 col-xl-5 mb-xl-0">
          <span className="proper">{messageList.option}</span>
        </Col>
      </Row>

      <Accordion>
        <Accordion.Item eventKey="0">
        <Accordion.Header>
          <input name="agree" className="me-2" type="checkbox" onClick={agreeHandler} checked={userInfo.agree} value="y" style={{zoom: '1.5'}}/>
          개인정보 동의(필수)
        </Accordion.Header>
          <Accordion.Body>
            본 동의는 비 여신(금융)거래와 관련하여 귀 행이 본인의 개인(신용)정보를 수집·이용 하고자 하는 경우에는 
            「신용정보의 이용 및 보호에 관한 법률」 제15조 제2항, 제32조 제1항, 제33조 및 제34조,
            「개인정보 보호법」 제15조 제1항 제1호, 제24조 제1항 제1호, 제24조의2에 따라 본인의 동의가 필요합니다.
            본 동의는 비 여신(금융)거래(수신, 외국환, 전자금융, 현금카드, 신탁, 퇴직연금, 펀드, 파생상품, 대여금고, 보호예수, 각종 대행업무 등)
            와 관련하여 본인의 개인(신용)정보를 수집·이용하기 위해 처음 1회만 동의 절차가 필요합니다.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <button className="btn btn-success mt-5 header-btn" disabled={message.address || message.addressDetail || message.agree || message.country || message.email || message.fname || message.idNo || message.password || message.phone || message.pwdCheck || message.username}
        onClick={() => {
          axios.post(`${process.env.REACT_APP_SERVER_URL}/user`, userInfo)
            .then(response => {
              alert(response.data);
              if(response.status === 200)
                navigate('/login');
            }).catch(error => console.log(error))
      }}>회원가입</button>
    </div>
  );
}
export default Signup;