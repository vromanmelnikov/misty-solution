import logo from './logo.svg';
import './App.css';

import robot from './assets/photos/robot.png'
import profile from './assets/photos/profile.png'
import Example from './components/layers/Example';
import Request from './components/layers/Request';

function App() {

  document.addEventListener(
    ('click'),
    (event) => {
      // @ts-ignore
      let id = event.target.id
      if (id == 'tab_1') {
        document.getElementById('tab_1').className = 'tab'
        document.getElementById('tab_2').className = 'tab unactive-tab'
      }
      else if (id == 'tab_2') {
        document.getElementById('tab_2').className = 'tab'
        document.getElementById('tab_1').className = 'tab unactive-tab'
      }
    }
  )

  return (
    <div className="Modal">
      <div className='tabs' id='tabs'>
        <div className='tab' id='tab_1'>
          Чат
        </div>
        <div className='tab unactive-tab' id='tab_2'>
          Уведомления
        </div>
      </div>
      <div className='window chat' id='chat'>
        <div className='messages'>
          <div className='message-item'>
            <div className='message-block'>
              <img src={robot} className='message-icon'></img>
              <div className='message'>
                <div className='tail'></div>
                <span className='message-text'>Привет! Чем могу помочь?</span>
              </div>
            </div>
            <div className='hints'>
              <Example />
              <Example />
              <Example />
              <Example />
            </div>
          </div>
          <div className='message-item user-item'>
            <div className='message-block'>
              <img src={profile} className='message-icon'></img>
              <div className='message user-message'>
                <div className='tail'></div>
                <span className='message-text'>Привет! Чем могу помочь?</span>
              </div>
            </div>
          </div>
          <div className='message-item'>
            <div className='message-block'>
              <img src={robot} className='message-icon'></img>
              <div className='message'>
                <div className='tail'></div>
                <span className='message-text'>Привет! Чем могу помочь?</span>
              </div>
            </div>
            {/* <div className='hints'>
              <Example />
              <Example />
              <Example />
              <Example />
            </div> */}
          </div>
          <div className='message-item user-item'>
            <div className='message-block'>
              <img src={profile} className='message-icon'></img>
              <div className='message user-message'>
                <div className='tail'></div>
                <span className='message-text'>Привет! Чем могу помочь?</span>
              </div>
            </div>
          </div>
          <div className='message-item'>
            <div className='message-block'>
              <img src={robot} className='message-icon'></img>
              <div className='message'>
                <div className='tail'></div>
                <span className='message-text'>Привет! Чем могу помочь?</span>
              </div>
            </div>
            <div className='hints'>
              <Example />
              <Example />
              <Example />
              <Example />
            </div>
          </div>
          <div className='message-item user-item'>
            <div className='message-block'>
              <img src={profile} className='message-icon'></img>
              <div className='message user-message'>
                <div className='tail'></div>
                <span className='message-text'>Привет! Чем могу помочь?</span>
              </div>
            </div>
          </div>
        </div>
        <Request />
      </div>
    </div>
  );
}

export default App;
