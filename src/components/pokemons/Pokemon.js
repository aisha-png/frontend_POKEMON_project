import { useEffect, useState } from "react";

const Pokemon = ({pokemon}) => {

    let pokemonColorType = "";

    if(pokemon.type === "FIRE") {
        // console.log(pokemon.name);
        pokemonColorType = "#FDDFDF";
    }
    else if (pokemon.type === "GRASS"){
        pokemonColorType = "#DEFDE0";
    }
    else if (pokemon.type === "WATER"){
        pokemonColorType = "#DEF3FD";
    }
    else if (pokemon.type === "GROUND"){
        pokemonColorType = "#f4e7da";
    }
    else if (pokemon.type === "ROCK"){
        pokemonColorType = "#d5d5d4";
    }
    else if (pokemon.type === "FAIRY"){
        pokemonColorType = "#fceaff";
    }
    else if (pokemon.type === "POISON"){
        pokemonColorType = "#98d7a5";
    }
    else if (pokemon.type === "BUG"){
        pokemonColorType = "#f8d5a3";
    }
    else if (pokemon.type === "DRAGON"){
        pokemonColorType = "#97b3e6";
    }
    else if (pokemon.type === "PSYCHIC"){
        pokemonColorType = "#eaeda1";
    }
    else if (pokemon.type === "FLYING"){
        pokemonColorType = "#F5F5F5";
    }
    else if (pokemon.type === "FIGHTING"){
        pokemonColorType = "#E6E0D4";
    }
    else if (pokemon.type === "NORMAL"){
        pokemonColorType = "#F5F5F5";
    }
    else if (pokemon.type === "STEEL") {
        pokemonColorType = "#7b94a4";
    }
    else if (pokemon.type === "ELECTRIC") {
        pokemonColorType = "#FCF7DE";
    }

    let [pokemonFrontSpriteURL, setPokemonFrontSpriteURL] = useState("");

    useEffect(( ) => {
        fetch ("https://pokeapi.co/api/v2/pokemon/" + pokemon.name + "/")
        .then(response => response.json())
        .then (pokemonData => setPokemonFrontSpriteURL(pokemonData.sprites.front_default));
    }, [pokemon.name]);
    
    return(
        <div style={{backgroundColor: pokemonColorType}} className = "pokemon">
            <h1>{pokemon.name}</h1>
            <img src={pokemonFrontSpriteURL} alt="A pokemon"/>
            <h3>{pokemon.type}</h3>
            <h4>{pokemon.level}</h4>
        </div>
    )
}

export default Pokemon;
