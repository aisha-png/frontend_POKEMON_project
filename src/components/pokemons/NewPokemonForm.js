import { useState } from "react";

const NewPokemonForm = ({postPokemon}) => {

    const [statePokemon, setStatePokemon] = useState({
        name: "",
        type: "",
        level: 0,
        trainers: []  
    });  

    const handleChange = (event) => {
        console.log(event);
        let pokemonName = event.target.name;
        let copiedPokemon = {...statePokemon}
        copiedPokemon[pokemonName] = event.target.value;
        postPokemon(statePokemon);
    }

    return(
        <>
            <form >
            <h2> Enter a new Pokemon:</h2>
            <p> Enter Name <input 
                type="text" 
                placeholder="name"
                name ="name" 
                onChange={handleChange}
                value={statePokemon.name}
                /></p>
                {/* <select 
                name = "type" 
                onChange={handleChange} value={statePokemon.type}>Enter Type: 
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
                </select> */}
                <select name="type">
                <option th:each="typeOpt : ${T(com.baeldung.thymeleaf.model.Type).values()}" 
                    th:value="${typeOpt}" th:text="${typeOpt}"></option>
                </select>

                <p>Enter Level (1 - 100)
                    <input
                    type="text"
                    placeholder="level"
                    name="name"
                    onChange={handleChange}
                    value={statePokemon.level}
                    />
                </p>

            </form>
        </>
    )
}

export default NewPokemonForm;