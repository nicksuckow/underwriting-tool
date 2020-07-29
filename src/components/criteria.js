import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {criteriaConfig} from '../config/criteria-config';

export default function Criteria({setCriteria}){

    return <Autocomplete multiple
        id="combo-box-demo"
        options={Object.values(criteriaConfig)}
        getOptionLabel={(option) => option.name }
        groupBy={(option) => option.type}
        onChange={(event, newValue) => {
            setCriteria(newValue)
            }
        }
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Criteria" variant="outlined" />}
    />
}