const GymLeader = ({gymLeader}) => {

    // const matchedGymtoGymLeader = gyms.map(gym => {
    //     let foundGym = gym.gymLeader.id;
    //     if(foundGym === gymLeader.id){
    //         return <p key={gym.id}>{gym.name}</p>
    //     }
    //     return null;
    // })


    return(
        <>
        <h1>{gymLeader.name}</h1>
        <h2>{gymLeader.gym.name}</h2>
        {/* {matchedGymtoGymLeader} */}
        </>
    );
}
export default GymLeader;