import Gym from "./Gym";

const GymList = ({gyms, gymLeaders}) => {

    const gymComponent = gyms.map(gym => {
        return <Gym key={gym.id} gym = {gym} gymLeaders={gymLeaders}/>
    })

    return (
        <div className="gym_parent_container">
        {gymComponent}

        </div>
    );
}

export default GymList;
