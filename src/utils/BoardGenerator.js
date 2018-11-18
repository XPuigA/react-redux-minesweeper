export default class BoardGenerator {

  constructor() {
    this.defaultRows = 10;
    this.defaultCols = 10;
    this.defaultNumberOfMines = 10;
    this.dirs = [
      { r: 0, c: 1 },
      { r: 0, c: -1 },
      { r: 1, c: 0 },
      { r: -1, c: 0 },
      { r: 1, c: 1 },
      { r: 1, c: -1 },
      { r: -1, c: 1 },
      { r: -1, c: -1 },
    ];
  }

  randomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  getMinesPositions(numberOfRows, numberOfCols, numberOfMines) {
    const mines = {};
    for (let currentMine = 0; currentMine < numberOfMines; currentMine += 1) {
      let setted = false;
      while (!setted) {
        const row = this.randomNumber(numberOfRows);
        const col = this.randomNumber(numberOfCols);
        if ((!mines[row]) || (mines[row] && !mines[row][col])) {
          if (!mines[row]) {
            mines[row] = {};
          }
          mines[row][col] = true;
          setted = true;
        }
      }
    }
    return mines;
  }

  generate(numberOfRows, numberOfCols, numberOfMines) {
    if (!numberOfRows) numberOfRows = this.defaultRows;
    if (!numberOfCols) numberOfCols = this.defaultCols;
    if (!numberOfMines) numberOfMines = this.defaultNumberOfMines;

    const mines = this.getMinesPositions(numberOfRows, numberOfCols, numberOfMines);

    const board = [];
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex += 1) {
      const row = [];
      for (let colIndex = 0; colIndex < numberOfCols; colIndex += 1) {
        const cell = { isMine: mines[rowIndex] && mines[rowIndex][colIndex], value: 0 };
        row.push(cell);
      }
      board.push(row);
    }

    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex += 1) {
      for (let colIndex = 0; colIndex < numberOfCols; colIndex += 1) {
        this.dirs.forEach((dir) => {
          const row = rowIndex + dir.r;
          const col = colIndex + dir.c;
          if (row >= 0 && col >= 0 && row < numberOfRows && col < numberOfCols && board[row][col].isMine) {
            board[rowIndex][colIndex].value += 1;
          }
        });
      }
    }

    return board;
  }
}
