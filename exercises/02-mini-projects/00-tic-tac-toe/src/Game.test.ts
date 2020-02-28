import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should place correct value on click", () => {
    const game = new Game();
    
    game.onClick(0)
    game.onClick(1)
    game.onClick(2)
    expect(game.getCells()).toEqual([
      "X", "O", "X",
      "-", "-", "-",
      "-", "-", "-"
    ]);

    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("cell may be clicked only once", () => {
    const game = new Game();
    
    game.onClick(0)
    game.onClick(0)
    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);

    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should win if any row is filled by player 'X", () => {
    const game = new Game();
    
    game.onClick(0)
    game.onClick(3)
    game.onClick(1)
    game.onClick(8)
    game.onClick(2)
    expect(game.getCells()).toEqual([
      "X", "X", "X",
      "O", "-", "-",
      "-", "-", "O"
    ]);

    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should win if any row is filled by player 'O'", () => {
    const game = new Game();
    
    game.onClick(0)
    game.onClick(3)
    game.onClick(1)
    game.onClick(4)
    game.onClick(8)
    game.onClick(5)

    expect(game.getCells()).toEqual([
      "X", "X", "-",
      "O", "O", "O",
      "-", "-", "X"
    ]);

    expect(game.getWinner()).toBe("O");
    expect(game.isTie()).toBe(false);
  });

  it("should win if any column is filled by player", () => {
    const game = new Game();
    
    game.onClick(0)
    game.onClick(1)
    game.onClick(3)
    game.onClick(4)
    game.onClick(6)

    expect(game.getCells()).toEqual([
      "X", "O", "-",
      "X", "O", "-",
      "X", "-", "-"
    ]);

    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should win if any diagonal is filled by player", () => {
    const game = new Game();
    
    game.onClick(0)
    game.onClick(1)
    game.onClick(4)
    game.onClick(3)
    game.onClick(8)

    expect(game.getCells()).toEqual([
      "X", "O", "-",
      "O", "X", "-",
      "-", "-", "X"
    ]);

    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should not allow to click cells when game is won", () => {
    const game = new Game();
    
    game.onClick(0)
    game.onClick(1)
    game.onClick(4)
    game.onClick(3)
    game.onClick(8)
    game.onClick(2)

    expect(game.getCells()).toEqual([
      "X", "O", "-",
      "O", "X", "-",
      "-", "-", "X"
    ]);

    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should end the game in tie if all cells are clicked and there's no winner", () => {
    const game = new Game();
    
    game.onClick(0)
    game.onClick(1)
    game.onClick(4)
    game.onClick(3)
    game.onClick(5)
    game.onClick(2)
    game.onClick(6)
    game.onClick(8)
    game.onClick(7)

    expect(game.getCells()).toEqual([
      "X", "O", "O",
      "O", "X", "X",
      "X", "X", "O"
    ]);

    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(true);
  });

  it("should be able to restart game", () => {
    const game = new Game();
    
    game.onClick(0)
    game.onClick(1)
    game.onClick(4)
    game.onClick(3)
    game.onClick(8)

    game.restart()

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);

    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });
});
