import React, { useState } from 'react'

const NewTrainerForm = ({postTrainer}) => {

  const [stateTrainer, setStateTrainer] = useState({
    name: "",
    dob: ""
  });

  const handleChange = (event) => {
    console.log(event);
    let trainerName = event.target.name;
    let copiedTrainer = {...stateTrainer};
    copiedTrainer[trainerName] = event.target.value;
    setStateTrainer(copiedTrainer);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    postTrainer(stateTrainer);
  }

  return (
    <form className="form-trainer" onSubmit={handleFormSubmit}>
      <h2>Enter a new Trainer here:</h2>
      <p>Enter name: <br/> 
        <input 
            type="text"
            placeholder="name"
            name="name"
            onChange={handleChange}
            value={stateTrainer.name}    
        />
      </p>
      <p>Enter DOB (YYYY-MM-DD): 
          <input 
          type="text"
          placeholder="date of birth"
          name="dob"
          onChange={handleChange}
          value={stateTrainer.dob}
          />
      </p>
      <button className="enter-button" type="submit">Enter</button>
    </form>

  )
}

export default NewTrainerForm;