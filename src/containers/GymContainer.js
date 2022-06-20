import { useEffect, useState } from "react";
import Pokemon from "../components/pokemons/Pokemon";
import PokemonList from "../components/pokemons/PokemonList";

const GymContainer = () => {
    const [gyms, setGyms ] = useState([]);
    useEffect(( ) => {
        fetch ("http://localhost:8081/gyms")
        .then(reponse => Response.json())
        .then (data => setGyms(data))
    }, []);
    return (
        <>
        <PokemonList gyms={gyms}/>

        </>
    );
}

export default GymContainer;
