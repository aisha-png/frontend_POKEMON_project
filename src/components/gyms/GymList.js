import Gym from "./Gym";

const GymList = ({gyms}) => {

    const gymComponent = gyms.map(gym => {
        return <Gym key={gym.id} gym = {gym}/>
    })

    return (
        <>
        {gymComponent}

        </>
    );
}

export default GymList;
