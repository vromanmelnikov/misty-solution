import React from 'react'

import Send from '../../assets/photos/send.png'
import Microphone from '../../assets/photos/microphone.png'

function Request() {
  
  return (
    <div className="request-block">
      <input className='request-input' placeholder="Введите запрос..."></input>
      <button className='request-button'>
        <img src={Microphone} className="microphone"></img>
      </button>
      <button className='request-button'>
        <img src={Send} className="send"></img>
      </button>
      
    </div>
  );
}

export default Request;
