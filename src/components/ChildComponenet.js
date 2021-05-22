import React from 'react'

function ChildComponenet(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler("Child")} >Greet Parent</button>
        </div>
    )
}

export default ChildComponenet
