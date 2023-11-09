import React from 'react';
import '../styles/ErrorPage.css';

const ErrorPage = () => {
  return(
    <div className='error-container'>
      <div className='error-box'>
        <img src={process.env.PUBLIC_URL + '/img/error.png'} alt="error" href="#" />
      </div>
    </div>
  )
}

export default ErrorPage;