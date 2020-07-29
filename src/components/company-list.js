import React from 'react';
import companies from '../config/companies';
import Company from './company';

export default function Companies(props){
    return(
        <div>
            <ul>
                {mapCompanies(companies, props.state, props.criteria)}
            </ul>

        </div>

    )

}

function mapCompanies(companies, state, criteria){
    return companies.map(company => {
        return <Company key={company.name} company={company} criteria={criteria} state={state} /> 
    })
}