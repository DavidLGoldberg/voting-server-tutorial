import { DEPART_MESSAGE } from '../actions/departer';

export default function departer(state = '', action) {
  switch (action.type) {
  case DEPART_MESSAGE:
    return state + 'Bye!';
  default:
    return state;
  }
}
