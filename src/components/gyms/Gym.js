const Gym = ({gym}) => {

    const gymTrainers = gym.trainers.map (trainer => {
        return <p key={trainer.id}>{trainer.name}</p>
    })

    // const gymLeaders = gymLeaders.map ((gymLeader) => {
    //     return <p key={gymLeader.id}>{gymLeader.name}</p>
    // })


    return (
        <>
        <h1> {gym.name}</h1>
        <h3> Gym Leader</h3>
        {/* <p>{gym.gymLeader.name}</p> */}
        <h3> Trainers</h3>
        {gymTrainers}
        {/* {gymLeaders} */}
        </>
    );
}

export default Gym;
