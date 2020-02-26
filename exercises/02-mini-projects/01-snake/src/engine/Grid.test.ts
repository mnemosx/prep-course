import { Grid } from "./Grid";
import { Configuration } from "./Configuration";
import { Cell } from "./Cell";

describe("Grid", () => {
  const configuration = {
    level: 0,
    speed: 100,
    width: 1000,
    height: 1000,
    nbCellsX: 100,
    nbCellsY: 100,
    cellWidth: 10,
    cellHeight: 10,
    apples: 5
  } as Configuration;

  it("should have five apples present", () => {
    const grid = new Grid(configuration);

    const apples = grid.getApples();

    expect(apples.length).toBe(5);
  });
  it("should detect if there's an apple", () => {
    const grid = new Grid(configuration);
    const apples = grid.getApples();

    expect(grid.isAppleInside(apples[0])).toBeTruthy();
    expect(grid.isAppleInside(new Cell(99999, 99999))).toBeFalsy();
  });
  it("should remove apple", () => {
    const grid = new Grid(configuration);
    const apple = grid.getApples()[0];

    grid.removeApple(apple);

    expect(grid.isAppleInside(apple)).toBeFalsy();
  });
  it("should seed apples", () => {
    const grid = new Grid(configuration);
    grid.removeApple(grid.getApples()[0]);
    grid.removeApple(grid.getApples()[0]);
    grid.removeApple(grid.getApples()[0]);
    grid.removeApple(grid.getApples()[0]);
    grid.removeApple(grid.getApples()[0]);

    const apples = grid.getApples();
    grid.seed();

    expect(apples.length).toBe(5);
  });
});
