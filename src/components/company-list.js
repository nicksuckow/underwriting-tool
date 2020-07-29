import React from 'react';
import companies from '../config/companies';
import Company from './company';
import { List } from '@material-ui/core';

export default function Companies(props){
    return(
        <div>
            <List>
                {mapCompanies(companies, props.state, props.criteria)}
            </List>
        </div>

    )

}

function mapCompanies(companies, state, criteria){
    return companies.map(company => {
        return <Company key={company.name} company={company} criteria={criteria} state={state} /> 
    })
}