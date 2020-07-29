import React, {useState} from 'react';
import './App.css';
import StateSelector from './components/state-selector';
import Companies from './components/company-list';
import Criteria from './components/criteria';
import Followup from './components/followup';

function App() {
  const [state, setState] = useState('');
  const [criteria, setCriteria] = useState([]); 
  const [lastCriteria, setLastCriteria] = useState();

  console.log('lastCriteria', lastCriteria)

  return (
    <div className="App">
      <div className="options">
        <StateSelector updateState={setState} />
        <Criteria selectedCriteria={criteria} setCriteria={setCriteria} setLastCriteria={setLastCriteria} />
      </div>
        {lastCriteria ? <Followup lastCriteria={lastCriteria} setLastCriteria={setLastCriteria} criteriaList={criteria} setCriteria={setCriteria} /> : undefined }
        <hr />
      <Companies state={state} criteria={criteria} />
    </div>
  );
}

export default App;
