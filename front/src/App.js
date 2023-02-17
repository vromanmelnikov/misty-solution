import logo from './logo.svg';
import './App.css';

import robot from './assets/photos/robot.png'
import profile from './assets/photos/profile.png'
import Example from './components/layers/Example';

function App() {
  return (
    <div className="Modal">
      <div className='tabs'>
        <div className='tab'>
          Чат
        </div>
        <div className='tab unactive-tab'>
          Уведомления
        </div>
      </div>
      <div className='window'>
        <div className='Nhint'>
          <img src={robot} className='image'></img>
          <div className='text'></div>
          <div className='tail'>
            <h1 className='message'>Привет! Чем могу помочь?</h1>
          </div>
        </div>
        <div className='profile'>

          <div className='tail'>
            <h1 className='message'>Привет! Чем могу помочь?</h1>
            <div className='text1'></div>

          </div>
          <img src={profile} className='profile-photo'></img>
        </div>
        <div className='Nhint'>
          <img src={robot} className='image'></img>
          <div className='text'></div>
          <div className='tail'>
            <h1 className='message'>Опишите проблему подробнее</h1>
          </div>
        </div>
        <div>
          <div className='example-block'>
            <Example />
            <Example />
            <Example />
            <Example />
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
