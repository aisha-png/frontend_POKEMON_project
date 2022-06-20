import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/NavBar';
import PokemonNav from './components/navBar/PokemonNav';


function App() {
  return (
    <>
  <Router>
    <div className="App">
      <NavBar />
      <Routes>
        {/* <Route path='/' element={<HomeNav />} /> */}
        <Route path='/pokemons' element={<PokemonNav />} />



      </Routes>

    </div>
    </Router>
    </>
  );
}

export default App;
