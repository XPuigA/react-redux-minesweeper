import React from 'react';

export default class NoMatch extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <div id="page-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-header">Not Found</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
