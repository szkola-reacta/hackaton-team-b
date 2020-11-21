import React from 'react';
import './style.css';
import { Stage, Layer } from 'react-konva';
import TetriminoI from '../blocks/tetriminoI/index';

function Board() {
  return (
    <div className='tetris-board'>
      <Stage width={400} height={500}>
        <Layer>
          <TetriminoI position={{x: 20, y: 20}} />
        </Layer>
      </Stage>
    </div>
  )
}

export default Board;