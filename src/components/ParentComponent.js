import React, { Component } from 'react'
import ChildComponenet from './ChildComponenet';

class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`);
    }

    render() {
        return (
            <div>
                <ChildComponenet greetHandler={this.greetParent} />
            </div>
        )
    }


}

export default ParentComponent

