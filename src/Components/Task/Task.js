import React, { Component } from 'react'

class Task extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        this.props.remove(this.props.id)
    }
    
    render() {
        return (
            <div>
                {this.props.taskItem}
                <button onClick={this.handleClick}>X</button>
            </div>
        )
    }
}

export default Task