import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/NavBar';
import PokemonContainer from './containers/PokemonContainer';
import TrainerContainer from './containers/TrainerContainer';
import GymContainer from './containers/GymContainer';
import GymLeaderContainer from './containers/GymLeaderContainer';
import HomePage from './containers/HomePage';



function App() {
  return (
    <>
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/pokemons' element={<PokemonContainer />} />
          <Route path='/trainers' element={<TrainerContainer />} />
          <Route path= '/gyms' element={<GymContainer />} />
          <Route path= '/gymLeaders' element={<GymLeaderContainer />}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
