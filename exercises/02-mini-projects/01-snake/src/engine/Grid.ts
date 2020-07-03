import { Cell } from "./Cell";
import { Configuration } from "./Configuration";

export class Grid {
  private configuration: Configuration;
  apples: Cell[] = [
    new Cell(33, 22),
    new Cell(35, 22),
    new Cell(37, 22),
    new Cell(39, 22)
  ];
  // velāk, kad ir seed() gatavs, apples = [] un konstruktorā izsauc this.seed()

  constructor(configuration: Configuration) {
    this.configuration = configuration;
  }

  seed(): void {
    for (let i = 0; i < this.configuration.apples; i++) {
      const x = Math.floor(Math.random() * this.configuration.nbCellsX)
      const y = Math.floor(Math.random() * this.configuration.nbCellsY)
      this.apples.push(new Cell(x, y))
    }
    // problēmas - jauns apple tur, kur atrodas čūska vai jau esošs ābols
  }

  isAppleInside(cell: Cell): boolean {
    return this.getApples().find(it => it.x === cell.x && it.y === cell.y) !== undefined;
  }

  removeApple(cell: Cell): void {
    const apple = this.apples.find(it => it.x === cell.x && it.y === cell.y)
    if(!apple) return 
    const i = this.apples.indexOf(apple)
    this.apples.splice(i, 1)
  }

  isDone(): boolean {
    // lai ģenerētos jauni apples
    return this.apples.length === 0;
  }

  getApples(): Cell[] {
    return this.apples
  }
}
