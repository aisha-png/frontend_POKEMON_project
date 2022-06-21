import { useEffect, useState } from "react";
import GymLeaderList from "../components/gymLeaders/GymLeaderList";
import NewGymLeaderForm from "../components/gymLeaders/NewGymLeaderForm";

const GymLeaderContainer = () => {

    const [gymLeaders, setGymLeaders] = useState([]);

        useEffect(() => {
            fetch("http://localhost:8081/gym_leaders")
            .then(response => response.json())
            .then(data => setGymLeaders (data))
        },[]);

        const postGymLeader = (newGymLeader) => {
            fetch("http://localhost:8081/gym_leaders", {
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify(newGymLeader)
            })
            .then(response => response.json())
            .then(savedGymLeaders => setGymLeaders([...gymLeaders, savedGymLeaders]))
        }

        const [gyms, setGyms ] = useState([]);

        useEffect(( ) => {
            fetch ("http://localhost:8081/gyms")
            .then(response => response.json())
            .then (data => setGyms(data))
        }, []);




    return(
        <>
        <NewGymLeaderForm postGymLeader={postGymLeader} gyms={gyms}/>
        <GymLeaderList gymLeaders = {gymLeaders} gyms={gyms}/>
        </>
    );
}
export default GymLeaderContainer;