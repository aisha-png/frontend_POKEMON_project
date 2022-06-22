const GymLeader = ({gyms, gymLeader}) => {

    // const matchedGymtoGymLeader = gyms.map(gym => {
    //     let foundGym = gym.gymLeader.id;
    //     if(foundGym === gymLeader.id){
    //         return <p key={gym.id}>{gym.name}</p>
    //     }
    //     return null;
    // })

    const matchedGymtoGymLeader = gyms.map(gym => {
        let foundGym = gym.id;
        if(foundGym === gymLeader.id){
            return <p key={gym.id}>{gym.name}</p>
        }
        return null;
    })

    return(
        <div className="gymLeader">
        <h1>{gymLeader.name}</h1>
        {/* <h2>{gymLeader.gym.name}</h2> */}
        {matchedGymtoGymLeader}
        </div>
    );
}

export default GymLeader;