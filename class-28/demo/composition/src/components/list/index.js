import React from 'react';
import ListItem from './list-item';
function List({ pokemons }) {
  return (
    <ul>
      {pokemons.map((pokemon) => (
        <ListItem key={pokemon.name} pokemon={pokemon} />
      ))}
    </ul>
  );
}

export default List;
