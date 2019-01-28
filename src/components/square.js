import React from 'react'

class Square extends React.Component {
    constructor() {
        super()
        this.state = {
            rotate: false,
            class: 'square'
        }
        this.handleClick = this.handleClick.bind(this);
    }

     handleClick() {
        const currentState = this.state.rotate;
        this.setState({ 
            rotate: !currentState,
            class: this.state.rotate ? "square rotate-up" : "square rotate-down"
        })
        console.log(this.state.rotate)
     }


    render() {
    return (
        <div className={this.state.class} id={this.props.id} onClick={this.handleClick} ></div>
    )
  }
}

export default Square