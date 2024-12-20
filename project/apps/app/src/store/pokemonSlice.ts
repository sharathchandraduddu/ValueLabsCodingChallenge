import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonState {
  pokemonList: string[];
  loading:boolean;
  error: string | null;
}

const initialState: PokemonState = {
  pokemonList: [],
  loading:true,
  error: null,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {

    setPokemonList: (state, action: PayloadAction<string[]>) => {
      state.pokemonList = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    removePokemon: (state, action: PayloadAction<string>) => {
      state.pokemonList = state.pokemonList.filter(pokemon => pokemon !== action.payload);
    },
  },
});

export const { setPokemonList,setLoading, setError,removePokemon  } = pokemonSlice.actions;


export default pokemonSlice.reducer;
