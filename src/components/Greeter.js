import React, { Component, PropTypes } from 'react';

export default class Greeter extends Component {

  static propTypes = {
    greeter: PropTypes.string.isRequired,
  }

  render() {
    const { greeter } = this.props;
    return (
      <div>
        Hello, {greeter}
      </div>
    );
  }
}
