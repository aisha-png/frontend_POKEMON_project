import { useState } from "react";

const NewGymForm = ({trainers, postGym}) => {

    const trainerOptions = trainers.map(trainer => {
        return <option key={trainer.id} value={trainer.id}>{trainer.name}</option>
    })

    // const gymLeaderOptions = gymLeaders.map(gymLeader => {
    //     return <option key={gymLeader.id} value={gymLeader.id}>{gymLeader.name}</option>
    // })

    const [stateGym, setStateGym] = useState({
        name: "",
        trainers: null
    });

    const handleChange = (event) => {
        console.log(event);
        let gymName = event.target.name;
        let copiedGym = {...stateGym};
        copiedGym[gymName] = event.target.value;
        setStateGym(copiedGym);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postGym(stateGym);
    }

    const handleTrainers = (event) => {
        const trainerId = parseInt(event.target.value);
        const selectedTrainer = trainers.find(trainer => trainer.id === trainerId);
        let copiedGym = {...stateGym};
        copiedGym.trainers = selectedTrainer;
        setStateGym(copiedGym);
    }

    // const handleGymLeaders = (event) => {
    //     const gymLeaderId = parseInt(event.target.value);
    //     const selectedGymLeader = gymLeaders.find(gymLeader => gymLeader.id === gymLeaderId);
    //     let copiedGym = {...stateGym};
    //     copiedGym.gymLeader = selectedGymLeader;
    //     setStateGym(copiedGym);
    // }



    return (
        <form onSubmit={handleFormSubmit}>
        <h2>Enter name: <input 
            type="text" 
            placeholder="name"
            name="name"
            onChange={handleChange}
            value={stateGym.name}/> </h2>
        <select 
            name="trainer" 
            onChange={handleTrainers} 
            >
                <option>Select a trainer</option>
            {trainerOptions}
            </select>
        {/* <select name="trainer" onChange={handleTrainers}>
            <option>Select a trainer</option>
            {trainerOptions}
            </select> */}
            {/* <select 
                name="gymLeader" 
                onChange={handleGymLeaders} 
                value={stateGym.gymLeader}>
            <option>Select a Gym Leader</option>
            {gymLeaderOptions}
            </select> */}

            <button className="enter-button" type="submit">Enter</button>
    </form>
    );
}

export default NewGymForm;
