import GymLeader from "./GymLeader";

const GymLeaderList = ({gymLeaders}) => {
    const gymLeaderComponent = gymLeaders.map(gymLeader => {
    return <GymLeader key={gymLeader.id} gymLeader = {gymLeader} />
    })

    return(
        <>
            {gymLeaderComponent}
        </>
    );
}
export default GymLeaderList;