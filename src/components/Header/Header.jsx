import React from 'react'
import './Header.css'
import img from './../img.png'

const Header = ({headTitle, headerExpanded}) =>{
    return(
    <div className="head-container">
        <img src={img}
        className={`head-image ${
           headerExpanded 
            ? 'head-image-expanded'
            : 'head-image-contracted'
        }`} 
        alt="headerImage"></img>

        <h1 className="head-text">{headTitle}</h1>

    </div>
    )
}

export default Header