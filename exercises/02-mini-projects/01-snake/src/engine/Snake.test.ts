import { Snake } from './Snake'
import { Cell } from './Cell'

describe("Snake", () => {
    it("should take three cells at the beginning", () => {
        const snake = new Snake()

        expect(snake.getHead()).toEqual(new Cell(2, 0))
        expect(snake.getTail()).toEqual([new Cell(0, 0), new Cell(1, 0)])
    })
    it("should be able to move right", () => {
        const snake = new Snake()
        snake.move()

        expect(snake.getHead()).toEqual(new Cell(3, 0))
        expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)])
    })
    it("should be able to move down", () => {
        const snake = new Snake()
        snake.setDirection('Down')
        snake.move()

        expect(snake.getDirection()).toEqual('Down')
        expect(snake.getHead()).toEqual(new Cell(2, 1))
        expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)])
    })
    it("should be able to move up", () => {
        const snake = new Snake()
        snake.setDirection('Up')
        snake.move()

        expect(snake.getDirection()).toEqual('Up')
        expect(snake.getHead()).toEqual(new Cell(2, -1))
        expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)])
    })
    it("should not be able to go to invalid directions", () => {
        const snake = new Snake()
        snake.setDirection('Left')
        expect(snake.getDirection()).toEqual('Right')

        snake.setDirection('Down')
        snake.setDirection('Up')
        expect(snake.getDirection()).toEqual('Down')

        snake.setDirection('Left')
        snake.setDirection('Right')
        expect(snake.getDirection()).toEqual('Left')

        snake.setDirection('Up')
        snake.setDirection('Down')
        expect(snake.getDirection()).toEqual('Up')

    })
    it("should be able to move left", () => {
        const snake = new Snake()
        snake.setDirection('Down')
        snake.move()
        snake.setDirection('Left')
        snake.move()
        
        expect(snake.getDirection()).toEqual('Left')
        expect(snake.getHead()).toEqual(new Cell(1, 1))
        expect(snake.getTail()).toEqual([new Cell(2, 0), new Cell(2, 1)])
    })
    it("should grow by three", () => {
        const snake = new Snake()
        snake.grow()
        snake.move()
        snake.move()
        snake.move()
        
        expect(snake.getHead()).toEqual(new Cell(5, 0))
        expect(snake.getTail()).toEqual([
            new Cell(0, 0), 
            new Cell(1, 0),
            new Cell(2, 0),
            new Cell(3, 0),
            new Cell(4, 0),
        ])
        
        // or maybe 
//         snake.move()
//         expect(snake.getTail().length).toEqual(3)
        
//         snake.move()
//         expect(snake.getTail().length).toEqual(4)
        
//         snake.move()
//         expect(snake.getTail().length).toEqual(5)
        
//         snake.move()
//         expect(snake.getTail().length).toEqual(5)

    })
    it("should be able to move left", () => {
        const snake = new Snake()
         
        
        expect(snake.isSnake(snake.getHead())).toBeTruthy()
        expect(snake.isSnake(snake.getHead())).toBeTruthy()
        
        expect(snake.isSnake(new Cell(999, 999))).toBeFalsy()
    })
    
    // lai neskipotu gājienu, kad ātru spiež pogas
    it("should remember each key press", () => {
        const snake = new Snake()

        snake.setDirection('Down')
        snake.setDirection('Left')
        snake.setDirection('Up')

        expect(snake.getDirection()).toEqual("Down")
        
        snake.move()
        expect(snake.getDirection()).toEqual("Left")
        
        snake.move()
        expect(snake.getDirection()).toEqual("Up")
    })
})
