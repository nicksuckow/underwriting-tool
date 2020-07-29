import React from 'react';
export default function Company({company, state, criteria}){
    console.log('selected criteria', criteria);
    
    if(company.deniedStates.includes(state) || company.criteria.includes(criteria)){
        return <li className='red'>{company.name}</li>;
    }

    return <li>{company.name}</li>;
}

        