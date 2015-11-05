import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Greeter from '../components/Greeter';
import * as GreeterActions from '../actions/greeter';

function mapStateToProps(state) {
  return {
    greeter: state.greeter,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(GreeterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeter);
