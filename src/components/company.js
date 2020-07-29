import React from 'react';
export default function Company({company, state, medication}){
    console.log('selected Medication: ', medication);
    
    if(company.deniedStates.includes(state) || company.medication.includes(medication)) {
        return <li className='red'>{company.name}</li>;
    }

    return <li>{company.name}</li>;
}

        