import React, {useState} from 'react';
import './App.css';
import StateSelector from './components/state-selector';
import Companies from './components/company-list';
import Criteria from './components/criteria';

function App() {
  const [state, setState] = useState('');
  const [criteria, setCriteria] = useState(''); 
  return (
    <div className="App">
      <div className="options">
        <StateSelector updateState={setState} />
        <Criteria setCriteria={setCriteria} />
      </div>
      <Companies state={state} criteria={criteria} />
    </div>
  );
}

export default App;
