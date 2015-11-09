const screamer = store => next => action => {
  console.log('^^^^^^^^^^^');
  console.log(action);
  let state1 = store.getState();
  let result = next(action);
  console.log(result);
  let state2 = store.getState();
  Object.keys(state2).forEach(function(element, index) {
    // check for diffs
    if (state2[element] != state1[element]) {
      console.log('DIF in ' + element + '!!!!!!!!!');
    }
  });

  console.log('state1', state1);
  console.log('state2', state2);
  console.log('$$$$$$$$$$$');
  return action;
};

export default screamer;
