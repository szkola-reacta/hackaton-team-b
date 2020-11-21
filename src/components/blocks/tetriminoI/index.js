import React from 'react';
import { Rect, Group } from 'react-konva';

function TetriminoI( {position} ) {

	return (
		<Group>
			<Rect
			x={ position.x }
			y={ position.y }
			width={ 20 }
			height={ 20 }
			fill='pink'
			stroke='black'
		/>
		<Rect
			x={ position.x }
			y={ position.y + 20 }
			width={ 20 }
			height={ 20 }
			fill='pink'
			stroke='black'
		/>
		<Rect
			x={ position.x }
			y={ position.y + 40 }
			width={ 20 }
			height={ 20 }
			fill='pink'
			stroke='black'
		/>
		<Rect
			x={ position.x }
			y={ position.y + 60 }
			width={ 20 }
			height={ 20 }
			fill='pink'
			stroke='black'
		/>
		</Group>
	);
}

export default TetriminoI;