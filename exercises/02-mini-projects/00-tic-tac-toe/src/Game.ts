export type XO = "X" | "O" | "-";

export class Game {
  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  turn: XO = "X";
  getCells(): XO[] {
    return this.cells;
  }

  getTurn(): XO {
    return this.turn;
//     sākumā 
//     const countX = this.cells.filter((cell) => celll === "X").length
//     const countO = this.cells.filter((cell) => celll === "O").length
//     return CountX === countO ? "X" : "O"
  }

  getWinner(): XO {
    // rows
    if (this.cells[0] === this.cells[1] && this.cells[1] === this.cells[2])
      return this.cells[0];
    if (this.cells[3] === this.cells[4] && this.cells[4] === this.cells[5])
      return this.cells[3];
    if (this.cells[6] === this.cells[7] && this.cells[7] === this.cells[8])
      return this.cells[6];
    //columns
    if (this.cells[0] === this.cells[3] && this.cells[3] === this.cells[6])
      return this.cells[0];
    if (this.cells[1] === this.cells[4] && this.cells[4] === this.cells[7])
      return this.cells[1];
    if (this.cells[2] === this.cells[5] && this.cells[5] === this.cells[8])
      return this.cells[2];
    //diagonals
    if (this.cells[0] === this.cells[4] && this.cells[4] === this.cells[8])
      return this.cells[0];
    if (this.cells[6] === this.cells[4] && this.cells[4] === this.cells[2])
      return this.cells[6];
    return "-";
  }
  
  // saīsināti
//   private areCellsEqual(x:number, y:number, z:number) {
//     return this.cells[x] === this.cells[y] && this.cells[y] === this.cells[z]
//   }
  // un izsaukt ar this.areCellsEqual(0,1,2)

  isTie(): boolean {
    if (!this.cells.includes("-") && this.getWinner() === "-") return true;
    return false;
  }

  onClick(i: number): void {
    if (this.cells[i] === "-" && this.getWinner() === "-") {
      this.cells[i] = this.getTurn();
      this.turn = this.turn === "X" ? "O" : "X";
    }
  }

  restart(): void {
    this.cells = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    this.turn = "X";
  }
}
