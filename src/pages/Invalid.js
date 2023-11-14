import Spinner from 'react-bootstrap/Spinner';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Invalid = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let timer = setTimeout(() => navigate('/login'), 3000);
    return () => { clearTimeout(timer); }
  }, []);

  return(
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <Spinner animation="border" variant="success" />
      <br/>
      로그인이 필요한 서비스입니다. 3초 후 자동으로 로그인 페이지로 이동합니다.
      <br/>
      <Link to='/login' className='header-btn btn btn-success mt-4'>로그인</Link>
    </div>
  )
}

export default Invalid;