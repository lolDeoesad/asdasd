import Customersub from '../components/Customersub';
import '../styles/Event.css';
import React from 'react';

const Event = () => {
  return (
    <div className='event-container'>
      <div className='event-leftbox'>
        <Customersub />
      </div>
      <div className='event-rightbox'>

        <div className='event-banner'>
          <img src={process.env.PUBLIC_URL + '/img/ezenbnn1.png'} alt="ezenbnn1" href="#" />
          <img src={process.env.PUBLIC_URL + '/img/ezenbnn2.png'} alt="ezenbnn2" href="#" />
          <img src={process.env.PUBLIC_URL + '/img/ezenbnn3.png'} alt="ezenbnn3" href="#" />
        </div>
      </div>
    </div>
  )
}

export default Event;