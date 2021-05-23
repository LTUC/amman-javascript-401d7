import { createStore, combineReducers } from 'redux';
// this to make the dev tools work
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './votes';
const reducers = combineReducers({ counter: reducer });
// in some component state.counter.totalVotes / .candidates
const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
