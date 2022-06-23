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
        case 'Roark':
            gymLeaderImageSource = image.roark;
            break;
        case 'Gardenia':
            gymLeaderImageSource = image.gardenia;
            break;
        case 'Maylene':
            gymLeaderImageSource = image.maylene;
            break;
        case 'Crasher Wake':
            gymLeaderImageSource = image.crasherWake;
            break;
        case 'Fantina':
            gymLeaderImageSource = image.fantina;
            break;
        case 'Byron':
            gymLeaderImageSource = image.byron;
            break;
        case 'Candice':
            gymLeaderImageSource = image.candice;
            break;
        case 'Volkner':
           gymLeaderImageSource = image.volkner;
            break;
        case 'Falkner':
            gymLeaderImageSource = image.falkner;
            break;
        case 'Bugsy':
            gymLeaderImageSource = image.bugsy;
            break;
        case 'Whitney':
            gymLeaderImageSource = image.whitney;
            break;
        case 'Morty':
            gymLeaderImageSource = image.morty;
            break;
        case 'Chuck':
            gymLeaderImageSource = image.chuck;
            break;
        case 'Jasmine':
            gymLeaderImageSource = image.jasmine;
            break;
        case 'Pryce':
            gymLeaderImageSource = image.pryce;
            break;
        case 'Clair':
            gymLeaderImageSource = image.clair;
            break;
        case 'Roxanne':
            gymLeaderImageSource = image.roxanne;
            break;
        case 'Brawly':
            gymLeaderImageSource = image.brawly;
            break;
        case 'Wattson':
            gymLeaderImageSource = image.wattson;
            break;
        case 'Flannery':
            gymLeaderImageSource = image.flannery;
            break;
        case 'Norman':
            gymLeaderImageSource = image.norman;
            break;
        case 'Winona':
            gymLeaderImageSource = image.winona;
            break;
        case 'Tate And Liza':
            gymLeaderImageSource = image.tateAndLiza;
            break;
        case 'Wallace':
            gymLeaderImageSource = image.wallace;
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