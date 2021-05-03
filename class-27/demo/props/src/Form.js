import React from 'react';

function Form({ prompt, handler }) {
const handleSubmit = async(e) =>{
  e.preventDefault();
  try {
    const raw = await fetch('https://swapi.dev/api/people/');
    const data = await raw.json();
    const results = data.results.reduce((acc,person)=>{
      acc.push({name:person.name,url:person.url})
      return acc;
    },[])
    handler(results)
  } catch (error) {
    console.error(error)
  }
}
  return(
    <form onSubmit={handleSubmit}>
      <button>{prompt}</button>
    </form>
  );
}

export default Form;
