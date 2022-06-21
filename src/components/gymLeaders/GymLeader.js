const GymLeader = ({gymLeader}) => {
    return(
        <>
        <h1>{gymLeader.name}</h1>
        <h2>{gymLeader.gym.name}</h2>
        </>
    );
}
export default GymLeader;