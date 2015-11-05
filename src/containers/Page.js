import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import Greeter from '../components/Greeter';
import * as CounterActions from '../actions/counter';
import * as GreeterActions from '../actions/greeter';

class Page extends Component {
  componentDidMount() {
    this.props.greet();
  }

  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter, multiply } = this.props;
    const { greeter } = this.props;

    return (
      <div>
        <Counter
          increment={increment}
          incrementIfOdd={incrementIfOdd}
          incrementAsync={incrementAsync}
          decrement={decrement}
          counter={counter}
          multiply={multiply}>
        </Counter>
        <Greeter greeter={greeter}></Greeter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
    greeter: state.greeter,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...CounterActions, ...GreeterActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
