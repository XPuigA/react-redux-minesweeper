import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Cell from './Cell.jsx';

class Board extends React.Component {

  generateRow(row, rowIndex, gameFinished) {
    return (
      <tr key={`row_${rowIndex}`}>
        {row.map((cell, colIndex) =>
          (
            <Cell
              key={`cell_${rowIndex}_${colIndex}`}
              cell={cell}
              rowIndex={rowIndex}
              colIndex={colIndex}
              gameFinished={gameFinished}
            />
          ),
        )}
      </tr>
    );
  }

  generateBoard(board, gameFinished) {
    return (
      <table style={{ border: '1px solid black' }}>
        <tbody>
          {board.map((row, rowIndex) => this.generateRow(row, rowIndex, gameFinished))}
        </tbody>
      </table>
    );
  }

  render() {
    const { board, isGameOver, isGameWinned } = this.props;
    const gameFinished = isGameOver || isGameWinned;
    if (!board) return null;
    return this.generateBoard(board, gameFinished);
  }
}

Board.defaultProps = {
  board: undefined,
  isGameOver: false,
  isGameWinned: false,
};

Board.propTypes = {
  board: PropTypes.array,
  isGameOver: PropTypes.bool,
  isGameWinned: PropTypes.bool,
};

function mapStateToProps(state) {
  const { board, isGameOver, isGameWinned } = state.gameReducer;
  return { board, isGameOver, isGameWinned };
}

export default connect(mapStateToProps)(Board);
