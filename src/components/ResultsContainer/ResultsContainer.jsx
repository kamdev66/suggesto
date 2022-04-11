import React from 'react';
import NameCards from '../NameCard/NameCards';
import './ResultsContainer.css';

const ResultContainer=({suggestedName})=>{
    const viewSuggestedName=suggestedName.map((data)=>{
        return <NameCards key={data} data={data}/>
    })

    return(
        <>
        <div className='results-container'>{viewSuggestedName}</div>
        </>
    )
}

export default ResultContainer;