import React from 'react'
import Trainer from './Trainer'

const TrainerList = ({trainers}) => {

    const trainerComponent = trainers.map((trainer) => {
        return <Trainer 
                    key={trainer.id}
                    trainer={trainer}
                    />
    })

  return (
    <>
    {trainerComponent}
    </>
  )
}

export default TrainerList;