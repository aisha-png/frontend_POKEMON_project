const Trainer = ({trainer, deleteTrainer}) => {

  const handleDeleteTrainer = () => {
    deleteTrainer(trainer.id);
}

  return (
    <div className="trainer">
        <h1>{trainer.name}</h1>
        <h3>{trainer.dob}</h3>
        <button onClick={handleDeleteTrainer}>DELETE</button>
     </div>
  )
}

export default Trainer;