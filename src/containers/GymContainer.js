import { useEffect, useState } from "react";
import GymList from "../components/gyms/GymList";

const GymContainer = () => {
    const [gyms, setGyms ] = useState([]);
    useEffect(( ) => {
        fetch ("http://localhost:8081/gyms")
        .then(response => response.json())
        .then (data => setGyms(data))
    }, []);
    return (
        <>
        <GymList gyms={gyms}/>

        </>
    );
}

export default GymContainer;
