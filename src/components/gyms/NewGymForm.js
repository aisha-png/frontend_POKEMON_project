import { useState } from "react";

const NewGymForm = ({postGym}) => {

    // const trainerOptions = trainers.map(trainer => {
    //     return <option key={trainer.id} value={trainer.id}>{trainer.name}</option>
    // })

    // const gymLeaderOptions = gymLeaders.map(gymLeader => {
    //     return <option key={gymLeader.id} value={gymLeader.id}>{gymLeader.name}</option>
    // })

    const [stateGym, setStateGym] = useState({
        name: ""
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

    // const handleTrainers = (event) => {
    //     console.log(event);
    //     const trainerId = parseInt(event.target.value);
    //     const selectedTrainer = trainers.find(trainer => trainer.id === trainerId);
    //     let copiedGym = {...stateGym};
    //     copiedGym.trainers = selectedTrainer;
    //     setStateGym(copiedGym);
    // }

    // const handleGymLeaders = (event) => {
    //     const gymLeaderId = parseInt(event.target.value);
    //     const selectedGymLeader = gymLeaders.find(gymLeader => gymLeader.id === gymLeaderId);
    //     let copiedGym = {...stateGym};
    //     copiedGym.gymLeader = selectedGymLeader;
    //     setStateGym(copiedGym);
    // }

    return (
        <form className="form-gym" onSubmit={handleFormSubmit}>
            <h2>Enter a new Gym: </h2>
            <p> Enter a name</p>
                {/* <input 
                type="text" 
                placeholder="name"
                name="name"
                onChange={handleChange}
                value={stateGym.name}
                />  */}

<select  
                type="text"
                name = "name" 
                onChange={handleChange} 
                >
                <option>Choose a Gym:</option>
                <option>Petalburg City Gym</option>
                <option>Pewter City Gym</option>
                <option>Cerulean City Gyme</option>
                <option>Oreburgh City Gym</option>
                <option>Veilstone City Gym</option>
                <option>Mauville City Gym</option>
                <option>Viridian City Gym</option>
                <option>Fortree City Gym</option>
                <option>Ecruteak City Gym</option>
                <option>Eterna City Gym</option>
                <option>Mahogany Town Gym</option>
                <option>Crasher Wake</option>
                <option>Lavaridge Town Gym</option>
                <option>Azalea Town Gym</option>
                <option>Dewford Town Gym</option>
                <option>Saffron City Gym</option>
                <option>Mossdeep City Gym</option>
                <option>Olivine City Gym</option>
                <option>Goldenrod City Gym</option>
                <option>Sootopolis City Gym</option>
                <option>Celadon City Gym</option>
                <option>Blackthorn City Gym</option>
                <option>Fuchsia City Gym</option>
                <option>Rustboro City Gym</option>
                <option>Cianwood City Gym</option>
                <option>Vermilion City Gym</option>
                <option>Violet City Gym</option>

                <option>Snowbelle City Gym</option>
                <option>Snowpoint City Gym</option>
                <option>Castelia  City Gym</option>
                <option>Mistralton City Gym</option>
                <option>Opelucid City Gym</option>
                <option>Canalave City Gym</option>
                <option>Coumarine City Gym</option>
                <option>Anistar City Gym</option>
                <option>Driftveil City Gym</option>
                <option>Hearthome City Gym</option>
                <option>Shalour City Gym</option>
                <option>Virbank City Gym</option>
                <option>Striaton City Gym</option>
                <option>Lumiose City Gym</option>


            </select>
            
        {/* <select 
            name="trainer" 
            onChange={handleTrainers} 
            >
                <option>Select a trainer</option>
            {trainerOptions}
            </select> */}
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
            <br/>
            <button className="enter-button" type="submit">Enter</button>
        </form>
    );
}

export default NewGymForm;
