import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default function Company({company, state, criteria}){
    const isDenied = company.deniedStates.includes(state) || company.criteria.includes(criteria);
    const icon = isDenied ? <CloseIcon /> : <DoneIcon />
    const styles = isDenied ? 'red' : ''
    console.log(
        'criteria', criteria
    )
    return (
        <ListItem alignItems="flex-start" divider="true" className={styles}>
            <ListItemIcon className="list-item">
            {icon}
            </ListItemIcon>
            <ListItemText primary={company.name} />
        </ListItem>
    );
}

        