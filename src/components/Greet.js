import React from 'react'


const Greet = (props) => {
    const {name, heroName, children} = props;
    return (
        <div>
            <h1> Hello {name} aka {heroName}</h1>
            {children}
        </div>
    );
}


export default Greet