import Gym from "./Gym";

const GymList = ({gyms, trainers}) => {

    const gymComponent = gyms.map(gym => {
        return <Gym key={gym.id} gym = {gym} trainers={trainers}/>
    })

    return (
        <>
        {gymComponent}

        </>
    );
}

export default GymList;
