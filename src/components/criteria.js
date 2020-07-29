import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {medications} from '../config/criteria-config';
export default function Criteria({criteria, setCriteria}){
    return <Autocomplete
        id="combo-box-demo"
        options={Object.values(medications)}
        onChange={(event, newValue) => setCriteria(newValue)}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Criteria" variant="outlined" />}
    />
}