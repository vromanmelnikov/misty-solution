import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
        <Example className='hint' />
        <Example className='hint' />
        <Example className='hint' />
        <Example className='hint' />
      </div>

    </div>
  </div>
  );
}

export default App;
