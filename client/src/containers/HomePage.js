import React from 'react'
import pokemonLogo from '../images/pokemonLogo.png'
import ashImage from '../images/ash_and_pikachu.png'
import brockImage from '../images/brock-image-modified.png'
import mistyImage from '../images/misty-image.png'
import rayquaza from '../images/rayquaza.png'
import pokemonGroup from '../images/four_pokemons.png'

const HomePage = () => {
  return (
    <div className="home_body">
      <figure className="home_body_logo"><img id='pokemon-logo-image' src={pokemonLogo} alt="Pokemon Logo"/> </figure>
        <div className="home_body_main"> 
        <article className='about-article'>
            <figure className="rayquaza"><img id='rayquaza' className="rayquaza-image" src={rayquaza} alt="Rayquaza"/></figure>
            <p className='p-about'><h1 className='h1_home_about'>What is Pokemon?</h1>
            The original Pokémon is a role-playing game based around building a small team of monsters to battle other monsters in a quest to become the best. Pokémon are divided into types, such as water and fire, each with different strengths. Battles between them can be likened to the simple hand game rock-paper-scissors. For example, to gain an advantage over a Pokémon that cannot beat an opponent’s Charizard character because of a weakness to fire, a player might substitute a water-based Pokémon. With experience, Pokémon grow stronger, gaining new abilities. By defeating Gym Leaders and obtaining Gym Badges, trainers garner acclaim.
            <br/>
            Pikachu, a yellow mouselike creature, is the undisputed face of Pokémon and helped the series become a worldwide phenomenon. Pokémon inspired a cartoon series, movies, books, a toy line, sequels, spin-offs, a clothing line, and a popular trading-card game. In spite of a friendly interface and little violence, Pokémon has not been without controversy, however. In 1999 the parents of two nine-year-old boys sued Nintendo, stating that the Pokémon card game had caused the children to develop gambling problems and likening the trading-card craze to an illegal lottery. Religious groups that discount the theory of evolution also targeted Pokémon, for showing Pokémon evolving into new creatures.
            </p>
          </article>
          <br/>
          <br/>
          <div id='ash-div'>
          <figure className="home_body_image"><img id='ash' className="trainer-image" src={ashImage} alt="Pokemon"/></figure>
          <p id='ash-info'>
          Ash Ketchum is the main protagonist of the Pokémon Anime series. He is a 10-year-old Pokémon Trainer from Pallet Town in the Kanto region who has always dreamed of becoming the world's greatest Pokémon Master. The first human character to be introduced in the series, he is the winner of the Orange League and Kanto Battle Frontier and also the Alola region's Pokémon Champion, receiving the title after winning its first Pokémon League Conference. He is also one of the 8 best trainers in the Pokémon World after defeating Raihan and reached Master Class in the World Coronation Series.

          On his 10th birthday, he realized he overslept. Ash rushed to Professor Oak's Laboratory to get his first Pokémon. Originally wanting to choose Squirtle, Bulbasaur or Charmander, but he ended up receiving the Pokémon Pikachu instead, as he arrived late (thus leaving him with no other Starters to choose from even though this was his birthday). At first, Pikachu did not obey Ash and kept running away, so Ash had to tie him up. After getting chased by a flock of Spearow later in the day thanks to Ash's recklessness, Ash attempted to save Pikachu from them. Seeing that Ash was so determined to help him, Pikachu protected Ash from the Spearow by electrocuting the entire flock (which was thanks to being struck by lightning at that exact moment and having his Electric-type move supercharged). From then on, Pikachu and Ash became best friends. As an unskilled Trainer, Ash traveled with Misty and Brock throughout the Kanto region, capturing new Pokémon along the way. 
          </p> 
          </div>
          <br/>
          <br/>
          <div id='brock-div'>
          <p id='brock-info'>
          Brock is originally the Gym Leader of Pewter City Gym but he decided to follow his dream to become the greatest Pokémon Breeder. After his defeat against Ash Ketchum, he quickly gave up his title. He accompanied Ash on his journey for quite some time, all while trying to live up to his goal. He currently wishes to be a great Pokémon Doctor. He has travelled with Ash from Kanto to Sinnoh.
          <br/>
          Brock's most notable feature is that his eyes appear to be closed all the time. The rare times he fully opens his eyes are when they are forced to open unnaturally; examples include when he was hit by Charmander's Flamethrower in The Ninja Poké-Showdown, when he was hit in the back of the head by Arbok's tail in Who Gets to Keep Togepi?, and when he made a face for Larvitar in A Crowning Achievement. This has been the center of fan attention for a long time. He also has spiky brown hair and tan skin, notably darker than the skin of any other major character in the anime (until Iris in the Best Wishes series).
          <br/>
          Along with Tracey, Cilan and Kiawe, Brock is the tallest of Ash's traveling companions and the closest to looking like an adult. Next to actual adult characters, however, it is clear that he is still a teenager. Not counting temporary outfits, he has worn three different outfits, all of which have had the colors orange, green and brown with blue shoes.
          </p> 
          <figure className="home_body_image"><img id='brock' className="trainer-image" src={brockImage} alt="Pokemon"/></figure>
          </div>
          <br/>
          <br/>
          <div id='misty-div'>
          <figure className="home_body_image"><img id='misty' className="trainer-image" src={mistyImage} alt="Pokemon"/></figure>
          <p id='misty-info'>
          In the first episode, she meets Ash after fishing him out of a lake while he was trying to get away from a flock of Spearow. Ash then takes Misty's bike from her in order to escape the Spearow which is then inadvertently wrecked by Pikachu's Thunder Shock. Misty then tracks down Ash and follows him around on his adventures until he can pay her back, although she eventually forgets about the bike and becomes one of Ash's closest friends in the process. However, at the end of their journey through the Johto Region, Misty's bike has been completely repaired, and she leaves to return home to Cerulean City to resume her duties as a Gym Leader.
          She is currently the Cerulean City Gym Leader, a position she took over from her older sisters.
          <br/>
          Misty has short, red hair tied into a side ponytail with blue elastic rubber band. She has green eyes and fair skin. She wears a yellow tank top that reveals her midriff, red suspenders, denim shorts that stop at her thighs and red high top sneakers with yellow lining and white laces. Her belly button is not usually drawn, but it is visible when she wears two-piece swimsuits. Her most common swimsuit is a red bikini, which she wore six times.
          <br/>
          She later maintains her original outfit in her return in Alola, Kanto in Pokémon the Series: Sun & Moon. In this series, her belly button is shown the entire time. Beneath her outfit is her blue strapless bikini which was worn by her counterpart in both games, Pokémon Red and Blue. In When Regions Collide!, Misty has a Key Stone hidden at the back of her ponytail
          </p> 
        </div>
        </div>
        <figure className="above-footer-image-pokemons">
          <img id='four-pokemon-group' className="four-pokemons-image" src={pokemonGroup} alt="four pokemons"/>
        </figure> 
    </div>
  )
}

export default HomePage