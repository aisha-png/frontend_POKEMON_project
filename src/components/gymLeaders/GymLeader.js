import image from '../../gymLeaderImages/gymLeaderImages.js';

const GymLeader = ({gyms, gymLeader}) => {

    // const matchedGymtoGymLeader = gyms.map(gym => {
    //     let foundGym = gym.gymLeader.id;
    //     if(foundGym === gymLeader.id){
    //         return <p key={gym.id}>{gym.name}</p>
    //     }
    //     return null;
    // })

    const matchedGymtoGymLeader = gyms.map(gym => {
        let foundGym = gym.id;
        if(foundGym === gymLeader.id){
            return <p key={gym.id}>{gym.name}</p>
        }
        return null;
    })

    let gymLeaderImageSource = null;

    // if(gymLeader.name === 'Brock') {
    //     gymLeaderImageSource = image.brock
    // } else if(gymLeader.name === 'Misty') {
    //     gymLeaderImageSource = image.misty
    // } else if(gymLeader.name === 'Lt Surge') {
    //     gymLeaderImageSource = image.ltsurge
    // } else if(gymLeader.name === 'Erika') {
    //     gymLeaderImageSource = image.erika
    // }

    switch(gymLeader.name) {
        case 'Brock':
            gymLeaderImageSource = image.brock;
            break;
        case 'Misty':
            gymLeaderImageSource = image.misty;
            break;
        case 'Lt Surge':
            gymLeaderImageSource = image.ltsurge;
                break;
        case 'Erika':
            gymLeaderImageSource = image.erika;
                break;
        case 'Koga':
            gymLeaderImageSource = image.koga;
                break;
        case 'Sabrina':
            gymLeaderImageSource = image.sabrina;
                break;
        case 'Blaine':
            gymLeaderImageSource = image.blaine;
                break;
        case 'Blue':
            gymLeaderImageSource = image.blue;
                break;
        default:
            console.log("Issue in gym leader images...");  
    }

    return(
        <div className="gymLeader">
        <h1>{gymLeader.name}</h1>
        {/* <h2>{gymLeader.gym.name}</h2> */}
        {matchedGymtoGymLeader}
        <img src={gymLeaderImageSource} alt='lll'/>
        </div>
    );
}

export default GymLeader;