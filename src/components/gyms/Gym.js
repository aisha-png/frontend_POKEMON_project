const Gym = ({gym, gymLeaders}) => {

    //Return gym leaders
    const matchedGymLeaderToGym = gymLeaders.map(gymLeader => {
        if(gymLeader.gym.id === gym.id){
            return <p key={gymLeader.id}>{gymLeader.name}</p>
        }
        return null;
    }
    )

    return (
        <>
        <h1> {gym.name}</h1>
        <h3> Gym Leader</h3>
        {matchedGymLeaderToGym}
        </>
    );
}

export default Gym;
