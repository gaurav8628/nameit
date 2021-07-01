import React from 'react'
import "./SearchBox.css"
const SearchBox=(props)=>{

    return (
        <div className="search-container">
            <input onChange={
                (event)=> props.onInputChange(event.target.value)
            } placeholder="Type Keywords" className="search-input"/>
        </div>
    )

}

export default SearchBox