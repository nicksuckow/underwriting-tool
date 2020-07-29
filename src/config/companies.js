import {criteriaConfig} from './criteria-config';
export default  [
    {
        name: 'Wellmark',
        deniedStates: ['California'],
        criteria: [criteriaConfig.TYLENOL, criteriaConfig.LEVOTHYROXINE, criteriaConfig.ALCOHOL_USE_DISORDER, criteriaConfig.COPD]
    },
    {
        name: 'UnitedHealth',
        deniedStates: ['Iowa', 'Indiana'],
        criteria: [criteriaConfig.NYQUIL, criteriaConfig.IBUPROFEN, criteriaConfig.HIGH_CHOLESTEROL]
    }
    ,
    {
        name: 'Blue Cross',
        deniedStates: ['Missouri', "Illinois"],
        criteria: [criteriaConfig.IBUPROFEN, criteriaConfig.VICODIN, criteriaConfig.HIGH_CHOLESTEROL, criteriaConfig.HYPERTENSION, criteriaConfig.TYPE_2_DIABETES]
    }
    ,
    {
        name: 'Anthem Inc.',
        deniedStates: ['Alaska', "Arkansas"],
        criteria: [criteriaConfig.TYLENOL, criteriaConfig.TYPE_2_DIABETES]
    }
    ,
    {
        name: 'Humana',
        deniedStates: ['Connecticut', 'Vermont'],
        criteria: [criteriaConfig.TYLENOL, criteriaConfig.COPD, criteriaConfig.CROHNS]
    }
    ,
    {
        name: 'Highmark Group',
        deniedStates: ['New York', 'Wisconsin'],
        criteria: [criteriaConfig.LISINOPRIL, criteriaConfig.PSYCHOTIC_DISORDER, criteriaConfig.SUBSTANCE_USE_DISORDER]
    }
    ,
    {
        name: 'Cigna Health',
        deniedStates: ['Idaho', 'Arizona'],
        criteria: [criteriaConfig.SIMVASTATIN, criteriaConfig.SUBSTANCE_USE_DISORDER, criteriaConfig.COPD, criteriaConfig.CORONARY_ARTERY_DISEASE]
    }
]