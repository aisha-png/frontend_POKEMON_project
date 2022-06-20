import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/NavBar';
import PokemonNav from './components/navBar/PokemonNav';
import TrainerNav from './components/navBar/TrainerNav';
import GymNav from './components/navBar/GymNav';



function App() {
  return (
    <>
  <Router>
    <div className="App">
      <NavBar />
      <Routes>
        {/* <Route path='/' element={<HomeNav />} /> */}
        <Route path='/pokemons' element={<PokemonNav />} />
        <Route path='/trainers' element={<TrainerNav />} />
        <Route path= '/gyms' element={<GymNav />} />



      </Routes>


    </div>
    </Router>
    </>
  );
}

export default App;
