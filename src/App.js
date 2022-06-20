import { BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/NavBar';


function App() {
  return (
    <>
  <Router>
    <div className="App">
      <NavBar />
      <Routes>

        {/* <Route path='/' element={<HomeNav />} /> */}
      



      </Routes>

    </div>
    </Router>
    </>
  );
}

export default App;
