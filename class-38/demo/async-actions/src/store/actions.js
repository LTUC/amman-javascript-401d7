import superagent from 'superagent';
// without Thunk you cant do this!!!
export const getRemoteData = function (api) {
  return (dispatch) => {
    return superagent.get(api).then((response) => {
      dispatch(getAction({ results: response.body }));
    });
  };
};

export const getAction = (payload) => {
  return {
    type: 'GET',
    payload,
  };
};
