import React, { Component, PropTypes } from 'react';

export default class Departer extends Component {

  static propTypes = {
    departer: PropTypes.string.isRequired,
  }

  render() {
    const { departer } = this.props;
    return (
      <div>
        So, {departer}
      </div>
    );
  }
}
