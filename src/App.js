import React, {useState} from 'react';
import './App.css';
import StateSelector from './components/state-selector';
import Companies from './components/company-list';
import Criteria from './components/criteria';
import Followup from './components/followup';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

function App() {
  const [state, setState] = useState('');
  const [criteria, setCriteria] = useState([]); 
  const [lastCriteria, setLastCriteria] = useState();

  return (
    <div className="App">
      <div className="options">
        <Autocomplete
          id="combo-box-demo"
          options={["0-18 yrs", "19-25 yrs", "25-35 yrs", "35-40 yrs", "40-50 yrs", "50+ yrs"]}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Age" variant="outlined" />}
        />
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
