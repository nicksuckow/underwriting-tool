
export const criteriaConfig = {
    TYLENOL: { name:'Tylenol', type: 'Medication', 'probableCriteria': ['ALCOHOL_USE_DISORDER']},
    IBUPROFEN: { name:'Ibuprofen', type: 'Medication'},
    NYQUIL: { name:'Nyquil', type: 'Medication'},
    VICODIN: { name:'Vicodin', type: 'Medication'},
    SIMVASTATIN: { name:'Simvastatin', type: 'Medication' },
    LISINOPRIL: { name:'Lisinopril', type: 'Medication' },
    LEVOTHYROXINE: { name:'Levothyroxine', type: 'Medication' },
    HYPERTENSION: { name:'Hypertension', type: 'Condition' },
    HIGH_CHOLESTEROL: { name:'High Cholesterol', type: 'Condition', 'probableCriteria': ['NYQUIL']},
    TYPE_2_DIABETES: { name:'Type 2 Diabetes', type: 'Condition' },
    CORONARY_ARTERY_DISEASE: { name:'Coronary Artery Disease', type: 'Condition', 'probableCriteria': ['SIMVASTATIN']},
    SUBSTANCE_USE_DISORDER: { name:'Substance Use Disorder', type: 'Condition' },
    ALCOHOL_USE_DISORDER: { name:'Alcohol Use Disorder', type: 'Condition' },
    COPD: { name:'Chronic Obstructive Pulmonary Disease (COPD)', type: 'Condition' },
    PSYCHOTIC_DISORDER: { name:'Psychotic Disorder', type: 'Condition'},
    CROHNS: { name:'Crohn’s Disease/Ulcerative Colitis', type: 'Condition'}
}