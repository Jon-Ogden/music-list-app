import SongList from './SongList';
import './App.css';
import Form from './Form';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <div className='page'>
        <div className='column'>
          <SongList />
        </div>
        <div className='column'>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
