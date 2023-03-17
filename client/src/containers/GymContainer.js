import { useEffect, useState } from "react";
import GymList from "../components/gyms/GymList";
import NewGymForm from "../components/gyms/NewGymForm";

const GymContainer = () => {

    const [gyms, setGyms ] = useState([]);

    useEffect(( ) => {
        fetch ("http://localhost:8081/gyms")
        .then(response => response.json())
        .then (data => setGyms(data))
    }, []);

    const postGym = (newGym) => {
        fetch("http://localhost:8081/gyms", {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(newGym)
        })
        .then(response => response.json())
        .then(savedGym => setGyms([...gyms, savedGym]))
    }

    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/trainers")
        .then(response => response.json())
        .then(data => setTrainers(data))
    }, [])

    const [gymLeaders, setGymLeaders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/gym_leaders")
        .then(response => response.json())
        .then(data => setGymLeaders (data))
    },[]);

    return (
        <>
        <NewGymForm trainers={trainers} postGym={postGym} />
        <GymList gyms={gyms} gymLeaders={gymLeaders}/>
        

        </>
    );
}

export default GymContainer;
