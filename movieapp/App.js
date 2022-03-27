import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { MoviesPage } from './pages/MoviesPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </div>
  );
}

export default App;
