export const getFind = (state) => {
    return state.pokemons.pokemons.filter(pokemon => 
        pokemon.name.toLowerCase().includes(state.filter.toLowerCase())
    )
}