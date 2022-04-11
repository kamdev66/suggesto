import React from 'react';
import './NameCards.css';

const cheapUrl='https://www.namecheap.com/domains/registration/results/?domain='

const NameCards=({data})=>{
    return(
        <>
        <a 
        target="_blank"
        rel='noreferrer' className="card-link" href={`${cheapUrl}${data}`}>
        <div className="result-card">
            <p className='result-name'>{data}</p>
        </div>
        </a>
        </>
    )
}
export default NameCards;