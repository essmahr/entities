import { combineReducers } from 'redux';

function test(state = false, action) {
  if (action.type = 'TEST') {
    state = true;
  }

  return state;
}

const rootReducer = combineReducers({
  test,
});

export default rootReducer;
