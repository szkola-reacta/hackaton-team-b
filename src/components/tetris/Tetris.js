import React, { useState } from 'react';

import { CountersWrapper, Counter, Footer } from './'
import './style.css'

const useScore = () => {

    const [score, setScore] = useState(0);
    

    const updateScore = (noOfLayersDone) => {
        setScore(score + 10 * noOfLayersDone );
    }

    return [ score, updateScore ]
}

const Tetris = () => {

    const [ score, updateScore ] = useScore();

    return (
        <div className="tetris__wrapper">
            <div className="tetris">
                <h1>Tetris</h1>
                {/* <Board updateScore /> */}
                <CountersWrapper>
                    <Counter result={score}>Score</ Counter>
                    <Counter result="1">Level</ Counter>
                </CountersWrapper>
                <Footer>
                    &copy; Szkoła Reacta Team B
                </Footer>
            </div>
        </div>
    )
}

export default Tetris;