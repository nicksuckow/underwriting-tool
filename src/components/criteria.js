import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {criteriaConfig} from '../config/criteria-config';
import last from 'lodash/last'

export default function Criteria({selectedCriteria, setCriteria, setLastCriteria}){
    return <Autocomplete multiple
        id="combo-box-demo"
        options={Object.values(criteriaConfig)}
        getOptionLabel={(option) => option.name }
        groupBy={(option) => option.type}
        autoSelect={true}
        value={selectedCriteria}
        onChange={(event, newValue) => {
            setCriteria(newValue)
            setLastCriteria(last(newValue))
            }}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Criteria" variant="outlined" />}
    />
}