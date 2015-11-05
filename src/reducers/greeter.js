import { GREET_MESSAGE } from '../actions/greeter';

export default function greeter(state = '', action) {
  switch (action.type) {
  case GREET_MESSAGE:
    return state + 'David';
  default:
    return state;
  }
}
