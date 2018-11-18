import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Board extends React.Component {

  generateCell(cell, rowIndex, colIndex) {
    return (
      <td key={colIndex} id={`cell_${rowIndex}_${colIndex}`}>
        { cell.isMine ? 'M' : cell.value }
      </td>
    );
  }

  generateRow(row, rowIndex) {
    return (
      <tr key={rowIndex}>
        {row.map((cell, colIndex) => this.generateCell(cell, rowIndex, colIndex))}
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
    )
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
