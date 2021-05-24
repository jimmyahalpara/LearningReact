import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Thor', 'Diana']
    const nameList = names.map(x => <Person name={x}/> )
    return (
        <div>
            {
                nameList
            }
        </div>
    )
}

export default NameList
