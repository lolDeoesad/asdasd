import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Col, Form, Row } from "react-bootstrap";

import DaumMap from '../components/DaumMap';
import axiosInstance from "../utils/axiosInstance";

function UserUpdate({userInfo, setUpdate}) {
  const [user, setUser] = useState({...userInfo, pwdCheck : ''});
  const messageList = {
    fname       : '한글 혹은 영문 2~20자리로 입력해주세요.',
    password    : '비밀번호 변경을 원하실 경우에만 새로 입력하세요.',
    newPassword : '영문 혹은 숫자 8~20자리로 입력해주세요.',
    pwdCheck    : '비밀번호가 일치하지 않습니다.',
    email       : '형식에 맞게 입력해주세요.',
    phone       : '형식에 맞게 입력해주세요.',
    country     : '필수 선택 항목입니다.',
    address     : '필수 선택 항목입니다.',
    addressDetail : '필수 입력 항목입니다.',
    agree       : '필수 선택 항목입니다.',
    default     : '사용 가능한 입력입니다.',
    option      : '선택 입력 항목입니다.',
    old         : '수정할 수 없는 항목입니다.',
  };
  const [message, setMessage] = useState({});
  const regExs = {
    fname : /^[가-힣a-zA-Z]{2,20}$/,
    password : /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/,
    email : /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/,
    phone : /^\d{2,3}-\d{3,4}-\d{4}$/,
  };
  const [address, setAddress] = useState(user.address); // 집주소 
  const [jobAddress, setJobAddress] = useState(user.jobAddress); // 직장주소 
  const navigate = useNavigate();
  
  useEffect(() => {       // address 변경되면 실행될 useEffect
    setUser({ ...user, address:address, jobAddress:jobAddress })
  }, [address, jobAddress])

  useEffect(()=> {
    ['fname', 'password', 'email', 'phone'].map(field => {
      message[field] = regExs[field].test(user[field]) ? '' : messageList[field];
    })
    message.pwdCheck = (user.password === user.pwdCheck) ? '' : messageList.pwdCheck;
    ['country', 'address', 'addressDetail'].map(field => {
      message[field] = user[field] ? '' : messageList[field];
    })
    setMessage({...message});
  }, [user])

  const changeHandler = e => {
    setUser({ ...user, [e.target.name] : e.target.value});
  }

  const domainHandler = e => {
    let _email = user.email;
    if(user.domain)
      _email = _email.substring(0, _email.indexOf('@'));
    setUser({ ...user, ['domain'] : e.target.value, ['email'] : _email + (e.target.value ? '@' + e.target.value : '')});
  }

  const phoneHandler = e => {
    user.phone = e.target.value.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
    setUser({ ...user});
  }

  return (
    <div className="UserUpdate borderColor1 p-5"> {/*  */}
      <h2 className='my-2 fontColor1'>회원정보수정</h2>
      <hr style={{width:'100%'}}/>

      <Row className="row justify-content-center">
        <Col className="col-8 col-xl-auto">
          <div className='form-floating mb-3 me-3'>
            <input className={message.username ? "form-control is-invalid" : "form-control"} id='floatingUsername' value={user.username} placeholder='username' name="username" readOnly/>
            <label htmlFor='floatingUsername'>아이디</label>
          </div>
        </Col>
        <Col className="d-flex align-items-center col-8 mb-3 col-xl-5 mb-xl-0">
          {message.username ? <span className="error">{message.username}</span> : <span className="proper">{messageList.old}</span>}
        </Col>
      </Row>

      <Row className="row justify-content-center">
        <Col className="col-8 col-xl-auto">
          <div className='form-floating mb-3 me-3'>
            <input className={message.fname ? "form-control is-invalid" : "form-control"} id='floatingFname' value={user.fname} placeholder='name' name="fname" onChange={changeHandler}/>
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
            <input type='password' className={message.password ? "form-control is-invalid" : "form-control"} id='floatingPassword' value={user.password} placeholder='password' name="password" onChange={changeHandler}/>
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
            <input type='password' className={message.pwdCheck ? "form-control is-invalid" : "form-control"} id='floatingPwdCheck' value={user.pwdCheck} placeholder='pwdCheck' name="pwdCheck" onChange={changeHandler}/>
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
            <input className="form-control" id='floatingIdNo' value={user.idNo + '*'.repeat(6)} placeholder='010203-4567890' name="idNo" maxLength={14} readOnly/>
            <label htmlFor='floatingIdNo'>주민등록번호</label>
          </div>
        </Col>
        <Col className="d-flex align-items-center col-8 mb-3 col-xl-5 mb-xl-0">
          {message.idNo ? <span className="error">{message.idNo}</span> : <span className="proper">{messageList.old}</span>}
        </Col>
      </Row>

      <Row className="row justify-content-center">
        <Col className="col-8 col-xl-auto d-flex">
          <div className='form-floating mb-3' style={{width:'250px'}}>
            <input className={message.email ? "form-control is-invalid" : "form-control"} id='floatingEmail' value={user.email} placeholder='user@domain.com' name="email" onChange={changeHandler}/>
            <label htmlFor='floatingEmail'>이메일</label>
          </div>
          <Form.Select aria-label="Default select example" style={{width:'150px', height:'58px'}} className="mb-3 me-3" name="domain" value={user.domain} onChange={domainHandler}>
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
            <input className={message.phone ? "form-control is-invalid" : "form-control"} id='floatingPhone' value={user.phone} placeholder='010-1234-5678' name="phone" onChange={phoneHandler} maxLength={13}/>
            <label htmlFor='floatingPhone'>휴대폰번호</label>
          </div>
        </Col>
        <Col className="d-flex align-items-center col-8 mb-3 col-xl-5 mb-xl-0">
          {message.phone ? <span className="error">{message.phone}</span> : <span className="proper">{messageList.default}</span>}
        </Col>
      </Row>

      <Row className="row justify-content-center">
        <Col className="col-8 col-xl-auto">
          <Form.Select aria-label="Default select example" style={{width:'400px', height:'58px'}} className={message.country ? "mb-3 me-3 is-invalid" : "mb-3 me-3"} name="country" value={user.country} onChange={changeHandler}>
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
            <input className={message.address ? "form-control is-invalid" : "form-control"} id='floatingAddress' value={user.address} placeholder='city' name="address" onChange={changeHandler}/>
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
            <input className={message.addressDetail ? "form-control is-invalid" : "form-control"} id='floatingAddressDetail' value={user.addressDetail} placeholder='apt' name="addressDetail" onChange={changeHandler}/>
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
            <input className="form-control" id='floatingJobName' value={user.jobName} placeholder='jobName' name="jobName" onChange={changeHandler}/>
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
            <input className="form-control" id='floatingTeamName' value={user.teamName} placeholder='teamName' name="teamName" onChange={changeHandler}/>
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
            <input className="form-control" id='floatingJobAddress' value={user.jobAddress} placeholder='jobCity' name="jobAddress" onChange={changeHandler}/>
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
            <input className="form-control" id='floatingJobAddressDetail' value={user.jobAddressDetail} placeholder='jobBuilding' name="jobAddressDetail" onChange={changeHandler}/>
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
            <input className="form-control" id='floatingJobPhone' value={user.jobPhone} placeholder='jobPhone' name="jobPhone" onChange={changeHandler}/>
            <label htmlFor='floatingJobPhone'>직장연락처</label>
          </div>
        </Col>
        <Col className="d-flex align-items-center col-8 mb-3 col-xl-5 mb-xl-0">
          <span className="proper">{messageList.option}</span>
        </Col>
      </Row>

      <button type="button" className="btn btn-light mt-5 me-5 header-btn" onClick={()=>navigate("/user/mypage")}>취소</button>
      <button className="btn btn-success mt-5 header-btn" disabled={message.address || message.addressDetail || message.country || message.email || message.fname || message.phone || (user.password && message.pwdCheck)}
        onClick={() => {
          axiosInstance.put('/user', user)
            .then(response => {
              alert(response.data);
              if(response.status === 200) {
                setUpdate(false);
                navigate('/');
              }
            }).catch(error => console.log(error))
      }}>저장</button>
    </div>
  );
}
export default UserUpdate;