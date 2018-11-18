import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { displayCell } from '../redux/actions/BoardActions';

class Cell extends React.Component {

  constructor(props) {
    super(props);
    this.display = this.display.bind(this);
  }

  getCellContent(cell) {
    if (cell.isDisplayed) {
      return cell.isMine ? 'M' : cell.value;
    }
    return (
      <button
        style={{ width: '25px', height: '25px', textAlign: 'center' }}
        onClick={this.display}
      >
        {' '}
      </button>
    );
  }

  display() {
    const { dispatch, rowIndex, colIndex } = this.props;
    dispatch(displayCell(rowIndex, colIndex));
  }

  render() {
    const { cell, rowIndex, colIndex } = this.props;
    return (
      <td id={`cell_${rowIndex}_${colIndex}`} style={{ width: '25px', height: '25px', textAlign: 'center' }}>
        {this.getCellContent(cell)}
      </td>
    );
  }
}

Cell.propTypes = {
  dispatch: PropTypes.func.isRequired,
  cell: PropTypes.object.isRequired,
  rowIndex: PropTypes.number.isRequired,
  colIndex: PropTypes.number.isRequired,
};

export default connect()(Cell);
