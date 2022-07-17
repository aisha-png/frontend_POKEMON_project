import gymImage from '../../gymBadgeImages/GymBadgeImages.js';

const Gym = ({gym, gymLeaders}) => {

    const matchedGymLeaderToGym = gymLeaders.map(gymLeader => {
        let foundGymLeader = gymLeader.id;
        if(foundGymLeader === gym.id){
            return <p key={gym.id}>{gymLeader.name}</p>
        }
        return null;
    })

    //Return gym leaders
    // const matchedGymLeaderToGym = gymLeaders.map(gymLeader => {
    //     if(gymLeader.gym.id === gym.id){
    //         return <p key={gymLeader.id}>{gymLeader.name}</p>
    //     }
    //     return null;
    // }
    // )

    let gymImageSource = null;

    switch(gym.name) {
        case 'Petalburg City Gym':
            gymImageSource = gymImage.balanceBadge;
            break;
        case 'Pewter City Gym':
            gymImageSource = gymImage.boulderBadge;
            break;
        case 'Cerulean City Gym':
            gymImageSource = gymImage.cascadeBadge;
            break;
        case 'Oreburgh City Gym':
            gymImageSource = gymImage.coalBadge;
            break;
        case 'Veilstone City Gym':
            gymImageSource = gymImage.cobbleBadge;
            break;
        case 'Mauville City Gym':
            gymImageSource = gymImage.dynamoBadge;
            break;
        case 'Viridian City Gym':
            gymImageSource = gymImage.earthBadge;
            break;
        case 'Fortree City Gym':
            gymImageSource = gymImage.featherBadge;
            break;
        case 'Ecruteak City Gym':
            gymImageSource = gymImage.fogBadge;
            break;
        case 'Eterna City Gym':
            gymImageSource = gymImage.forestBadge;
            break;
        case 'Mahogany Town Gym':
            gymImageSource = gymImage.glacierBadge;
            break;
        case 'Lavaridge Town Gym':
            gymImageSource = gymImage.heatBadge;
            break;
        case 'Azalea Town Gym':
            gymImageSource = gymImage.hiveBadge;
            break;
        case 'Dewford Town Gym':
            gymImageSource = gymImage.knuckleBadge;
            break;
        case 'Saffron City Gym':
            gymImageSource = gymImage.marshBadge;
            break;
        case 'Mossdeep City Gym':
            gymImageSource = gymImage.mindBadge;
            break;
        case 'Olivine City Gym':
            gymImageSource = gymImage.mineralBadge;
            break;
        case 'Goldenrod City Gym':
            gymImageSource = gymImage.plainBadge;
            break;
        case 'Sootopolis City Gym':
            gymImageSource = gymImage.rainBadge;
            break;
        case 'Celadon City Gym':
            gymImageSource = gymImage.rainbowBadge;
            break;
        case 'Blackthorn City Gym':
            gymImageSource = gymImage.risingBadge;
            break;
        case 'Fuchsia City Gym':
            gymImageSource = gymImage.soulBadge;
            break;
        case 'Rustboro City Gym':
            gymImageSource = gymImage.stoneBadge;
            break;
        case 'Cianwood City Gym':
            gymImageSource = gymImage.stormBadge;
            break;
        case 'Vermilion City Gym':
            gymImageSource = gymImage.thunderBadge;
            break;
        case 'Cinnabar Island Gym':
            gymImageSource = gymImage.volcanoBadge;
            break;
        case 'Violet City Gym':
            gymImageSource = gymImage.zephyrBadge;
            break;
        


            case 'Nacrene City Gym':
                gymImageSource = gymImage.basicBadge;
                break;
            case 'Sunyshore City Gym':
                gymImageSource = gymImage.beaconBadge;
                break;
            case 'Nimbasa City Gym':
                gymImageSource = gymImage.boltBadge;
                break;
            case 'Santalune City Gym':
                gymImageSource = gymImage.bugBadge;
                break;
            case 'Cyllage City Gym':
                gymImageSource = gymImage.cliffBadge;
                break;
            // case 'dark':
            //     gymImageSource = gymImage.darkBadge;
            //     break;
            // case 'dragon':
            //     gymImageSource = gymImage.dragonBadge;
            //     break;
            case 'Laverre City Gym':
                gymImageSource = gymImage.fairyBadge;
                break;
            case 'Pastoria City Gym':
                gymImageSource = gymImage.fenBadge;
                break;
            // case 'fighting':
            //     gymImageSource = gymImage.fightingBadge;
            //     break;
            // case 'fire':
            //     gymImageSource = gymImage.fireBadge;
            //     break;
            case 'Icirrus City Gym':
                gymImageSource = gymImage.freezeBadge;
                break;
            // case 'ghost':
            //     gymImageSource = gymImage.ghostBadge;
            //     break;
            // case 'grass':
            //     gymImageSource = gymImage.grassBadge;
            //     break;
            // case 'ice':
            //     gymImageSource = gymImage.iceBadge;
            //     break;
            case 'Snowbelle City Gym':
                gymImageSource = gymImage.icebergBadge;
                break;
            case 'Snowpoint City Gym':
                gymImageSource = gymImage.icicleBadge;
                break;
            case 'Castelia City Gym':
                gymImageSource = gymImage.insectBadge;
                break;
            case 'Mistralton City Gym':
                gymImageSource = gymImage.jetBadge;
                break;
            case 'Opelucid City Gym':
                gymImageSource = gymImage.legendBadge;
                break;
            case 'Canalave City Gym':
                gymImageSource = gymImage.mineBadge;
                break;
            case 'Coumarine City Gym':
                gymImageSource = gymImage.plantBadge;
                break;
            case 'Anistar City Gym':
                gymImageSource = gymImage.psychicBadge;
                break;
            case 'Driftveil City Gym':
                gymImageSource = gymImage.quakeBadge;
                break;
            case 'Hearthome City Gym':
                gymImageSource = gymImage.relicBadge;
                break;
            case 'Shalour City Gym':
                gymImageSource = gymImage.rumbleBadge;
                break;
            case 'Virbank City Gym':
                gymImageSource = gymImage.toxicBadge;
                break;
            case 'Striaton City Gym':
                gymImageSource = gymImage.trioBadge;
                break;
            case 'Lumiose City Gym':
                gymImageSource = gymImage.voltageBadge;
                break;
            // case 'water':
            //     gymImageSource = gymImage.waterBadge;
            //     break;
            case 'Humilau City Gym':
                gymImageSource = gymImage.waveBadge;
                break;
    
                default:
                console.log("Issue in gym leader images...");  
        }


    return (
        <div className="gym">
        <h1> {gym.name}</h1>
        <h3> Gym Leader</h3>
        {matchedGymLeaderToGym}
        <img src={gymImageSource} alt='gyms_source_image'/>
        </div>
    );
}

export default Gym;
