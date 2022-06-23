# Catch (Pokémon API):
![POKEMON_LOGO](https://user-images.githubusercontent.com/67974517/174847849-cc02acdf-52b7-428b-8d2d-619ff923cedb.png)
We are Pokemon trainers, a team consisting of [BNTA](https://techacademy.brightnetwork.co.uk/) Cohort 5 members : [Bianca](https://github.com/biancakendall29), [Naim](https://github.com/N41M) and [Amber](https://github.com/aakamara)
# Table of Contents
- [Summary](#summary)
- [Step-by- step instructions for inital set-up](#step-by-step-instructions-for-initial-set-up)
- [Project Structure](#project-structure)
- [Using the API - HTTP Requests](#using-the-api---http-request)
    - [Pokemon Commands](#pokemon-commands)
    - [Other Commands](#other-commands)
# Summary
Front end project consisting of a team of 4 as part of the BNTA programme, a week 11 project using an API from a previous groups backend project, where we used react. The website contains a home page, a pokemon page where the user can view and enter pokemon using the CRUD functionality into the database using a react form, and similarly to the pokemon page we have a gym and gymLeader page with the view and enter functionaility also.
# Step-by-step instructions for initial set up
1. Make sure that you have installed Java.
2. Clone this repository : `git@github.com:aisha-png/fontend_POKEMON_project.git` and open in you Java IDE
3. Run the backend API to start the server: `https://localhost:8081`
4. Open this project in VS code.
5. Open a new terminal up, type `npm install`
6. In terminal type `npm start`
# Project Structure
## Wireframe

# Using the API - HTTP Request
## Plain Old Java (POJO)
In this section, the POJOs used in the project are listed along with their properties and related JSON structure when using some `POST`and `GET` requests.
The API can be used with the following HTTP requests, in the Postman desktop application:
## Pokemon Commands
### @GET
To get the list of all pokemon : `localhost:8081/pokemon`
To get a specific pokemon, if you know the id, your format should be as follows `localhost:8081/pokemon/{id}`
> where you replace {id} with a known id number
### @POST
Ensure your Postman is set to run a HTTP `POST` request : `localhost:8081/pokemon`
Now input the pokemon data. This should be done in the `JSON` Object format within the body where it should look like so :
        {
            "name" : "";
            "type" : --;
            "level" : --;
        }
### @PUT
Ensure your Postman is set to run a HTTP `PUT` request where you update a pokemon.
If you have already added a pokemon from the example but you want to change one of their properties such as their level. It is similar to adding a pokemon but you will need to know the id number and the command for what you want to change. Run the code `localhost:8081/pokemon/changeLevel/{id}/{the level you want}`
> The `PUT` requests do not save permanetly
### @DELETE
Ensure your Postman is set to run a HTTP `DELETE` request so you can delete a pokemon.
Imagine you have already added a Pokemon from the example, however, you want to delete that record. Again, run : `localhost:8081/pokemon/{id}`
> where {id} can be replaced with an id of the pokemon you want to delete
To delete all Pokemon, simiply run `localhost:8081/pokemon/` with the `@DELETE` request selected, it will delete all records. You must **BE CARFUL** when doing this as it is **NOT** reversible.
 > Also, is you add more Pokemon, the previous IDs will not be used again.
## Other Commands
These commands work as the Pokemon commands shown above, except with a different command substitutied for 'Pokemon'
| HTTP Request      | Trainer |  Gym    |  Gym Leader  |
| :---        |    :----   |          :---- |        :---|
| `POST`      | `localhost:8081/trainer/`   | `localhost:8081/gym/` | `localhost:8081/gymLeader/` |
| `GET`' | `localhost:8081/trainer/`       | `localhost:8081/gym/`   | `localhost:8081/gymLeader/` |
| `PUT`  | `localhost:8081/trainer/{command name}/{id}/{what you need to change}`       | `localhost:8081/gym/{command name}/{id}/{what you want to change}`   | `localhost:8081/gymLeader/{command name}/{id}/{what you want to change}` |
| `DELETE`  | `localhost:8081/trainer/{id}`        | `localhost:8081/gym/{id}`   | `localhost:8081/gymLeader/{id}` |
# Further Implementation and Extensions
If were to add further implementations to the project, they would be as follows:
## Non-Technical Measures
Test Driven Development (TDD) would be used as we did not implement it from the beginning of the project
## Technical Measures
We would like to complete the battle functionality where you can pick or choose a Pokemon's ability when they in a battle which would be similar to the video game itself.
Some Pokemon do not have just one attribute type but two so we wanted to implement two enums into a variable then implement a derived query to select the pokemon of a certain attribute type, for example, finding a water type pokemon. However, this deemed to be more complex than what we initially thought.
# Acknowledegements
A massive thanks to the [BNTA](https://techacademy.brightnetwork.co.uk/) team, and especially to our trainers [Richard](https://github.com/biancakendall29/w07_server_side_project#summary) and [Anna](https://github.com/biancakendall29/w07_server_side_project#summary)!
