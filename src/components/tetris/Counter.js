import React from 'react'

const Counter = ( {result, children}) => {

    return (
        <div className="tetris__counterElement">
            <div className="tetris__counterElement__name">
                { children }
            </div>
            <div className="tetris__counterElement__value">
                {result}
            </div>
        </div>

    );
}

export default Counter;