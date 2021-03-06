import React, { useState } from 'react';

import { CountersWrapper, Counter, Footer } from './'
import Board from '../board';
import './style.css'

const useScore = () => {

    const [score, setScore] = useState(0);
    const updateScore = (noOfLayersDone) => {
        setScore(score + 10 * noOfLayersDone );
    }

    const resetScore = () => setScore(0);

    return [ score, updateScore, resetScore ]
}

const Tetris = () => {

    const [ score, updateScore, resetScore ] = useScore();

    return (
        <div className="tetris__wrapper">
            <div className="tetris">
                <h1>Tetris</h1>
                <Board />
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