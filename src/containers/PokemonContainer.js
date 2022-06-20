import { useEffect, useState } from "react";
import NewPokemonForm from "../components/pokemons/NewPokemonForm";
import PokemonList from "../components/pokemons/PokemonList";

const PokemonContainer = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/pokemons")
        .then(response => response.json())
        .then(data => setPokemons(data))
    }, []);

    const postPokemon = (newPokemon) => {
        fetch("http://localhost:8081/pokemons/",{
    
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newPokemon)
      })
    
      .then(response => response.json())
      .then(savedPokemon => setPokemons ([...pokemons, savedPokemon]));  
    }

    return (
        <>
        <NewPokemonForm postPokemon={postPokemon} />
        <PokemonList pokemons={pokemons}/>
        </>
    )
}

export default PokemonContainer;
