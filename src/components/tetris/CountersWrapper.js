import React from 'react';

const CountersWrapper = ( {children} ) => {
    return (
        <div className="tetris__counters">
            { children }
        </div>
    )
}

export default CountersWrapper;