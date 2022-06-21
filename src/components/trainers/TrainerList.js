import Trainer from './Trainer'

const TrainerList = ({trainers, deleteTrainer}) => {

    const trainerComponent = trainers.map(trainer => {
        return <Trainer 
                    key={trainer.id}
                    trainer={trainer}
                    deleteTrainer={deleteTrainer}
                    />
    })

  return (
    <>
    {trainerComponent}
    </>
  )
}

export default TrainerList;