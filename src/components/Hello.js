import React from 'react'



const Hello = () => {
    return React.createElement('div',
     {id: 'hello', className: 'dummyClassName'}, 
     React.createElement('h1', null, 'Hello Jimmy'))
}

export default Hello;