import React from 'react';
import { Rect, Group } from 'react-konva';

function TetriminoJ( { position, color, borderColor, blockSize } ) {
	return (
		<Group>
			<Rect
			x={ position.x }
			y={ position.y }
			width={ blockSize }
			height={ blockSize }
			fill={ color }
			stroke={ borderColor }
		/>
		<Rect
			x={ position.x }
			y={ position.y + blockSize }
			width={ blockSize }
			height={ blockSize }
			fill={ color }
			stroke={ borderColor }
		/>
		<Rect
			x={ position.x }
			y={ position.y + 2 * blockSize }
			width={ blockSize }
			height={ blockSize }
			fill={ color }
			stroke={ borderColor }
		/>
		<Rect
			x={ position.x - blockSize }
			y={ position.y + 2 * blockSize }
			width={ blockSize }
			height={ blockSize }
			fill={ color }
			stroke={ borderColor }
		/>
		</Group>
	);
}

export default TetriminoJ;