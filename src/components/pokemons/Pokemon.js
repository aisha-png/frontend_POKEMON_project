const Pokemon = ({pokemon}) => {

    // const colors = {
    //     fire: "#FDDFDF",
    //     grass: "#DEFDE0",
    //     electric: "#FCF7DE",
    //     water: "#DEF3FD",
    //     ground: "#f4e7da",
    //     rock: "#d5d5d4",
    //     fairy: "#fceaff",
    //     poison: "#98d7a5",
    //     bug: "#f8d5a3",
    //     dragon: "#97b3e6",
    //     psychic: "#eaeda1",
    //     flying: "#F5F5F5",
    //     fighting: "#E6E0D4",
    //     normal: "#F5F5F5",
    //   };
    //   const main_types = Object.keys(colors);
    //   const poke_types = pokemon.types.map((type) => type.type.name);
    // const type = main_types.find((type) => poke_types.indexOf(type) > -1);
    // const color = colors[type];

    return(
        <div className = "pokemon">
            <h1>{pokemon.name}</h1>
            <h3>{pokemon.type}</h3>
            <h4>{pokemon.level}</h4>
        </div>
    )
}

export default Pokemon;
