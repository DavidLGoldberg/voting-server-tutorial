const screamer = store => next => action => {
  console.log('^^^^^^^^^^^');
  let state1 = store.getState();
  let result = next(action);
  let state2 = store.getState();
  Object.keys(state2).forEach(function(element, index) {
    // check for diffs
    if (state2[element] != state1[element]) {
      console.log('DIF in ' + element + '!!!!!!!!!');
    }
  });

  if (Math.floor(state2.counter / 10) != Math.floor(state1.counter / 10)) {
    console.log ('%%%% 10 %%%%');
  }
  console.log('$$$$$$$$$$$');
  return action;
};

export default screamer;
