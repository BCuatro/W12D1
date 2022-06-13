

export const pokemonItems = pokemon.map(poke => (
    <PokemonIndexItem key={poke.id} pokemon={poke} />
))