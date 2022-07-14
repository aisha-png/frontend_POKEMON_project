import { useState } from "react";

const NewGymLeaderForm = ({gyms, postGymLeader}) => {

    const gymOptions = gyms.map(gym => {
        return <option key={gym.id} value={gym.id}>{gym.name}</option>
    })

    const [stateGymLeader, setStateGymLeader] = useState({
        name: "",
        gym: null
    });

    const handleChange = (event) => {
        console.log(event);
        let gymLeaderName = event.target.name;
        let copiedGymLeader = {...stateGymLeader};
        copiedGymLeader[gymLeaderName] = event.target.value;
        setStateGymLeader(copiedGymLeader);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postGymLeader(stateGymLeader);
    }

    const handleGyms = (event) => {
        const gymId = parseInt(event.target.value);
        const selectedGym = gyms.find(gym => gym.id === gymId);
        let copiedGymLeader = {...stateGymLeader};
        copiedGymLeader.gyms = selectedGym;
        setStateGymLeader(copiedGymLeader);
    }

    return(
        <form className="form-gymLeader" onSubmit={handleFormSubmit}>
            <h2>Enter a new Gym Leader: </h2>
            <select  
            type="text"
            name = "name" 
            onChange={handleChange} 
            >
                <option>Choose An option</option>
                <option>Brock</option>
                <option>Misty</option>
                <option>Lt Surge</option>
                <option>Erika</option>
                <option>Koga</option>
                <option>Sabrina</option>
                <option>Blaine</option>
                <option>Blue</option>
                <option>Roark</option>
                <option>Gardenia</option>
                <option>Maylene</option>
                <option>Crasher Wake</option>
                <option>Fantina</option>
                <option>Byron</option>
                <option>Candice</option>
                <option>Volkner</option>
                <option>Falkner</option>
                <option>Bugsy</option>
                <option>Whitney</option>
                <option>Morty</option>
                <option>Chuck</option>
                <option>Jasmine</option>
                <option>Pryce</option>
                <option>Clair</option>
                <option>Roxanne</option>
                <option>Brawly</option>
                <option>Wattson</option>
                <option>Flannery</option>
                <option>Norman</option>
                <option>Winona</option>
                <option>Tate And Liza</option>
                <option>Wallace</option>
            </select>
            {/* <p>Enter a name</p>
                <input 
                type="text" 
                placeholder="name"
                name="name"
                onChange={handleChange}
                value={stateGymLeader.name}
                />  */}
                <p>Select a Gym</p>
            <select 
            name="gym" 
            onChange={handleGyms} 
            >
            <option>Select a Gym</option>
            {gymOptions}
            </select>
            <br/>
            <button className="enter-button" type="submit">Enter</button>
        </form>
        
    );
}
export default NewGymLeaderForm;