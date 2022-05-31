import SongList from './SongList';
import './App.css';
import Form from './Form';
import { useEffect, useState } from 'react';
import data from './data';

function App() {
  const [state, setState] = useState(true);
  useEffect(() => {}, [state])

  return (
    <div className="App">
      <div className='page'>
        <div className='column'>
          <SongList 
          state={state}
          setState={setState}/>
        </div>
        <div className='column'>
          <Form
          state={state}
          setState={setState} />
        </div>
      </div>
    </div>
  );
}

export default App;
