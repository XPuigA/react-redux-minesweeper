import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { displayCell, flagCell, unFlagCell } from '../redux/actions/BoardActions';

class Cell extends React.Component {

  constructor(props) {
    super(props);
    this.display = this.display.bind(this);
    this.flag = this.flag.bind(this);
    this.unflag = this.unflag.bind(this);
  }

  getCellContent(cell, gameFinished) {
    if (cell.isDisplayed || gameFinished) {
      return <div className="cell">{cell.isMine ? 'M' : cell.value}</div>;
    } else if (cell.isFlagged) {
      return (
        <button
          className="cell"
          onContextMenu={this.unflag}
        >
          {'*'}
        </button>
      );
    }
    return (
      <button
        className="cell"
        onClick={this.display}
        onContextMenu={this.flag}
      >
        {' '}
      </button>
    );
  }

  display() {
    const { dispatch, rowIndex, colIndex } = this.props;
    dispatch(displayCell(rowIndex, colIndex));
  }

  flag(event) {
    event.preventDefault();
    const { dispatch, rowIndex, colIndex } = this.props;
    dispatch(flagCell(rowIndex, colIndex));
  }

  unflag(event) {
    event.preventDefault();
    const { dispatch, rowIndex, colIndex } = this.props;
    dispatch(unFlagCell(rowIndex, colIndex));
  }

  render() {
    const { cell, rowIndex, colIndex, gameFinished } = this.props;
    return (
      <td id={`cell_${rowIndex}_${colIndex}`} className="center">
        {this.getCellContent(cell, gameFinished)}
      </td>
    );
  }
}

Cell.propTypes = {
  dispatch: PropTypes.func.isRequired,
  cell: PropTypes.object.isRequired,
  rowIndex: PropTypes.number.isRequired,
  colIndex: PropTypes.number.isRequired,
  gameFinished: PropTypes.bool.isRequired,
};

export default connect()(Cell);
