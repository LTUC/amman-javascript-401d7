let initalState = { results: [] };

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET':
      console.log('GET???', payload);
      return payload;
    default:
      return state;
  }
};
