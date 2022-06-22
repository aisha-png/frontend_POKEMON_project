const Gym = ({gym, gymLeaders}) => {

    const matchedGymLeaderToGym = gymLeaders.map(gymLeader => {
        let foundGymLeader = gymLeader.id;
        if(foundGymLeader === gym.id){
            return <p key={gym.id}>{gymLeader.name}</p>
        }
        return null;
    })

    //Return gym leaders
    // const matchedGymLeaderToGym = gymLeaders.map(gymLeader => {
    //     if(gymLeader.gym.id === gym.id){
    //         return <p key={gymLeader.id}>{gymLeader.name}</p>
    //     }
    //     return null;
    // }
    // )

    return (
        <div className="gym">
        <h1> {gym.name}</h1>
        <h3> Gym Leader</h3>
        {matchedGymLeaderToGym}
        </div>
    );
}

export default Gym;
