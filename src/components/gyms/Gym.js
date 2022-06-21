const Gym = ({gym, trainers}) => {

    // const gymTrainers = gym.trainers.map (trainer => {
    //     return <p key={trainer.id}>{trainer.name}</p>
    // })

    const gymTrainers = trainers.map (trainer => {
    return <p key={trainer.id}>{trainer.name}</p>
    })
    

    


    return (
        <>
        <h1> {gym.name}</h1>
        {/* <h3> Gym Leader</h3> */}
        {/* <h4>{gym.gymLeader.name}</h4> */}
        {gymTrainers}

        </>
    );
}

export default Gym;
