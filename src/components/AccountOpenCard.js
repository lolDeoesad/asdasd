import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { Card } from 'react-bootstrap';

const AccountOpenCard = () => {
  const navigate = useNavigate();
  return (
    <Card className="AccountOpenCard p-2 m-3" 
      style={{borderRadius: '1rem', width:'21rem', cursor:'pointer'}}
      onClick={() => navigate('/account/open')}>
      <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
        <i className="fa-regular fa-plus mb-5" style={{fontSize:'3rem'}}></i>
        <h3 className="card-title">계좌개설신청</h3>
      </Card.Body>
    </Card>
  )
}

export default AccountOpenCard;