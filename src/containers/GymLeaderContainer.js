import { useEffect, useState } from "react";
import GymLeaderList from "../components/gymLeaders/GymLeaderList";

const GymLeaderContainer = () => {
    const [gymLeaders, setGymLeaders] = useState([]);
        useEffect(() => {
            fetch("http://localhost:8081/gym_leaders")
            .then(response => response.json())
            .then(data => setGymLeaders (data))
        },[])
    return(
        <>
        <GymLeaderList gymLeaders = {gymLeaders}/>
        </>
    );
}
export default GymLeaderContainer;