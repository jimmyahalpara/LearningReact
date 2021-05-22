import React, { Component } from 'react'

class UserGreetings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>Welcome Jimmy</div>
        //     )
        // }
        // else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }
        // return (
        //     <div>
        //         <div>Welcome Jimmy</div>
        //         <div>Welcom Guest</div>
        //     </div>
        // )
        // return (
        //     this.state.isLoggedIn ?
        //         <div>Welcome jimmy</div> :
        //         <div>Welcome guest</div>
        // )

        return this.state.isLoggedIn && <div>Welcome Vishwas</div>
    }
}

export default UserGreetings
