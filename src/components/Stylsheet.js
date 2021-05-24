import React from 'react'
import './abc.css'


function Stylsheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${className} font-xl`}>Stylesheet</h1>
        </div>
    )
}

export default Stylsheet
