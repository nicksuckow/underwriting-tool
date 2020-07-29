import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {criteriaConfig} from '../config/criteria-config';

export default function Followup({lastCriteria, setLastCriteria, criteriaList, setCriteria}){
    if(!lastCriteria.probableCriteria) return <div></div>  
  
    return (
        <div className="followup">
            <h2>{getQuestion(lastCriteria)}</h2>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button onClick={(e) => handleUpdate(lastCriteria.probableCriteria[0], criteriaList, setCriteria, setLastCriteria)}>Yes</Button>
                <Button onClick={(e) => handleDismiss(setLastCriteria)}>No</Button>
            </ButtonGroup>
        </div> 
    )
}

function handleUpdate(newCriteriaName, criteriaList, setCriteria, setLastCriteria){
    setCriteria([...criteriaList, criteriaConfig[newCriteriaName]])
    setLastCriteria(undefined)
}

function handleDismiss(setLastCriteria) {
    setLastCriteria(undefined)
}

function getQuestion(lastCriteria){
    const criteriaName =  criteriaConfig[lastCriteria.probableCriteria].name
    if(lastCriteria.type === "Medication"){
        return `Does the user have ${criteriaName}?`
    }
    
    return `Does the user take ${criteriaName}?`
}