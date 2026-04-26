import { createSlice, nanoid } from "@reduxjs/toolkit";

const pokemonLibrary = [{name: "Pickachu", element: "electric", id: nanoid()}]

const pokemonSlice = createSlice({
    name: "Pokemons",
    initialState: pokemonLibrary,

    reducers: {
        addPokemon: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(obj) {
                return {
                    payload: {
                        id: nanoid(),
                        name: obj.name,
                        element: obj.element,
                    }
                }
            }
        }
    }
})

export const pokemonReducer = pokemonSlice.reducer

export const {addPokemon} = pokemonSlice.actions