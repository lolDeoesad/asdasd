import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { Card } from 'react-bootstrap';
import { ACCOUNTNAMES, ACCOUNTNUMS, COMMENTS } from '../constants/accountList';
import axiosInstance from '../utils/axiosInstance';

const AccountListCard = ({account, setUpdate, accountInfo, setAccountInfo, showOpenAccountOnly, idx}) => {
  const randR = Math.floor(Math.random() * 10);
  const randG = Math.floor(Math.random() * 10);
  const randB = Math.floor(Math.random() * 10);
  let colorQ = `rgb(${180 - randR*3}, ${160 + randG*5}, ${200 - randB*10})`;
  if (account.open==false)
    colorQ = `rgb(255, 255, 255)`;
  const randIdx = Math.floor(Math.random() * ACCOUNTNAMES.length);
  
  const navigate = useNavigate();

  const getAccount = () => {
    setAccountInfo({...accountInfo, account});
    navigate('/account/detail');
  }
  const postTransaction = (e) => {
    e.stopPropagation();
    setAccountInfo({...accountInfo, account});
    // setAccountIdx(idx);
    navigate('/transaction');
  }
  const deleteAccount = (e) => {
    e.stopPropagation();
    if(account.balance === 0) {
      if(window.confirm("정말로 해지하시겠습니까?")) {
        axiosInstance.delete(`/account/${account.id}`)
          .then(response => {
            if(response.status == 200) {
              setUpdate(false);
              navigate('/account');
            }
          }).catch(error => console.log(error))
      } else
        alert("해지를 취소하셨습니다.");
    } else
    alert('잔액이 남아있어 해지를 할 수 없습니다.');
  }

  if(showOpenAccountOnly && !account.open)
    return <></>;

  return (
    <Card className="AccountListCard p-2 m-3" style={{background:`${colorQ}`, borderRadius: '1rem', width:'21rem'}} onClick={getAccount}>
      <Card.Body>
        <h3 className="card-title">{ACCOUNTNAMES[randIdx]}</h3>
        <p className="card-text text-nowrap">{ACCOUNTNUMS[randIdx] + account.id}</p>
        <h4 className="card-subtitle my-4 text-body-secondary">금액 {Number(account.balance).toLocaleString('ko-KR')}원</h4>
        <p className="card-text text-nowrap">{COMMENTS[Math.floor(Math.random() * COMMENTS.length)]}</p>
      </Card.Body>
      <div className='d-flex m-auto'>
        <div className='btn my-3' style={{background:'white', width:'4rem'}}>조회</div>
        {
          account.open && 
          <>
            <div className='btn mx-4 my-3' style={{background:'white', width:'4rem'}} onClick={postTransaction}>이체</div>
            <div className='btn my-3' style={{background:'white', width:'4rem'}} onClick={deleteAccount}>해지</div>
          </>
        }
      </div>
    </Card>
  )
}

export default AccountListCard;