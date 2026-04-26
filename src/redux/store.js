import { configureStore } from "@reduxjs/toolkit";
import { pokemonReducer } from "./pokemon/pokemonSlice";
import { filterReducer } from "./searchPokemon/searchPokemonSlice";

export const store = configureStore({
    reducer: {
        pokemons: pokemonReducer,
        filter: filterReducer,
    }
})