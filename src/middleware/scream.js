import { isFSA } from 'flux-standard-action';

export default function screamMiddleware({ dispatch }) {
  return next => action => {
    if (!isFSA(action)) {
      return next(action);
    }

    console.log('^^^^^^^^^^^');
    console.log(action);
    console.log(next(action));
    return next(action);
  };
}
