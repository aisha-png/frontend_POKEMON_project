import { useEffect, useState } from "react";

const Pokemon = ({pokemon}) => {

    let pokemonColorType = "";

    switch(pokemon.type) {
        case "FIRE":
            pokemonColorType = "#EE8130";
            break;
        case "GRASS":
            pokemonColorType = "#7AC74C";
            break;
        case "WATER":
            pokemonColorType = "#6390F0";
            break;
        case "GROUND":
            pokemonColorType = "#E2BF65";
            break;
        case "ROCK":
            pokemonColorType = "#B6A136";
            break;
        case "FAIRY":
            pokemonColorType = "#D685AD";
            break;
        case "POISON":
            pokemonColorType = "#A33EA1";
            break; 
        case "BUG":
            pokemonColorType = "#A6B91A";
            break; 
        case "DRAGON":
            pokemonColorType = "#6F35FC";
            break; 
        case "PSYCHIC":
            pokemonColorType = "#F95587";
            break; 
        case "FLYING":
            pokemonColorType = "#A98FF3";
            break; 
        case "FIGHTING":
            pokemonColorType = "#C22E28";
            break; 
        case "NORMAL":
            pokemonColorType = "#A8A77A";
            break; 
        case "STEEL":
            pokemonColorType = "#B7B7CE";
            break; 
        case "ELECTRIC":
            pokemonColorType = "#F7D02C";
            break; 
        case "ICE":
            pokemonColorType = "#96D9D6";
            break;
        case "DARK":
            pokemonColorType = "#705746";
            break;
        case "GHOST":
            pokemonColorType = "#735797";
            break;
        default:
            console.log("Switch cas error in Pokemon.js");
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
            <img src={pokemonFrontSpriteURL} alt="A pokemon sprite"/>
            <h3>{pokemon.type}</h3>
            <h4>{pokemon.level}</h4>
        </div>
    )
}

export default Pokemon;
