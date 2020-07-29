import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import States from '../config/states';

export default function StateSelector({updateState}){
    return <Autocomplete
        id="combo-box-demo"
        options={States}
        style={{ width: 300 }}
        onChange={(event, newValue) => updateState(newValue)}
        renderInput={(params) => <TextField {...params} label="States" variant="outlined" />}
    />
}
