import React from 'react';
import companies from './config/companies';

export default function Companies(props){
    return(
        <div>
            <ul>
                {mapCompanies(companies, props.state, props.medication)}
            </ul>

        </div>

    )

}

function mapCompanies(companies, state, medication){
    return companies.map(company => {
        console.log('selected Medication: ', medication)
        if(company.deniedStates.includes(state) || company.medication.includes(medication)) return <li className='red'>{company.name}</li>
        return <li>{company.name}</li>
    })
}