import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import Greeter from '../components/Greeter';
import Departer from '../components/Departer';
import * as CounterActions from '../actions/counter';
import * as GreeterActions from '../actions/greeter';
import * as DeparterActions from '../actions/departer';

class Page extends Component {
  componentDidMount() {
    this.props.greet();
    this.props.depart();
  }

  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter, multiply } = this.props;
    const { greeter } = this.props;
    const { departer } = this.props;

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
        <Departer departer={departer}></Departer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
    greeter: state.greeter,
    departer: state.departer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...CounterActions, ...GreeterActions, ...DeparterActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
