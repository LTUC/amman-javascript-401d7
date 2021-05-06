import React from 'react';

function People(props) {
  return (
    <ul>
      {
        props.people.map((person,index)=>{
          return(
            <li key={person.name}>
              <a href={person.url}>{person.name}</a>
            </li>
          )
        })
      }
    </ul>
  )
}

export default People;
