export const increment = (candidate) => {
  return {
    type: 'INCREMENT',
    payload: candidate,
  };
};

export const disable = (candidate) => ({ type: 'DISABLE', payload: candidate });
export const reset = () => ({ type: 'RESET' });
