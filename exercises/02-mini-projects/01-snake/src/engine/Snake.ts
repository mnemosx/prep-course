import { Cell } from "./Cell";
import { Direction } from "./Direction";

export class Snake {
  head: Cell = new Cell(2, 0)
  tail: Cell[] = [new Cell(0, 0), new Cell(1, 0)];
  direction: Direction = 'Right'
  growCells: number = 0

  setDirection(direction: Direction) {
    // priekš testa, kas neļauj iet uz pretējo virzienu
    if(this.direction === "Right" && direction === 'Left') return
    if(this.direction === "Up" && direction === 'Down') return
    if(this.direction === "Left" && direction === 'Right') return
    if(this.direction === "Down" && direction === 'Up') return
    // sākumā šis
    this.direction = direction
  }

  move() {
//     //sākumā
//     this.tail.shift()
//     this.tail.push(this.head)
    const oldHeadPosition = new Cell(this.head.x, this.head.y)
    if(this.direction === 'Right') {
      this.head = new Cell(this.head.x + 1, this.head.y)
    } else if (this.direction === 'Down') {
      this.head = new Cell(this.head.x, this.head.y + 1)
    } else if (this.direction === 'Up') {
      this.head = new Cell(this.head.x, this.head.y - 1)
    } else if (this.direction === 'Left') {
      this.head = new Cell(this.head.x - 1, this.head.y)
    }
    
    // kad taisa grow testu
    if(this.growCells > 0) {
      this.growCells = this.growCells - 1
    } else {
      this.tail.shift()
    }
    this.tail.push(oldHeadPosition)
  }

  grow() {
    this.growCells = 3
  }

  getHead(): Cell {
    return this.head
  }

  isSnake(cell: Cell): boolean {
//     var Cell.ts failā ielikt metodi:
//     isSame(cell: Cell): boolean {
//       return this.x === cell.x && it.y === cell.y
//     }
//     tad sanāk (it) => it.isSame(cell)
    if(this.tail.find((it) => it.x === cell.x && it.y === cell.y)) {
       return true
    }
    return false;
  }

  getDirection(): Direction {
    return this.direction;
  }

  getTail(): Cell[] {
    return this.tail
  }
}
