import React from 'react';

export default function State(props){
    const updateState = props.updateState;

    return(
        <div>
            <label htmlFor='state'>State: </label>
            <select id='state' onChange={(e) => updateState(e.target.value)}>
            <option>Iowa</option>
            <option>Missouri</option>
            <option>Illinois</option>
            <option>Kansas</option>
            <option>Nebraska</option>
            </select>
        </div>
    )
}