import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends React.Component {

  render() {
    return (
      <div id="wrapper">
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default connect()(App);
