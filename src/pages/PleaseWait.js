import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';

const PleaseWait = () => {

  return(
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <Spinner animation="border" variant="success" />
      <br/>
      정보 수신 중입니다. 잠시만 기다려주세요.
    </div>
  )
}

export default PleaseWait;