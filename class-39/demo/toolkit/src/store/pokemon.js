import { createSlice } from '@reduxjs/toolkit';

const pokemonSlice = createSlice({
  // name,initial State, reducers functions
  name: 'pokemon',
  // state is mutable in toolkit
  initialState: [],
  reducers: {
    add(state, action) {
      state.push({ name: action.payload });
    },
    remove(state, action) {
      return state.filter((poke) => poke.name !== action.payload);
    },
  },
});

export const { add, remove } = pokemonSlice.actions;

export const get = () => async (dispatch) => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const pokemon = await res.json();
  pokemon.results.forEach((poke) => dispatch(add(poke.name)));
};

export default pokemonSlice.reducer;
