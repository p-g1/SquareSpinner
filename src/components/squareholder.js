import React from 'react'
import Square from './square';

class SquareHolder extends React.Component {
    
    render() {
        return (
        <div className="holder">
          {this.props.letters.map((letter) => {
            return (
                <Square id={letter} key={letter} />
                )
          })}
        </div>
        )
    }
}

export default SquareHolder