import React, {useState} from 'react';
import './App.css';
import State from './components/state-selector';
import Companies from './components/company-list'

function App() {
  const [state, setState] = useState('Iowa');
  const [medication, setMedication] = useState(''); 
  return (
    <div className="App">
      <State updateState={setState}></State>
      <input type="text" value={medication} onChange={(event) => setMedication(event.target.value)}/>
      <Companies state={state} medication={medication}></Companies>
    </div>
  );
}

export default App;
