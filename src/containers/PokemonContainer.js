import { useEffect, useState } from "react";
import PokemonList from "../components/pokemons/PokemonList";

const PokemonContainer = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/pokemons")
        .then(response => response.json())
        .then(data => setPokemons(data))
    }, []);

    return (
        <PokemonList pokemons={pokemons}/>
    )
}

export default PokemonContainer;
