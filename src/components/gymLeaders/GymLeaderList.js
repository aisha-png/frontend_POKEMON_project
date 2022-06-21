import GymLeader from "./GymLeader";

const GymLeaderList = ({gymLeaders, gyms}) => {
    const gymLeaderComponent = gymLeaders.map(gymLeader => {
    return <GymLeader key={gymLeader.id} gymLeader = {gymLeader} gyms={gyms}/>
    })

    return(
        <>
            {gymLeaderComponent}
        </>
    );
}
export default GymLeaderList;