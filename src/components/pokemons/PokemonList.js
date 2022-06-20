import Pokemon from "./Pokemon";

const PokemonList = ({pokemons}) => {

    const pokemonComponent = pokemons.map((pokemon) => {
        return <Pokemon key={pokemon.id}
                        pokemon={pokemon}
                />
    })

    return(
        <>
            {pokemonComponent}
        </>
    )
}

export default PokemonList;