import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newRandom } from '../redux/actions/TestActions.js';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.newRandom = this.newRandom.bind(this);
  }

  newRandom() {
    this.props.dispatch(newRandom());
  }

  render() {
    return (
      <div>
        <h1>Value: {this.props.number}</h1>
        <button onClick={this.newRandom}>Generate new random value</button>
      </div>
    );
  }
}

Main.defaultProps = {
  number: '#',
};

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
  number: PropTypes.string,
};

function mapStateToProps(state) {
  return { number: state.testReducer.number.toString() };
}

export default connect(mapStateToProps)(Main);
