import React from 'react';
// import '../styles/Main.css';
import Carousel from 'react-bootstrap/Carousel';
import ezenBnn1 from '../assets/ezenBnn1.png';
import ezenBnn2 from '../assets/ezenBnn2.png';
import ezenBnn3 from '../assets/ezenBnn3.png';

function CarouselBN() {
  return (
    <Carousel >
      <Carousel.Item>
        <img src={process.env.PUBLIC_URL + '/img/ezenBnn1.png'} style={{width: '1000px', aspectRatio:'8/3'}} alt="" className='caroImg'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={process.env.PUBLIC_URL + '/img/ezenBnn2.png'} style={{width: '1000px', aspectRatio:'8/3'}} alt="" className='caroImg' />
      </Carousel.Item>
      <Carousel.Item>
        <img src={process.env.PUBLIC_URL + '/img/ezenBnn3.png'} style={{width: '1000px', aspectRatio:'8/3'}} alt="" className='caroImg' />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBN;
