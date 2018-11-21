import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Message extends React.Component {

  render() {
    const { isGameOver, isGameWinned } = this.props;
    if (isGameOver) {
      return (<div className="lostMessage">Game Over</div>);
    } else if (isGameWinned) {
      return (<div className="winMessage">Game won</div>);
    }
    return null;
  }
}

Message.defaultProps = {
  isGameOver: false,
  isGameWinned: false,
};

Message.propTypes = {
  isGameOver: PropTypes.bool,
  isGameWinned: PropTypes.bool,
};

function mapStateToProps(state) {
  const { isGameOver, isGameWinned } = state.gameReducer;
  return { isGameOver, isGameWinned };
}

export default connect(mapStateToProps)(Message);
