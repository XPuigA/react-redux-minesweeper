import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newBoard } from '../redux/actions/BoardActions.js';
import Board from './Board.jsx';
import Message from './Message.jsx';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.newBoard = this.newBoard.bind(this);
  }

  newBoard() {
    this.props.dispatch(newBoard());
  }

  render() {
    return (
      <div>
        <Message />
        <h1>Minesweeper</h1>
        <button onClick={this.newBoard}>Generate new board</button>
        <Board />
      </div>
    );
  }
}

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Main);
