import { isFSA } from 'flux-standard-action';

const screamer = store => next => action => {
  console.log('^^^^^^^^^^^');
  console.log(action);
  let state1 = store.getState();
  let result = next(action);
  console.log(result);
  let state2 = store.getState();
  if (state2.greeter.includes('David') && !state1.greeter.includes('David')) {
    console.log('added David!!!!!!!!!!!!');
  }
  console.log('state1', state1);
  console.log('state2', state2);
  console.log('$$$$$$$$$$$');
  return action;
};

// export default function screamMiddleware({ dispatch }) {
//   return store => next => action => {
//   };
// }

export default screamer;
