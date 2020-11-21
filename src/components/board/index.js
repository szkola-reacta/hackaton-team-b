import React from 'react';
import './style.css';
import { Stage, Layer } from 'react-konva';
import TetriminoI from '../blocks/tetriminoI/index';
import TetriminoL from '../blocks/tetriminoL/index';
import TetriminoO from '../blocks/tetriminoO/index';
import TetriminoS from '../blocks/tetriminoS/index';
import TetriminoT from '../blocks/tetriminoT/index';
import TetriminoZ from '../blocks/tetriminoZ/index';

function Board() {
  return (
    <div className='tetris-board'>
      <Stage width={400} height={500}>
        <Layer>
          <TetriminoI 
            position={{x: 20, y: 20}} 
            color='red'
            borderColor='black'
            blockSize='30'
          />
          <TetriminoL 
            position={{x: 80, y: 80}} 
            color='green'
            borderColor='red'
            blockSize='30'
          />
          <TetriminoO 
            position={{x: 120, y: 120}} 
            color='yellow'
            borderColor='black'
            blockSize='30'
          />
          <TetriminoS 
            position={{x: 160, y: 160}} 
            color='blue'
            borderColor='black'
            blockSize='30'
          />
          <TetriminoT 
            position={{x: 200, y: 200}} 
            color='orange'
            borderColor='black'
            blockSize='30'
          />
          <TetriminoZ 
            position={{x: 260, y: 260}} 
            color='gray'
            borderColor='black'
            blockSize='30'
          />
        </Layer>
      </Stage>
    </div>
  )
}

export default Board;