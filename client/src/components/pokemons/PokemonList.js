import Pokemon from "./Pokemon";

const PokemonList = ({pokemons}) => {

    const pokemonComponent = pokemons.map((pokemon) => {
        return <Pokemon key={pokemon.id}
                        pokemon={pokemon}
                />
    })

    return(
        <div className="pokemon_parent_container">
            {pokemonComponent}
      </div>
    )
}

export default PokemonList;