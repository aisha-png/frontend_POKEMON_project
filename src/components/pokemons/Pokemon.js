const Pokemon = ({pokemon}) => {
    return(
        <>
            <h1>{pokemon.name}</h1>
            <h3>{pokemon.type}</h3>
        </>
    )
}

export default Pokemon;
