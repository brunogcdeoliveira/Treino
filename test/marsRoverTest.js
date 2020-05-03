let chai = require('chai')

let marsRover = require('../src/marsRover.js')

describe('mars rover',()=>{
	it("can be executed",()=>{
		chai.assert.isFunction(marsRover)
	})
	it("moves on M command",()=>{
		let grid = [5,5]
		let startPosition = [0,0,'N']
		let commands = ['M']
		let finalPosition = marsRover(grid,startPosition,commands)

		chai.assert.deepEqual(finalPosition,[1,0])
	})
})