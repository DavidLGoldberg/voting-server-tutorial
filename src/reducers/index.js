import { combineReducers } from 'redux';
import counter from './counter';
import greeter from './greeter';

const rootReducer = combineReducers({
  counter,
  greeter,
});

export default rootReducer;
