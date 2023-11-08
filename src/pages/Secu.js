import Customersub from '../components/Customersub';
import '../styles/Secu.css';
import React from 'react';

const Secu = () => {
  return (
    <div className='Secu-container'>
      <div className='Secu-leftbox'>
        <Customersub />
      </div>
      <div className='Secu-rightbox'>
        <div className='Secu-img'>
          <img src={process.env.PUBLIC_URL + '/img/secu1.png'} alt="secu1" href="#" />
        </div>
        <div className='Secu-box'>
          <div className='box1'>
            <img src={process.env.PUBLIC_URL + '/img/secu2.png'} alt="secu2" href="#" />
            <h2><strong>단말기<br />지정서비스</strong></h2>
            <p>인증서 발급 거래 및 <br /> 이체거래 시 사용하는 단말기를 <br /> 사전 지정하는 서비스</p>
          </div>
          <div className='box2'>
            <img src={process.env.PUBLIC_URL + '/img/secu3.png'} alt="secu3" href="#" />
            <h2><strong>피싱예방용<br />환율이미지 서비스</strong></h2>
            <p>나만의 환율이미지를 설정하여<br />피싱을 방지할 수 있는 서비스</p>
          </div>
          <div className='box3'>
            <img src={process.env.PUBLIC_URL + '/img/secu4.png'} alt="secu4" href="#" />
            <h2><strong>인증서<br />안심거래 서비스</strong></h2>
            <p>인증서 발급 거래 시<br /> 당행에 등록된 휴대폰번호로<br />ARS 인증을 거치는 서비스</p>
          </div>
        </div>
          {/* <strong>금융사기신고</strong> */}
          
        {/* <div className='cops'>
          <div className='cops-box'>
            <img src={process.env.PUBLIC_URL + '/img/logoHeader.png'} alt="logoHeader" href="#" />
            <h5><strong>금융사기<br />피해신고</strong></h5>
          </div>
          <div className='cops-box'>
            <img src={process.env.PUBLIC_URL + '/img/police.png'} alt="police" href="#" className='police-img'/>
            <h5><strong>경찰청</strong></h5>
          </div>
          <div className='cops-box'>
            <img src={process.env.PUBLIC_URL + '/img/kisa.png'} alt="kisa" href="#" className='kisa-img' />
            <h5><strong>인터넷진흥원</strong></h5>
          </div>
          <div className='cops-box'>
            <img src={process.env.PUBLIC_URL + '/img/gum.png'} alt="gum" href="#" className='gum-img'/>
            <h5><strong>금융감독원</strong></h5>
          </div>  
        </div> */}
      </div>


    </div>
  )
}

export default Secu;