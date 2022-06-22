import { useState } from "react";

const NewPokemonForm = ({postPokemon}) => {

    const [statePokemon, setStatePokemon] = useState({
        name: "",
        type: "",
        level: "",
        trainers: null
    });  

    const handleChange = (event) => {
        console.log(event);
        let pokemonName = event.target.name;
        let copiedPokemon = {...statePokemon}
        copiedPokemon[pokemonName] = event.target.value;
        setStatePokemon(copiedPokemon);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postPokemon(statePokemon);
      }

    return(
        <form className="form-pokemon" onSubmit={handleFormSubmit}>
            <h2> Enter a new Pokemon:</h2>
            <p>Enter Name:<br/> 
                <input 
                type="text" 
                placeholder="name"
                name="name" 
                onChange={handleChange}
                value={statePokemon.name}
            />
            </p>
            <p>Pick A Type:</p>
            <select 
            type="text"
            name = "type" 
            onChange={handleChange} 
            value={statePokemon.type}
            > 
                <option placeholder="Choose A Type">Choose A type</option>
                <option value = "WATER">WATER</option>
                <option value = "FIRE">FIRE</option>
                <option value = "GRASS">GRASS</option>
                <option value = "GROUND">GROUND</option>
                <option value = "ROCK">ROCK</option>
                <option value = "STEEL">STEEL</option>
                <option value = "ICE">ICE</option>
                <option value = "ELECTRIC">ELECTRIC</option>
                <option value = "DRAGON">DRAGON</option>
                <option value = "GHOST">GHOST</option>
                <option value = "PSYCHIC">PSYCHIC</option>
                <option value = "NORMAL">NORMAL</option>
                <option value = "FIGHTING">FIGHTING</option>
                <option value = "POISON">POISON</option>
                <option value = "BUG">BUG</option>
                <option value = "FLYING">FLYING</option>
                <option value = "DARK">DARK</option>
                <option value = "FAIRY">FAIRY</option>
            </select>
            <p>Enter Level (1 - 100):<br/> 
                <input
                type="text"
                placeholder="level"
                name="level"
                onChange={handleChange}
                value={statePokemon.level}
                />
            </p>
            <button className="enter-button" type="submit">Enter</button>
        </form>
    )
}

export default NewPokemonForm;