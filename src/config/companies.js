import {medications} from './criteria-config';
export default  [
    {
        name: 'Wellmark',
        deniedStates: [],
        criteria: [medications.TYLENOL]
    },
    {
        name: 'Nationwide',
        deniedStates: ['Iowa'],
        criteria: [medications.NYQUIL]
    }
    ,
    {
        name: 'Blue Cross',
        deniedStates: ['Missouri'],
        criteria: [medications.IBUPROFEN]
    }
    ,
    {
        name: 'Principal',
        deniedStates: [],
        criteria: [medications.TYLENOL]
    }
]