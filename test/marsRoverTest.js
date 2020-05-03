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
	it("moves two times on two M commands",()=>{
		let grid = [5,5]
		let startPosition = [0,0,'N']
		let commands = ['M','M']
		let finalPosition = marsRover(grid,startPosition,commands)

		chai.assert.deepEqual(finalPosition,[2,0])
	})
	it("moves five times on five M commands",()=>{
		let grid = [5,5]
		let startPosition = [0,0,'N']
		let commands = ['M','M','M','M','M']
		let finalPosition = marsRover(grid,startPosition,commands)

		chai.assert.deepEqual(finalPosition,[5,0])
	})
	it("moves to south when facing south",()=>{
		let grid = [5,5]
		let startPosition = [3,0,'S']
		let commands = ['M']
		let finalPosition = marsRover(grid,startPosition,commands)

		chai.assert.deepEqual(finalPosition,[2,0])
	})
})