import React from 'react';

function People(props) {
  console.log('People', props.location);

  return <div>{props.location?.state?.name}</div>;
}

export default People;
