let chai = require('chai')

let marsRover = require('../src/marsRover.js')

describe('mars rover', () => {
	it("can be executed", () => {
		chai.assert.isFunction(marsRover)
	})
	it("moves on M command", () => {
		let grid = [5, 5]
		let startPosition = [0, 0, 'N']
		let commands = ['M']
		let finalPosition = marsRover(grid, startPosition, commands)

		chai.assert.deepEqual(finalPosition, [1, 0])
	})
	it("moves two times on two M commands", () => {
		let grid = [5, 5]
		let startPosition = [0, 0, 'N']
		let commands = ['M', 'M']
		let finalPosition = marsRover(grid, startPosition, commands)

		chai.assert.deepEqual(finalPosition, [2, 0])
	})
	it("moves five times on five M commands", () => {
		let grid = [5, 5]
		let startPosition = [0, 0, 'N']
		let commands = ['M', 'M', 'M', 'M', 'M']
		let finalPosition = marsRover(grid, startPosition, commands)

		chai.assert.deepEqual(finalPosition, [5, 0])
	})
	it("moves from start position", () => {
		let grid = [10, 10]
		let startPosition = [7, 0, 'N']
		let commands = ['M']
		let finalPosition = marsRover(grid, startPosition, commands)

		chai.assert.deepEqual(finalPosition, [8, 0])
	})
	it("moves to south when facing south", () => {
		let grid = [5, 5]
		let startPosition = [3, 0, 'S']
		let commands = ['M']
		let finalPosition = marsRover(grid, startPosition, commands)

		chai.assert.deepEqual(finalPosition, [2, 0])
	})

	it.skip("moves to west when facing west",()=>{})
	it.skip("moves to east when facing east",()=>{})
	it.skip("moves from upper position to zero when going north",()=>{})
	it.skip("moves from lower position to max when going south",()=>{})
	it.skip("moves from most left position to most right when going west",()=>{})
	it.skip("moves from most right position to most left when going east",()=>{})
	it.skip("turn from north to west when command L",()=>{})
	it.skip("turn from west to south when command L",()=>{})
	it.skip("turn from south to east when command L",()=>{})
	it.skip("turn from east to north when command L",()=>{})
	it.skip("turn from north to east when command R",()=>{})
	it.skip("turn from east to south when command R",()=>{})
	it.skip("turn from south to west when command R",()=>{})
	it.skip("turn from west to north when command R",()=>{})

})