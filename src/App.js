import React, {useState} from 'react';
import './App.css';
import State from './components/state-selector';
import Companies from './components/company-list';
import Criteria from './components/criteria';

function App() {
  const [state, setState] = useState('Iowa');
  const [criteria, setCriteria] = useState(''); 
  return (
    <div className="App">
      <State updateState={setState} />
      <Criteria criteria={criteria} setCriteria={setCriteria} />
      <Companies state={state} criteria={criteria} />
    </div>
  );
}

export default App;
