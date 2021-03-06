import React from 'react';
import { Rect, Group } from 'react-konva';

function TetriminoI( { position, color, borderColor, blockSize } ) {
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
			x={ position.x }
			y={ position.y + 3 * blockSize }
			width={ blockSize }
			height={ blockSize }
			fill={ color }
			stroke={ borderColor }
		/>
		</Group>
	);
}

export default TetriminoI;