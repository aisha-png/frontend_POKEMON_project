package com.bnta.pokemon_project.components;

import com.bnta.pokemon_project.models.*;
import com.bnta.pokemon_project.repositories.GymLeaderRepository;
import com.bnta.pokemon_project.repositories.GymRepository;
import com.bnta.pokemon_project.repositories.PokemonRepository;
import com.bnta.pokemon_project.repositories.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Arrays;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired // Dependency Injection
    GymLeaderRepository gymLeaderRepository;

    @Autowired
    GymRepository gymRepository;

    @Autowired
    PokemonRepository pokemonRepository;

    @Autowired
    TrainerRepository trainerRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {

        // Injecting Trainers into Trainer Repo
        Trainer trainer1 = new Trainer("Barry", LocalDate.of(2000,1,1));
        Trainer trainer2 = new Trainer("Lucas", LocalDate.of(1998,5,6));
        Trainer trainer3 = new Trainer("Chase", LocalDate.of(2010,2,3));
        Trainer trainer4 = new Trainer("Ash", LocalDate.of(1979,12,28));
        Trainer trainer5 = new Trainer("Brock", LocalDate.of(1992,10,10));
        Trainer trainer6 = new Trainer("Clemont", LocalDate.of(2009,9,13));

        Trainer trainer7 = new Trainer("Dawn", LocalDate.of(1999,3,22));
        Trainer trainer8 = new Trainer("Iris", LocalDate.of(1995,1,12));
        Trainer trainer9 = new Trainer("May", LocalDate.of(1990,12,9));
        Trainer trainer10 = new Trainer("Jessie", LocalDate.of(1993,9,30));
        Trainer trainer11 = new Trainer("James", LocalDate.of(2001,2,11));
        Trainer trainer12 = new Trainer("Bonnie", LocalDate.of(20004,8,4));


        trainerRepository.saveAll(Arrays.asList(trainer1, trainer2, trainer3, trainer4, trainer5, trainer6, trainer7,
                trainer8, trainer9, trainer10, trainer11, trainer12));

        // Injecting Gyms into Gyms Repo
        Gym gym1 = new Gym("Blackthorn City Gym", Arrays.asList(trainer1, trainer5));
        Gym gym2 = new Gym("Fuchsia City Gym", Arrays.asList(trainer2, trainer3));
        Gym gym3 = new Gym("Violet City Gym", Arrays.asList(trainer2, trainer4));
        Gym gym4 = new Gym("Olivine City Gym", Arrays.asList(trainer4, trainer2, trainer3));
        Gym gym5 = new Gym("Lavaridge Town Gym", Arrays.asList(trainer4, trainer5, trainer6));
        Gym gym6 = new Gym("Eterna City Gym", Arrays.asList(trainer1, trainer2, trainer3, trainer4, trainer5, trainer6));

        Gym gym7 = new Gym("Pewter City Gym", Arrays.asList(trainer7, trainer12, trainer1));
        Gym gym8 = new Gym("Cerulean City Gym", Arrays.asList(trainer8, trainer11, trainer3));
        Gym gym9 = new Gym("Vermilion City Gym", Arrays.asList(trainer9, trainer10, trainer5));
        Gym gym10 = new Gym("Mauville City Gym", Arrays.asList(trainer10, trainer9));
        Gym gym11 = new Gym("Oreburgh City Gym", Arrays.asList(trainer11, trainer8));
        Gym gym12 = new Gym("Saffron City Gym", Arrays.asList(trainer12, trainer7,trainer4));


        gymRepository.saveAll(Arrays.asList(gym1, gym2, gym3, gym4, gym5, gym6, gym7, gym8, gym9, gym10, gym11, gym12));

        // Injecting the GymLeaders into GymLeader Repo
        GymLeader gymLeader1 = new GymLeader("Clair", gym1);
        GymLeader gymLeader2 = new GymLeader("Koga", gym2);
        GymLeader gymLeader3 = new GymLeader("Falkner", gym3);
        GymLeader gymLeader4 = new GymLeader("Jasmine", gym4);
        GymLeader gymLeader5 = new GymLeader("Flannery", gym5);
        GymLeader gymLeader6 = new GymLeader("Gardenia", gym6);

        GymLeader gymLeader7 = new GymLeader("Brock", gym7);
        GymLeader gymLeader8 = new GymLeader("Misty", gym8);
        GymLeader gymLeader9 = new GymLeader("Lt Surge", gym9);
        GymLeader gymLeader10 = new GymLeader("Wattson", gym10);
        GymLeader gymLeader11 = new GymLeader("Roark", gym11);
        GymLeader gymLeader12 = new GymLeader("Sabrina", gym12);
        gymLeaderRepository.saveAll(Arrays.asList(gymLeader1, gymLeader2, gymLeader3, gymLeader4, gymLeader5, gymLeader6,
                gymLeader7, gymLeader8, gymLeader9, gymLeader10, gymLeader11, gymLeader12));

        // Injecting the Pokémon into the Pokémon Repo

        Pokemon pokemon1 = new Pokemon("machamp", Type.FIGHTING, 50, Arrays.asList(trainer1, trainer2));
        Pokemon pokemon2 = new Pokemon("torkoal", Type.FIRE, 10, Arrays.asList(trainer5));
        Pokemon pokemon3 = new Pokemon("treecko", Type.GRASS, 41, Arrays.asList(trainer1, trainer2, trainer3));
        Pokemon pokemon4 = new Pokemon("krabby", Type.WATER, 25, Arrays.asList(trainer2, trainer4));
        Pokemon pokemon5 = new Pokemon("squirtle", Type.WATER, 78, Arrays.asList(trainer5, trainer6));
        Pokemon pokemon6 = new Pokemon("chimchar", Type.FIRE, 97, Arrays.asList(trainer3, trainer4));
        Pokemon pokemon7 = new Pokemon("klinklang", Type.STEEL, 53, Arrays.asList(trainer5));
        Pokemon pokemon8 = new Pokemon("alakazam", Type.PSYCHIC, 21, Arrays.asList(trainer6));
        Pokemon pokemon9 = new Pokemon("cinccino", Type.NORMAL, 15, Arrays.asList(trainer6, trainer2, trainer4));
        Pokemon pokemon10 = new Pokemon("bulbasaur", Type.GRASS, 46, Arrays.asList(trainer3));
        pokemonRepository.saveAll(Arrays.asList(pokemon1,pokemon2,pokemon3,pokemon4,pokemon5,pokemon6,pokemon7,pokemon8,pokemon9,pokemon10));
    }


}

