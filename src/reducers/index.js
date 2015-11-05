import { combineReducers } from 'redux';
import counter from './counter';
import greeter from './greeter';
import departer from './departer';

const rootReducer = combineReducers({
  counter,
  greeter,
  departer,
});

export default rootReducer;
