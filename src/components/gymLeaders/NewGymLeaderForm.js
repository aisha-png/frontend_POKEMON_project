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
            <p>Enter a name</p>
                <input 
                type="text" 
                placeholder="name"
                name="name"
                onChange={handleChange}
                value={stateGymLeader.name}
                /> 
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