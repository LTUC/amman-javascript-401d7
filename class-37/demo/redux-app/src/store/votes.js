/* eslint-disable default-case */
const initialState = {
  totalVotes: 0,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'INCREMENT':
      console.log('STATE AT VOTES', state);
      return payload.disabled ? state : { totalVotes: state.totalVotes + 1 };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};
