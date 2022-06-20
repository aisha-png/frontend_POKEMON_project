import React, { useEffect, useState } from 'react'
import TrainerList from '../components/trainers/TrainerList';

const TrainerContainer = () => {

    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/trainers/")
        .then(response => response.json()
        .then(data => setTrainers(data)))
    }, [])



  return (
    <TrainerList trainers={trainers} />
  )
}

export default TrainerContainer;