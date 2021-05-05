import React from 'react';

function Details(props) {
  console.log('Hello Props?', props);
  const { name, course } = props.location.user;
  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Course: {course}</h3>
      <button onClick={() => props.history.push('/people', { name: 'mahmoud' })}>
        Go people
      </button>
      <button onClick={() => props.history.goBack()}> Go Back home</button>
    </div>
  );
}

export default Details;

/*
Link and NavLink usually go to page directly without waiting
once we put '/home' on the to attribute it goes to the home component

if we need to call the server to get a response before navigating we need to use 
props.history or (history api) that will give us the same result but we call it 
when ever we are ready
*/
