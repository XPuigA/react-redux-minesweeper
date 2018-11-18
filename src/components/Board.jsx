import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Cell from './Cell.jsx';

class Board extends React.Component {

  generateRow(row, rowIndex) {
    return (
      <tr key={`row_${rowIndex}`}>
        {row.map((cell, colIndex) => <Cell key={`cell_${rowIndex}_${colIndex}`} cell={cell} rowIndex={rowIndex} colIndex={colIndex} />)}
      </tr>
    );
  }

  generateBoard(board) {
    return (
      <table style={{ border: '1px solid black' }}>
        <tbody>
          {board.map((row, rowIndex) => this.generateRow(row, rowIndex))}
        </tbody>
      </table>
    );
  }

  render() {
    const { board } = this.props;
    if (!board) return null;
    return this.generateBoard(board);
  }
}

Board.defaultProps = {
  board: undefined,
};

Board.propTypes = {
  board: PropTypes.array,
};

function mapStateToProps(state) {
  return { board: state.boardReducer.board };
}

export default connect(mapStateToProps)(Board);
