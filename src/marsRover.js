let marsRover = (aGrid,aStartPosition,aCommands)=>{
	let sDirection = aStartPosition[2]

	let position = aStartPosition.slice(0, 2)
	for (let i = 0; i < aCommands.length; i++) {
		if(sDirection === 'S'){
			position[0]--
		}else if(sDirection === 'N'){
			position[0]++
		}
	}
	return position
}

module.exports = marsRover