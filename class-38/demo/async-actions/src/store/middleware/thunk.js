// YOU WILL NOT GONNA BUILD THIS YOU WILL USE 'npm i redux-thunk

// its a function that return a function that return a function
// eslint-disable-next-line import/no-anonymous-default-export
export default (store) => (next) => (action) =>
  typeof action === 'function' ? action(store.dispatch, store.getState) : next(action);
