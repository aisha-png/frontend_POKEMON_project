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

    let pokemonColorTypeForGym = "";

    switch(gymLeader.name) {
        case "Brock":
            pokemonColorTypeForGym = "#B6A136";
            break;
        case "Misty":
            pokemonColorTypeForGym = "#6390F0";
            break;
        case "Lt Surge":
            pokemonColorTypeForGym = "#F7D02C";
            break;
        case "Erika":
            pokemonColorTypeForGym = "#7AC74C";
            break;
        case "Koga":
            pokemonColorTypeForGym = "#A33EA1";
            break;
        case "Sabrina":
            pokemonColorTypeForGym = "#F95587";
            break;
        case "Blaine":
            pokemonColorTypeForGym = "#EE8130";
            break; 
        case "Blue":
            pokemonColorTypeForGym = "#A8A77A";
            break; 
        case "Roark":
            pokemonColorTypeForGym = "#B6A136";
            break; 
        case "Gardenia":
            pokemonColorTypeForGym = "#7AC74C";
            break; 
        case "Maylene":
            pokemonColorTypeForGym = "#C22E28";
            break; 
        case "Crasher Wake":
            pokemonColorTypeForGym = "#6390F0";
            break; 
        case "Fantina":
            pokemonColorTypeForGym = "#735797";
            break; 
        case "Byron":
            pokemonColorTypeForGym = "#B7B7CE";
            break; 
        case "Candice":
            pokemonColorTypeForGym = "#96D9D6";
            break; 
        case "Volkner":
            pokemonColorTypeForGym = "#F7D02C";
            break;
        case "Falkner":
            pokemonColorTypeForGym = "#A98FF3";
            break;
        case "Bugsy":
            pokemonColorTypeForGym = "#A6B91A";
            break;
        case "Whitney":
            pokemonColorTypeForGym = "#A8A77A";
            break;
        case "Morty":
            pokemonColorTypeForGym = "#735797";
            break;
        case "Chuck":
            pokemonColorTypeForGym = "#C22E28";
            break;
        case "Jasmine":
            pokemonColorTypeForGym = "#B7B7CE";
            break;
        case "Pryce":
            pokemonColorTypeForGym = "#96D9D6";
            break;
        case "Clair":
            pokemonColorTypeForGym = "#6F35FC";
            break;
        case "Roxanne":
            pokemonColorTypeForGym = "#B6A136";
            break;
        case "Brawly":
            pokemonColorTypeForGym = "#C22E28";
            break;
        case "Wattson":
            pokemonColorTypeForGym = "#F7D02C";
            break; 
        case "Flannery":
            pokemonColorTypeForGym = "#EE8130";
            break; 
        case "Norman":
            pokemonColorTypeForGym = "#A8A77A";
            break; 
        case "Winona":
            pokemonColorTypeForGym = "#A98FF3";
            break;
        case "Tate And Liza":
            pokemonColorTypeForGym = "#F95587";
            break;   
        case "Wallace":
            pokemonColorTypeForGym = "#6390F0";
            break;        
        default:
            console.log("Switch cas error in Pokemon.js");
    }

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
        <div style={{backgroundColor: pokemonColorTypeForGym}} className="gymLeader">
        <h1>{gymLeader.name}</h1>
        {/* <h2>{gymLeader.gym.name}</h2> */}
        {matchedGymtoGymLeader}
        <img src={gymLeaderImageSource} alt='lll'/>
        </div>
    );
}

export default GymLeader;