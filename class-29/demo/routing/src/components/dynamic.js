import React from 'react';
//props.match.params
function Dynamic(props) {
  console.log('Dynamic', props.match);
  return <div>id: {props.match.params.id}</div>;
}

export default Dynamic;
