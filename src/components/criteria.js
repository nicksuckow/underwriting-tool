import React from 'react';

export default function Criteria({criteria, setCriteria}){
    return <input type="text" value={criteria} onChange={(event) => setCriteria(event.target.value)}/>;
}