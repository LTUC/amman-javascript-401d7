/* eslint-disable no-fallthrough */
// votes reducer
const initialState = {
  candidates: [
    { name: 'Mahmoud', votes: 0 },
    { name: 'Boshra', votes: 0 },
    { name: 'Afnan', votes: 0 },
  ],
  totalVotes: 0,
};
// in the reducer we don't change the initial state we just return the new State
const votes = (state = initialState, action) => {
  // action = {type,payload}
  const { type, payload } = action;

  switch (type) {
    case 'INCREMENT':
      const totalVotes = state.totalVotes + 1;
      const candidates = state.candidates.map((candidate) => {
        if (payload === candidate.name) {
          return { name: candidate.name, votes: candidate.votes + 1 };
        } else {
          return candidate;
        }
      });
      return { candidates, totalVotes };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export default votes;
// action is a function that return an object

export const increment = (name) => {
  return {
    type: 'INCREMENT',
    payload: name,
  };
};

export const reset = () => {
  return {
    type: 'RESET',
    payload: null,
  };
};
