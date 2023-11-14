import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Form, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const Transaction = ({userInfo, accountInfo, setAccountInfo, setUpdate}) => {
  const accountList = userInfo.accountList;
  console.log(accountList);
  const [transaction, setTransaction] = useState({ accountId : '', money : '', memo : '' });
  const messageList = {
    accountId   : '송금할 계좌번호 확인해주세요.',
    money       : '금액은 양수만 입력해주세요.'
  };
  const [message, setMessage] = useState({});

  const changeHandler = (e) => {
    setTransaction({...transaction, [e.target.name] : e.target.value});
  }

  const navigate = useNavigate();

  return(
    <div className='Transaction mainBorder p-5'>
      <h2 className="my-2 fontColor1">계좌이체</h2>
      <hr style={{width:'100%'}}/>

      <Row className="row justify-content-center">
        <Col className="col-8 col-xl-auto">
          <div className='form-floating mb-3 me-3'>
            <input className="form-control" id='floatingAccountId' value={'267-5175-00-' + accountInfo.id} placeholder='myAccount' name="myAccount" readOnly/>
            <label htmlFor='floatingUsername'>내 계좌</label>
          </div>
        </Col>
        {/* <Col className="d-flex align-items-center col-8 mb-3 col-xl-5 mb-xl-0">
          {message.username ? <span className="error">{message.username}</span> : <span className="proper">{messageList.old}</span>}
        </Col> */}
      </Row>

      <Row className="row justify-content-center">
        <Col className="col-8 col-xl-auto">
          <div className='form-floating mb-3 me-3'>
            <input className={message.accountId ? "form-control is-invalid" : "form-control"} id='floatingAccountId' value={transaction.accountId} placeholder='accountId' name="accountId" onChange={changeHandler}/>
            <label htmlFor='floatingAccountId'>이체할 계좌</label>
          </div>
        </Col>
        {/* <Col className="d-flex align-items-center col-8 mb-3 col-xl-5 mb-xl-0">
          {message.fname ? <span className="error">{message.fname}</span> : <span className="proper">{messageList.default}</span>}
        </Col> */}
      </Row>

      <Row className="row justify-content-center">
        <Col className="col-8 col-xl-auto">
          <div className='form-floating mb-3 me-3'>
            <input className={message.money ? "form-control is-invalid" : "form-control"} id='floatingMoney' value={transaction.money} placeholder='10,000' name="money" onChange={changeHandler} maxLength={13}/>
            <label htmlFor='floatingMoney'>이체할 금액</label>
          </div>
        </Col>
        {/* <Col className="d-flex align-items-center col-8 mb-3 col-xl-5 mb-xl-0">
          {message.phone ? <span className="error">{message.phone}</span> : <span className="proper">{messageList.default}</span>}
        </Col> */}
      </Row> 

      <Row className="row justify-content-center">
        <Col className="col-8 col-xl-auto">
          <div className='form-floating mb-3 me-3'>
            <input className="form-control" id='floatingMemo' value={transaction.memo} placeholder='memo' name="memo" onChange={changeHandler}/>
            <label htmlFor='floatingMemo'>이체 메모</label>
          </div>
        </Col>
        {/* <Col className="d-flex align-items-center col-8 mb-3 col-xl-5 mb-xl-0">
          <span className="proper">{messageList.option}</span>
        </Col> */}
      </Row>

      <button type="button" className="btn btn-light mt-5 me-5 header-btn" onClick={()=>navigate("/account")}>취소</button>
      <button className="btn btn-success mt-5 header-btn" disabled={message.accountId || message.money}
        onClick={() => {
          axiosInstance.post(`/transaction/${accountInfo.id}`, transaction)
            .then(response => {
//              alert(response.data);
              if(response.status === 200) {
                setUpdate(false);
                navigate('/account');
              }
            }).catch(error => console.log(error))
      }}>이체</button>
    </div>
  )
}

export default Transaction;