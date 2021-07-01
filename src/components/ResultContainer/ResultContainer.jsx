import React from 'react'
import "./ResultContainer.css"
import NameCard from "./../NameCard/NameCard"

const ResultContainer = ({suggestedNames})=>{
    const suggestedNameJSX = suggestedNames.map(suggestedName =>{
        // return <p key={suggestedName}>{suggestedName}</p>
        return <NameCard key={suggestedName} suggestedName={suggestedName}/>
    })
    return(
        <div className="results-container">
            <p>{suggestedNameJSX}</p>
        </div>
    )

}

export default ResultContainer
