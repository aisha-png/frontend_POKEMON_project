const Pokemon = ({pokemon}) => {
    return(
        <>
            <h1>{pokemon.name}</h1>
            <h3>{pokemon.type}</h3>
            <h4>{pokemon.level}</h4>
        </>
    )
}

export default Pokemon;
