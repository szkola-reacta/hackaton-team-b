import React from 'react';
import { Stage, Rect, Layer } from 'react-konva';

const Board = () => {
  return (
    <div className='tetris-board'>
      <Stage width={400} height={500}>
        <Layer>
          <Rect 
            x={350}
            width={50}
            height={50}
            fill="red"
          />
        </Layer>
      </Stage>
    </div>
  )
}

export default Board;